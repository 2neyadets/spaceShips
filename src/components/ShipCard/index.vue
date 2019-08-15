<template lang="pug">
  .star-ship-card.q-mt-md(v-if="Object.keys(current).length > 0")
    q-card.bg-grey-9(dark bordered)
      q-card-section
        .text-h5.text-primary "{{current.name}}"
        .text-subtitle2 {{$t('ships.titlesForColumns.model')}} - {{current.model}}
        .text-subtitle2 {{$t('ships.titlesForColumns.manufacturer')}} - {{current.manufacturer}}
      q-separator(dark inset)
      q-card-section
        .text-h5.q-mb-md {{$t('ships.characteristics')}}:
        .area
          template(v-for="key in keysForCharacteristics")
            template(v-if="checkValue(current[key])")
              .text-h6 {{$t('ships.titlesForColumns.' + key)}}:
              .text-subtitle2.q-mb-sm {{middlewareValue(key, current[key])}}
</template>

<script>
import { mapGetters } from 'vuex'
import { date } from 'quasar'

const keysForCharacteristics = [
  'cost_in_credits',
  'length',
  'max_atmosphering_speed',
  'crew',
  'passengers',
  'cargo_capacity',
  'consumables',
  'hyperdrive_rating',
  'MGLT',
  'starship_class',
  'pilots',
  'films',
  'created',
  'edited',
  'url'
]

export default {
  name: 'StarShipCard',
  data () {
    return {
      keysForCharacteristics
    }
  },
  async beforeCreate () {
    if (this.$route.params.hasOwnProperty('id') && !isNaN(this.$route.params.id)) await this.$store.dispatch('ships/loadOneShip', this.$route.params.id)
  },
  created () {
  },
  computed: {
    ...mapGetters('ships', ['current'])
  },
  methods: {
    checkValue (v) {
      return typeof v === 'string' || (Array.isArray(v) && v.length > 0)
    },
    middlewareValue (key, v) {
      if (key === 'created' || key === 'edited') {
        return date.formatDate(v, 'DD.MM.YYYY')
      } else if (Array.isArray(v)) {
        let str = ''
        for (let i = 0; i < v.length; i++) {
          if (i !== v.length - 1) {
            str += v[i] + ', '
          } else {
            str += v[i]
          }
        }
        return str
      } else {
        return v
      }
    }
  }
}
</script>

<style lang="stylus">
  .area
    background $accent
    border 1px solid rgba(255,255,255,0.48)
    border-radius 5px
    padding 16px
</style>
