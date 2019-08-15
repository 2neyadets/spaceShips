import Vue from 'vue'
import Vuex from 'vuex'
import ships from './ships'
import films from './films'
import people from './people'

Vue.use(Vuex)

export default function () {
  const Store = new Vuex.Store({
    modules: {
      ships,
      films,
      people
    }
  })

  return Store
}
