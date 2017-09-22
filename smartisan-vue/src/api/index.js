import axios from 'axios'

const baseUrl = 'http://localhost:8888/api'

export function getShopList() {
  const url = `${baseUrl}/list`
  return axios.get(url)
}

export function setShopCarList(options) {
  const url = `${baseUrl}/setShopCarList`
  return axios.post(url, options)
}

export function getShopCarList() {
  const url = `${baseUrl}/getShopCarList`
  return axios.get(url)
}

export function removeCarShopById(options) {
  const url = `${baseUrl}/removeCarShopById`
  return axios.post(url, options)
}
