<template>
  <channel
    type="facebook"
    :link="state.link"
    :color="state.color"
    :background="state.background"
    :filled="hover"
    @mouseover.native="hover = true"
    @mouseleave.native="hover = false"
  >
    {{ state.link }}
  </channel>
</template>

<script>
import { mapState } from 'redux-vuex'
import Channel from '@podlove/components/channel'

import select from 'store/selectors'

export default {
  components: {
    Channel
  },
  setup() {
    return {
      state: mapState({
        link: select.share.link,
        color: select.theme.brandDark,
        background: select.theme.alt
      })
    }
  },
  data() {
    return {
      hover: false
    }
  }
}
</script>
