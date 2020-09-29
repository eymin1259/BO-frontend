<template>
  <div class="product-regist">
    <div class="title">
      <h1>
        상품등록
      </h1>
      <span>상품 정보 등록</span>
    </div>
    <div class="table-container">
      <table class="basic-table">
        <tr>
          <td colspan="2"><i class="fa fa-pencil"></i>기본 정보</td>
        </tr>
        <tr height="50">
          <th>셀러선택 *</th>
          <td>
            <input class="seller-search" placeholder="셀러를 검색해주세요." />
            <button class="search-btn">셀러검색</button>
          </td>
        </tr>
        <tr height="50">
          <th>판매여부</th>
          <td>
            <div class="radio-btn-container">
              <radio-btn
                v-for="(buttonName, idx) in btnList1"
                name="sold"
                :label="idx + 1"
                :buttonName="buttonName"
                :key="idx"
                @change="changeValue"
              />
            </div>
          </td>
        </tr>
        <tr height="50">
          <th>진열여부</th>
          <td>
            <div class="radio-btn-container">
              <radio-btn
                v-for="(buttonName, idx) in btnList2"
                name="displayed"
                :label="idx + 1"
                :buttonName="buttonName"
                :key="idx"
                @change="changeValue"
              />
            </div>
          </td>
        </tr>
        <tr height="80">
          <th>카테고리 *</th>
          <td>
            <div class="table-small">
              <table-category :isColorOpen="isColorOpen"></table-category>
            </div>
          </td>
        </tr>
        <tr height="50">
          <th>상품 정보 고시 *</th>
          <td>
            <div class="radio-btn-container">
              <radio-btn
                v-for="(buttonName, idx) in btnList3"
                name="product_info"
                :label="idx + 1"
                :buttonName="buttonName"
                :key="idx"
                @change="changeValue"
              />
            </div>
          </td>
        </tr>
        <tr height="50">
          <th>상품명 *</th>
          <td>
            <input class="product-name" placeholder="상품명을 입력해주세요." />
          </td>
        </tr>
        <tr height="50">
          <th>한줄 상품 설명</th>
          <td>
            <input class="product-info" placeholder="상품명을 입력해주세요." />
          </td>
        </tr>
        <tr height="80">
          <th>이미지 등록 *</th>
          <td>
            <div class="img-regist-whole">
              <div class="img-regist-container">
                <div class="img-container">
                  <img
                    src="https://sadmin.brandi.co.kr/include/img/no_image.png"
                  />
                </div>
                <button class="blue-btn">대표 이미지 등록</button>
              </div>
              <div class="img-regist-container">
                <div class="img-container">
                  <img
                    src="https://sadmin.brandi.co.kr/include/img/no_image.png"
                  />
                </div>
                <button class="black-btn">이미지 등록</button>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <th>상세 상품 정보 *</th>
          <td>
            <div>
              <label for="product_detail_info">
                <input
                  type="radio"
                  name="product_detail_info"
                  label="1"
                  checked="true"
                />
                간편 업로드
              </label>
              <span class="caption-black">
                (에디터에 따라서 상세 내용 화면에 다소 차이가 있을 수 있습니다.)
              </span>
            </div>
            <p class="caption-blue-bold">
              상품상세이미지의 권장 사이즈는 가로사이즈 1000px 이상입니다.
            </p>
            <div>
              <button class="blue-btn">사진 삽입</button>
              <span> 이미지 확장자는 JPG, PNG만 등록 가능합니다. </span>
              <div><textarea class="text-area" /></div>
            </div>
          </td>
        </tr>
      </table>
    </div>

    <div class="table-container">
      <table class="basic-table">
        <tr>
          <td colspan="2"><i class="fas fa-check"></i>옵션 정보</td>
        </tr>
        <tr>
          <th>옵션 설정</th>
          <td>
            <label for="option-select">
              <input type="radio" name="option-select" checked="true" />
              기본 옵션
            </label>
          </td>
        </tr>
        <tr height="50">
          <th>옵션 정보</th>
          <td class="table-option-container">
            <div class="table-small">
              <table-option
                :isColorOpen="isColorOpen"
                @click="open"
              ></table-option>
            </div>
          </td>
        </tr>
      </table>
    </div>

    <div class="table-container">
      <table class="basic-table">
        <tr>
          <td colspan="2"><i class="fas fa-chart-line"></i>판매 정보</td>
        </tr>
        <tr height="50">
          <th>판매가</th>
          <td>
            <p></p>
          </td>
        </tr>
        <tr height="50">
          <th>할인 정보</th>
          <td>
            <table class="discount-table"></table>
          </td>
        </tr>
        <tr height="50">
          <th>최소 판매 수량</th>
          <td>
            <label for="min-product">
              <input type="radio" name="min-product" label="1" checked="true" />
              1개 이상
            </label>
            <label for="min-product">
              <input type="radio" name="min-product" label="2" />
              <input type="text" />개 이상
            </label>
          </td>
        </tr>
        <tr height="50">
          <th>최대 판매 수량</th>
          <td></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import RadioBtn from '../components/RadioBtn';
import TableOption from '../components/TableOption';
import TableCategory from '../components/TableCategory';
// import axios from 'axios';

export default {
  name: 'ProductRegist',
  components: {
    'radio-btn': RadioBtn,
    'table-option': TableOption,
    'table-category': TableCategory
  },
  data() {
    return {
      selectedRadio: 0,
      btnList1: ['판매', '미판매'],
      btnList2: ['진열', '미진열'],
      btnList3: ['상품상세 참조', '직접입력'],
      isColorOpen: false
    };
  },
  methods: {
    changeValue: function(idx) {
      this.selectedRadio = idx;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/commonD.scss';

.table-small {
  position: relative;
}

.product-regist {
  font-family: Verdana, sans-serif;
  font-weight: 400;

  h1 {
    font-size: 26px;
  }

  input:focus {
    outline: none;
  }

  button {
    height: 30px;
    padding: 0 15px;
    color: white;
    border-radius: 5px;
    letter-spacing: 0.04rem;
  }

  .plus-btn-container {
    display: flex;
    justify-content: center;
  }

  .plus-btn {
    padding: 0 10px;
  }

  .caption-blue-bold {
    font-weight: 600;
    font-size: 12px;
    line-height: 2.3;
    color: $midblue;
  }

  .caption-black {
    font-weight: 600;
    font-size: 12px;
  }

  .radio-btn-container {
    display: flex;
    flex-wrap: wrap;
  }

  .table-container {
    border: 1px solid $darkgrey;
    border-radius: 10px;
    margin-top: 20px;
  }

  .basic-table {
    width: 100%;
    display: table;
    vertical-align: middle;
    border-collapse: collapse;

    .seller-search {
      width: 300px;
      height: 30px;
      border: 1px solid $darkgrey;
      border-radius: 5px;
      background-color: $softgrey;
    }

    .search-btn {
      display: table-cell;
      vertical-align: middle;
      width: 100px;
      height: 30px;
      color: white;
      background-color: $midblue;
      border-radius: 5px;
    }

    .product-name,
    .product-info {
      width: 600px;
      height: 30px;
      border: 1px solid $darkgrey;
      border-radius: 5px;
    }

    tr {
      color: $darkgrey;
      font-size: 14px;

      &:first-child {
        height: 30px;
        text-align: left;
        text-indent: 15px;
        color: white;
        background-color: black;

        .fa,
        .fas {
          margin-right: 10px;
        }
      }

      &:last-child {
        th {
          border-bottom-left-radius: 10px;
        }
      }

      // 셀러선택, 판매여부 ...
      th {
        display: table-cell;
        vertical-align: middle;
        width: 20%;
        border-top: 1px solid $darkgrey;

        &:first-child {
          background-color: $softgrey;
        }
      }

      td {
        display: table-cell;
        vertical-align: middle;
        padding: 10px;
        border-left: 1px solid $darkgrey;
        border-top: 1px solid $darkgrey;

        // 검정색 바
        &:first-child {
          border: none;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }
      }
    }

    .img-regist-whole {
      display: flex;
      flex-wrap: wrap;

      .img-regist-container {
        width: 200px;
        height: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
          width: 160px;
          height: 160px;
          border: 1px solid $darkgrey;
        }

        button {
          margin-top: 10px;
        }
      }
    }
  }
}

.text-area {
  width: 100%;
  height: 300px;
  margin-top: 10px;
  resize: none;
}

input[type='radio'] {
  width: 13px;
  height: 13px;
  appearance: none;
  border-radius: 100%;
  margin-right: 0.3rem;
  background-color: white;
  border: 1px solid $midgrey;
}

input[type='radio']:checked {
  appearance: none;
  border-radius: 100%;
  margin-right: 0.3rem;
  background-color: $darkgrey;
  border: 3px solid $midgrey;
}

input[type='radio']:focus {
  outline: none;
}
</style>
