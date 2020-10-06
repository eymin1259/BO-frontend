<template>
  <table class="discount-table">
    <tr>
      <th>할인율</th>
      <th>할인가</th>
      <th>할인판매가</th>
    </tr>
    <tr>
      <td>
        <div class="flex-box">
          <input type="text" />
          <div class="point-box">%</div>
          <button class="btn-container blue-btn">적용</button>
        </div>
      </td>
      <td>
        <div class="flex-box">
          <div class="price-box"></div>
          <div class="point-box">원</div>
        </div>
      </td>
      <td>
        <div class="flex-box">
          <div class="price-box highlight-text">
            2000
          </div>
          <div class="point-box">원</div>
        </div>
      </td>
    </tr>
    <tr class="schedule">
      <th>할인기간</th>
      <td colspan="2">
        <div class="flex-box">
          <RadioBtn
            v-for="(buttonName, idx) in btnList1"
            name="discount"
            :label="idx + 1"
            :buttonName="buttonName"
            :key="'radio' + idx"
            @change="radioUpdate"
          />
        </div>
      </td>
    </tr>
  </table>
</template>

<script>
import RadioBtn from '../components/RadioBtn';

export default {
  name: 'TableDiscount',
  components: {
    RadioBtn
  },
  data() {
    return {
      selectedRadio: 0,
      btnList1: ['무기한', '기간설정']
    };
  },
  methods: {
    radioUpdate(idx) {
      this.selectedRadio = idx;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/commonD.scss';

.flex-box {
  display: flex;
  align-items: center;
}

.btn-container {
  @include btnContainer;
  height: 30px;
  margin-left: 10px;
  padding: 0 15px;
  border-radius: 5px;
  font-size: 14px;
  letter-spacing: 0.04rem;
}

.blue-btn {
  @include blue-btn;
}

input[type='text'] {
  width: 150px;
  height: 30px;
  margin: 10px 0 10px 10px;
  padding: 5px;
  border: 1px solid $darkgrey;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: $lightgrey;
  text-indent: 5px;

  &:focus {
    outline: none;
  }
}

.highlight-text {
  color: $darkgrey;
  font-weight: 600;
}

.discount-table {
  font-size: 12px;
  text-indent: 10px;
  color: $darkgrey;

  th {
    display: table-cell;
    vertical-align: middle;
    height: 25px;
    text-align: left;
    border-right: 1px solid $softgrey;
    color: white;
    background-color: $coolgrey;

    &:first-child {
      width: 40%;
    }

    &:last-child {
      border-right: 1px solid $darkgrey;
    }
  }

  td {
    height: 35px;
    display: table-cell;
    vertical-align: middle;
    border: 1px solid $darkgrey;
    background-color: $lightgrey;
  }

  .schedule {
    th {
      border: 1px solid $darkgrey;
      color: $darkgrey;
      background-color: $softgrey;
    }
  }

  .price-box {
    display: flex;
    align-items: center;
    width: 150px;
    height: 30px;
    margin: 10px 0 10px 10px;
    padding: 5px;
    border: 1px solid $darkgrey;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  .point-box {
    display: flex;
    align-items: center;
    width: 30px;
    height: 30px;
    border-top: 1px solid $darkgrey;
    border-bottom: 1px solid $darkgrey;
    border-right: 1px solid $darkgrey;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    font-size: 14px;
    font-weight: 600;
    text-indent: 5px;
    color: $darkgrey;
    background-color: $midgrey;
  }
}
</style>
