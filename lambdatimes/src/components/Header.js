import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const HeaderWrapper = styled.div
  `
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 45px;
  padding-bottom: 15px;
  @media (min-width: 1280px) {
    width: 1280px;
  }
  h1 {
    flex: 8;
    font-family: Didot, serif;
    font-size: 60px;
    font-weight: bold;
    text-align: center;
    color: #000000;
  }
`;

const SpanDate = styled.span
  `
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-left: 25px;
  flex: 1;
`;

const SpanTemp = styled.span
  `
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: right;
  margin-right: 25px;
  flex: 1;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <SpanDate>SMARCH 32, 2018</SpanDate>
      <h1>Lambda Times</h1>
      <SpanTemp>98°</SpanTemp>
    </HeaderWrapper>
  );
};


export default Header