import { orderApi } from '@/api';
import { fromNow, dateToString, makeUp } from '../_utils';

export default {
  namespaced: true,
  state: {
    isLoading: false,
    namespace: '',
    selectFilter: '',
    filterKeyword: '',
    dateValue: 7,
    filterDateFrom: '',
    filterDateTo: '',
    mdSeNo: [],
    filterOrder: 'NEW',
    filterLimit: 50,
    page: 1,
    filteredResult: [],
    page_number: 0,
    total_order_number: 0
  },

  getters: {
    getFilters(state) {
      const filters = { ...makeUp(state) };
      delete filters.filterOrder;
      delete filters.filterLimit;
      if (filters.filterDateFrom) {
        filters.from = dateToString(filters.filterDateFrom);
        delete filters.filterDateFrom;
      }
      if (filters.filterDateTo) {
        filters.to = dateToString(filters.filterDateTo);
        delete filters.filterDateTo;
      }
      if (filters.page === 1) delete filters.page;
      filters.mdSeNo = filters.mdSeNo.join(',');
      return filters;
    },
    getSelectFilter(state) {
      return state.selectFilter;
    },
    getFilterKeyword(state) {
      return state.filterKeyword;
    },
    getDateValue(state) {
      return state.dateValue;
    },
    getDateFrom(state) {
      return state.filterDateFrom;
    },
    getDateTo(state) {
      return state.filterDateTo;
    },
    getSellerType(state) {
      return state.mdSeNo;
    },
    getFilterOrder(state) {
      return state.filterOrder;
    },
    getLimit(state) {
      return state.filterLimit;
    },
    getPage(state) {
      return state.page;
    },
    getIsLoading(state) {
      return state.isLoading;
    },
    getNamespace(state) {
      return state.namespace;
    },
    getResult(state) {
      return state.filteredResult;
    },
    getLastPage(state) {
      return state.page_number;
    },
    getTotalNumber(state) {
      return state.total_order_number;
    }
  },

  mutations: {
    setSelectFilter(state, value) {
      state.selectFilter = value;
    },
    setFilterKeyword(state, value) {
      state.filterKeyword = value;
    },
    setDateValue(state, value) {
      state.dateValue = value;
    },
    setDateFrom(state, value) {
      state.filterDateFrom = value;
    },
    setDateTo(state, value) {
      state.filterDateTo = value;
    },
    setSellerType(state, values) {
      state.mdSeNo = values;
    },
    setFilterOrder(state, value) {
      state.filterOrder = value;
    },
    setLimit(state, value) {
      state.filterLimit = value;
    },
    setPage(state, value) {
      state.page = value;
    },
    setResult(state, result) {
      state.filteredResult = result;
    },
    setIsLoading(state, value) {
      state.isLoading = value;
    },
    setNamespace(state, value) {
      state.namespace = value;
    },
    setLastPage(state, value) {
      state.page_number = value;
    },
    setTotalNumber(state, value) {
      state.total_order_number = value;
    },
    reset(state) {
      const defaultTerm = 3;

      state.isLoading = false;
      state.selectFilter = '';
      state.filterKeyword = '';
      state.dateValue = 3;
      state.filterDateFrom = fromNow(defaultTerm);
      state.filterDateTo = new Date();
      state.mdSeNo = [];
      state.filterOrder = 'NEW';
      state.filterLimit = 50;
      state.page = 1;
      state.filteredResult = [];
      state.page_number = 0;
      state.total_order_number = 0;
    }
  },

  actions: {
    setSelectFilter({ commit }, value) {
      commit('setSelectFilter', value);
    },
    setFilterKeyword({ commit }, value) {
      commit('setFilterKeyword', value);
    },
    setDateValue({ commit }, value) {
      commit('setDateValue', value);
    },
    setDateFrom({ commit }, value) {
      commit('setDateFrom', value);
    },
    setDateTo({ commit }, value) {
      commit('setDateTo', value);
    },
    setSellerType({ commit }, values) {
      commit('setSellerType', values);
    },
    setFilterOrder({ commit }, value) {
      commit('setFilterOrder', value);
    },
    setLimit({ commit }, value) {
      commit('setLimit', value);
    },
    setPage({ commit }, value) {
      commit('setPage', value);
    },
    setNamespace({ commit }, value) {
      commit('setNamespace', value);
    },
    search({ commit, state }, status) {
      commit('setIsLoading', true);
      const filters = makeUp(state);

      orderApi
        .getOrder(status, filters)
        .then(res => {
          console.log(res);
          commit('setResult', res.data.orders);
          commit('setLastPage', res.data.page_number);
          commit('setTotalNumber', res.data.total_order_number);
          commit('setIsLoading', false);
        })
        .catch(err => {
          console.error(err);
          commit('setIsLoading', false);
        });
    },
    searchByOrder({ commit, dispatch }, { status, order }) {
      console.log(status, 'order');
      commit('setFilterOrder', order);
      dispatch('search', status);
    },
    searchByLimit({ commit, dispatch }, { status, limit }) {
      commit('setLimit', limit);
      dispatch('search', status);
    },
    searchByPage({ commit, dispatch }, { status, page }) {
      commit('setPage', page);
      dispatch('search', status);
    },
    reset({ commit }) {
      commit('reset');
    }
  }
};
