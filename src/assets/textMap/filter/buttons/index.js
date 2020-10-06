/**
 *  type 0: single selected button
 *  type 1: multi selected button
 */
export const SELLER_TYPE = {
  type: 1,
  values: {
    1: '쇼핑몰',
    2: '마켓',
    3: '로드맵',
    4: '디자이너브랜드',
    5: '제너럴브랜드',
    6: '내셔널브랜드',
    7: '뷰티'
  }
};
export const SALES = {
  type: 0,
  values: { 0: '미판매', 1: '판매' }
};
export const DISCOUNT = {
  type: 0,
  values: { 0: '미할인', 1: '할인' }
};
export const DISPLAY = {
  type: 0,
  values: { 0: '미진열', 1: '진열' }
};
export const ORDER_DATE = {
  type: 0,
  values: {
    0: '오늘',
    3: '3일',
    7: '1주일',
    30: '1개월',
    90: '3개월'
  }
};
export const SHIP_DATE = {
  type: 0,
  values: { 0: '오늘', 3: '3일', 7: '7일', 15: '15일' }
};
export const ORDER_CANCEL_DATE = {
  type: 0,
  values: { 0: '오늘', 3: '3일' }
};
export const ORDER_CANCEL_REASON = {
  type: 0,
  values: { 1: '구매자취소', 2: '구매자변심', 3: '상품품절' }
};
export const REFUND_DATE = {
  type: 0,
  values: {
    0: '오늘',
    3: '3일',
    7: '7일',
    15: '15일',
    30: '30일'
  }
};
export const REFUND_REASON = {
  type: 0,
  values: {
    1: '단순변심',
    2: '상품불량',
    3: '오배송',
    4: '교환요청',
    5: '일부상품누락',
    6: '기타'
  }
};
export const REQ_TYPE = {
  type: 0,
  values: {
    1: '상품 문의',
    2: '교환/반품',
    3: '불량/오배송',
    4: '기타',
    5: '배송 문의',
    6: '하루배송',
    7: '취소/변경'
  }
};
export const QNA_DATE = {
  type: 0,
  values: {
    1: '1일',
    3: '3일',
    7: '7일',
    15: '15일',
    30: '30일'
  }
};
export const REVIEW_DATE = {
  type: 0,
  values: { 0: '오늘', 3: '3일', 7: '1주일' }
};

export default {
  SELLER_TYPE,
  SALES,
  DISCOUNT,
  DISPLAY,
  ORDER_DATE,
  SHIP_DATE,
  ORDER_CANCEL_DATE,
  ORDER_CANCEL_REASON,
  REFUND_DATE,
  REFUND_REASON,
  REQ_TYPE,
  QNA_DATE,
  REVIEW_DATE
};
