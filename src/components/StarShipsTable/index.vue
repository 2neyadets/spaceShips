<template lang="pug">
  .star-ships-table.q-mt-md(v-if="list && list.length > 0")
    q-table.table(
      :data="dataAfterSearch"
      :columns="columns"
      :pagination.sync="pagination"
      :loading="loading"
      :visible-columns="visibleColumns"
      :separator="separator"
      :filter="filter"
      row-key="name"
      dark
      dense
    )
      template(slot="top" slot-scope="props")
        .full-width.flex.justify-between.items-center
          q-input.search(
            v-model="searchByName"
            debounce="500"
            type="search"
            :label="$t('ships.search')"
            dense
            outlined
            clearable
          )
          q-select.columns(
            transition-show="fade"
            transition-hide="fade"
            :options="columns"
            :display-value="$q.lang.table.columns"
            v-model="visibleColumns"
            multiple
            outlined
            dense
            options-dense
            emit-value
            map-options
            option-value="name"
            options-selected-class="text-deep-orange"
            @input="setNewColumnsToLocalStorage"
          )
      template(slot="body" slot-scope="props")
        q-tr.cursor-pointer(:props="props" @click.native="goToShip(props.row.url)")
          q-td.q-pa-none(v-for="col in props.cols" :key="col.name" :props="props")
            template(v-if="col.name === 'films' || col.name === 'pilots'")
              template(v-for="(entity, index) in col.value")
                span(v-if="index !== col.value.length - 1") {{entity}},&nbsp;
                span(v-else) {{entity}}
            template(v-else)
              span {{col.value}}
      template(slot="bottom" slot-scope="props")
        .full-width.flex.justify-end.items-center
          q-btn.q-mr-sm(
            round
            dense
            size="sm"
            icon="undo"
            text-color="primary"
            :disable="!previousPage || loading"
            @click="loadOtherPage(previousPage)"
          )
          .q-mr-sm
            span {{ currentPage }} / {{ Math.ceil(count / 10) }}
          q-btn(
            round
            dense
            size="sm"
            icon="redo"
            text-color="primary"
            :disable="!nextPage || loading"
            @click="loadOtherPage(nextPage)"
          )
</template>

<script>
import options from './options'
import { mapGetters } from 'vuex'
import { LocalStorage } from 'quasar'
import { getIdFromUrl } from '../../utils/helpers'

export default {
  name: 'StarShipsTable',
  data () {
    return {
      ...options,
      loading: false,
      searchByName: null
    }
  },
  async beforeCreate () {
    if (this.$route.query.hasOwnProperty('page') && this.$route.query.page !== '0') {
      await this.$store.dispatch('ships/loadCurrentListOfShips', { page: this.$route.query.page })
    } else {
      await this.$store.dispatch('ships/loadCurrentListOfShips', { page: 1 })
    }
    this.pushRouteQuery()
  },
  created () {
    const visibleColumns = LocalStorage.getItem('visibleColumns')
    if (visibleColumns !== null) this.visibleColumns = visibleColumns
    if (this.$route.query.hasOwnProperty('search')) this.searchByName = this.$route.query.search
  },
  computed: {
    ...mapGetters('ships', [
      'list',
      'count',
      'previousPage',
      'currentPage',
      'nextPage',
    ]),
    dataAfterSearch () {
      return this.searchByName ? this.list.filter(item => item.name.toLowerCase().includes(this.searchByName.toLowerCase())) : this.list
    }
  },
  methods: {
    pushRouteQuery () {
      if (this.$route.query.hasOwnProperty('search')) {
        this.$router.push({ path: '/', query: { page: this.currentPage, search: this.$route.query.search } })
      } else {
        this.$router.push({ path: '/', query: { page: this.currentPage } })
      }
    },
    async loadOtherPage (pageNumber) {
      this.loading = true
      await this.$store.dispatch('ships/loadCurrentListOfShips', { page: pageNumber })
      this.pushRouteQuery()
      this.loading = false
    },
    setNewColumnsToLocalStorage () {
      LocalStorage.set('visibleColumns', this.visibleColumns)
    },
    goToShip (url) {
      this.$router.push(getIdFromUrl(url))
    }
  },
  watch: {
    searchByName (v) {
      if (v) {
        this.$router.push({ path: '/', query: { page: this.currentPage, search: v } })
      } else {
        this.$router.push({ path: '/', query: { page: this.currentPage } })
      }
    },
    async '$route.query.page' (v) {
      if (Number(v) && Number(v) !== Number(this.currentPage)) {
        this.loading = true
        await this.$store.dispatch('ships/loadCurrentListOfShips', { page: v })
        this.loading = false
      }
    },
    '$route.query.search' (v) {
      this.searchByName = v
    }
  }
}
</script>

<style lang="stylus">
  .table .q-table__container
    border 1px solid rgba(255,255,255,0.48)
  .search .q-field__label
    color $primary
  .q-field__native
    color $primary
</style>
