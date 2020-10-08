<template>
  <div>
    <h3 class="page-title">
      {{ main }}
      <small>{{ sub }}</small>
    </h3>
    <BreadCrumb />
    <TableWithSearch :table="table" />
  </div>
</template>

<script>
import path from '@/assets/textMap';
import BreadCrumb from '@/components/Main/BreadCrumb';
import TableWithSearch from '@/components/Main/Table/TableWithSearch';

export default {
  components: {
    BreadCrumb,
    TableWithSearch
  },
  data() {
    const { main, sub, table } = path[this.$route.params.type];
    return {
      main,
      sub,
      table
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
