import { useEffect, useRef } from "react";
import { ViewportCover } from "../../styles/style";

function ModalTemplate({children, coverExist, exitByOuterClick, closeModal, isModalOpened, modalOpenerRef}) {
  const modalRef = useRef();

  useEffect(() => {
    const outerOnClick = (event) => {
      if (!modalRef.current.contains(event.target)&& !modalOpenerRef.current.contains(event.target))
        closeModal();
    };

    if(exitByOuterClick){
      document.addEventListener('click', outerOnClick);
    }

    return () => {
      if(exitByOuterClick)
        document.removeEventListener('click', outerOnClick);
    };
  }, [isModalOpened, exitByOuterClick, closeModal, modalOpenerRef])

  return (coverExist ?
    <ViewportCover>
      <div ref={modalRef}>
        {children}
      </div>
    </ViewportCover>
    :
    <div ref={modalRef}>
      {children}
    </div>
    );
}

export default ModalTemplate