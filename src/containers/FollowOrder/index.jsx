import React, { useState } from 'react';

import MapComponent from '../../components/Map';
import BikerInformation from '../../components/BikerInformation';
import OrderSlider from '../../components/OrderSlider';

import orderInfo from '../../constants/orderInfo';
import markerArrays from '../../constants/markerArrays';
import cardsInfo from '../../constants/cardsInfo';

import './styles.scss';

export function FollowOrder() {
  // question: implement cards update on changing states

  const onNextState = () => {
    cardsInfo[Object.keys(cardsInfo)[orderStatus]].isActive = false;
    setOrderStatus((orderStatus + 1) % 4);
  };

  const onPrevState = () => {
    cardsInfo[Object.keys(cardsInfo)[orderStatus]].isActive = false;
    setOrderStatus((orderStatus + 3) % 4);
  };

  const [orderStatus, setOrderStatus] = useState(0);
  return (
    <>
      <div className="stateHandler">
        <button data-testid="next-state" onClick={onNextState}>
          وضعیت بعد
        </button>
        <button data-testid="prev-state" onClick={onPrevState}>
          وضعیت قبل
        </button>
      </div>
      <BikerInformation orderInfo={orderInfo} />
      <div className={'container'}>
        <MapComponent
          zoom={14}
          padding={[
            [50, 200],
            [50, 50],
          ]}
          markerArrays={markerArrays}
          mapPosition={[orderInfo.vendorLatitude, orderInfo.vendorLongtitude]}
        />
        <OrderSlider orderStatus={orderStatus} />
      </div>
    </>
  );
}

export default FollowOrder;
