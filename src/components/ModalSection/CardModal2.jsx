import { Card, CircleButton, RowDirectionContainer } from "../../styles/style"
import ModalTemplate from "../TemplateComponents/ModalTemplate";

function CardModal2({ modalOpen, closeModal, modalOpenerRef }) {
  return (
    modalOpen?

    <ModalTemplate coverExist={true} exitByOuterClick={true} closeModal={closeModal} modalOpenerRef={modalOpenerRef} isModalOpened={modalOpen}>
      <Card $width='300px' $height='200px'>
        <div>닫기 버튼 1개가 있고, <br /> 외부 영역을 누르면 모달이 닫혀요.</div>
        <RowDirectionContainer $position='absolute' $top='12px' $right='12px'>
          <CircleButton onClick={closeModal}>X</CircleButton>
        </RowDirectionContainer>
      </Card>
    </ModalTemplate>

    :
    <></>
  )
}

export default CardModal2