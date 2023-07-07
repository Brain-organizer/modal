import { Card, RowDirectionContainer, StyledButton } from "../../styles/style"
import ModalTemplate from "../TemplateComponents/ModalTemplate"

function CardModal1({modalOpen, closeModal}) {
  return ( 
    modalOpen?

    <ModalTemplate coverExist={true} exitByOuterClick={false} colseModal={closeModal}>
      <Card $width='500px' $height='300px'>
        <div>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.</div>
        <RowDirectionContainer $gap='5px' $bottom='12px' $right='12px'>
          <StyledButton $isNegative={true} onClick={closeModal}>닫기</StyledButton>
          <StyledButton>확인</StyledButton>
        </RowDirectionContainer>
      </Card>
    </ModalTemplate>
    
    :
    <></>
  )
}

export default CardModal1