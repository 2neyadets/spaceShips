
import api from '../../api'

export async function getOneFilmTitle (store, payload) {
  const res = await api.films.getOneFilm(payload)
  return res.data.title
}
