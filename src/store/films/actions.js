
import api from '../../api'
import { getIdFromUrl } from '../../utils/helpers'

export async function getOneFilmTitle (store, payload) {
  const res = await api.films.getOneFilm(getIdFromUrl(payload))
  return res.data.title
}
