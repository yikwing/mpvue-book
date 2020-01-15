<template>
  <div class="home-banner" @click="onClick">
    <div class="bg-img" :style="{ backgroundImage: bgImage }">
      <div class="title">{{ title }}</div>
      <div class="sub-title">{{ subTitle }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    bgImage() {
      return 'url(' + this.img + ')'
    }
  },
  props: {
    img: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    }
  },
  methods: {
    onClick() {
      this.$emit('onClick')
    }
  }
}
</script>

<style lang="scss" scoped>
.home-banner {
  margin-top: 20px;
  padding: 0 20px;
  box-sizing: border-box;
  .bg-img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 125px;
    border-radius: 10px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .title {
      margin-top: 10px;
      font-size: 18px;
      font-weight: 500;
      color: #fff;
    }
    .sub-title {
      margin-top: 10px;
      font-size: 18px;
      color: #fff;
      padding: 5px 15px;
      background: #4585ff;
      border-radius: 6px;
    }
  }
}
</style>
