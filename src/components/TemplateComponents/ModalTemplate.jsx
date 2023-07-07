import { useRef } from "react";
import { ViewportCover } from "../../styles/style";

function ModalTemplate({children, coverExist, exitByOuterClick, closeModal}) {
  const coverRef = useRef();

  const coverOnClick = (exitByOuterClick?
    (event) => {
      if(event.target !==coverRef.current)
        return;
      closeModal();
    }
    :
    () => {;}
  );
  const retComponent = (coverExist?
    <ViewportCover ref={coverRef} onClick={coverOnClick}>
      {children}
    </ViewportCover>

    :
    <>
      {children}
    </>
  );

  return retComponent;
}

export default ModalTemplate