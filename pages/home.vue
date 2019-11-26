<template>
  <div :class="$options.name">
    <div>home页面{{ config.templateURL }}</div>
  </div>
</template>

<script>
import { mapState, Store } from 'vuex';
export default {
  name: 'Home',
  data () {
    return {
    };
  },
  async fetch ({ store, params }) {
    const parmas = {
      appID: 1
    };
    await store.dispatch('getConfig', parmas);
  },
  computed: {
    ...mapState({
      list: state => state.list,
      config: state => state.config
    })
  }
};
</script>

<style lang="scss" scoped>
.Home {
  div {
    color: #f66;
    font-size: 18px;
  }
}
</style>
