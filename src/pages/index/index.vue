<template>
  <div class="k-home">
    <div class="k-home-search">
      <div class="k-search-box">
        <div class="k-serarch-content-box" @click="inputFocus">
          <div class="k-serarch-content">{{ addressSearch || '搜索地址'}}</div>
        </div>
        <div v-if="isShowSearchCel" @click="emptySearch" class="k-search-cancel">×</div>
      </div>
      <button class="k-button" @click="showDrawer">筛选</button>
    </div>
    <div class="k-home-map">
      <div class="k-home-map-derail">
        <img class="k-map-icon-totil" src="/static/images/index/menu.png" alt="" @click="derailBtn">
        <ul v-show="isShowDerail">
          <li class="k-map-icon-li" @click="washroomBtn">
            <img class="k-icon" v-show="derailType === 'gardens'"  src="/static/images/index/toilet.png" alt="">
            <img class="k-icon" v-show="derailType !== 'gardens'" src="/static/images/index/toilet-active.png" alt="">
          </li>
          <li class="k-map-icon-li" @click="gardensBtn">
            <img class="k-icon" v-show="derailType === 'washroom'"  src="/static/images/index/park.png" alt="">
            <img class="k-icon" v-show="derailType !== 'washroom'" src="/static/images/index/park-active.png" alt="">
          </li>
        </ul>
      </div>
      <map 
        id="map" 
        longitude="113.324520" 
        latitude="23.099994" 
        scale="14" 
        show-location 
        style="width: 100%; height: 100%;"
      >
      </map>
    </div>
    <div class="k-home-swiper-box">
      <swiper
        class="k-home-swiper"
        indicator-dots="true"
        indicator-color="rgba(56,102,43,.6)"
        circular="true"
        easing-function="easeInOutCubic"
        duration=600>
        <block v-for="(item,index) in swiperVal" :key="index">
          <swiper-item>
            <div class="k-swiper-item">
              <div class="k-swiper-top clearfix">
                <h3 class="k-swiper-top-title k-fl">{{item.name}}</h3>
                <div class="k-swiper-top-btn k-fr">
                   <button class="k-button" @click="homeInfomation">详情</button>
                   <button class="k-button" @click="homeNavigation(item)">导航</button>
                </div>
              </div>
              <div class="k-swiper-site">
                <span class="k-swiper-site-distance">{{item.dis}}</span>
                <span class="k-swiper-site-address">{{item.address}}</span>
              </div>
              <div class="k-swiper-time clearfix">
                <span class="k-swiper-time-left k-fl">开放时间：{{item.openType}}</span>
                <span class="k-swiper-time-right k-fr">{{item.chargeCondition}}</span>
              </div>
              <div class="k-swiper-appraise">
                <span>综合评价：</span>
                <i-rate i-class="rate" :value="item.score"></i-rate>
              </div>
            </div>
          </swiper-item>
        </block>
      </swiper>    
    </div>
  </div>
</template>

<script>
import {
  mapActions,
  mapState,
  mapMutations
} from 'vuex'
import {SAVE_HOME_DERAILTYPE} from '../../store/types'

export default {
  data () {
    return {
      swiperVal: [],
      isShowDerail: false,
      derailType: 'gardens' // 园林：gardens  公厕：washroom
    }
  },
  computed: {
    ...mapState({
      homeInfo: 'homeInfo',
      homeWashroom: 'homeWashroom',
      home: 'home'
    })
  },
  watch: {
    derailType (newVal, oldVal) {
      if (this.home.derailType !== newVal) {
        this.saveHomeDerailtype(newVal)
      }
    }
  },
  created: function () {
    this.getHomeInfo()
  },
  methods: {
    ...mapActions({
      fetchHome: 'fetchHome',
      fetchWashroom: 'fetchWashroom'
    }),
    ...mapMutations({
      saveHomeDerailtype: SAVE_HOME_DERAILTYPE
    }),
    getHomeInfo () {
      this.fetchHome().then((res) => {
        if (res.result === 'true') {
          wx.showToast({
            title: res.message || '请求失败',
            icon: 'none',
            duration: 2000,
            mask: true
          })
          this.swiperVal = res.data
        }
      })
    },
    getHomeWashroom () {
      this.fetchWashroom().then((res) => {
        if (res.result === 'true') {
          wx.showToast({
            title: res.message || '请求失败',
            icon: 'none',
            duration: 2000,
            mask: true
          })
          this.swiperVal = res.data
        }
      })
    },
    derailBtn () {
      this.isShowDerail = !this.isShowDerail
    },
    gardensBtn () {
      this.derailType = 'gardens'
      this.isShowDerail = false
      if (this.homeInfo.result && this.homeInfo.result.length > 0) {
        this.swiperVal = this.homeInfo.data
      } else {
        this.getHomeInfo()
      }
    },
    washroomBtn () {
      this.derailType = 'washroom'
      this.isShowDerail = false
      if (this.homeWashroom.result && this.homeWashroom.result.length > 0) {
        this.swiperVal = this.homeWashroom.data
      } else {
        this.getHomeWashroom()
      }
    },
    homeInfomation () {
      wx.navigateTo({
        url: '../detail/main'
      })
    },
    homeNavigation (obj) {
      wx.openLocation({
        latitude: Number(obj.latitude),
        longitude: Number(obj.longitude),
        scale: 18,
        name: obj.name,
        address: obj.address
      })
    }
  }
}
</script>

<style scoped>
.k-fl {
  float:left;
}
.k-fr {
  float:right;
}
.clearfix:after {
  content: '';
  height: 0;
  line-height: 0;
  display: block;
  visibility: hidden;
  clear: both;
}
.clearfix {
  zoom:1;
}
.k-button {
  background-color: #2d8cf0 !important;
  height: 28px;
  line-height: 28px;
  font-size: 13px;
  color: #fff;
  display:inline-block;
  margin: 0 5px;
}
.k-icon {
  width:20px;
  height:20px;
}


.k-home-search {
  margin-top:20px;
}
.k-search-box {
  display:inline-block;
  font-size: 15px;
  border: 1px solid #e9e9e9;
  width: 78%;
  height: 28px;
  border-radius: 5px;
  background-color: #f4f4f4;
  padding-left: 14px;
  line-height: 28px;
  color: #999;
  vertical-align: top;
}

/* 地图样式 */
.k-home-map {
  position:absolute;
  /* margin-top:30px; */
  width:100%;
  height:60%;
}
.k-home-map-derail {
  position:absolute;
  top:30px;
  left:20px;
  z-index:100
}
.k-map-icon-totil {
  width:42px;
  height:42px;
}
.k-map-icon-li {
  background-color:#fff;
  width:42px;
  height:30px;
  text-align:center;
  padding-top:12px;
  border-bottom:1px solid #e1e1e1;
}
.k-map-icon-li:last-child{
  border-bottom:none;
}
/* swiper */
.k-home-swiper-box {
  margin-bottom:30px;
  padding: 0 10px;
  background-color:#fff;
  position:absolute;
  z-index:10000;
  height:30%;
  left:0;
  right:0;
  bottom:0;
}
.k-home-swiper {
  height:100%;
}
.k-swiper-item {
  padding:0 10px;
}
.k-swiper-top {
  margin-top:10px;
}
.k-swiper-site {
  line-height: 30px;
}
.k-swiper-site-distance {
  display:inline-block;
  /* margin-right:10px; */
  vertical-align: middle;
  width:25%;
}
.k-swiper-site-address {
  display: inline-block;
  white-space: nowrap;
  overflow:hidden;
  text-overflow: ellipsis;
  width:75%;
  vertical-align: middle;
}

/* 开放时间 */
.k-swiper-time {
  line-height: 30px;
}
.k-swiper-time-left {
  display: inline-block;
}
.k-swiper-time-right {
  display:inline-block;
}
/* 综合评价 */
.k-swiper-appraise {
  margin-top:10px;

}
</style>
