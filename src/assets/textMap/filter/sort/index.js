export const DEFAULT_SORT = { NEW: '최신주문일순', OLD: '주문일의 역순' };

export const DELIVERY_SORT = {
  NEW_DELIVERY: '최신 배송시작일',
  OLD_DELIVERY: '배송시작일의 역순',
  ...DEFAULT_SORT
};
export const DELIVERY_COMP_SORT = {
  NEW_DELIVERY_COMPLETE: '최신 배송완료일',
  OLD_DELIVERY_COMPLETE: '배송완료일의 역순',
  ...DEFAULT_SORT
};
export const REFUND_REQ_SORT = {
  NEW_REQUEST_REFUND: '최신환불요청일순',
  OLD_REQUEST_REFUND: '환불요청일의 역순',
  ...DEFAULT_SORT
};
export const REFUND_COMP_SORT = {
  NEW_REFUND_COMPLETE: '최신환불완료일순',
  OLD_REFUND_COMPLETE: '환불완료일의 역순',
  ...DEFAULT_SORT
};
export const ORDER_CANCEL_SORT = {
  NEW_CANCEL_COMPLETE: '최신 주문취소완료일순',
  OLD_CANCEL_COMPLETE: '주문취소완료일의 역순',
  ...DEFAULT_SORT
};
export default {
  DELIVERY_SORT,
  DELIVERY_COMP_SORT,
  REFUND_REQ_SORT,
  REFUND_COMP_SORT,
  ORDER_CANCEL_SORT
};
