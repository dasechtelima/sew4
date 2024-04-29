import {ref, watch} from "vue";
const bus = ref(new Map());

export default function useEventsBus(){

    function emit(event, ...args) {
        console.log("emit in eventbus.js", event, args);
        bus.value.set(event, args);
    }

    function on(event, callback) {
        console.log("on in eventbus.js", event, callback);
        watch(() => bus.value.get(event), (val) => {
            callback(val);
        });
    }

    return {
        emit,
        on,
        bus
    }
}