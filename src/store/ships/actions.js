
import api from '../../api'
import { Loading } from 'quasar'
import { getIdFromUrl } from '../../utils/helpers'

export async function loadCurrentListOfShips (store, payload) {
  store.commit('setCurrentPage', payload.page)
  Loading.show()
  const res = await api.ships.getCurrentListOfShips(payload)
  await addAdditionalDataForFilmsAndPilots(store, res.data.results)
  Loading.hide()
  store.commit('setValuesForShips', res.data)
}

export async function loadOneShip (store, payload) {
  store.commit('setCurrentShip', null)
  Loading.show()
  const res = await api.ships.getOneShip(payload)
  await addAdditionalDataForOneShip(store, res.data)
  Loading.hide()
  store.commit('setCurrentShip', res.data)
}

async function addAdditionalDataForFilmsAndPilots (store, ships) {
  const shipsArrOfFilmsAndPilots = ships.map(ship => {
    return {
      films: ship.films.map(film => getIdFromUrl(film)),
      pilots: ship.pilots.map(pilot => getIdFromUrl(pilot))
    }
  })

  let arrOfFilms = []
  let arrOfPilots = []
  for (const ship of shipsArrOfFilmsAndPilots) {
    for (const film of ship.films) {
      if (!arrOfFilms.includes(film)) arrOfFilms.push(film)
    }
    for (const pilot of ship.pilots) {
      if (!arrOfPilots.includes(pilot)) arrOfPilots.push(pilot)
    }
  }

  const filmsArrForPromises = arrOfFilms.map(item => store.dispatch('films/getOneFilmTitle', item, { root: true }))
  const pilotsArrForPromises = arrOfPilots.map(item => store.dispatch('people/getOnePilotName', item, { root: true }))

  const filmsTitlesArr = await Promise.all(filmsArrForPromises)
  const pilotsArr = await Promise.all(pilotsArrForPromises)

  const tempArrForFilms = filmsTitlesArr.map((item, i) => { return { index: arrOfFilms[i], title: item } })
  const tempArrForPilots = pilotsArr.map((item, i) => { return { index: arrOfPilots[i], title: item } })

  for (let i = 0; i < ships.length; i++) {
    for (let p = 0; p < ships[i].films.length; p++) {
      ships[i].films[p] = tempArrForFilms.find(obj => obj.index === getIdFromUrl(ships[i].films[p])).title
    }
    for (let p = 0; p < ships[i].pilots.length; p++) {
      ships[i].pilots[p] = tempArrForPilots.find(obj => obj.index === getIdFromUrl(ships[i].pilots[p])).title
    }
  }
}

async function addAdditionalDataForOneShip (store, ship) {
  let arrOfFilms = []
  let arrOfPilots = []
  for (const film of ship.films) {
    if (!arrOfFilms.includes(getIdFromUrl(film))) arrOfFilms.push(getIdFromUrl(film))
  }
  for (const pilot of ship.pilots) {
    if (!arrOfPilots.includes(getIdFromUrl(pilot))) arrOfPilots.push(getIdFromUrl(pilot))
  }

  const filmsArrForPromises = arrOfFilms.map(item => store.dispatch('films/getOneFilmTitle', item, { root: true }))
  const pilotsArrForPromises = arrOfPilots.map(item => store.dispatch('people/getOnePilotName', item, { root: true }))

  const filmsTitlesArr = await Promise.all(filmsArrForPromises)
  const pilotsArr = await Promise.all(pilotsArrForPromises)

  const tempArrForFilms = filmsTitlesArr.map((item, i) => { return { index: arrOfFilms[i], title: item } })
  const tempArrForPilots = pilotsArr.map((item, i) => { return { index: arrOfPilots[i], title: item } })

  for (let p = 0; p < ship.films.length; p++) {
    ship.films[p] = tempArrForFilms.find(obj => obj.index === getIdFromUrl(ship.films[p])).title
  }
  for (let p = 0; p < ship.pilots.length; p++) {
    ship.pilots[p] = tempArrForPilots.find(obj => obj.index === getIdFromUrl(ship.pilots[p])).title
  }
}
