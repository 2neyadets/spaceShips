import api from '../instance'

export default {

  getOneFilm: async (payload) => {
    try {
      return await api.get(`films/${payload}`)
    } catch (e) {
      if (process.env.DEV) console.warn('catch :: API.films :: getOneFilm', e)
    }
  }

}
