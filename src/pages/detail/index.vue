<template>
  <div class="k-detail">
    <div class="k-detail-total">
      <i-tabs :current="current "
            @change="tabChange"
            fixed="true">
        <i-tab key="0"
                title="详情"></i-tab>
        <i-tab key="1"
                :title="watchOrSynopsis"></i-tab>
        <i-tab key="2"
                title="评价"></i-tab>
      </i-tabs>
    </div>
    <div class="k-detail-content">
      <div v-show="current === '0'">
        <k-infomation></k-infomation>
      </div>
      <div v-show="current === '1'">
        <div v-if="this.derailType === 'gardens'">
          <k-synopsis></k-synopsis>
        </div>
        <div v-else>
          <k-detection></k-detection>
        </div>
      </div>
      <div v-show="current === '2'">
        <k-discuss></k-discuss>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mapState
} from 'vuex'
import Information from '../../components/detail/information'
import Detection from '../../components/detail/detection'
import Discuss from '../../components/detail/discuss'
import Synopsis from '../../components/detail/synopsis'
export default {
  data () {
    return {
      current: '0',
      derailType: 'gardens'
    }
  },
  components: {
    'k-infomation': Information,
    'k-detection': Detection,
    'k-discuss': Discuss,
    'k-synopsis': Synopsis
  },
  beforeMount () {
    this.derailType = this.home.derailType
  },
  computed: {
    ...mapState({
      home: 'home'
    }),
    watchOrSynopsis () {
      return this.derailType === 'gardens' ? '实时监测' : '简介'
    }
  },
  methods: {
    tabChange (e) {
      this.current = e.target.key
    }
  }

}
</script>

<style scoped>
  .k-detail-content {
    margin-top: 55px;
    margin-left: 10px;
    margin-right: 10px;
  }
</style>
