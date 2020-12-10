// 统一请求管理
import { request } from '../request'

// // 默认搜索
// function defaultMusic(keywords) {
//   return request({
//     url: '/',payload
//     params: {
//       type: 0,
//       id: 504835560,
//     },
//   })
// }

// 1：歌曲搜索接口
// @url https://apimusic.linweiqin.com/search
// @method get
// @params keywords
// @return result,code
// @result songs(id,name)

// mvid 是否有MV
// '热门' 关键字
function searchMusic(keywords) {
  return request({
    url: '/search',
    params: {
      keywords,
    },
  })
}

// 2：歌曲url获取接口
// @url https://apimusic.linweiqin.com/song/url
// @method get
// @params id((歌曲id)
// @return data,code
// @data   id,url(歌曲URL),size,type

function musicId(id) {
  return request({
    url: '/song/url',
    params: {
      id,
    },
  })
}

// 3：歌曲详情获取
// @url https://apimusic.linweiqin.com/song/detail
// @method get
// @params ids
// @return songs,code
// @songs  id,name,al(picUrl)相册
function musicDetail(ids) {
  return request({
    url: '/song/detail',
    params: {
      ids,
    },
  })
}

// 4：热门评论获取
// @url https://apimusic.linweiqin.com/comment/hot?type=0
// @method get
// @params id(歌曲id,地址中的type固定为0)
// @return code,total,hotComments(热门评论)
// @hotComments user(avatarUrl,nickname,userId),content,time,likedCount

function hotDiscuss(id) {
  return request({
    url: '/comment/hot',
    params: {
      type: 0,
      id,
    },
  })
}

// 5：mv地址获取
// @url https://apimusic.linweiqin.com/mv/url
// @method get
// @params id(mvid,为0表示没有mv)
// @return code,data(url,size,id)

function getMvUrl(id) {
  return request({
    url: '/mv/url',
    params: {
      id,
    },
  })
}

export { searchMusic, musicId, musicDetail, hotDiscuss, getMvUrl }
