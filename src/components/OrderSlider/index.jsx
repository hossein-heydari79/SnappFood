import React, {useEffect} from 'react';
import {isIOS} from 'react-device-detect';
import './styles.scss';

import cardsInfo from '../../constants/cardsInfo';

function OrderCardRenderer({order}) {
  return (
    <div className={'cardContainer'}>
      <span className={'icon'}>
        {order.enableImg ? (
          <img
            src={order.isActive ? order.enableImg : order.disableImg}
            className={'cardImg'}
            alt="loading"
          />
        ) : (
          <order.icon isActive={order.isActive} />
        )}
      </span>
      <span className={'text'}>
        <div className={'title'}>
          <span>{order.title}</span>
        </div>
        <div className={'description'}>
          <span>{order.description}</span>
        </div>
      </span>
    </div>
  );
}

export default function OrderSlider({orderStatus}) {
  useEffect(() => {
    let elmnt = document.getElementById('card_true');
    if (elmnt) elmnt.scrollIntoView({behavior: 'smooth', inline: 'center'});

    // question: implement cards update on changing states
  }, [orderStatus]);


  return (
    <div
      id="order_slider"
      className={'orderSlider'}
      onTouchStart={() => {
        if (isIOS) {
          document.ontouchmove = event => {
            event.stopPropagation();
          };
        }
      }}
      onTouchEnd={() => {
        if (isIOS) {
          document.ontouchmove = event => {
            event.preventDefault();
          };
        }
      }}
    >
        { 
          Object.keys(cardsInfo).map(element => {
            if(cardsInfo[element] === cardsInfo[Object.keys(cardsInfo)[orderStatus]]) {
              cardsInfo[element].isActive = true
            }
            return(
              <div
                className={'card'}
                id={cardsInfo[element].isActive ? 'card_true' : ''}
              >
                <OrderCardRenderer order={cardsInfo[element]} />
              </div>
            )
             
          })
        }
    </div>
  );
}
