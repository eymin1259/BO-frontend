<template>
  <table class="option-table">
    <tr>
      <th colspan="2">상품 옵션정보</th>
      <th rowspan="2">일반재고</th>
      <th rowspan="2">삭제</th>
    </tr>
    <tr class="option-detail">
      <th>색상</th>
      <th>사이즈</th>
    </tr>
    <tr
      v-for="[color, size] of optionMatch"
      :key="color + size"
      :class="{ 'hidden-class': hidden }"
    >
      <td>
        <div class="option-container">
          <div class="option-whole">
            <div>
              <p>
                {{ color ? color : '색상을 선택해 주세요' }}
              </p>
            </div>
          </div>
        </div>
      </td>
      <td>
        <div class="option-container">
          <div class="option-whole">
            <div>
              <p>
                {{ size ? size : '사이즈를 선택해 주세요' }}
              </p>
            </div>
          </div>
        </div>
      </td>
      <td>
        <div class="btn-container">
          <div class="flex-box">
            <RadioBtn
              v-for="(buttonName, idx) in btnList1"
              name="sold"
              :label="idx + 1"
              :buttonName="buttonName"
              :key="'radio' + idx"
              @change="radioUpdate"
            />
          </div>
        </div>
      </td>
      <td>
        <button class="plus-btn red-btn">
          <i class="fas fa-minus"></i>
        </button>
      </td>
    </tr>
  </table>
</template>

<script>
import RadioBtn from '../components/RadioBtn';
import { option } from '@/assets/mock/productRegist.js';

export default {
  name: 'TableOption',
  props: ['optionResult'],
  components: {
    RadioBtn
  },
  data() {
    return {
      selectedRadio: 0,
      selectedColor: '',
      selectedSize: '',
      optionData: option,
      btnList1: ['재고 수량 관리 안함', '재고 수량 관리'],
      colorData: [],
      hidden: false
    };
  },
  created() {
    document.addEventListener('click', this.checkFunction);
  },
  computed: {
    optionMatch: function() {
      const match = [];
      for (const [color, sizes] of Object.entries(this.optionResult)) {
        for (const size of sizes) {
          match.push([color, size]);
        }
      }
      return match;
    }
  },
  methods: {
    // checkFunction() {
    //   console.log(
    //     'optionResult',
    //     JSON.parse(JSON.stringify(this.optionResult))
    //   );
    // },
    radioUpdate: function(idx) {
      this.selectedRadio = idx;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/commonD.scss';

.flex-box {
  display: flex;
}

.flex-box-center {
  display: flex;
  justify-content: center;
}

.plus-btn-container {
  display: flex;
  justify-content: center;
}

.plus-btn {
  width: 25px;
  height: 25px;
  margin: 5px;
  border-radius: 5px;
}

.blue-btn {
  @include blue-btn;
}

.black-btn {
  @include black-btn;
}

.red-btn {
  @include red-btn;
}

input[type='text'] {
  width: 90%;
  height: 25px;
  border: 1px solid $darkgrey;
  border-radius: 5px;
  background-color: $lightgrey;
}

.option-table {
  color: $darkgrey;
  font-size: 12px;
  text-indent: 10px;
  width: 100%;

  .hidden-class {
    display: none;
  }

  th {
    display: table-cell;
    vertical-align: middle;
    height: 25px;
    text-align: left;
    border-right: 1px solid $softgrey;
    border-bottom: 1px solid $softgrey;
    color: white;
    background-color: $coolgrey;

    &:first-child {
      border-left: 1px solid $darkgrey;
      width: 30%;
    }

    &:nth-child(2) {
      width: 30%;
    }

    &:last-child {
      border-right: 1px solid $darkgrey;
      width: 10%;
    }
  }
  .option-detail {
    th {
      &:first-child {
        width: 15%;
      }

      &:last-child {
        width: 15%;
      }
    }
  }

  td {
    height: 35px;
    display: table-cell;
    vertical-align: middle;
    border: 1px solid $darkgrey;
    background-color: $lightgrey;
  }
}

.option-whole {
  height: 30px;

  .flex-box-space {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 100%;

    .fa-chevron-down {
      width: 10px;
      height: 10px;
    }
  }
}
</style>
