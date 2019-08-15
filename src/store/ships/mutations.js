
export function setCurrentListOfShips (state, payload) {
  state.list = payload
}

export function setCountOfShips (state, payload) {
  state.count = payload
}

export function setCurrentPage (state, payload) {
  state.currentPage = payload
}

export function setNumberOfPreviousOrNextPage (state, payload, key) {
  state[key] = !payload ? payload : Number(payload.replace(`https://swapi.co/api/starships/?page=`, ''))
}

export function setValuesForShips (state, payload) {
  setCurrentListOfShips(state, payload.results)
  setCountOfShips(state, payload.count)
  setNumberOfPreviousOrNextPage(state, payload.previous, 'previousPage')
  setNumberOfPreviousOrNextPage(state, payload.next, 'nextPage')
}

export function setCurrentShip (state, payload) {
  state.current = payload
}
