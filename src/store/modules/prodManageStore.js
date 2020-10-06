import { productApi } from '@/api';

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
    filterDateFrom: '',
    filterDateTo: '',
    mdName: '',
    mdSeNo: [],
    discountYn: '',
    exhibitionYn: '',
    sellYn: '',
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
    getSellerName(state) {
      return state.mdName;
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
    getDiscountYn(state) {
      return state.discountYn;
    },
    getExhibitionYn(state) {
      return state.exhibitionYn;
    },
    getSellYn(state) {
      return state.sellYn;
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
    setSellerName(state, value) {
      state.mdName = value;
    },
    setDateFrom(state, value) {
      state.filterDateFrom = new Date(value);
    },
    setDateTo(state, value) {
      state.filterDateTo = new Date(value);
    },
    setSellerType(state, values) {
      state.mdSeNo = values;
    },
    setDiscountYn(state, value) {
      state.discountYn = value;
    },
    setExhibitionYn(state, value) {
      state.exhibitionYn = value;
    },
    setSellYn(state, value) {
      state.sellYn = value;
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
      state.selectFilter = '';
      state.filterKeyword = '';
      state.filterDateFrom = '';
      state.filterDateTo = '';
      state.mdSeNo = [];
      state.filteredResult = [];
    }
  },

  actions: {
    setSelectFilter({ commit }, value) {
      commit('setSelectFilter', value);
    },
    setFilterKeyword({ commit }, value) {
      commit('setFilterKeyword', value);
    },
    setSellerName({ commit }, value) {
      commit('setSellerName', value);
    },
    setDateFrom({ commit }, value) {
      commit('setDateFrom', value);
    },
    setDateTo({ commit }, value) {
      commit('setDateTo', value);
    },
    setDiscountYn({ commit }, value) {
      commit('setDiscountYn', value);
    },
    setExhibitionYn({ commit }, value) {
      commit('setExhibitionYn', value);
    },
    setSellYn({ commit }, value) {
      commit('setSellYn', value);
    },
    setSellerType({ commit }, values) {
      commit('setSellerType', values);
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

      productApi
        .getProducts(status, filters)
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
