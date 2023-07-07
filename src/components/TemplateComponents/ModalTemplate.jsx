import { useRef } from "react";
import { ViewportCover } from "../../styles/style";

function ModalTemplate({children, coverExist, exitByOuterClick, closeModal}) {
  const coverRef = useRef();

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