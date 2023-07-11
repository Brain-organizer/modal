import { useRef, useState } from "react";
import { ChoiceButton, SelectContainer, SelectItemBox } from "../../styles/style";
import ModalTemplate from "../TemplateComponents/ModalTemplate";

function SelectBox({selectList=[], $hidden, id}) {
  const buttonRef = useRef();
  
  const [selected, setSelected] = useState((selectList[0]||"List가 비어있습니다"));
  const [selectorOpen, setSelectorOpen] = useState(false);

  const openSelector = ()=>{
    setSelectorOpen(true);
  }
  const closeSelector = ()=>{
    setSelectorOpen(false);
  }

  return (
    <div>
      <ChoiceButton onClick={openSelector} ref={buttonRef}>
        <div>{selected}</div>
        <div>▼</div>
      </ChoiceButton>
      {
        selectorOpen
        &&
        <ModalTemplate exitByOuterClick={true} closeModal={closeSelector} isModalOpened={selectorOpen} modalOpenerRef={buttonRef}>
          <SelectContainer $position={$hidden ? 'relative' : 'absolute'} onClick={closeSelector}>
            {
              selectList.map((item, index) =>
                <SelectItemBox onClick={() => setSelected(item)} key={index}> {item} </SelectItemBox>)
            }
          </SelectContainer>
        </ModalTemplate>
      }
    </div>
  )
}

export default SelectBox