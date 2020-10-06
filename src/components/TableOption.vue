/* eslint-disable vue/no-unused-components */
<template>
  <div>
    <table id="option-table">
      <tr>
        <th>옵션항목</th>
        <th>상품옵션명</th>
        <th>옵션값 추가·삭제</th>
      </tr>
      <tr v-for="(cell, idx) in colorcells" :key="'colorkey' + idx">
        <td
          v-show="cell.header"
          :rowspan="idx === 0 && addedColor > 1 ? addedColor : 1"
        >
          {{ cell.header }}
        </td>
        <td>
          <div class="option-container">
            <div class="option-whole" @click="colorOpen(idx, $event)">
              <div class="flex-box-space" :class="'colorRef' + idx">
                <p :class="'colorRef' + idx">
                  {{ cell.color ? cell.color : '색상을 선택해 주세요' }}
                </p>
                <i class="fas fa-chevron-down"></i>
              </div>
              <DropList
                v-show="cell.isColorOpen"
                ref="droplist"
                type="color"
                :option="optionData.color_option"
                :class="'colorRef' + idx"
                @updatecolor="updatecolor"
              />
            </div>
          </div>
        </td>
        <td>
          <div class="plus-btn-container">
            <button
              class="plus-btn black-btn"
              :id="'colorAddBtn' + idx"
              @click="addColor()"
            >
              <i class="fa fa-plus"></i>
            </button>
            <button
              class="plus-btn black-btn"
              :id="'colorDelBtn' + idx"
              @click="deletecolor(idx, $event)"
            >
              <i class="fas fa-minus"></i>
            </button>
          </div>
        </td>
      </tr>
      <tr v-for="(cell, idx) in sizecells" :key="'sizekey' + idx">
        <td>{{ cell.header }}</td>
        <td>
          <div class="option-container">
            <div class="option-whole" @click="sizeOpen(idx)">
              <div class="flex-box-space">
                <p>
                  {{ cell.size ? cell.size : '사이즈를 선택해 주세요' }}
                </p>
                <div class="arrow-container">
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <DropList
                v-show="cell.isSizeOpen"
                :option="optionData.size_option"
                type="size"
                :class="'sizeRef' + idx"
                @updatesize="updatesize"
              />
            </div>
          </div>
        </td>
        <td>
          <div class="plus-btn-container">
            <button class="plus-btn black-btn" @click="addSize(idx)">
              <i class="fa fa-plus"></i>
            </button>
            <button
              class="plus-btn black-btn"
              :id="'sizeBtn' + idx"
              @click="deletesize(idx, $event)"
            >
              <i class="fas fa-minus"></i>
            </button>
          </div>
        </td>
      </tr>
      <tr>
        <td>재고관리여부</td>
        <td colspan="3">
          <div class="flex-box">
            <RadioBtn
              v-for="(buttonName, idx) in btnList1"
              name="sold"
              :label="idx + 1"
              :buttonName="buttonName"
              :key="idx"
              @change="radioUpdate"
            />
          </div>
        </td>
      </tr>
    </table>

    <button class="option-submit-btn blue-btn" @click="optionSubmit">
      <i class="fas fa-check"></i>
      옵션 적용
    </button>
  </div>
</template>

<script>
import DropList from '../components/DropList.vue';
import RadioBtn from '../components/RadioBtn';
import { option } from '@/assets/mock/productRegist.js';

export default {
  name: 'TableOption',
  components: {
    DropList,
    RadioBtn
  },
  data() {
    return {
      selectedRadio: 0,
      selectedColor: '',
      selectedSize: '',
      optionData: option,
      colorCount: 0,
      sizeCount: 0,
      btnList1: ['재고 수량 관리 안함', '재고 수량 관리'],
      addedColor: 1,
      colorcells: [
        {
          id: 'colorRef0',
          header: '색상',
          btn: 'colorBtn0',
          color: '',
          isColorOpen: false,
          isSizeOpen: false
        }
      ],
      sizecells: [
        {
          id: 'sizeRef0',
          header: '사이즈',
          btn: 'colorBtn0',
          size: '',
          isColorOpen: false,
          isSizeOpen: false
        }
      ],
      optionInfo: {}
    };
  },

  created() {
    document.addEventListener('click', this.toggleIsOpen);
  },

  // computed: {
  //   addColor() {
  //     this.addedColor = this.colorCount + 1;
  //     return this.addedColor;
  //   }
  // },

  methods: {
    toggleIsOpen() {
      event.stopPropagation();
      this.colorcells.map(list => {
        return (list.isColorOpen = false);
      });
    },

    colorOpen(idx, event) {
      event.stopPropagation();
      this.sizecells.map(list => {
        list.isSizeOpen = false;
      });
      this.colorcells.map(list => {
        if (list.id !== `colorRef${idx}`) {
          return (list.isColorOpen = false);
        }
        if (
          list.id === `colorRef${idx}` &&
          event.target.localName !== 'input'
        ) {
          return (list.isColorOpen = !list.isColorOpen);
        }
      });
      return this.colorcells;
    },

    sizeOpen(idx) {
      event.stopPropagation();
      this.colorcells.map(list => {
        list.isColorOpen = false;
      });
      this.sizecells.map(list => {
        if (list.id === `sizeRef${idx}`) {
          return (list.isSizeOpen = !list.isSizeOpen);
        }
      });
      return this.sizecells;
    },

    updatecolor(args) {
      this.colorcells.map(cell => {
        let selectedColor = this.optionData.color_option[args[0]];

        if (cell.color === selectedColor) {
          alert('같은 색상은 한번만 선택해주세요.');
        }

        cell.isColorOpen = false;
        if (cell.id === args[1]) {
          cell.color = selectedColor;
          cell.isColorOpen = false;
        }
      });

      return this.colorcells;
    },

    updatesize(args) {
      this.sizecells.map(cell => {
        if (cell.id === args[1]) {
          let selectedSize = this.optionData.size_option[args[0]];
          cell.size = selectedSize;
          cell.isSizeOpen = false;
        }
        return this.sizecells;
      });
    },

    radioUpdate: function(idx) {
      this.selectedRadio = idx;
    },

    addColor() {
      this.colorCount = this.colorCount + 1;
      this.addedColor = this.addedColor + 1;
      return (this.colorcells = [
        ...this.colorcells,
        {
          id: `colorRef${this.colorCount}`,
          th: '색상',
          color: '',
          btn: `colorBtn${this.colorCount}`,
          isColorOpen: false,
          isSizeOpen: false
        }
      ]);
    },

    addSize() {
      this.sizeCount = this.sizeCount + 1;
      return (this.sizecells = [
        ...this.sizecells,
        {
          id: `sizeRef${this.sizeCount}`,
          header: '사이즈',
          btn: `sizeBtn${this.sizeCount}`,
          size: '',
          isColorOpen: false,
          isSizeOpen: false
        }
      ]);
    },

    deletecolor(idx, event) {
      return (this.colorcells = this.colorcells.filter(
        cell => cell.btn !== event.target.id
      ));
    },

    deletesize(idx, event) {
      return (this.sizecells = this.sizecells.filter(
        cell => cell.btn !== event.target.id
      ));
    },

    optionSubmit() {
      this.colorcells.map(cell => {
        this.optionInfo = {
          ...this.optionInfo,
          [cell.color]: []
        };
      });
      let colors = Object.keys(this.optionInfo);
      for (let i = 0; i < colors.length; i++) {
        this.sizecells.map(cell => {
          this.optionInfo[colors[i]].push(cell.size);
        });
      }

      this.$emit('optionRegist', this.optionInfo);
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

#option-table {
  color: $darkgrey;
  font-size: 12px;
  text-indent: 10px;
  width: 100%;

  th {
    display: table-cell;
    vertical-align: middle;
    height: 25px;
    text-align: left;
    border-right: 1px solid $softgrey;
    color: white;
    background-color: $coolgrey;

    &:first-child {
      width: 15%;
    }

    &:nth-child(2) {
      width: 50%;
    }

    &:last-child {
      border-right: 1px solid $darkgrey;
      min-width: 100px;
      max-width: 200px;
    }
  }

  td {
    &:first-child {
      background-color: $softgrey;
    }

    height: 35px;
    display: table-cell;
    vertical-align: middle;
    border: 1px solid $darkgrey;
    background-color: $lightgrey;
  }

  .select-row {
    th {
      border: 1px solid $darkgrey;
      color: $darkgrey;
      background-color: $softgrey;
    }
  }
}

.option-submit-btn {
  @include btnContainer;
  height: 30px;
  padding: 0 15px;
  border-radius: 5px;
  letter-spacing: 0.04rem;
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
