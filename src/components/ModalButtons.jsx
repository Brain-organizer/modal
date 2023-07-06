import { RowDirectionContainer, StyledButton } from "../styles/style"
import TitledContainer from "./TitledContainer"

function ModalButtons() {
  return (
    <TitledContainer title='Modal'>
      <RowDirectionContainer>
        <StyledButton>open modal</StyledButton>
        <StyledButton $size='Large' $isNegative={true}>open modal</StyledButton>
      </RowDirectionContainer>
    </TitledContainer>
  )
}

export default ModalButtons