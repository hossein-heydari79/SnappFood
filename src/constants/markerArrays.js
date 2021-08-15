import orderInfo from './orderInfo';

export default [
  {
    position: [orderInfo.vendorLatitude, orderInfo.vendorLongtitude],
    type: 'vendor',
    size: 50,
    popup: 'موقعیت رستوران',
  },
  {
    position: [orderInfo.customerLatitude, orderInfo.customerLongtitude],
    type: 'user',
    size: 50,
    popup: 'موقعیت شما',
  },
  {
    position: [orderInfo.bikerLatitude, orderInfo.bikerLongtitude],
    type: 'express',
    size: 50,
    popup: 'پیک',
  },
];
