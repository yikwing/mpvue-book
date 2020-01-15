<template>
  <div class="home-card">
    <div class="home-card-inner">
      <div class="user-info">
        <div class="avatar-wrapper">
          <ImageView src="https://www.youbaobao.xyz/mpvue-res/logo.jpg" round />
        </div>
        <div class="nickname">{{ '米老鼠' }}</div>
        <div class="shelf-text">书架共有{{ 3 }}本好书</div>
        <div class="round-item"></div>
        <div class="shelf-text">特别精选</div>
      </div>
      <div class="book-info">
        <div class="book-wrapper" v-for="item in imagePath" :key="item">
          <div class="book-image-wrapper">
            <ImageView
              src="https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg"
            />
          </div>
        </div>
        <div class="shelf-wrapper">
          <div class="shelf">书架</div>
          <van-icon class="arrow" name="arrow" size="11px" color="#828489" />
        </div>
      </div>
      <div class="feedback-wrapper" @click="onFeedBackClick">
        <span>反馈</span>
      </div>
    </div>
    <van-dialog id="van-dialog" />
  </div>
</template>

<script>
import ImageView from './../base/ImageView'
import Dialog from '@vant/weapp/dist/dialog/dialog'

export default {
  data() {
    return {
      imagePath: [1, 2, 3]
    }
  },
  components: {
    ImageView
  },
  props: {
    data: {
      type: Object,
      default: null
    },
    hasSign: {
      type: Boolean,
      default: false
    },
    signDay: {
      type: Number,
      default: 0
    }
  },
  methods: {
    gotoShelf() {},
    onBookClick() {},
    sign() {},
    onFeedBackClick() {
      Dialog.alert({
        title: '标题',
        message: '弹窗内容'
      }).then(() => {
        // on close
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.home-card {
  background-image: linear-gradient(-90deg, #54575f 0%, #595b60 100%);
  border-radius: 15px;
  margin: 22px 20px 0px;
  .home-card-inner {
    position: relative;
    padding: 21.5px 17px 20px 20px;
    box-sizing: border-box;
    .user-info {
      display: flex;
      align-items: center;
      .avatar-wrapper {
        height: 20px;
        width: 20px;
      }
      .nickname,
      .shelf-text {
        font-size: 12px;
        color: white;
      }

      .nickname {
        margin: 0 8.5px;
      }

      .shelf-text {
        opacity: 0.7;
      }

      .round-item {
        width: 4px;
        height: 4px;
        background: #a2a2a2;
        border-radius: 50%;
        margin: 0 8px;
      }
    }
    .book-info {
      display: flex;
      margin-top: 16.5px;
      .book-wrapper {
        flex: 1;
        display: flex;
        justify-content: space-between;
        .book-image-wrapper {
          width: 75px;
          height: 101px;
        }
      }
      .shelf-wrapper {
        display: flex;
        align-items: center;
        .shelf {
          width: 10.5px;
          font-size: 10.5px;
          word-break: break-all;
          opacity: 0.8;
          color: #ffffff;
          margin-right: 2px;
        }
      }
    }
    .feedback-wrapper {
      border-radius: 100px 0 0 100px;
      height: 23.5px;
      width: 44.5px;
      position: absolute;
      right: 0px;
      top: 19.5px;
      line-height: 23.5px;
      background: #707070;
      text-align: center;
      span {
        font-size: 11px;
        color: white;
      }
    }
  }
}
</style>
