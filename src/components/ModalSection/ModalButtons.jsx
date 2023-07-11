import React, { useCallback, useRef, useState } from "react"
import { RowDirectionContainer, StyledButton } from "../../styles/style"
import TitledContainer from "../TemplateComponents/TitledContainer"
import CardModal1 from "./CardModal1";
import CardModal2 from "./CardModal2";

function ModalButtons() {
  const buttonRef1 = useRef();
  const buttonRef2 = useRef();

  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false); 

  const openModal1 = useCallback(() => setModal1Open(true),[]);
  const openModal2 = useCallback(() => setModal2Open(true),[]);

  const closeModal1 = useCallback(() => setModal1Open(false),[]);
  const closeModal2 = useCallback(() => setModal2Open(false),[]);


  return (
    <TitledContainer title='Modal'>
      <CardModal1 modalOpen={modal1Open} closeModal={closeModal1} modalOpenerRef={buttonRef1}/>
      <CardModal2 modalOpen={modal2Open} closeModal={closeModal2} modalOpenerRef={buttonRef2}/>
      <RowDirectionContainer>
        <StyledButton onClick={openModal1} ref={buttonRef1}>open modal</StyledButton>
        <StyledButton $size='Large' $isNegative={true} onClick={openModal2} ref={buttonRef2}>open modal</StyledButton>
      </RowDirectionContainer>
    </TitledContainer>
  )
}

export default React.memo(ModalButtons)