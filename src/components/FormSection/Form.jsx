import React, { useState } from "react";
import { RowDirectionContainer, StyledButton, StyledInput } from "../../styles/style";
import TitledContainer from "../TemplateComponents/TitledContainer";

function Form() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const nameOnChangeHandler = (event) =>{
    setName(event.target.value);
  }

  const priceOnChangeHandler = (event) => {
    const input = event.target.value;
    const nonNumberRemoved = input.replaceAll(/[^0-9]/g, '');

    setPrice(nonNumberRemoved);
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const alertMsg = (
      name||price ? 
      `{ name: ${name}, price: ${price||'0'} }` : '이름과 가격 모두 입력해주세요.'
    );
    alert(alertMsg);
  }

  return (
    <TitledContainer title='Input'>
      <form>
        <RowDirectionContainer $gap='30px'>
          <div>
            <label htmlFor='name'>이름 &nbsp;</label>
            <StyledInput id='name' type='text' onChange={nameOnChangeHandler} value={name}/>
          </div>
          <div>
            <label htmlFor='price'>가격 &nbsp;</label>
            <StyledInput id='price' type='text' onChange={priceOnChangeHandler} value={(+price).toLocaleString()}/>
          </div>
          <StyledButton onClick={onSubmitHandler}>저장</StyledButton>
        </RowDirectionContainer>
      </form>
      
    </TitledContainer>
  )
}

export default React.memo(Form)