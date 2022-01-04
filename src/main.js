import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import {
  loadFonts
} from './plugins/webfontloader'
import {
  createStore
} from 'vuex'

// Create a new store instance.
export const store = createStore({
  state() {
    return {
      count: 0,
      floatingTemplate: '',
      floatingDialog: true,
      townSelected: {
        station: false,
        school: false,
        stomach: false,
        lung: false,
        heart: false,
        park: false,
        nerve: false,
        community: false,
      },
      dialogOpen: false
    }
  },
  getters: {
    getFloatingTemplate(state) {
      return state.floatingTemplate
    },
    getFloatingDialog(state) {
      return state.floatingDialog
    },
    getTownSelected(state, value) {
      return state.townSelected
    },
    getTownSelected(state) {
      return state.dialogOpen
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    setFloatingTemplate(state, value) {
      state.floatingTemplate = value
    },
    setFloatingDialog(state, value) {
      state.floatingDialog = value
    },
    setTownSelected(state, value) {
      state.townSelected = value
    },
    setDialogOpen(state, value) {
      state.dialogOpen = value
    }
  }
})

loadFonts()

createApp(App)
  .use(store)
  .use(router)
  .use(vuetify)
  .mount('#app')