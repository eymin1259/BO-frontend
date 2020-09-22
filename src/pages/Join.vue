<template>
  <div class="join-agree">
    <div class="joinOuterBox">
      <h1>셀러회원 가입</h1>
      <img
        src="https://sadmin.brandi.co.kr/include/img/seller_join_top_1.png"
      />
      <div class="joinTextBox">
        <h2>1. 브랜디 판매자 이용약관</h2>
        <p class="joinDetail">
          판매자이용약관 제1장 총칙 제 1 조 목적 이 약관은 (주)브랜디(이하
          "회사"라 함)가 운영하는 오픈마켓 판매자 페이지 (admin.brandi.co.kr,
          이하 "브랜디셀러관리자")에 판매회원으로 가입하여 사이버
          몰(www.brandi.co.kr, 이하 "몰"이라 함)과 스마트폰 등 이동통신기기를
          통해 제공 되는 모바일 애플리케이션 (이하 "브랜디 앱"이라고 합니다)
        </p>
        <p>판매자 이용약관을 동의합니다 <button>[전문보기]</button></p>
      </div>
      <div class="joinTextBox">
        <h2>
          2. 브랜디 입점정책
        </h2>
        <p class="joinDetail">
          1. 지식재산권 정책 상표권침해 상품, 초상권 침해 상품, 국내 도매처
          이미지, 해외 도매 거래처 이미지의 사용을 제한하며 입점 취소사유가 될
          수 있습니다. 2. 전 상품 무료배송 정책 브랜디는 현재 전 상품 무료배송
          정책을 시행하고 있습니다. 브랜디에서의 판매상품은 100% 무료배송으로
          진행해 주셔야 합니다. (배송비 업체 부담) 단, 도서산간 지역은 추가
          배송비를 별도 수취하실 수 있습니다. 3. 전 상품 가격정찰제 브랜디에서의
          판매상품은 자사몰, 타플랫폼과의 최종 판매가와 가격이 동일해야 합니다.
          월 1회 이상 판매가 모니터링을 실시하여 가격이 상이할 경우, 브랜디 내
          상품 노출이 제한됩니다. 단, 이벤트, 기획전 등은 예외처리 될 수
          있습니다. 4. 정산 정책 브랜디는 월 2회 정산되며, 판매 수수료와는
          별도로 서버 이용료 (45,000원/월 2회 분납, VAT 별도)가 부과됩니다. 5.
          환불보장제 배송완료 후 7일 이내 상품은 100% 교환&환불을 보장해주셔야
          합니다. 6. 판매 지원금 정책 브랜디는 결제 간 쿠폰 사용 금액의 일정
          부분을 지원하는 판매자 지원금 정책을 시행하고 있습니다. 기본 50% 가
          지원되며, 별도의 협의를 통해 해당 내용은 변경될 수 있습니다. 7. 기타
          위의 대표 입점정책 외에 기타 운영정책은 약관 등의 내용을 따릅니다.
        </p>
        <p>
          <input type="checkbox" />판매자 본인은 위 내용을 숙지하였고 정책에
          동의합니다
        </p>
        <div class="buttons">
          <buttonblue word="다음" />
          <buttonred word="취소" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ButtonBlue from '../components/ButtonBlue';
import ButtonRed from '../components/ButtonRed';

export default {
  name: 'Join',
  components: {
    buttonblue: ButtonBlue,
    buttonred: ButtonRed
  },
  data() {
    return {
      joinActive: false
    };
  },
  computed: {
    makeJoinActive: function() {
      return {
        active: this.lengthValid && this.emailValid
      };
    }
  }
};
</script>
<style scoped lang="scss">
input {
  width: 13px;
  height: 13px;
}
h1 {
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 22px;
}
.join-agree {
  display: flex;
  justify-content: center;
  background-color: #fafafa;

  .joinOuterBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 35%;
    padding: 20px 0;
    background-color: pink;

    img {
      width: 80%;
      height: auto;
    }

    .joinTextBox {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: blue;
      width: 80%;
      margin: 10px;
      border: 1px solid darkgrey;
      font-size: 18px;

      h2 {
        align-self: flex-start;
        margin-bottom: 10px;
        font-weight: 500;
        text-indent: 20px;
      }

      .joinDetail {
        height: 180px;
        margin-bottom: 10px;
        padding: 20px;
        font-size: 14px;
        line-height: 1.6;
        color: darkgrey;
        background-color: #f5f5f5;
        overflow: scroll;
      }

      p {
        font-size: 14px;
      }
    }
  }
}
.buttons {
  margin-top: 10px;
  color: white;
}
#buttonblue {
  color: white;
}
</style>
