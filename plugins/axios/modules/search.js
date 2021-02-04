import { axios } from '../index.js';

export default {
  search(itemname) {
    return axios.$get(`${itemname}`)
  },
}