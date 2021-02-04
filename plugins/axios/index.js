export let axios;

export default ({ store, $axios }) => {

  const baseUrl = 'https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?'
  const appId = 'applicationId=1056344337549700252'
  const keyword = '&keyword='
  $axios.defaults.baseURL = encodeURI(baseUrl + appId + keyword)

  $axios.onRequest(config => {});

  $axios.onResponse(response => {
    return Promise.resolve(response);
  })

  $axios.onError(error => {
    return Promise.reject(error.response);
  });

  axios = $axios;
}