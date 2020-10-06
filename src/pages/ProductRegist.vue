/* eslint-disable vue/no-unused-components */
<template>
  <div class="product-regist">
    <div class="title">
      <h1>
        상품등록
      </h1>
      <span>상품 정보 등록</span>
    </div>
    <div v-if="mordalActive" class="seller-mordal">
      <div>
        <h2>셀러선택</h2>
        <p>상품을 등록할 셀러를 선택해주세요. (검색 10건)</p>
        <div>
          <div class="seller-input">
            <h3>셀러검색</h3>
            <input
              type="text"
              placeholder="찾고싶은 셀러를 입력하세요."
              v-model="sellerSearchInput"
            />
            <i class="fas fa-search" @click="sendSearch"></i>
          </div>
          <div class="result-container">
            <ul v-show="searchActive" class="seller-result">
              <li v-for="(result, idx) in searchResult" :key="idx">
                <img src="{ result.url }" />
                <span>{{ result.name }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
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
            <button class="search-btn" @click="sellerActive">셀러검색</button>
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
                @change="radioUpdate"
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
                @change="radioUpdate"
              />
            </div>
          </td>
        </tr>
        <tr height="80">
          <th>카테고리 *</th>
          <td>
            <div class="table-small">
              <TableCategory></TableCategory>
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
                @change="radioUpdate"
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
                  <button class="upload-blue-btn">
                    대표 이미지 등록
                  </button>
                  <DropZone />
                </div>
              </div>
              <div class="img-regist-container">
                <div class="img-container">
                  <button class="upload-black-btn">이미지 등록</button>
                  <DropZone />
                </div>
              </div>
              <div class="img-regist-container">
                <div class="img-container">
                  <button class="upload-black-btn">이미지 등록</button>
                  <DropZone />
                </div>
              </div>
              <div class="img-regist-container">
                <div class="img-container">
                  <button class="upload-black-btn">이미지 등록</button>
                  <DropZone />
                </div>
              </div>
              <div class="img-regist-container">
                <div class="img-container">
                  <button class="upload-black-btn">이미지 등록</button>
                  <DropZone />
                </div>
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
      <table class="option-table">
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
              <TableOption @optionRegist="optionRegist" />
            </div>
            <div class="table-small">
              <TableOptionDetail :optionResult="optionResult" />
            </div>
          </td>
        </tr>
      </table>
    </div>

    <div class="table-container">
      <table class="dicount-table">
        <tr>
          <td colspan="2"><i class="fas fa-chart-line"></i>판매 정보</td>
        </tr>
        <tr height="50">
          <th>판매가</th>
          <td>
            <div class="flex-box">
              <input type="text" class="price-box" />
              <div class="point-box">원</div>
            </div>
          </td>
        </tr>
        <tr height="50">
          <th>할인 정보</th>
          <td>
            <TableDiscount />
          </td>
        </tr>
        <tr height="50">
          <th>최소 판매 수량</th>
          <td>
            <div class="flex-box">
              <label for="min-product">
                <input
                  type="radio"
                  name="min-product"
                  label="1"
                  checked="true"
                />
                1개 이상
              </label>
              <label for="min-product">
                <input type="radio" name="min-product" label="2" />
                <input type="text" class="sales-input" />개 이상
              </label>
            </div>
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
import TableOptionDetail from '../components/TableOptionDetail';
import TableCategory from '../components/TableCategory';
import TableDiscount from '../components/TableDiscount';
import DropZone from '../components/DropZone';
import axios from 'axios';
import { config } from '../../config.js';

export default {
  name: 'ProductRegist',
  components: {
    'radio-btn': RadioBtn,
    TableOption,
    TableOptionDetail,
    TableCategory,
    TableDiscount,
    DropZone
  },
  data() {
    return {
      selectedRadio: 0,
      btnList1: ['판매', '미판매'],
      btnList2: ['진열', '미진열'],
      btnList3: ['상품상세 참조', '직접입력'],
      droplist: [],
      mordalActive: false,
      sellerSearchInput: '',
      searchActive: false,
      searchResult: [
        {
          attribute_id: 5,
          id: 31,
          image_url:
            'https://forum-creallo.s3.dualstack.ap-northeast-2.amazonaws.com/original/1X/5e0d906585d6dbbf7f3c9997484eee594bd01da1.jpeg',
          name: '이용민1'
        },
        {
          attribute_id: 7,
          id: 359,
          image_url:
            'https://forum-creallo.s3.dualstack.ap-northeast-2.amazonaws.com/original/1X/5e0d906585d6dbbf7f3c9997484eee594bd01da1.jpeg',
          name: '이용민4'
        },
        {
          attribute_id: 4,
          id: 402,
          image_url: null,
          name: '이용민2'
        }
      ],
      optionResult: {}
    };
  },
  methods: {
    radioUpdate: function(idx) {
      this.selectedRadio = idx;
    },
    optionRegist(option) {
      this.optionResult = option;
    },
    sellerActive() {
      this.mordalActive = !this.mordalActive;
    },
    sendSearch() {
      this.searchActive = !this.searchActive;
      axios
        .post(
          `${config.product}/api/products/seller?q=${this.sellerSearchInput}`
        )
        .then(res => {
          console.log(res);
          console.log(res.data);
          if (res.data) {
            console.log('status 200');
            this.searchResult = res.data;
          }
        })
        .catch(err => {
          if (err.response.data['MESSAGE']) {
            alert('해당하는 셀러가 없습니다.');
          }
        });
    }
  }
  // mounted() {
  //   var file = { size: 123, name: 'Icon', type: 'image/png' };
  //   var url = 'https://myvizo.com/img/logo_sm.png';
  //   this.$refs.myVueDropzone.manuallyAddFile(file, url);
  // }
};
</script>

<style lang="scss" scoped>
@import '../styles/commonD.scss';

.table-small {
  position: relative;
}

.flex-box {
  display: flex;
  align-items: center;
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
  text-indent: 5px;
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
  color: white;
  background-color: $midblue;
}

.discount-table {
  width: 100%;
}

.sales-input {
  width: 100px;
  height: 30px;
  margin: 0 10px;
  padding: 5px;
  border: 1px solid $darkgrey;
  border-radius: 5px;
  background-color: $lightgrey;
  text-indent: 5px;

  &:focus {
    outline: none;
  }
}

label {
  margin-right: 20px;
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
    min-width: 10vw;
    max-width: 15vw;
    padding: 10px;
    border-top: 1px solid $darkgrey;

    &:first-child {
      background-color: $softgrey;
    }
  }

  td {
    display: table-cell;
    vertical-align: middle;
    padding: 10px;
    width: 100%;
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

.seller-mordal {
  position: fixed;
  top: 18%;
  left: 34%;
  width: 600px;
  height: 400px;
  padding: 30px;
  color: $darkgrey;
  background-color: $lightgrey;
  border: 1px solid $midgrey;
  border-radius: 5px;
  z-index: 180;

  h2 {
    padding-bottom: 30px;
    border-bottom: 1px solid $midgrey;
    font-size: 22px;
  }

  p {
    margin: 20px 0;
    font-size: 12px;
    color: $midblue;
  }

  .seller-input {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .result-container {
    position: relative;
    display: flex;
    justify-content: center;

    .seller-result {
      position: absolute;
      top: 0;
      left: 115px;
      height: 250px;
      font-size: 14px;
      color: $darkgrey;
      overflow: scroll;

      li {
        width: 350px;
        height: 30px;
        border: 1px solid $midgrey;
        text-indent: 10px;
        line-height: 30px;

        img {
          width: 10px;
          height: 10px;
        }
      }
    }
  }

  h3 {
    font-size: 18px;
  }

  input[type='text'] {
    width: 350px;
    height: 30px;
    margin: 10px 0;
    border: 1px solid $darkgrey;
    border-radius: 5px;
    background-color: $lightgrey;
    text-indent: 5px;
  }
}

.upload-blue-btn {
  @include blue-btn;
  position: absolute;
  top: 80px;
  left: 35px;
  pointer-events: none;
}

.upload-black-btn {
  @include black-btn;
  position: absolute;
  top: 80px;
  left: 48px;
  pointer-events: none;
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

  .img-container {
    position: relative;
  }

  .btn-container {
    @include btnContainer;
  }

  .blue-btn {
    @include blue-btn;
  }

  .black-btn {
    @include black-btn;
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

    .img-regist-whole {
      width: 100%;
      padding: 0;
      border: 1px solid $midgrey;
      display: flex;
      flex-wrap: wrap;

      .img-regist-container {
        width: 200px;
        margin: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;

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
