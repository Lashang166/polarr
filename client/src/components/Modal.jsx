import React,{ useState, useEffect, useRef, useCallback } from 'react'

function Modal({ showModal, setShowModal, children}) {
    
    const modalRef = useRef();

    const closeModal = e => {
      if (modalRef.current === e.target) {
        setShowModal(false);
      }
    };
  
    const keyPress = useCallback(
      e => {
        if (e.key === 'Escape' && showModal) {
          setShowModal(false);
          console.log('I pressed');
        }
      },
      [setShowModal, showModal]
    );
  
    useEffect(
      () => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
      },
      [keyPress]
    );
  
    return (
        <div ref={modalRef} onClick={closeModal} className={`${showModal ? "block" : "hidden"} fixed min-w-full h-full overflow-auto bg-black bg-opacity-75 top-0 left-0`}>
            <div className="bg-white w-2/5 mx-auto my-48 p-3 rounded-sm transition-all ease-in duration-300">
                <div className="flex w-full justify-end text-xl font-bold">
                    <button onClick={() => setShowModal(prev => !prev)} class="cursor-pointer">&times; </button> 
                </div>
                {children}
            </div>
        </div>
    )
}

export default Modal
