import axios from 'axios';
import urls from '@/assets/js/baseUrl';
import qs from 'qs';

const baseUrl = 'http://test.allcitysz.com/app_if';
const siteId = '1';

axios.interceptors.request.use(request => {
  if (request.method === 'post') {
    request.data = Object.assign({}, request.data, {
      siteId,
      siteID: siteId
    });
  } else {
    request.params = Object.assign({}, request.params, {
      siteId,
      siteID: siteId
    });
  }
  if (request.data && request.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
    request.data = qs.stringify(request.data);
  }
  return request;
});
const apis = Object.assign({}, urls);
const apiFactory = api => {
  let { url, method, ...others } = api;
  method = method === 'post' ? 'post' : 'get';
  url = baseUrl + url;
  console.log(url);

  const isFormData = others &&
    others.headers &&
    others.headers['Content-Type'] === 'multipart/form-data';

  return params => {
    const request = isFormData
      ? axios({
        url,
        method,
        ...others,
        data: params,
        timeout: 1000 * 5
      })
      : axios.request({
        url,
        method,
        ...others,
        timeout: 1000 * 5,
        [method === 'get' ? 'params' : 'data']: {
          ...params,
          t: new Date().getTime()
        }
      });

    return request
      .then(({ data }) => {
        return data;
      })
      .catch(res => {
        const resString = res.toString();
        if (
          ~resString.indexOf('Network') &&
          !~url.indexOf('getnewquestionnum')
        ) {
          console.log('网络错误');
        }

        return Promise.reject(res);
      });
  };
};

const IO = {};

Object.keys(apis).map(item => {
  IO[item] = apiFactory(apis[item]);
});

export default IO;
