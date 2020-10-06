import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.251.1.182:5000/api'
  // headers: {
  //   Authorization: localStorage.getItem('access_token')
  // }
});

export const orderApi = {
  getOrder: (status, queries) =>
    api.get('/order/filter', {
      params: {
        orderStatus: status,
        ...queries
      }
    }),
  getDetail: orderId => api.get(`/order/detail/${orderId}`)
};

export const productApi = {
  getProducts: (queries = {}) =>
    api.get('/product', {
      params: queries
    }),
  registProduct: info =>
    api.post('/product', {
      body: info
    })
};

export const inquiryApi = {
  getQna: queries =>
    api.get('/inquiry/qna', {
      params: queries
    }),
  getReviews: queries =>
    api.get('/inquiry/review', {
      params: queries
    })
};

export const accountApi = {
  getMembers: () => api.get('/account/member'),
  getSellers: (queries = {}) =>
    api.get('/account/seller', {
      params: queries
    })
};
