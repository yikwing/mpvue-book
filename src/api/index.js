import { get } from '@/utils/request'

const API_URL = 'https://test.youbaobao.xyz:18081'

export function getHomeData(params) {
  return get(`${API_URL}/book/home/v2`, params)
}

export function getRecommendData(params) {
  return get(`${API_URL}/book/home/recommend/v2`, params)
}

export function getFreeReadData(params) {
  return get(`${API_URL}/book/home/freeRead/v2`, params)
}

export function getHotBookData(params) {
  return get(`${API_URL}/book/home/hotBook/v2`, params)
}

export function getOpenId(code) {
  return get(`${API_URL}/openId/get`, {
    appId: 'wx0aea6b69ba6d8049',
    code: code,
    secret: 'b7bfbad0d24d9ebf616e00ff357e07fc'
  })
}
