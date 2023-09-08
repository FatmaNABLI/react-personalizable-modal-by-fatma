import './Modal.css';

export function Modal(props){
    let {isOpen, setIsOpen} = props;
  
    const modal =  document.querySelector('.modal');
    let style = {};

    let classModalStart="modal--startTop";
    if(props.hasOwnProperty("animationFrom")){
        switch(props.animationFrom) {
            case  "TOP" :
                classModalStart = "modal--startTop"
                break;
            case "BOTTOM" :
                classModalStart = "modal--startBottom";
                break;
            case "RIGHT" :
                classModalStart = "modal--startRight";
                break;
            case "LEFT" :
                classModalStart = "modal--startLeft";
                break;
            default :
            classModalStart = "modal--startTop";
        }
    }
    style.transition = props.animation ?   "0.3s all ease-in-out" : ""
    const showHideClassName = isOpen ? "modal modal--open" : `modal ${classModalStart}`;
    const showHideOverlay = isOpen ? "overlay display-block" : "overly display-none";
    return(
        <>
            {/* Close modal by outside click */}
            <div className={showHideOverlay} onClick={() =>{setIsOpen(false)
            }} >
            </div>
            <div className={showHideClassName} style={style}>
                <button className="modal__close" onClick={() =>{setIsOpen(false)}}>
                    X
                </button>
                <div className="modal__header">
                    <h2 className="modal__header__title">Titre de la fenetre</h2>
                </div>
                <div className="modal__body">
                    <p>Utilisateur ajouté avec succès!</p>
                </div>
                <div className="modal__footer">
                    <button className="modal__footer__button" onClick={() =>{ 
                    setIsOpen(false)}}>
                        close
                    </button>
                </div>
            </div>
        </>
    )
}
