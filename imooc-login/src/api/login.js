import axios from '@/utils/request'


const getCode = async (sid) => {
  return axios.get('/getCaptcha', {
    params: {
      sid
    }
  })
}

const forget = option => {
  return axios.post('/forget', {
    ...option
  })
}

export { getCode, forget }
