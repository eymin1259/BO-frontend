<template>
  <div class="product-regist">
    <div class="title">
      <h1>
        상품등록
      </h1>
      <span>상품 정보 등록</span>
    </div>
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
              name="radio"
              :label="idx"
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
              name="radio"
              :label="idx"
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
          <table class="category-table">
            <tr>
              <th>1차 카테고리</th>
              <th>2차 카테고리</th>
            </tr>
            <tr>
              <td>
                셀러를 먼저 선택해주세요.
                <select name="first-category">
                  <option value="">1차 카테고리를 선택해주세요.</option>
                  <option value="스킨케어">스킨케어</option>
                  <option value="메이크업">메이크업</option>
                  <option value="바디케어">바디케어</option>
                  <option value="헤어케어">헤어케어</option>
                  <option value="향수">향수</option>
                  <option value="미용소품">미용소품</option>
                </select>
              </td>
              <td>
                셀러를 먼저 선택해주세요.
                <select name="second-category">
                  <option value="">2차 카테고리를 선택해주세요.</option>
                  <option value="학생">학생</option>
                  <option value="회사원">회사원</option>
                  <option value="기타">기타</option>
                </select>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr height="50">
        <th>상품 정보 고시 *</th>
        <td>
          <div class="radio-btn-container">
            <radio-btn
              v-for="(buttonName, idx) in btnList3"
              name="radio"
              :label="idx"
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
              <button class="regist-main-btn">대표 이미지 등록</button>
            </div>
            <div class="img-regist-container">
              <div class="img-container">
                <img
                  src="https://sadmin.brandi.co.kr/include/img/no_image.png"
                />
              </div>
              <button class="regist-basic-btn">이미지 등록</button>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <th>상세 상품 정보 *</th>
        <td>
          <div class="radio-btn-container">
            <radio-btn
              v-for="(buttonName, idx) in btnList4"
              name="radio"
              :label="idx"
              :buttonName="buttonName"
              :key="idx"
              @change="changeValue"
            />
          </div>
          <span>
            ( 에디터에 따라서 상세 내용 화면에 다소 차이가 있을 수 있습니다. )
          </span>
          <p>상품상세이미지의 권장 사이즈는 가로사이즈 1000px 이상입니다.</p>
          <div>
            <button>사진 삽입</button>
            <span> 이미지 확장자는 JPG, PNG만 등록 가능합니다. </span>
            <div><textarea /></div>
          </div>
        </td>
      </tr>
    </table>

    <table class="basic-table">
      <tr>
        <th colspan="2">옵션 정보</th>
      </tr>
      <tr height="50">
        <th>옵션 상세정보</th>
        <td>
          <table class="option-info-table"></table>
        </td>
      </tr>
      <tr height="50">
        <th>판매 정보</th>
        <td>
          <div class="radio-btn-container">
            <radio-btn
              v-for="(buttonName, idx) in btnList5"
              name="radio"
              :label="idx"
              :buttonName="buttonName"
              :key="idx"
              @change="changeValue"
            />
          </div>
        </td>
      </tr>
    </table>

    <table class="basic-table">
      <tr>
        <th colspan="2">판매 정보</th>
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
            <input type="radio" name="min-product" />
            1개 이상
          </label>
          <label for="min-product">
            <input type="radio" name="min-product" />
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
</template>

<script>
import RadioBtn from '../components/RadioBtn';

export default {
  name: 'ProductRegist',
  components: {
    'radio-btn': RadioBtn
  },
  data() {
    return {
      selectedRadio: 0,
      btnList1: ['판매', '미판매'],
      btnList2: ['진열', '미진열'],
      btnList3: ['상품상세 참조', '직접입력'],
      btnList4: ['간편 업로드'],
      btnList5: ['기본 옵션']
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

.product-regist {
  font-family: Verdana, sans-serif;
  font-weight: 400;

  h1 {
    font-size: 26px;
  }

  input:focus {
    outline: none;
  }

  .radio-btn-container {
    display: flex;
    flex-wrap: wrap;
  }

  .basic-table {
    width: 100%;
    border: 1px solid $darkgrey;
    display: table;
    vertical-align: middle;
    border-radius: 10px;

    .seller-search {
      width: 300px;
      height: 30px;
      border: 1px solid $darkgrey;
      border-radius: 5px;
      background-color: $midgrey;
    }

    .search-btn {
      display: table-cell;
      vertical-align: middle;
      width: 100px;
      height: 30px;
      color: white;
      background-color: black;
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
      border: 1px solid blue;
      color: $darkgrey;
      font-size: 14px;

      // &:first-child {
      //   height: 30px;
      //   text-align: left;
      //   text-indent: 20px;
      //   color: white;
      //   background-color: $darkgrey;
      // }
      .fa-pencil {
        margin-right: 10px;
      }
    }

    th {
      display: table-cell;
      vertical-align: middle;
      width: 20%;
      border: 1px solid $darkgrey;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      background-color: $lightgrey;
    }

    td {
      display: table-cell;
      vertical-align: middle;
      padding: 10px;

      &:last-child {
        border-bottom-left-radius: 10px;
      }
    }

    .category-table {
      th {
        width: 450px;
        background-color: #b6d1b8;
        border: 2px solid white;
      }

      td {
        background-color: #ebcc78;
      }
    }

    .img-regist-whole {
      display: flex;
      flex-wrap: wrap;

      .img-regist-container {
        width: 200px;
        height: 200px;
        display: flex;
        border: 1px solid $midgrey;
        flex-direction: column;
        align-items: center;

        img {
          width: 160px;
          height: 160px;
          border: 1px dashed white;
        }

        button {
          width: 120px;
          height: 25px;
          background-color: $midgrey;
          border: 1px solid $darkgrey;
          border-radius: 5px;
        }
      }
    }
  }
}
</style>
