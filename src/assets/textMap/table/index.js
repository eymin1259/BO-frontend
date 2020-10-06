export const PAYMENT_COMP_TB = {
  status_buttons: [{ name: '주문취소처리', url: '' }],
  excel_buttons: [
    { name: '선택주문 엑셀다운로드', url: '' },
    { name: '전체주문 엑셀다운로드', url: '' }
  ],
  table_headers: [
    'payment_date',
    'order_id',
    'order_detail_id',
    'seller_name',
    'product_name',
    'option_info',
    'option_additional_price',
    'units',
    'orderer_name',
    'orderer_phone',
    'total_payment'
  ]
};
export const PREPARE_TB = {
  status_buttons: [{ name: '주문취소처리', url: '' }],
  excel_buttons: [
    { name: '선택주문 엑셀다운로드', url: '' },
    { name: '전체주문 엑셀다운로드', url: '' }
  ],
  table_headers: [
    'payment_date',
    'order_id',
    'order_detail_id',
    'seller_name',
    'product_name',
    'option_info',
    'option_additional_price',
    'units',
    'orderer_name',
    'orderer_phone',
    'total_payment'
  ]
};
export const DELIVERY_TB = {
  status_buttons: [
    { name: '배송완료처리', url: '' },
    { name: '배송준비처리', url: '' },
    { name: '환불요청', url: '' }
  ],
  excel_buttons: [
    { name: '선택주문 엑셀다운로드', url: '' },
    { name: '전체주문 엑셀다운로드', url: '' }
  ],
  table_headers: [
    'payment_date',
    'shipping_start_date',
    'order_id',
    'order_detail_id',
    'seller_name',
    'product_name',
    'orderer_name',
    'orderer_phone',
    'total_payment'
  ]
};
export const DELIVERY_COMP_TB = {
  status_buttons: [
    { name: '구매확정보류&진행처리', url: '' },
    { name: '환불요청', url: '' }
  ],
  excel_buttons: [
    { name: '선택주문 엑셀다운로드', url: '' },
    { name: '전체주문 엑셀다운로드', url: '' }
  ],
  table_headers: [
    'payment_date',
    'shipping_complete_date',
    'order_id',
    'order_detail_id',
    'seller_name',
    'product_name',
    'option_info',
    'option_additional_price',
    'units',
    'orderer_name',
    'orderer_phone',
    'total_payment'
  ]
};
export const REFUND_REQ_TB = {
  status_buttons: [{ name: '반품진행처리', url: '' }],
  excel_buttons: [
    { name: '선택주문 엑셀다운로드', url: '' },
    { name: '전체주문 엑셀다운로드', url: '' }
  ],
  table_headers: [
    'payment_date',
    'shipping_start_date',
    'refund_request_date',
    'order_id',
    'order_detail_id',
    'seller_name',
    'product_name',
    'option_info',
    'option_additional_price',
    'units',
    'orderer_name',
    'orderer_phone',
    'refund_reason_id',
    'refund_amount'
  ]
};
export const REFUND_COMP_TB = {
  excel_buttons: [
    { name: '선택주문 엑셀다운로드', url: '' },
    { name: '전체주문 엑셀다운로드', url: '' }
  ],
  table_headers: [
    'payment_date',
    'refund_complete_date',
    'order_id',
    'order_detail_id',
    'seller_name',
    'product_name',
    'option_info',
    'option_additional_price',
    'units',
    'orderer_name',
    'orderer_phone',
    'refund_reason_id',
    'refund_amount'
  ]
};
export const ORDER_CANCEL_TB = {
  excel_buttons: [
    { name: '선택주문 엑셀다운로드', url: '' },
    { name: '전체주문 엑셀다운로드', url: '' }
  ],
  table_headers: [
    'payment_date',
    'complete_cancellation_date',
    'order_id',
    'order_detail_id',
    'seller_name',
    'product_name',
    'option_info',
    'option_additional_price',
    'units',
    'orderer_name',
    'orderer_phone',
    'cancel_reason_id',
    'refund_amount'
  ]
};
