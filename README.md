# Getting Started

Ce package vous permet de créer une modale d'une manière simple. Vous pouvez la personnaliser en ajoutant de l'animation et vos propres couleurs.

## Utilisation du composant Modal

```javascript
//Importer le composant Modal
import Modal from "react-personalizable-modal-by-fatma/src/Modal"

//Dans la partie déclaration
const [isOpen,setIsOpen]=useState(false);

//Dans la partie return
<Modal isOpen = {isOpen} setIsOpen={setIsOpen} animation = {true} animationFrom={"RIGHT"}/>

//Au clic sur le bouton 
<button onClick={()=>{setIsOpen(true);}}>Ouvrir modal</button>
```
## Les props du composant Modal
| Propriété | Valeur  | Description | 
|-- |--|--|
|isAnimated |true/false  |
|animationFrom |TOP, BOTTOM, RIGHT,LEFT|
| title |string  |
| text |string  |