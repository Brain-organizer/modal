import { useRef } from "react";
import { RelativeContainer, ViewportCover } from "../../styles/style";
import { useDispatch } from "react-redux";

function ModalTemplate({children, coverExist, exitByOuterClick, closeModal, ...props}) {
  const coverRef = useRef();
  const dispatch = useDispatch();

  if(coverExist){
    const coverOnClick = (exitByOuterClick?
      (event) => {
        if(event.target !==coverRef.current)
          return;
        closeModal();
      }
      :
      () => {;}
    );
    
    return(
      <ViewportCover ref={coverRef} onClick={coverOnClick}>
        {children}
      </ViewportCover>
    );
  }

  else{
    return (
    <div>
      {children}
    </div>);
  }
}

export default ModalTemplate