import { orderApi } from '@/api';

const makeUp = filters => {
  const _filters = { ...filters };
  for (const [key, value] of Object.entries(filters)) {
    if (!value) delete _filters[key];
  }
  delete _filters.isLoading;
  delete _filters.filteredResult;
  return _filters;
};

export default {
  namespaced: true,
  state: {
    isLoading: true,
    selectFilter: '',
    filterKeyword: '',
    dateValue: 3,
    filterDateFrom: '',
    filterDateTo: '',
    filterRefndReason: '',
    mdSeNo: [],
    filterOrder: '',
    filterLimit: '',
    page: 1,
    filteredResult: []
  },

  getters: {
    getFilters(state) {
      return state;
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
    getRefundReason(state) {
      return state.filterRefndReason;
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
    getResult(state) {
      return state.filteredResult;
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
      state.filterDateFrom = new Date(value);
    },
    setDateTo(state, value) {
      state.filterDateTo = new Date(value);
    },
    setRefundReason(state, value) {
      state.filterRefndReason = value;
    },
    setSellerType(state, values) {
      state.mdSeNo = values;
    },
    setFilterOrder(state, value) {
      console.log(value);
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
    reset(state) {
      const defaultTerm = 3;
      const fromDate = new Date();
      fromDate.setDate(fromDate.getDate() - defaultTerm);

      state.selectFilter = '';
      state.filterKeyword = '';
      state.dateValue = defaultTerm;
      state.filterDateFrom = fromDate;
      state.filterDateTo = new Date();
      state.mdSeNo = [];
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
    setRefundReason({ commit }, value) {
      commit('setRefundReason', value);
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
    search({ commit, state }, status) {
      commit('setIsLoading', false);
      const filters = makeUp(state);
      console.log(filters);

      orderApi
        .getOrder(status, filters)
        .then(res => {
          console.log(res);
          commit('setResult', res.data.orders);
          commit('setIsLoading', true);
        })
        .catch(err => {
          console.error(err);
          commit('setIsLoading', true);
        });
    },
    searchByOrder({ commit, dispatch }, { status, order }) {
      commit('setFilterOrder', order);
      dispatch('search', status);
    },
    searchByLimit({ commit, dispatch }, { status, limit }) {
      commit('setFilterOrder', limit);
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