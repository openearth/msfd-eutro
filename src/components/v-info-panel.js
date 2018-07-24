import {
  bus
} from '@/event-bus.js'
import VWelcome from './VWelcome'

export default {
  name: 'v-info-panel',
  data () {
    return {
      tutorial: false,
      disclaimer: true
    }
  },
  watch: {
    tutorial: {
      handler: function (tutorial) {
        this.tutorial = tutorial
      },
      deep: true
    }
  },
  methods: {
    clickOpenDap () {
      window.open('https://tl-ng038.xtr.deltares.nl/thredds/catalog.html', '_blank')
    }
  },
  components: {
    'v-welcome': VWelcome
  },
  mounted() {
    bus.$on('tutorial-closed', (tutorialDialog) => {
      this.tutorial = tutorialDialog
    })
  }
}
