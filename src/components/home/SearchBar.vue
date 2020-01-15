<template>
  <div class="search-bar">
    <div class="search-bar-wrapper">
      <van-icon name="search" class="search" size="16px" color="#858c96" />
      <input
        class="search-bar-input"
        :focus="focus"
        :disabled="disabled"
        :maxlength="limit"
        :placeholder="hotSearch.length === 0 ? '搜索' : hotSearch"
        v-model="searchWorld"
        @input="onChange"
        confirm-type="search"
        @confirm="onConfirm"
        placeholder-style="color:#ADB4BE"
      />
      <van-icon
        v-if="searchWorld.length > 0"
        name="clear"
        class="clear"
        size="16px"
        color="#858c96"
        @click="onClearClick"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    focus: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    limit: {
      type: Number,
      default: 50
    },
    hotSearch: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      searchWorld: ''
    }
  },
  methods: {
    onSearchBarClick() {
      this.$emit('onClick')
    },
    onClearClick() {
      this.searchWorld = ''
      this.$emit('onClear')
    },
    onChange(e) {
      const { value } = e.mp.detail
      this.$emit('onChange', value)
    },
    onConfirm(e) {
      const { value } = e.mp.detail
      this.$emit('onConfirm', value)
    },
    setValue(v) {
      this.searchWorld = v
    },
    getValue() {
      return this.searchWorld
    }
  }
}
</script>

<style lang="scss" scoped>
.search-bar {
  padding: 15px 15.5px;
  .search-bar-wrapper {
    display: flex;
    align-items: center;
    height: 40px;
    background: #f5f7f9;
    border-radius: 20px;
    padding: 12px 17px;
    box-sizing: border-box;
    .search-bar-input {
      flex: 1;
      margin: 0 8px;
    }
    .search,
    .clear {
      display: flex;
      align-items: center;
      height: 100%;
    }
  }
}
</style>
