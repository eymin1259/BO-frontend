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

export const couponApi = {
  getCoupons: (filterCondtion, page) => {
    let requestUrl = '/coupon/list?';
    if (filterCondtion.coupon_id != '') {
      requestUrl += `couponId=${filterCondtion.coupon_id}&`;
    }
    if (filterCondtion.coupon_name != '') {
      requestUrl += `couponName=${filterCondtion.coupon_name}&`;
    }
    if (filterCondtion.coupon_validation_start_from != '') {
      requestUrl += `validationStartFrom=${filterCondtion.coupon_validation_start_from}&`;
    }

    if (filterCondtion.coupon_validation_start_to != '') {
      requestUrl += `validationStartTo=${filterCondtion.coupon_validation_start_to}&`;
    }
    if (filterCondtion.coupon_validation_end_from != '') {
      requestUrl += `validationEndFrom=${filterCondtion.coupon_validation_end_from}&`;
    }
    if (filterCondtion.coupon_validation_end_to != '') {
      requestUrl += `validationEndTo=${filterCondtion.coupon_validation_end_to}&`;
    }
    if (filterCondtion.coupon_download_start_from != '') {
      requestUrl += `downloadStartFrom=${filterCondtion.coupon_download_start_from}&`;
    }
    if (filterCondtion.coupon_download_start_to != '') {
      requestUrl += `downloadStartTo=${filterCondtion.coupon_download_start_to}&`;
    }
    if (filterCondtion.coupon_download_end_from != '') {
      requestUrl += `downloadEndFrom=${filterCondtion.coupon_download_end_from}&`;
    }
    if (filterCondtion.coupon_download_end_to != '') {
      requestUrl += `downloadEndTo=${filterCondtion.coupon_download_end_to}&`;
    }
    if (filterCondtion.coupon_issue_type !== -1) {
      requestUrl += `IssueTypeId=${filterCondtion.coupon_issue_type}&`;
    }
    if (filterCondtion.coupon_is_limited !== -1) {
      requestUrl += `IsLimited=${filterCondtion.coupon_is_limited}&`;
    }

    requestUrl += `page=${page}`;
    console.log(requestUrl);
    return api.get(requestUrl);
  },
  getTotalNumber: () => api.get('/coupon/count')
};
