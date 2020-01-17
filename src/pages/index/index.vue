<template>
  <div>
    <div class="home" v-if="auth == true">
      <SearchBar
        disabled
        :hotSearch="hotSearch"
        @onClick="onSearchBarClick"
        @onClear="onClearClick"
        @onChange="onChange"
        @onConfirm="onConfirm"
      />

      <!-- <ImageView
      src="https://www.youbaobao.xyz/mpvue-res/big.jpg"
      height="170px"
      mode="scaleToFill"
    /> -->

      <HomeCard :data="homeCard" />

      <HomeBanner
        img="http://www.youbaobao.xyz/book/res/bg.jpg"
        title="Mpvue 2.0"
        subTitle="立即购买"
        @onClick="onBannerClick"
      />
      <div :style="{ marginTop: '23px' }">
        <HomeBook
          title="为你推荐"
          row="1"
          col="3"
          :data="recommend"
          mode="col"
          btnText="换一批"
          @onMoreClick="onMoreClick('recommend')"
          @onBookClick="onBookClick"
        />
      </div>
      <div>
        <HomeBook
          title="免费阅读"
          row="2"
          col="2"
          :data="freeRead"
          mode="row"
          btnText="换一批"
          @onMoreClick="onMoreClick('freeRead')"
          @onBookClick="onBookClick"
        />
      </div>
      <div>
        <HomeBook
          title="当前最热"
          row="1"
          col="4"
          :data="hotBook"
          mode="col"
          btnText="换一批"
          @onMoreClick="onMoreClick('hotBook')"
          @onBookClick="onBookClick"
        />
      </div>
      <div>
        <HomeBook
          title="分类"
          row="2"
          col="2"
          :data="category"
          mode="category"
          btnText="查看全部"
          @onMoreClick="onMoreClick('category')"
          @onBookClick="onBookClick"
        />
      </div>
    </div>
    <Auth v-else-if="auth == false" @getUserInfo="init" />
  </div>
</template>

<script>
import SearchBar from '@/components/home/SearchBar'
import ImageView from '@/components/base/ImageView'
import Auth from '@/components/base/Auth'
import HomeCard from '@/components/home/HomeCard'
import HomeBanner from '@/components/home/HomeBanner'
import HomeBook from '@/components/home/HomeBook'

import {
  getSetting,
  getUserInfo,
  setStorageSync,
  getStorageSync,
  getUserOpenId
} from '@/api/wechat'

import {
  getHomeData,
  getRecommendData,
  getFreeReadData,
  getHotBookData
} from '@/api'

export default {
  data() {
    return {
      auth: false,
      hotSearch: '',
      homeCard: {
        userInfo: {
          avatar: '',
          nickname: ''
        }
      },
      banner: {},
      recommend: [],
      freeRead: [],
      hotBook: [],
      category: []
    }
  },
  components: {
    SearchBar,
    ImageView,
    HomeCard,
    HomeBanner,
    HomeBook,
    Auth
  },
  mounted() {
    // this.getHomeData()
    // this.getSetting()

    this.init()
  },
  // created() {
  //   this.getSetting()
  // },
  methods: {
    getHomeData(openId) {
      getHomeData({
        openId: openId
      })
        .then((res) => {
          const {
            hotSearch,
            shelf,
            banner,
            recommend,
            freeRead,
            hotBook,
            category,
            shelfCount
          } = res.data.data

          this.hotSearch = hotSearch.keyword
          this.homeCard = {
            bookList: shelf,
            num: shelfCount,
            userInfo: {
              avatar: 'https://www.youbaobao.xyz/mpvue-res/logo.jpg',
              nickname: '米老鼠'
            }
          }
          this.banner = banner
          this.recommend = recommend
          this.freeRead = freeRead
          this.hotBook = hotBook
          this.category = category
        })
        .catch((err) => {
          console.log(err)
        })
    },
    onSearchBarClick() {
      // 跳转搜索
    },
    onMoreClick(key) {
      console.log('onMoreClick')

      switch (key) {
        case 'recommend':
          getRecommendData().then((res) => {
            this.recommend = res.data.data
          })
          break
        case 'freeRead':
          getFreeReadData().then((res) => {
            this.freeRead = res.data.data
          })
          break
        case 'hotBook':
          getHotBookData().then((res) => {
            this.hotBook = res.data.data
          })
          break
        case 'category':
          break
      }
    },
    onBookClick() {
      console.log('onBookClick')
    },
    onClearClick() {},
    onChange() {},
    onConfirm() {},
    onBannerClick() {
      console.log('你咋不上天')
    },
    getUserInfo() {
      const onOpenIdComplete = (openId) => {
        this.getHomeData(openId)
      }

      getUserInfo(
        (userInfo) => {
          console.log(userInfo)
          setStorageSync('userInfo', userInfo)
          const openId = getStorageSync('openId')
          if (!openId || openId.length === 0) {
            console.log('请求openId')
            getUserOpenId(onOpenIdComplete)
          } else {
            console.log('已获得openId')
            onOpenIdComplete(openId)
          }
        },
        () => {
          console.log('Fail ...')
        }
      )
    },
    getSetting() {
      getSetting(
        'userInfo',
        () => {
          this.auth = true
          this.getUserInfo()
        },
        () => {
          this.auth = false
        }
      )
    },
    init() {
      this.getSetting()
    }
  }
}
</script>

<style lang="scss" scoped></style>
