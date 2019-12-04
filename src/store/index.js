
import Vue from "vue";
import Vuex from "vuex";
import navigation from './navigation'
import it from './it'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        navigation,
        it
    }
})
export default store;