<template>
  <div>
    <h3 class="page-title">
      {{ main }}
      <small>{{ sub }}</small>
    </h3>
    <BreadCrumb />
    <CouponTable :table="table" />
  </div>
</template>

<script>
import path from '@/assets/textMap';
import BreadCrumb from '@/components/Main/BreadCrumb';
import CouponTable from '@/components/Main/Table/CouponTable';

export default {
  components: {
    BreadCrumb,
    CouponTable
  },
  data() {
    // state
    const { main, sub, table } = path[this.$route.params.subMenu];
    return {
      main,
      sub,
      table
    };
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
