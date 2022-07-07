import React, { FunctionComponent } from "react";
import styled from "styled-components";

export interface IBulletPointList {
    heading?: string;
    pointList?: any;
}

const Head = styled.h4`
  color: #747f8d;
  font-size: 0.75rem;
  line-height: 1.13rem;
`;

const ListItem = styled.div`
  display: flex;
  font-size: 1.2rem;
  padding: 0.5rem 0;
`;

const ListNumber = styled.div`
  width: 1.2rem;
  line-height: 1.2rem;
  border-radius: 50%;
  text-align: center;
  font-size: 0.63rem;
  background: #d84e55;
  color: #fff;
  font-weight: bold;
  margin-right: 0.5rem;
`;

const ListMsg = styled.div`
  font-size: 0.75rem;
  color: #3e3e52;
`;

export const BulletPointList: FunctionComponent<IBulletPointList> = ({ heading, pointList }) => {
    return (
        <>
            {heading && <Head> {heading}</Head>}
            {pointList && pointList.dataPoint && pointList.dataPoint.map((item: any, key: number) => {
                return <ListItem key={key}>
                    <div>
                        <ListNumber>
                            {key + 1}
                        </ListNumber>
                    </div>
                    <ListMsg>
                        {item}
                    </ListMsg>
                </ListItem>;
            })}
        </>
    );
};

export default BulletPointList;