
import api from '../../api'
import { getIdFromUrl } from '../../utils/helpers'

export async function getOnePilotName (store, payload) {
  const res = await api.people.getOnePilot(getIdFromUrl(payload))
  return res.data.name
}
