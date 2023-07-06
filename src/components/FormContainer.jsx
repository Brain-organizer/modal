import { useState } from "react";
import { RowDirectionContainer, StyledButton, StyledInput } from "../styles/style";
import TitledContainer from "./TitledContainer";

function FormContainer() {
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
      `{ name: ${name}, price: ${price} }` : '이름과 가격 모두 입력해주세요.'
    );
    alert(alertMsg);
  }

  return (
    <TitledContainer title='Input'>
      <form>
        <RowDirectionContainer $gap='30px'>
          <div>
            <label for='name'>이름 &nbsp;</label>
            <StyledInput id='name' type='text' onChange={nameOnChangeHandler} value={name}/>
          </div>
          <div>
            <label for='price'>가격 &nbsp;</label>
            <StyledInput id='price' type='text' onChange={priceOnChangeHandler} value={(+price).toLocaleString()}/>
          </div>
          <StyledButton onClick={onSubmitHandler}>저장</StyledButton>
        </RowDirectionContainer>
      </form>
      
    </TitledContainer>
  )
}

export default FormContainer