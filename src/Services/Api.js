import axios from 'axios'

export default (() => {
  const options = {
    baseURL: 'https://secure.toronto.ca/cc_sr_v1/data/',
  }

  return axios.create(options)
})()