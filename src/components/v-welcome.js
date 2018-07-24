import {
  bus
} from '@/event-bus.js'

export default {
  props: {
    tutorial: {
      type: Boolean
    }
  },
  data () {
    return {
      disclaimer: true,
      tutorialDialog: false,
      tutorialScreen: 'step1'
    }
  },
  watch: {
    tutorial: {
      handler: function (tutorial) {
        this.tutorialDialog = tutorial
      },
      deep: true
    },
    tutorialDialog: {
      handler: function (tutorialDialog) {
        this.tutorialDialog = tutorialDialog
        if (this.tutorialDialog) {
          this.tutorialScreen = 'step1'
        }
        else {
          bus.$emit('tutorial-closed', this.tutorialDialog)
        }
      },
      deep: true
    },
    tutorialScreen: {
      handler: function (tutorialScreen) {
        this.tutorialScreen = tutorialScreen
      },
      deep: true
    }
  }
}
