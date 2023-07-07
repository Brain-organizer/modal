import { useState } from "react";
import { ChoiceButton } from "../../styles/style";
import SelectorModal from "./SelectorModal"
import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "../../redux/modules/unCoverdModals";

function SelectBox({selectList=[], $hidden, id}) {
  const [selected, setSelected] = useState((selectList[0]||"List가 비어있습니다"));
  const dispatch = useDispatch();
  const openedModals = useSelector((state) => state.unCoverdModals)
  
  const choiceOnClick = (event) => {
    event.stopPropagation();
    dispatch(openModal(id));
  }

  const isModalOpen = () => openedModals.includes(id);
  return (
    <div>
      <ChoiceButton onClick={choiceOnClick}>
        <div>{selected}</div>
        <div>▼</div>
      </ChoiceButton>
      <SelectorModal {...{selectList, setSelected, isModalOpen, closeModal, $hidden}}/>
    </div>
  )
}

export default SelectBox