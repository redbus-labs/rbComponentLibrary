import * as React from "react";
import styled from "styled-components";
import CheckBox from "../Checkbox";

const RowItem = styled.li<any>`
  color: ${ (props) => props.active ? "#d84e55" : props.rowColor };
  font-weight: ${ (props) => props.active ? "bold" : "normal" };
  display: flex;
  align-items: center;
  padding: 0.55em 0 0.55em 0.2em;
  margin: 0 1.25em;
  border-bottom: 1px solid #f0f1f2;
`;

const RowIconTag = styled.span<any>`
  color: ${ (props) => props.active ? "#d84e55" : "#3e3e52" };
  font-size: ${ (props) => props.rowFont };
`;
const RowImg = styled.img<any>`
  height: 1.5em;
  width: 1.5em;
  filter: ${ (props) => props.active ? "filter: invert(0.3) sepia(1) saturate(5) hue-rotate(315deg);" : "" };
`;
const RowText = styled.span<any>`
  margin-left: 1.1em;
  font-size: 0.9em;
`;
const wrapSpanStyle = {
    marginLeft: "auto",
};
export const FilterRows: React.FunctionComponent<any> =
    ({ rowData , onclickHandler , iconRow , rowColor ,
       checkedClass , unCheckedClass , rowFont , checkBoxWidth ,
       checkBoxHight , checkBoxBorder , checkBoxBack , persuasionData }) => {

    const renderRowWithIcon = (item: any , index: any) => {
        return <RowItem
            active={item.active}
            key={index}
            rowColor={rowColor}
            // tslint:disable-next-line: jsx-no-lambda
            onClick={() => onclickHandler(item)}
        >
            <RowIconTag
                active={item.active}
                rowFont={rowFont}
                className={`${iconRow} ${item.icon}`}
            />
            <RowText>{item.text}</RowText>
            <span style={wrapSpanStyle}>
                <CheckBox
                    customCheckBoxClass={true}
                    checkboxType="DEFAULT_CHECKBOX"
                    checkedClass={checkedClass}
                    uncheckClass={unCheckedClass}
                    checkboxState={item.active}
                    radius={2}
                    width={checkBoxWidth}
                    height={checkBoxHight}
                    border={checkBoxBorder}
                    background={checkBoxBack}
                />
            </span>
        </RowItem>;
    };
    const renderRowWithImage = (item: any , index: number) => {
        let imgSrc = item.image;
        if (item.dynamicImage && persuasionData) {
            for (const persuasionItem of Object.keys(persuasionData)) {
              // tslint:disable-next-line: triple-equals
              if (persuasionData[persuasionItem].id == item.value) {
                imgSrc = persuasionData[persuasionItem].icon;
              }
            }
        }
        return <RowItem
            active={item.active}
            key={index}
            rowColor={rowColor}
            // tslint:disable-next-line: jsx-no-lambda
            onClick={() => onclickHandler(item)}
        >
            <RowImg
                alt="filter-img"
                active={item.active}
                src={imgSrc}
                // tslint:disable-next-line: jsx-no-lambda
                onError={(el: any) => (el.target.style.opacity = 0)}
            />
            <RowText>{item.text}</RowText>
            <span style={wrapSpanStyle}>
                <CheckBox
                    customCheckBoxClass={true}
                    checkboxType="DEFAULT_CHECKBOX"
                    checkedClass={checkedClass}
                    uncheckClass={unCheckedClass}
                    checkboxState={item.active}
                    radius={2}
                    width={checkBoxWidth}
                    height={checkBoxHight}
                    border={checkBoxBorder}
                    background={checkBoxBack}
                />
            </span>
        </RowItem>;
    };
    const renderRowBasic = (item: any , index: number) => {
        return(
            <RowItem
                active={item.active}
                key={index}
                rowColor={rowColor}
                // tslint:disable-next-line: jsx-no-lambda
                onClick={() => onclickHandler(item)}
            >
                <CheckBox
                    customCheckBoxClass={true}
                    preferCheckBoxPropState={true}
                    checkboxType="DEFAULT_CHECKBOX"
                    checkedClass={checkedClass}
                    uncheckClass={unCheckedClass}
                    checkboxState={item.active}
                    radius={2}
                    width={checkBoxWidth}
                    height={checkBoxHight}
                    border={checkBoxBorder}
                    background={checkBoxBack}
                />
                <RowText>{item.text}</RowText>
            </RowItem>
        );
    };
    return (
        rowData && rowData.length
        && rowData.map((row: any , index: number) => {
            if (row.image || row.dynamicImage) {
                return renderRowWithImage(row, index);
            } else if (row.icon) {
                return renderRowWithIcon(row, index);
            } else {
                return renderRowBasic(row, index);
            }
        })
    );
};
