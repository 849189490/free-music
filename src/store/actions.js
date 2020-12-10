import { ASYNC_SEARCH_SONGS, ASYNC_NOW_SONG } from './consts'
import { searchMusic, musicId, musicDetail, hotDiscuss, getMvUrl } from 'network/index/main'
const actions = {
  // // this.$store.dispatch('asyncUpdate')
  // asyncUpdate(context, payload) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       context.commit('asyncUpdate')
  //       resolve(111)
  //     }, 1000)
  //   })
  // },
  // asyncUpdate(state) {
  //   state.count++
  // },
  [ASYNC_SEARCH_SONGS]({ commit }, payload) {
    searchMusic(payload).then(res => {
      console.log(res.result.songs[0])
      if (res.code === 200) {
        commit(ASYNC_SEARCH_SONGS, res.result.songs)
      }
    })
  },

  // 获取歌曲链接及歌曲信息
  [ASYNC_NOW_SONG]({ commit }, payload) {
    let obj = {}
    Promise.all([musicId(payload), musicDetail(payload)]).then(([res1, res2]) => {
      if (res1.code === 200 && res2.code === 200) {
        obj.url = res1.data[0].url
        obj.id = res1.data[0].id
        obj.name = res2.songs[0].name
        obj.img = res2.songs[0].al.picUrl
        obj.collect = res2.songs[0].al.name
        obj.artists = res2.songs[0].ar.reduce((pre, cur) => {
          return pre.concat({ id: cur.id, name: cur.name })
        }, [])
        commit(ASYNC_NOW_SONG, obj)
      }
    })
  },
}
export default actions
