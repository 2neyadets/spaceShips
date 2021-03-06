import { i18n } from '../../boot/i18n'
import { date } from 'quasar'

export default {
  pagination: {
    sortBy: 'name',
    descending: false,
    page: 1,
    rowsPerPage: 10
  },
  separator: 'cell',
  columns: [
    {
      name: 'name',
      label: i18n.t('ships.titlesForColumns.name'),
      field: 'name',
      required: false,
      sortable: true,
      align: 'center',
    },
    {
      name: 'model',
      label: i18n.t('ships.titlesForColumns.model'),
      field: 'model',
      required: false,
      sortable: true,
      align: 'center',
    },
    {
      name: 'manufacturer',
      label: i18n.t('ships.titlesForColumns.manufacturer'),
      field: 'manufacturer',
      required: false,
      sortable: false,
      align: 'center',
    },
    {
      name: 'cost_in_credits',
      label: i18n.t('ships.titlesForColumns.cost_in_credits'),
      field: 'cost_in_credits',
      required: false,
      sortable: false,
      align: 'center',
    },
    {
      name: 'length',
      label: i18n.t('ships.titlesForColumns.length'),
      field: 'length',
      required: false,
      sortable: false,
      align: 'center',
    },
    {
      name: 'max_atmosphering_speed',
      label: i18n.t('ships.titlesForColumns.max_atmosphering_speed'),
      field: 'max_atmosphering_speed',
      required: false,
      sortable: false,
      align: 'center',
    },
    {
      name: 'crew',
      label: i18n.t('ships.titlesForColumns.crew'),
      field: 'crew',
      required: false,
      sortable: false,
      align: 'center',
    },
    {
      name: 'passengers',
      label: i18n.t('ships.titlesForColumns.passengers'),
      field: 'passengers',
      required: false,
      sortable: false,
      align: 'center',
    },
    {
      name: 'cargo_capacity',
      label: i18n.t('ships.titlesForColumns.cargo_capacity'),
      field: 'cargo_capacity',
      required: false,
      sortable: false,
      align: 'center',
    },
    {
      name: 'consumables',
      label: i18n.t('ships.titlesForColumns.consumables'),
      field: 'consumables',
      required: false,
      sortable: false,
      align: 'center',
    },
    {
      name: 'hyperdrive_rating',
      label: i18n.t('ships.titlesForColumns.hyperdrive_rating'),
      field: 'hyperdrive_rating',
      required: false,
      sortable: false,
      align: 'center',
    },
    {
      name: 'MGLT',
      label: i18n.t('ships.titlesForColumns.MGLT'),
      field: 'MGLT',
      required: false,
      sortable: false,
      align: 'center',
    },
    {
      name: 'starship_class',
      label: i18n.t('ships.titlesForColumns.starship_class'),
      field: 'starship_class',
      required: false,
      sortable: false,
      align: 'center',
    },
    {
      name: 'pilots',
      label: i18n.t('ships.titlesForColumns.pilots'),
      field: 'pilots',
      required: false,
      sortable: false,
      align: 'center',
    },
    {
      name: 'films',
      label: i18n.t('ships.titlesForColumns.films'),
      field: 'films',
      required: false,
      sortable: false,
      align: 'center',
    },
    {
      name: 'created',
      label: i18n.t('ships.titlesForColumns.created'),
      field: row => date.formatDate(row.created, 'DD.MM.YYYY'),
      required: false,
      sortable: false,
      align: 'center',
    },
    {
      name: 'edited',
      label: i18n.t('ships.titlesForColumns.edited'),
      field: row => date.formatDate(row.edited, 'DD.MM.YYYY'),
      required: false,
      sortable: false,
      align: 'center',
    },
    {
      name: 'url',
      label: i18n.t('ships.titlesForColumns.url'),
      field: 'url',
      required: false,
      sortable: false,
      align: 'center',
    }
  ],
  visibleColumns: [
    'name',
    'model',
    'manufacturer',
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
  ],
  filter: ''
}
