import { getOpenId } from './index'

export function getSetting(auth, onSuccess, onFail) {
  mpvue.getSetting({
    success(res) {
      console.log('success', res)
      if (res.authSetting[`scope.${auth}`]) {
        onSuccess(res)
      } else {
        onFail(res)
      }
    },
    fail(res) {
      console.log('fail', res) // throw Error
    }
  })
}

export function getUserInfo(onSuccess, onFail) {
  mpvue.getUserInfo({
    success(res) {
      // var userInfo = res.userInfo
      // var nickName = userInfo.nickName
      // var avatarUrl = userInfo.avatarUrl
      // var gender = userInfo.gender //性别 0：未知、1：男、2：女
      // var province = userInfo.province
      // var city = userInfo.city
      // var country = userInfo.country

      const { userInfo } = res

      if (userInfo) {
        onSuccess(userInfo)
      } else {
        onFail(res)
      }
    },
    fail(res) {
      console.log('fail', res) // throw Error
    }
  })
}

export function setStorageSync(key, data) {
  mpvue.setStorageSync(key, data)
}

export function getStorageSync(key) {
  return mpvue.getStorageSync(key)
}

export function getUserOpenId(callback) {
  mpvue.login({
    success(res) {
      if (res.code) {
        getOpenId(res.code).then(
          (res) => {
            const { openid } = res.data.data
            setStorageSync('openId', openid)
            callback && callback(openid)
          },
          (err) => {
            console.log(err)
          }
        )
      } else {
        console.log(res)
      }
    },
    fail(res) {
      console.log('fail', res) // throw Error
    }
  })
}
