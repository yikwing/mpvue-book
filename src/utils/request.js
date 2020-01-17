function createFly() {
  if (mpvuePlatform === 'wx') {
    const Fly = require('flyio/dist/npm/wx')
    return new Fly()
  } else {
    return null
  }
}

export function get(url, params = {}) {
  const fly = createFly()
  if (fly) {
    return new Promise((resolve, reject) => {
      fly
        .get(url, params)
        .then((response) => {
          if (response && response.data && response.data.error_code === 0) {
            console.log(response.data)
            resolve(response)
          } else {
            mpvue.showToast({
              title: '失败惹',
              duration: 2000
            })
            reject(response)
          }
        })
        .catch((err) => {
          console.log(err)
          handleError(err)
          reject(err)
        })
    })
  }
}

function handleError(err) {
  console.log(err)
}

export function post(url, params = {}) {
  const fly = createFly()
  if (fly) {
    return new Promise((resolve, reject) => {
      fly
        .post(url, params)
        .then((response) => {
          console.log(response)
          resolve(response)
        })
        .catch((err) => {
          console.log(err)
          handleError(err)
          reject(err)
        })
    })
  }
}
