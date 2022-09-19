import GFRequest from '@/service/request/index'
export function getHomeHostSuggests() {
  return GFRequest.get({
      url:'/home/hotSuggests'
    })
}

export function getHomeCategories() {
  return GFRequest.get({
      url:'/home/categories'
      // GFRequest.get({url:'/home/categories'})
  })
}

export function getHomeList(currentPage) {
  return GFRequest.get({
    url:'/home/houselist',
    params: {
      page : currentPage
    }
  })
}