<template>
  <div>
    <h3 class="page-title">
      {{ main }}
      <small>{{ sub }}</small>
    </h3>
    <FilterBox :filters="filters" :orderStatus="orderStatus" />
    <BreadCrumb />
    <Table :table="table" />
  </div>
</template>

<script>
import path from '@/assets/textMap';
import FilterBox from '@/components/Main/FilterBox';
import BreadCrumb from '@/components/Main/BreadCrumb';
import Table from '@/components/Main/Table/Table';

export default {
  components: {
    FilterBox,
    BreadCrumb,
    Table
  },
  data() {
    const { main, sub, filters, sort, table, orderStatus } = path[
      this.$route.params.subMenu
    ];
    return {
      main,
      sub,
      filters,
      sort,
      table,
      orderStatus: orderStatus ? orderStatus : 0
    };
  },
  methods: {}
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
