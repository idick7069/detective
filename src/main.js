import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createStore } from 'vuex'

// Create a new store instance.
export const store = createStore({
  state () {
    return {
      count: 0,
      floatingTemplate:''
    }
  },
  getters:{
    getFloatingTemplate(state){
      return state.floatingTemplate
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    setFloatingTemplate(state, value) {
      state.floatingTemplate = value
    }
  }
})

loadFonts()

createApp(App)
  .use(store)
  .use(router)
  .use(vuetify)
  .mount('#app')
