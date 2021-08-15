import orderInfo from './orderInfo';

const accept =
  'https://snappfood.ir/bundles/bodofoodfrontend/images/landing/followorder/accept.gif';
const biker =
  'https://snappfood.ir/bundles/bodofoodfrontend/images/landing/followorder/biker_on_way.gif';

let vendorType = orderInfo.vendorType;
const title = orderInfo.vendorTypeTitle;
const type = orderInfo.vendorType;
const chef =
  'https://snappfood.ir/bundles/bodofoodfrontend/images/landing/followorder/' +
  vendorType.toLowerCase() +
  '_prepare.gif';
const delivered =
  'https://snappfood.ir/bundles/bodofoodfrontend/images/landing/followorder/' +
  vendorType.toLowerCase() +
  '_done.gif';
const disabledBase =
  'https://snappfood.ir/bundles/bodofoodfrontend/images/followorder/' +
  vendorType +
  '/' +
  vendorType;
const disabledAccept = disabledBase + '_1.jpg';
const disabledChef = disabledBase + '_2.jpg';
const disabledBiker = disabledBase + '_3.jpg';
const disabledDelivered = disabledBase + '_4.jpg';

export default {
  pending: {
    title: 'ثبت موفق',
    description: 'سفارش شما با موفقیت ثبت شد. منتظر مراحل بعدی باشید.',
    enableImg: accept,
    disableImg: disabledAccept,
    isActive: false,
  },
  sending: {
    title: 'آماده سازی',
    description: `سفارش شما در حال آماده سازی توسط ${title} می باشد.`,
    enableImg: chef,
    disableImg: disabledChef,
    isActive: false,
  },
  delivering: {
    title: 'ارسال سفارش',
    description:
      'سفارش شما توسط پیک اسنپ فود ارسال شد. محل دقیق پیک را روی نقشه دنبال کنید.',
    enableImg: biker,
    disableImg: disabledBiker,
    isActive: false,
  },
  delivered: {
    title: type === 'RESTAURANT' ? 'نوش جان' : 'از خرید خود لذت ببرید',
    description: 'از اینکه با اسنپ فود همراه هستید صمیمانه سپاس گزاریم.',
    enableImg: delivered,
    disableImg: disabledDelivered,
    isActive: false,
  },
};
