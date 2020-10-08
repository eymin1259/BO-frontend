<template>
  <div>
    <PageLoading v-if="!done" />
    <h3 class="page-title">
      {{ main }}
      <small>{{ sub }}</small>
    </h3>
    <FilterBox :filters="filters" :orderStatus="orderStatus" />
    <BreadCrumb :orderStatus="orderStatus" />
    <Table :table="table" :orderStatus="orderStatus" />
  </div>
</template>

<script>
import path from '@/assets/textMap';
import FilterBox from '@/components/Main/FilterBox';
import BreadCrumb from '@/components/Main/BreadCrumb';
import Table from '@/components/Main/Table/Table';
import PageLoading from '@/components/Loading/PageLoading';
import { mapState, mapActions } from 'vuex';
import NAMESPACE from '@/store/modules/types';

export default {
  components: {
    FilterBox,
    BreadCrumb,
    Table,
    PageLoading
  },
  computed: {
    ...mapState({
      getNamespace(state, getters) {
        return getters[NAMESPACE[this.namespace] + `/getNamespace`];
      }
    }),
    currMain() {
      return this.getNamespace;
    }
  },
  data() {
    console.log(this.$route);
    const { main, sub, filters, sort, table, orderStatus } = path[
      this.$route.params.subMenu
    ];
    return {
      main,
      sub,
      filters,
      sort,
      table,
      orderStatus: orderStatus ? orderStatus : 0,
      namespace: this.$route.params.subMenu,
      done: true
    };
  },
  methods: {
    ...mapActions({
      reset(dispatch) {
        return dispatch(NAMESPACE[this.namespace] + '/reset');
      },
      setCurMain(dispatch, payload) {
        return dispatch(NAMESPACE[this.namespace] + '/setNamespace', payload);
      }
    })
  },
  mounted() {
    if (this.currMain !== this.$route.params.subMenu) {
      this.reset();
      this.done = false;

      setTimeout(() => {
        this.setCurMain(this.$route.params.subMenu);
        this.done = true;
      }, 800);
    }
  }
};
</script>

<style lang="scss" scoped>
.page-title {
  padding: 0px;
  margin-bottom: 15px;
  letter-spacing: -1px;
  color: #666;
  font-size: 26px;
  font-weight: 300;
  font-family: 'Open Sans', sans-serif;

  small {
    font-size: 14px;
    letter-spacing: 0px;
    font-weight: 300;
    color: #888;
  }
}
</style>
