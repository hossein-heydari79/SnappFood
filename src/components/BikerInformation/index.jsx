import React from 'react';

import unknownAvatar from '../../assets/images/follow-order/avatar.png';
import callButton from '../../assets/images/follow-order/call-button.svg';

import './styles.scss';

export default function BikerInformation({ orderInfo }) {
  return (
    <div className={'bikerContainer'}>
      <div className={'biker'}>
        <div className={'bikerInfo'}>
          <div className={'bikerImg'}>
            <img alt="unknown" src={unknownAvatar} />
          </div>
          <span>{orderInfo.bikerName}</span>
        </div>
        <div className={'bikerImg'} onClick={console.log('call biker')}>
          <a href={'tel:' + orderInfo.bikerCellphone}>
            <img src={callButton} alt="تماس با پیک" />
          </a>
        </div>
      </div>
    </div>
  );
}
