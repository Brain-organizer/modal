import TitledContainer from './TitledContainer'
import { RowDirectionContainer } from '../styles/style'
import ImageInsertableButton from './ImageInsertableButton'

function ButtonContainer() {
  return (
    <TitledContainer title='Button'>
      <RowDirectionContainer>
        <ImageInsertableButton $size='large' text='Large Primary Button' onClick={()=>alert('버튼을 만들어보세요')}>
        </ImageInsertableButton>
        <ImageInsertableButton $size='medium' text='Medium'></ImageInsertableButton>
        <ImageInsertableButton $size='small' text='Small'></ImageInsertableButton>
      </RowDirectionContainer>

      <RowDirectionContainer>
        <ImageInsertableButton $size='large' $isNegative={true} text='Large Primary Button' onClick={()=>prompt('어렵나요?')}>

        </ImageInsertableButton>
        <ImageInsertableButton $size='medium' $isNegative={true} text='Medium'></ImageInsertableButton>
        <ImageInsertableButton $isNegative={true} text='Small'></ImageInsertableButton>
      </RowDirectionContainer>
    </TitledContainer>
  )
}

export default ButtonContainer