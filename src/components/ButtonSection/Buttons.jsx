import React from 'react'
import TitledContainer from '../TemplateComponents/TitledContainer'
import { RowDirectionContainer } from '../../styles/style'
import ImageInsertableButton from './ImageInsertableButton'

function Buttons() {
  return (
    <TitledContainer title='Button'>
      <RowDirectionContainer>
        <ImageInsertableButton $size='large' text='Large Primary Button' onClick={()=>alert('버튼을 만들어보세요')}>
          <img src='https://cdn-icons-png.flaticon.com/128/1827/1827370.png' alt='알림종 그림' height='20px' width='20px'/>
        </ImageInsertableButton>
        <ImageInsertableButton $size='medium' text='Medium'></ImageInsertableButton>
        <ImageInsertableButton $size='small' text='Small'></ImageInsertableButton>
      </RowDirectionContainer>

      <RowDirectionContainer>
        <ImageInsertableButton $size='large' $isNegative={true} text='Large Primary Button' onClick={()=>prompt('어렵나요?')}>
          <img src='https://cdn-icons-png.flaticon.com/128/271/271228.png' alt='우측 꺾쇠 기호' height='13px' width='17px'/>
        </ImageInsertableButton>
        <ImageInsertableButton $size='medium' $isNegative={true} text='Medium'></ImageInsertableButton>
        <ImageInsertableButton $isNegative={true} text='Small'></ImageInsertableButton>
      </RowDirectionContainer>
    </TitledContainer>
  )
}

export default React.memo(Buttons)