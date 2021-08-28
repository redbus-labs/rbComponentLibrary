import styled from "styled-components";

export const IAddonsProps = styled.div`
  .additional_services {
    color: #3e3e52;
    font-size: 14px;
    font-weight: 700;
    padding-top: 1em;
    margin-bottom: 0.8em;
  }

  .addons_prices {
    color: #3e3e52;
    font-size: 11px;
    margin-bottom: 1em;
    word-wrap: break-word;
    white-space: initial;
  }

  .view_details {
    font-size: 12px;
    color: #1034d9;
    cursor: pointer;
    font-weight: 700;
    padding-left: 16px;
  }

  .items_title {
    color: #3e3e52;
    font-size: 12px;
    font-weight: 700;
    word-wrap: break-word;
    white-space: initial;
    padding-right: 96px;
  }

  .items_subtitle {
    color: #747f8d;
    font-size: 10px;
    font-weight: 400;
    word-wrap: break-word;
    white-space: initial;
  }

  .plus_addons {
    background-color: #f8f4f4;
    border: 1px solid #3e3e52;
    font-weight: 500;
    font-size: 28px;
    border-radius: 0.1em;
    color: #3e3e52;
    outline: none;
    width: 40px;
  }

  .minus_addons {
    background-color: #f8f4f4;
    border: 1px solid #3e3e52;
    font-weight: 500;
    font-size: 28px;
    border-radius: 0.1em;
    color: #3e3e52;
    outline: none;
    width: 40px;
    padding-top: 0;
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    appearance: none;
  }

  .cross {
    float: right;
    clear: both;
    margin-right: 1em;
    font-size: 1em;
    line-height: 0;
    padding: 10px;
  }

  .cross_img {
    width: 1em;
    height: 1em;
  }

  .overlay_details_title {
    padding-top: 1em;
    color: #3e3e52;
    font-weight: 700;
    font-size: 14px;
    position: fixed;
    background-color: #fff;
    width: 100%;
    z-index: 10;
    padding-left: 0.3em;
    display: flex;
  }

  .overlay_title {
    flex-grow: 0.9;
  }

  .overlay_details_subtitle {
    margin-top: 0.5em;
    color: #3e3e52;
    font-weight: 400;
    font-size: 1.25em;
    margin-left: 0.25em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 75vw;
    text-align: start;
  }

  .addons_price_display {
    font-weight: bold;
    font-size: 1em;
    margin-top: 0.5em;
  }

  .subtitle {
    margin-top: 2em;
    text-align: left;
    margin-left: 2.5em;
    font-size: 12px;
    color: #465986;
    margin-bottom: 2em;
  }

  .addons_title {
    margin: 0.5em 0.3em;
    color: #3e3e52;
    font-weight: bold;
    width: 100%;
    display: block;
    font-size: 1em;
  }

  .addons_time {
    display: inline-block;
    width: 52vw;
    text-align: left;
  }

  .addons_deduction {
    display: inline-block;
    width: 30%;
    text-align: center;
  }

  .addons_canceltable {
    padding: 0.1px 10px;
    background: white;
    border-radius: 4px;
    width: 100%;
    margin: 0.1 auto;
    border: 1px solid #dddd;
    border-collapse: collapse;
  }

  .addon_time {
    padding: 0.7em 1em;
    width: 50vw;
  }

  .addons_views_details {
    margin-left: 0.5em;
    font-size: 1em;
    color: #465986;
    text-align: start;
    line-height: 1.8em;
    margin-top: 0.5em;
  }

  .addons_views_details li {
    display: list-item;
    margin-left: 1em;
  }

  .display_price {
    color: #3e3d54;
    font-weight: 700;
    font-size: 14px;
    flex-grow: 1;
  }

  .itemimage_url {
    height: 90px;
    width: 100%;
    min-width: 280px;
  }

  .min_unit {
    color: #ff9b00;
    font-size: 12px;
    display: flex;
    padding-bottom: 0.5em;
    justify-content: flex-end;
    padding-right: 1em;
  }

  .count_plus {
    font-size: 16px;
    border: none;
    text-align: center;
    color: #3e3e52;
    font-weight: bold;
    padding: 0.4em;
    background-color: #fff;
  }

  .subtitle_view_details {
    display: flex;
    margin-top: 0.5em;
    justify-content: space-between;
  }

  .hr_style {
    border-top: 1px solid #e5ebf8;
  }

  hr {
    background: #f1f1f1;
    border-color: transparent;
    height: 1px;
    border-width: 1px 0 0;
    margin: 10px 0;
  }

  .addons_price {
    padding: 0.1px 9px 9px;
    height: 60px;
  }

  .input_div {
    float: right;
    display: flex;
  }

  .addons_overlay_description {
    font-size: 1em;
    color: #465986;
    list-style: none;
    text-align: start;
    margin-left: 1em;
    line-height: 1.8em;
    margin-top: 0.5em;
  }

  .addon_refund {
    text-align: center;
    line-height: 1.5em;
    background-color: rgb(248, 244, 244);
    font-weight: bold;
  }

  .booking_btn {
    border-radius: 4px;
    background-color: #e3545a;
    box-shadow: 0 2px 4px 0 rgba(163, 163, 163, 0.2);
    border: none;
    color: #fff;
    padding: 1em 4em;
    font-size: 0.95em;
    text-decoration: none;
    width: 85vw;
    margin: 1em;
  }

  .addons_cancellation_policy {
    margin: 1em;
  }

  .display_addons_block {
    display: flex;
  }

  .view_details_addons {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: start;
    z-index: 10000;
    background-color: #fff;
    transition: height 0.2s ease-in;
    box-shadow: 0 -4px 4px 0 hsla(0, 0%, 63.9%, 0.2);
    padding-right: 1em;
    padding-bottom: 1em;
    height: 70% !important;
    overflow-y: scroll;
    overflow-x: hidden;
    white-space: initial;
  }

  .price_unitType {
    color: #d84e55;
    padding: 0.5em;
    font-weight: 200;
  }
`;
