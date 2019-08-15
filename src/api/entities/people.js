import api from '../instance'

export default {

  getOnePilot: async (payload) => {
    try {
      return await api.get(`people/${payload}`)
    } catch (e) {
      if (process.env.DEV) console.warn('catch :: API.people :: getOnePilot', e)
    }
  }

}
