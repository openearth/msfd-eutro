import {
  bus
} from '@/event-bus.js'
import VWelcome from './VWelcome'

export default {
  name: 'v-info-panel',
  data () {
    return {
      dialog: true
    }
  },
  watch: {
    dialog: {
      handler: function (dialog) {
        this.dialog = dialog
      },
      deep: true
    }
  },
  mounted () {
    bus.$on('change-dialog', (dialog) => {
      this.dialog = dialog
    })
  },
  methods: {
    clickOpenDap () {
      window.open('https://tl-ng038.xtr.deltares.nl/thredds/catalog.html', '_blank')
    }
  },
  components: {
    'v-welcome': VWelcome
  }
}
