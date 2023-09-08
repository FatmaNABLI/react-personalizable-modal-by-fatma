# Getting Started 

Ce projet vous permet de créer une modale d'une maière simple. Vous pouvez la personaliser en ajoutant de l'animation et vos propres couleurs.
## Utilisation du composant Modal

    Dans la partie déclaration : 
    const [isOpen,setIsOpen]=useState(false);

    Dans la partie return : 
    <Modal isOpen = {isOpen} setIsOpen={setIsOpen} animation = {true} animationFrom={"RIGHT"}/>
    
    Au clic sur le bouton : 
    <button onClick={()=>{setIsOpen(true);}}>Ouvrir modal</button>


