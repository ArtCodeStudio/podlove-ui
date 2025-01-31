import ProgressBar from './ProgressBar.vue'

export default {
  title: 'ProgressBar',
  component: ProgressBar
}

const Template = (args) => ({
  components: { ProgressBar },
  setup() {
    return { args }
  },
  template: `
    <progress-bar v-bind="args"></progress-bar>
  `
})

export const Default = Template.bind({})

Default.args = {
  title: 'input title',
  time: 0,
  duration: 1000,
  ghost: 450,
  buffer: [[0, 500]],
  quantiles: [[50, 200]],
  chapters: [
    {
      start: 0,
      end: 250
    },
    {
      start: 250,
      end: 500
    },
    {
      start: 500,
      end: 750
    },
    {
      start: 750,
      end: 1000
    }
  ],
  progressColor: '#D1C477',
  thumbColor: '#000',
  highlightColor: '#D1C477',
  label: ''
}

Default.argTypes = {
  onInput: {
    action: 'inputAction'
  },
  onSimulate: {
    action: 'simulateAction'
  },
  onGhost: {
    action: 'ghostAction'
  }
}
