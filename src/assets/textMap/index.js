import {
  PAYMENT_COMP,
  PREPARE,
  DELIVERY,
  DELIVERY_COMP,
  REFUND_REQ,
  REFUND_COMP,
  ORDER_CANCEL,
  PRODUCT_MANAGE,
  QNA,
  REVIEW
} from './filter';
import {
  DEFAULT_SORT,
  DELIVERY_SORT,
  DELIVERY_COMP_SORT,
  REFUND_REQ_SORT,
  REFUND_COMP_SORT,
  ORDER_CANCEL_SORT
} from './filter/sort';
import {
  PAYMENT_COMP_TB,
  PREPARE_TB,
  DELIVERY_TB,
  DELIVERY_COMP_TB,
  REFUND_REQ_TB,
  REFUND_COMP_TB,
  ORDER_CANCEL_TB,
  COUPON_TB
} from './table';
import { SHORT_LIMIT, LONG_LIMIT } from './limit';
import { ORDER_MAP } from './table/tableMap';

export const orderMap = ORDER_MAP;

export default {
  paymentcomplete: {
    main: '주문 관리',
    sub: '결제완료 관리',
    filters: PAYMENT_COMP,
    sort: DEFAULT_SORT,
    table: PAYMENT_COMP_TB,
    limit: LONG_LIMIT,
    orderStatus: 1
  },
  prepare: {
    main: '주문 관리',
    sub: '상품준비 관리',
    filters: PREPARE,
    sort: DEFAULT_SORT,
    table: PREPARE_TB,
    limit: LONG_LIMIT,
    orderStatus: 2
  },
  delivery: {
    main: '주문 관리',
    sub: '배송중 관리',
    filters: DELIVERY,
    sort: DELIVERY_SORT,
    table: DELIVERY_TB,
    limit: LONG_LIMIT,
    orderStatus: 3
  },
  deliverycomplete: {
    main: '주문 관리',
    sub: '배송완료 관리',
    filters: DELIVERY_COMP,
    sort: DELIVERY_COMP_SORT,
    table: DELIVERY_COMP_TB,
    limit: LONG_LIMIT,
    orderStatus: 4
  },
  refundrequest: {
    main: '취소/환불 관리',
    sub: '환불요청 관리',
    filters: REFUND_REQ,
    sort: REFUND_REQ_SORT,
    table: REFUND_REQ_TB,
    limit: LONG_LIMIT,
    orderStatus: 7
  },
  refundcomplete: {
    main: '취소/환불 관리',
    sub: '환불완료관리',
    filters: REFUND_COMP,
    sort: REFUND_COMP_SORT,
    table: REFUND_COMP_TB,
    limit: LONG_LIMIT,
    orderStatus: 8
  },
  ordercancel: {
    main: '취소/환불 관리',
    sub: '주문취소완료 관리',
    filters: ORDER_CANCEL,
    sort: ORDER_CANCEL_SORT,
    table: ORDER_CANCEL_TB,
    limit: LONG_LIMIT,
    orderStatus: 6
  },
  manage: {
    main: '상품 관리',
    sub: '상품 관리',
    filters: PRODUCT_MANAGE,
    table: ORDER_CANCEL_TB,
    limit: SHORT_LIMIT
  },
  qna: {
    main: '고객응대 관리',
    sub: 'Q&A 관리',
    filters: QNA,
    table: ORDER_CANCEL_TB
  },
  review: {
    main: '고객응대 관리',
    sub: '텍스트 리뷰',
    filters: REVIEW,
    table: ORDER_CANCEL_TB,
    limit: LONG_LIMIT
  },
  coupon: {
    main: '기획전/쿠폰 관리',
    sub: '쿠폰 관리',
    table: COUPON_TB
  },
  event: {
    main: '기획전/쿠폰 관리',
    sub: '기획전 관리'
  }
};
