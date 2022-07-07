import * as React from "react";
import styled from "styled-components";
import {WebpImage} from '@redbus/webp-image';

export interface IProps {
    promotionObj?: any;
    clickAction: (e?: any) => void;
    header?: string;
    subHeader?: string;
    dummyImageUrl?: any;
}

const PromotionsCardWrap = styled.div<IProps>`
  .card_wrapper {
    padding: 1.5rem 0 1rem 1rem;
    background-color: #fff;
    color: #3e3e52;

    .card_header {
      font-size: 1rem;
      font-weight: bold;
      color: #3e3e52;
      margin: 0 10.63rem 0.75rem 0;
      text-transform: uppercase;
    }

    .sub_header {
      margin: 0.25rem 3.44rem 0 0;
      font-size: 0.75rem;
      color: #7e7e8c;
    }

    .details_wrapper {
      display: flex;
      flex-direction: row;
      margin-top: 1.5rem;
      overflow: scroll hidden;
      padding: 2px;

      .imgCard {
        width: 17rem;
        height: 9.75rem;
        margin-right: 1rem;

        .imgItem {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0.5rem;
          border: 1px solid #ddd;
        }
      }
    }

    .info_wrapper {
      -ms-overflow-style: none; /* for Internet Explorer, Edge */
      scrollbar-width: none; /* for Firefox */
      overflow-y: scroll;
    }

    .info_wrapper::-webkit-scrollbar {
      display: none; /* for Chrome, Safari, and Opera */
    }
  }
`;

/* tslint:disable max-line-length jsx-no-multiline-js*/

const clickHandler = (clickAction: any, item: any) => {
  return (event: React.MouseEvent) => {
    clickAction(item);
    // event.preventDefault();
  };
};
export function PromotionsCard(props: IProps) {

    const promotionObject = props.promotionObj;
    const promotionData = promotionObject.data;

    const cardElems = promotionData && promotionData.length > 0 && promotionData.map((item: any, key: any) => (
        <div key={key} className="image_wrapper" data-card={item.title}  onClick={clickHandler(props.clickAction, item)}>
        <div className="imgCard">
          <WebpImage className="imgItem" webpSrc={item.webpImageUrl} src={item.imageUrl} alt="promo" loading="lazy"/>
        </div>
      </div>
     ));

    const elements = <div className="promotion_main_wrapper card_wrapper">
            {props.header && <div className="card_header">{props.header}</div>}
            {props.subHeader && <div className="sub_header">{props.subHeader}</div>}
            <div className="details_wrapper info_wrapper">
              {cardElems}
            </div>
        </div>;

    return (
        <React.Fragment>
            <PromotionsCardWrap {...props}>
                {elements}
            </PromotionsCardWrap>
        </React.Fragment>
    );
}