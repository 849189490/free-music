import { ASYNC_SEARCH_SONGS, ASYNC_NOW_SONG } from './consts'
import { searchMusic, musicId, musicDetail, hotDiscuss, getMvUrl } from 'network/index/main'
const actions = {
  [ASYNC_SEARCH_SONGS]({ commit }, payload) {
    searchMusic(payload).then(res => {
      if (res.code === 200) {
        commit(ASYNC_SEARCH_SONGS, res.result.songs)
      }
    })
  },

  // 获取歌曲链接及歌曲信息
  [ASYNC_NOW_SONG]({ commit }, { id, duration, collect }) {
    let obj = {}
    Promise.all([musicId(id), musicDetail(id)]).then(([res1, res2]) => {
      if (res1.code === 200 && res2.code === 200) {
        obj.url = res1.data[0].url
        obj.id = res1.data[0].id
        obj.name = res2.songs[0].name
        obj.img = res2.songs[0].al.picUrl
        obj.album = res2.songs[0].al.name
        obj.artists = res2.songs[0].ar.reduce((pre, cur) => {
          return pre.concat({ id: cur.id, name: cur.name })
        }, [])
        obj.fullArtists = obj.artists
          .reduce((pre, cur) => {
            return pre + cur.name + '/'
          }, '')
          .slice(0, -1)
        obj.duration = duration
        obj.collect = collect
        commit(ASYNC_NOW_SONG, obj)
      }
    })
  },
}
export default actions
