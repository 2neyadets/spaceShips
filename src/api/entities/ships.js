import api from '../instance'

export default {

  getCurrentListOfShips: async (payload) => {
    const { page = 1 } = payload
    try {
      return await api.get(`starships`, { params: { page } })
    } catch (e) {
      if (process.env.DEV) console.warn('catch :: API.ships :: getCurrentListOfShips', e)
    }
  },

  getOneShip: async (payload) => {
    try {
      return await api.get(`starships/${payload}`)
    } catch (e) {
      if (process.env.DEV) console.warn('catch :: API.ships :: getOneShip', e)
    }
  }

}
