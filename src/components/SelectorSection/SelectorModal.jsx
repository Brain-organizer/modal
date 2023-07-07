import { SelectContainer, SelectItemBox } from "../../styles/style";
import ModalTemplate from "../TemplateComponents/ModalTemplate"

function SelectorModal({selectList, setSelected, isModalOpen, $hidden, ...props}) {

  return (
    isModalOpen()?

    <ModalTemplate exitByOuterClick={true} {...props}> 
      <SelectContainer $position={$hidden? 'relative' : 'absolute'}>
      {
        selectList.map((item,index) => 
        <SelectItemBox onClick={()=>setSelected(item)} key={index}> 
          {item} 
        </SelectItemBox>
        )
      }
      </SelectContainer>
    </ModalTemplate>
      
    :
    <></>
  )
}

export default SelectorModal