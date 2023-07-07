import { css } from "styled-components";

export const normalPrimaryStyle = css`
  background-color: rgb(85, 239, 196);
  &&:active{
    background-color: rgb(60, 170, 139);
  }
  border:none;
`

export const reversePrimaryStyle = css`
  background-color: white;
  &&:active{
    background-color: #878787;
  }
  border: 3px solid rgb(85, 239, 196);
`

export const normalNegativeStyle = css`
  background-color: rgb(250, 177, 160);
  &&:active{
    background-color: rgb(174, 124, 111);
  }
  color: rgb(214, 48, 49);
  border:none;
`

export const reverseNegativeStyle = css`
  background-color: white;
  &&:active{
    background-color: #878787;
  }
  color: rgb(214, 48, 49);
  border: 3px solid rgb(250, 177, 160);
`

export const largeButtonStyle = css`
  height: 50px;
  width: 200px;
  font-weight: bold;
`

export const mediumButtonStyle = css`
  height: 45px;
  width: 130px;
`

export const smallButtonStyle = css`
  height: 40px;
  width: 100px;
`