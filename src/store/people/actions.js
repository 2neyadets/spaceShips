
import api from '../../api'

export async function getOnePilotName (store, payload) {
  const res = await api.people.getOnePilot(payload)
  return res.data.name
}
