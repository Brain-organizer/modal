import { RowDirectionContainer, StyledButton, StyledInput } from "../styles/style";
import TitledContainer from "./TitledContainer";

function FormContainer() {
  return (
    <TitledContainer title='Input'>
      <form>
        <RowDirectionContainer $gap='30px'>
          <div>
            <label for='name'>이름 &nbsp;</label>
            <StyledInput id='name'/>
          </div>
          <div>
            <label for='price'>가격 &nbsp;</label>
            <StyledInput id='price'/>
          </div>
          <StyledButton>저장</StyledButton>
        </RowDirectionContainer>
      </form>
      
    </TitledContainer>
  )
}

export default FormContainer