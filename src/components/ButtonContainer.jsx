import TitledContainer from './TitledContainer'
import { RowDirectionContainer, StyledButton } from '../styles/style'

function ButtonContainer() {
  return (
    <TitledContainer title='Button'>
      <RowDirectionContainer>
        <StyledButton $size='large'>Large Primary Button</StyledButton>
        <StyledButton $size='medium'>Medium</StyledButton>
        <StyledButton $size='small'>Small</StyledButton>
      </RowDirectionContainer>

      <RowDirectionContainer>
        <StyledButton $size='large' $isNegative={true}>Large Primary Button</StyledButton>
        <StyledButton $size='medium' $isNegative={true}>Medium</StyledButton>
        <StyledButton $isNegative={true}>Small</StyledButton>
      </RowDirectionContainer>
    </TitledContainer>
  )
}

export default ButtonContainer