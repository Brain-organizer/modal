import { ChoiceButton, RowDirectionContainer } from "../../styles/style";
import TitledContainer from "../TemplateComponents/TitledContainer";

function Selectors() {
  return (
    <TitledContainer title='Select' $borderExist={true} $height='200px'>
      <RowDirectionContainer>
        <ChoiceButton>
          <div>자바</div>
          <div>▼</div>
        </ChoiceButton>
        <ChoiceButton>
          <div>자바</div>
          <div>▼</div>
        </ChoiceButton>
      </RowDirectionContainer>
    </TitledContainer>
  )
}

export default Selectors