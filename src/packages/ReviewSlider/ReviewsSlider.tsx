import * as React from "react";
import styled from "styled-components";

export interface IProps {
    reviewsObj?: any;
    clickAction?: (e?: any) => void;
}

const ReviewsSliderWrap = styled.div<IProps>`
  .card_wrapper {
    padding: 1.5rem 0 1rem 1rem;
    background-color: #fff;
    color: #3e3e52;

    .card_header {
      font-size: 1rem;
      font-weight: bold;
      color: #3e3e52;
      text-transform: uppercase;
    }

    .sub_header {
      font-size: 0.75rem;
      color: var(--clr-gray-5);
      margin-top: 0.7rem;
    }

    .details_wrapper {
      display: flex;
      flex-direction: row;
      margin-top: 1.3rem;
      overflow: scroll hidden;
      padding: 2px;

      .reviewCard {
        width: 18.5rem;
        padding: 1rem;
        border-radius: 0.25rem;
        border: solid 0.06rem #97b4cb;
        background-color: #fff;
        margin-right: 1rem;

        hr.divider {
          height: 0.06rem;
          margin: 1.19rem -0.7rem 0.75rem;
          border: solid 0 #e8e8e8;
          border-top: 1px solid #e8e8e8;
        }

        .review_msg {
          font-size: 0.75rem;
          min-height: 1.7rem;
        }

        .bottom_wrapper {
          display: flex;
          flex-direction: row;
          align-items: center;

          .cust_img_wrap {
            margin-right: 0.7rem;
          }

          .cust_img {
            margin-right: 0.7rem;
            height: 2.94rem;
            width: 2.94rem;
          }

          .text_wrap {
            display: flex;
            flex-direction: column;

            .title {
              font-size: 0.88rem;
              font-weight: bold;
            }

            .subtitle {
              font-size: 0.75rem;
              margin-top: 0.3rem;
            }
          }
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

const overFlowtext = (stringText: any) => {
  if (stringText.length > 80) {
    stringText = stringText.substring(0, 80) + "...";
  }
  return stringText;
};

export function ReviewsSlider(props: IProps) {

    const reviewsObject = props.reviewsObj;
    const reviewsData = reviewsObject.data[0];

    const cardElems = reviewsData && reviewsData.items && reviewsData.items.length > 0 && reviewsData.items.map((item: any, key: any) => (
        <div key={key} className="review_wrapper">
        <div className="reviewCard">
          <div className="review_msg">{'" ' + overFlowtext(item.review) + ' "'}</div>
            <hr className="divider" />
            <div className="bottom_wrapper">
              <div className="cust_img_wrap"><img className="cust_img" src={item.image} alt="cust"/></div>
              <div className="text_wrap">
                <div className="title">{item.custName}</div>
                <div className="subtitle">{item.custSince}</div>
              </div>
            </div>
        </div>
      </div>
     ));

    const elements = <div className="reviews_main_wrapper card_wrapper">
            <div className="card_header">{reviewsData.header}</div>
            <div className="sub_header">{reviewsData.subHeader}</div>
            <div className="details_wrapper info_wrapper">
              {cardElems}
            </div>
        </div>;

    return (
        <React.Fragment>
            <ReviewsSliderWrap {...props}>
                {elements}
            </ReviewsSliderWrap>
        </React.Fragment>
    );
}
