<template>
  <table class="option-table">
    <tr>
      <th>옵션항목</th>
      <th>상품옵션명</th>
      <th>도매처옵션명</th>
      <th>옵션값 추가·삭제</th>
    </tr>
    <tr>
      <td>색상</td>
      <td>
        <div class="option-container">
          <div class="option-whole" @click="openColorOption">
            <div class="drop-list" v-show="isColorOpen">
              <i class="fas fa-times"></i>
              <input v-model="testInput" type="text" />
              <ul>
                <li v-for="(color, idx) in option.color_option" :key="idx">
                  {{ color }}
                </li>
              </ul>
            </div>
            <div class="flex-box-space">
              <p>색상을 선택해주세요.</p>
              <div class="arrow-container">
                <i class="fas fa-chevron-down"></i>
              </div>
            </div>
          </div>
        </div>
      </td>
      <td>
        <div class="flex-box">
          <input type="text" />
        </div>
      </td>
      <td>
        <div class="plus-btn-container">
          <button class="plus-btn black-btn">
            <i class="fa fa-plus"></i>
          </button>
        </div>
      </td>
    </tr>
    <tr>
      <td>사이즈</td>
      <td>
        <div class="option-container">
          <div class="option-whole" @click="openSizeOption">
            <div class="flex-box-space">
              <p>사이즈를 선택해주세요.</p>
              <div class="arrow-container">
                <i class="fas fa-chevron-down"></i>
              </div>
            </div>
            <div class="drop-list" v-show="isSizeOpen">
              <input type="text" />
              <ul>
                <li v-for="(size, idx) in option.size_option" :key="idx">
                  {{ size }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </td>
      <td>
        <div class="flex-box">
          <input type="text" />
        </div>
      </td>
      <td>
        <div class="plus-btn-container">
          <button class="plus-btn black-btn">
            <i class="fa fa-plus"></i>
          </button>
        </div>
      </td>
    </tr></table
></template>

<script>
import { option } from '@/assets/mock/productRegist.js';

export default {
  name: 'TableOption',
  props: ['isColorOpen'],
  data() {
    return {
      selectedColor: '',
      selectedSize: '',
      option: option,
      closeClicked: false,
      isSizeOpen: false
    };
  },
  methods: {
    stop(e) {
      e.stopPropagation();
    },
    openColorOption(e) {
      if (this.isColorOpen === false) {
        this.isColorOpen = true;
      } else if (this.isColorOpen === true) {
        this.isColorOpen = false;
      }
      if (e.target.localName === 'li') {
        this.testInput = e.target.outerText;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/commonD.scss';

.flex-box {
  display: flex;
  justify-content: center;
}

.blue-btn {
  @include blue-btn;
}

.black-btn {
  @include black-btn;
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

  tr {
    height: 30px;
  }

  th {
    display: table-cell;
    vertical-align: middle;
    width: 30%;
    border: 1px solid $darkgrey;
    color: white;
    background-color: $coolgrey;

    &:first-child {
      width: 12%;
    }

    &:last-child {
      width: 12%;
      text-align: center;
    }
  }

  td {
    display: table-cell;
    vertical-align: middle;
    border: 1px solid $darkgrey;
    background-color: $softgrey;
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

  .drop-list {
    background-color: $midgrey;
    position: relative;
    top: 0;
    height: 230px;
    cursor: pointer;
    overflow: scroll;

    input[type='text'] {
      width: 90%;
      height: 25px;
      margin: 10px 0;
      border: 1px solid $darkgrey;
      border-radius: 5px;
      background-color: $lightgrey;
    }

    li {
      display: flex;
      align-items: center;
      height: 30px;

      &:hover {
        color: white;
        background-color: $coolgrey;
      }
    }
  }
}
</style>
