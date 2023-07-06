import { styled } from "styled-components";
import { largeButtonStyle, mediumButtonStyle, normalNegativeStyle, normalPrimaryStyle, reverseNegativeStyle, reversePrimaryStyle, smallButtonStyle } from "./templateCss";

export const StyledTitledContainer = styled.div`
  display:flex;
  flex-direction: column;
  border: 3px ${({$borderExist}) => $borderExist? 'solid' : 'none'} rgb(221, 221, 221);
  height: ${({$height}) => $height||'auto'};
`
export const TitleHeading = styled.h1`
  margin: 21px 0px;
`
export const ContentsContainer = styled.div`
  display:flex;
  flex-direction: column;
  gap:10px;
`
export const RowDirectionContainer = styled.div`
  display:flex;
  gap: ${({$gap}) => $gap||'10px'};
`


export const StyledButton = styled.button`
  border-radius: 8px;
  cursor: pointer;

  ${({$isNegative, $size}) => $isNegative? 
    (($size==='large'||$size==='Large') ? reverseNegativeStyle : normalNegativeStyle) 
    : 
    (($size==='large'||$size==='Large') ? reversePrimaryStyle : normalPrimaryStyle)
  }

  ${({$size})=>{
    switch($size){
      case 'large': case 'Large':
        return largeButtonStyle;
      case 'Medium': case 'medium':
        return mediumButtonStyle;
      case 'Small': case 'small': default:
        return smallButtonStyle;
    }}
  }
`


export const StyledInput = styled.input`
  height: 40px;
  width: 200px;
  border: 1px solid rgb(51, 51, 51);
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;
`


export const ChoiceButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 28px;
  border: 1px solid rgb(221, 221, 221);
  height: 40px;
  width: 300px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
`