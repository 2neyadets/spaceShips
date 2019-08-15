import axios from 'axios/index'
import { Notify } from 'quasar'

const instance = axios.create({
  baseURL: process.env.API_URL || '/api/', // api base_url
  timeout: process.env.API_TIMEOUT || 30000 // request timeout,
})

instance.defaults.headers.post['Content-Type'] = 'application/json'

instance.interceptors.request.use(
  conf => conf,
  error => Promise.reject(error)
)

instance.interceptors.response.use(
  response => response,
  error => {
    const response = error.response
    // console.info('response error', response.data)// for debug
    if (response) {
      if (response.data && response.data.errors) {
        if (Array.isArray(response.data.errors)) {
          response.data.errors.forEach(err => {
            Notify.create({
              message: err.message,
              color: 'negative',
              position: 'bottom-left',
              icon: 'warning'
            })
          })
        } else {
          Notify.create({
            message: response.data.errors.message,
            color: 'negative',
            position: 'bottom-left',
            icon: 'warning'
          })
        }
      }
      return Promise.reject(response.data)
    }
  }
)
export default instance
