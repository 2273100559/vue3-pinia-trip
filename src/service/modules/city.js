import GFRequest  from '../request'

export function getCityAll() {
  return GFRequest.get({
    url:'/city/all'
  })
}