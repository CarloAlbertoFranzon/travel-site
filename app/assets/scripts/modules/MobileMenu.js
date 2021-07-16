/*per prima cosa dichiariamo la classe mobile menu dove andremo ad inserire le variabili e le funzioni che ci servono*/
class MobileMenu{
    /*creiamo un costruttore per generare tutte le variabili e le funzioni*/
    constructor(){
        this.menuIcon = document.querySelector(".site-header__menu-icon");
        this.menuContent = document.querySelector(".site-header__menu-content");
        this.siteHeader = document.querySelector(".site-header");
        this.events();       
    }
    /*creiamo tutti i metodi della classe mobile menu*/
    events(){
        /*qui sotto diciamo di aggiungere un event listener alla variabile che abbiamo creato sopra
        e abbiamo usato un arrow function perchè l'event listener usa this come l'elemento cliccato
        mentre a noi quel this serve che si riferisca ad un altra cosa.*/
        this.menuIcon.addEventListener("click",() => this.toggleTheMenu());
    }

    /*questo è un metodo che viene richiamato dal metodo precedente*/
    toggleTheMenu(){
        this.menuContent.classList.toggle("site-header__menu-content--is-visible");
        this.siteHeader.classList.toggle("site-header--is-expanded");
        this.menuIcon.classList.toggle("site-header__menu-icon--close-x");
    }

}

export default MobileMenu