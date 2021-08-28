import * as React from "react";
import styled from "styled-components";
import { FilterRows } from "./filterRows";

export interface IFilterList {
    popularText?: string;
    otherText?: string;
    font?: string;
    rowColor?: string;
    color?: string;
    popularData?: any;
    othersData?: any;
    iconRow?: string;
    onclickHandler?: (data: any) => void;
    checkedClass?: string;
    unCheckedClass?: string;
    rowFont?: string;
    checkBoxWidth?: number;
    checkBoxHight?: number;
    checkBoxBorder?: string;
    checkBoxBack?: string;
    persuasionData?: any;
}

const FilterWrap = styled.ul<any>`
  padding: 0 0 0.5em 0;
  background: #fff;
`;

const FilterTag = styled.div<any>`
  color: ${ (props) => props.color };
  font-size: ${ (props) => props.font };
  font-weight: 700;
  margin: 1em 1.5em 0.7em 1.7em;
`;

export const FilterList: React.FunctionComponent<IFilterList> =
    ({ popularText , otherText , popularData , othersData , font , color , rowColor ,
       onclickHandler , iconRow , checkedClass , unCheckedClass , persuasionData ,
       rowFont , checkBoxWidth , checkBoxHight , checkBoxBorder , checkBoxBack }) => {
    return (
        <FilterWrap>
        { popularData && popularData.length ? (
          <>
            <FilterTag font={font} color={color}>{popularText}</FilterTag>
            <FilterRows
                rowColor={rowColor}
                persuasionData={persuasionData}
                onclickHandler={onclickHandler}
                iconRow={iconRow}
                unCheckedClass={unCheckedClass}
                checkedClass={checkedClass}
                rowFont={rowFont}
                checkBoxWidth={checkBoxWidth}
                checkBoxHight={checkBoxHight}
                checkBoxBorder={checkBoxBorder}
                checkBoxBack={checkBoxBack}
                rowData={popularData}
            />
            <FilterTag font={font} color={color}>{otherText}</FilterTag>
          </>
        )  : null }
        <FilterRows
            rowColor={rowColor}
            persuasionData={persuasionData}
            onclickHandler={onclickHandler}
            iconRow={iconRow}
            unCheckedClass={unCheckedClass}
            checkedClass={checkedClass}
            rowFont={rowFont}
            checkBoxWidth={checkBoxWidth}
            checkBoxHight={checkBoxHight}
            checkBoxBorder={checkBoxBorder}
            checkBoxBack={checkBoxBack}
            rowData={othersData}
        />
      </FilterWrap>
    );
};
FilterList.defaultProps = {
    popularText : "Popular",
    otherText : "Others",
    // tslint:disable-next-line: max-line-length
    othersData : [{text: "Others1", value: [1, 2, 3], keyOnPayload: "bpList", active: false}, {text: "Karol Bagh", value: [7, 8, 9], keyOnPayload: "bpList", active: false}, {text: "Connaught Place", value: [12, 13, 14], keyOnPayload: "bpList", active: true}],
    color : "#3e3e52",
    rowColor : "#3e3e52",
    font : "0.9em",
    persuasionData : {},
    checkedClass : "icon icon-checkbox_filled",
    unCheckedClass : "icon icon-checkbox_empty",
    iconRow : "icon",
    rowFont : "0.9em",
    checkBoxWidth : 19,
    checkBoxHight : 19,
    checkBoxBorder : "#3e3e52",
    checkBoxBack : "#f7f4f4",
    // tslint:disable-next-line: no-console
    onclickHandler : (data) => { console.log(data); },
};
