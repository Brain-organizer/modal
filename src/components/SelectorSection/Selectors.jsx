import React from "react";
import { RowDirectionContainer } from "../../styles/style";
import TitledContainer from "../TemplateComponents/TitledContainer";
import SelectBox from "./SelectBox";

function Selectors() {
  const selectList = ['리액트', '자바', '스프링', '리액트네이티브'];

  return (
    <TitledContainer title='Select' $borderExist={true} $height='200px' $overflow='hidden'>
      <RowDirectionContainer>
        <SelectBox selectList={selectList} $hidden={false} id='1'/>
        <SelectBox selectList={selectList} $hidden={true} id='2'/>
      </RowDirectionContainer>
    </TitledContainer>
  )
}

export default React.memo(Selectors)