<template>
  <div class="auth-wrapper">
    <div class="auth">
      <div class="auth-info">
        <div class="auth-img">
          <ImageView src="https://www.youbaobao.xyz/mpvue-res/logo.jpg" round />
        </div>
        <div class="sub-title">登录小程序</div>
        <div class="title">全球好书免费阅读</div>
      </div>
      <button
        class="auth-btn"
        @getuserinfo="getUserInfo"
        open-type="getUserInfo"
      >
        授权登录
      </button>
    </div>
  </div>
</template>

<script>
import ImageView from '@/components/base/ImageView'

export default {
  components: {
    ImageView
  },
  methods: {
    getUserInfo() {
      this.$emit('getUserInfo')
    }
  }
}
</script>

<style lang="scss" scoped>
.auth-wrapper {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: #999;
  z-index: 1000;
  .auth {
    position: relative;
    width: 270px;
    height: 240px;
    background: #f5f5f5;
    border-radius: 18px;
    .auth-info {
      margin-top: 22.5px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .auth-img {
        width: 74px;
      }
      .sub-title {
        margin-top: 18px;
        font-size: 13px;
        color: #999;
        line-height: 18.5px;
      }
      .title {
        font-size: 16px;
        color: #333;
        line-height: 22.5px;
        font-weight: 400;
        margin-top: 3.5px;
      }
    }
    .auth-btn {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 46px;
      background-image: linear-gradient(90deg, #1ea3f5 0%, #0f87fc 100%);
      border-radius: 0 0 18px 18px;
      color: white;
      line-height: 46px;
      font-size: 15px;
    }
  }
}
</style>
