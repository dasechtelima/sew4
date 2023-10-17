<script>
import { computed, reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, sameAs, numeric } from '@vuelidate/validators'

export default {
  setup() {
    const state = reactive({
      firstName: '',
      lastName: '',
      birthday: '',
      contact: {
        email: '',
        phoneNumber: ''
      },
      password: {
        password: '',
        confirm: '',
      }
    })
    const rules = computed(() => {
      return {
        firstName: { required }, // Matches state.firstName
        lastName: { required }, // Matches state.lastName
        birthday: { required },
        contact: {
          email: { email, required }, // Matches state.contact.email
          phoneNumber: { numeric }
        },
        password: {
          password: { required, minLength: minLength(3) },
          confirm: { required, sameAs: sameAs(state.password.password) },
        },
      }
    })

    const v$ = useVuelidate(rules, state)

    // Additional computed property to check if any required fields are empty
    const isAnyRequiredFieldEmpty = computed(() => {
      return (
          state.firstName === '' ||
          state.lastName === '' ||
          state.birthday === '' ||
          state.contact.email === '' ||
          state.password.password === ''
      )
    })

    return { state, v$, isAnyRequiredFieldEmpty }
  },

  methods: {
    submitForm() {
      this.v$.$validate() // checks all inputs
      if (!this.v$.$error) {
        alert('Form successfully submitted.')
        this.resetForm()
      } else {
        alert('Form failed validation')
      }
    },
    resetForm() {
      // Reset all form fields to their initial state
      this.state.firstName = ''
      this.state.lastName = ''
      this.state.birthday = ''
      this.state.contact.email = ''
      this.state.contact.phoneNumber = ''
      this.state.password.password = ''
      this.state.password.confirm = ''

      // Reset the validation state
      this.v$.$reset()
    },
  },
}
</script>

<template>
  <div class="root">
    <h2>Create an Account</h2>
    <p>
      <input type="text" placeholder="Firstname*" v-model="state.firstName" @input="v$.firstName.$touch"/>
      <span v-if="v$.firstName.$error">
        {{ v$.firstName.$errors[0].$message }}
      </span>
    </p>
    <p>
      <input type="text" placeholder="Lastname*" v-model="state.lastName" @input="v$.lastName.$touch"/>
      <span v-if="v$.lastName.$error">
        {{ v$.lastName.$errors[0].$message }}
      </span>
    </p>
    <p>
      <label for="birthday" style="color: #8e8e8e">Birthday</label>
      <input id="birthday" type="date" v-model="state.birthday" @input="v$.birthday.$touch" style="color: #8e8e8e"/>
      <span v-if="v$.birthday.$error">
        {{ v$.birthday.$errors[0].$message }}
      </span>
    </p>
    <p>
      <input type="text" placeholder="Email*" v-model="state.contact.email" @input="v$.contact.email.$touch"/>
      <span v-if="v$.contact.email.$error">
        {{ v$.contact.email.$errors[0].$message }}
      </span>
    </p>
    <p>
      <input type="text" placeholder="Phone Number" v-model="state.contact.phoneNumber"
             @input="v$.contact.phoneNumber.$touch"/>
      <span v-if="v$.contact.phoneNumber.$error">
        {{ v$.contact.phoneNumber.$errors[0].$message }}
      </span>
    </p>
    <p>
      <input type="password" placeholder="Password*" v-model="state.password.password"
             @input="v$.password.password.$touch"/>
      <span v-if="v$.password.password.$error">
        {{ v$.password.password.$errors[0].$message }}
      </span>
    </p>
    <p>
      <input type="password" placeholder="Confirm Password*" v-model="state.password.confirm"
             @input="v$.password.confirm.$touch"/>
      <span v-if="v$.password.confirm.$error">
        {{ v$.password.confirm.$errors[0].$message }}
      </span>
    </p>
    <button class="button input" @click="submitForm" :disabled="v$.$error || isAnyRequiredFieldEmpty">Submit</button>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit&display=swap');

.button:hover {
  background: dimgray;
}

.input {
  @apply bg-gray-700 border border-gray-900 rounded m-1 p-1
}

span {
  color: red;
  font-size: 14px;
}

</style>
