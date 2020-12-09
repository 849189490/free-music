import axios from 'axios'
const request = options => {
  const instance = axios.create({
    baseURL: 'https://apimusic.linweiqin.com',
    timeout: 5000,
  })
  instance.interceptors.request.use(
    config => config,
    err => console.log(err)
  )
  instance.interceptors.response.use(
    res => res.data,
    err => console.log(err)
  )
  return instance(options)
}

export { request }
