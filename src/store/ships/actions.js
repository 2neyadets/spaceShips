
import api from '../../api'
import { Loading } from 'quasar'

// async function addAdditionalDataForFilmsAndPilots (store, ship) {
//   for (let i = 0; i < ship.films.length; i++) {
//     ship.films[i] = await store.dispatch('films/getOneFilmTitle', ship.films[i], { root: true })
//   }
//   for (let i = 0; i < ship.pilots.length; i++) {
//     ship.pilots[i] = await store.dispatch('people/getOnePilotName', ship.pilots[i], { root: true })
//   }
// }

export async function loadCurrentListOfShips (store, payload) {
  store.commit('setCurrentPage', payload.page)
  Loading.show()
  const res = await api.ships.getCurrentListOfShips(payload)
  // for (let i = 0; i < res.data.results.length; i++) {
  //   await addAdditionalDataForFilmsAndPilots(store, res.data.results[i])
  // }
  Loading.hide()
  store.commit('setValuesForShips', res.data)
}

export async function loadOneShip (store, payload) {
  store.commit('setCurrentShip', null)
  Loading.show()
  const res = await api.ships.getOneShip(payload)
  // await addAdditionalDataForFilmsAndPilots(store, res.data)
  Loading.hide()
  store.commit('setCurrentShip', res.data)
}
