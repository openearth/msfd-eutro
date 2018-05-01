import {
  bus
} from '@/event-bus.js'

export default {
  data () {
    return {
      welcome: true,
      dialog: true
    }
  },
  watch: {
    dialog: {
      handler: function (dialog) {
        this.dialog = dialog
        bus.$emit('change-dialog', dialog)
      },
      deep: true
    }
  },
  methods: {
    openTutorial () {
      document.getElementById('welcome').style.display = 'none'
      document.getElementById('tutorial1').style.display = 'block'
    }
  }
}
