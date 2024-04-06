import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import {v4 as uuidv4} from 'uuid';

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)

    function increment() {
        count.value++
    }

    return {count, doubleCount, increment}
})

export const useForumStore = defineStore('forum', () => {
    const ideas = ref([]);

    function addIdea(newIdea) {
        const {timestamp, heading, text} = newIdea;
        const id = uuidv4();
        ideas.value.push({timestamp, heading, text, id});
    }

    return {ideas, addIdea};
})