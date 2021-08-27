import React, { Component } from "react";
import styled from "styled-components";

import { IDayNameTileProps } from "../utils/interfaces";
import { weekName } from "../utils/date.helper";

const CalendarDays = styled.div`
  display: flex;
  justify-content: center;
`;
const CalendarDaysBlock = styled.div`
  font-family: Montserrat, sans-serif;
  font-weight: 700;
  height: 15%;
  border: 0;
  font-size: 12px;
  box-sizing: border-box;
  margin: 5px;
  text-align: center;
  width: 10%;
  user-select: none;
  color: black;
`;

export class Day extends Component<IDayNameTileProps> {
  private weekArray: string[] = [];
  constructor(props: IDayNameTileProps) {
    super(props);
    const { customLocal } = props;
    this.weekArray = (customLocal && customLocal.weekName) || weekName;
  }

  public render() {
    // To create inner div
    const allDays = this.weekArray.map((day: string, i: number) => (
      <CalendarDaysBlock key={i}>{day}</CalendarDaysBlock>
    ));
    // For the outer div
    return <CalendarDays>{allDays}</CalendarDays>;
  }
}

export default Day;
