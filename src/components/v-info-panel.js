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
      window.open('http://tl-tc102.xtr.deltares.nl:8080/thredds/catalog.html', '_blank')
    }
  },
  components: {
    'v-welcome': VWelcome
  }
}
