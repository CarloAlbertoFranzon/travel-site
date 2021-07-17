import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class RevealOnScroll {
    constructor(els, thresholdPercent){
        //per selezionare tutti gli elementi che hanno la stessa classe usiamo querySelectorAll()
        this.thresholdPercent = thresholdPercent;
        this.itemsToReveal = els;
        this.browserHeight = window.innerHeight;
        this.hideInitially();
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
        
        this.events();
    }

    events(){
        window.addEventListener("scroll", this.scrollThrottle);
        window.addEventListener("resize", debounce(()=>{
            console.log("Resize just ran");
            this.browserHeight = window.innerHeight;
        }, 333));
    }

    calcCaller(){

        console.log("Scoll function ran");
        this.itemsToReveal.forEach(el => {
            //questo if chiede se l'elemento è già visibile o meno
            if(el.isReveal == false){
                this.calculateIfScrolledTo(el);
            }
        });
    }

    calculateIfScrolledTo(el){
        if(window.scrollY + this.browserHeight > el.offsetTop){
            console.log("Element was calculated");
            //questa strana proprietà mostra la distanza dagli elementi che gli abbiamo dichiarato 
            let scrollPercent = (el.getBoundingClientRect().top / this.browserHeight) * 100;
            if (scrollPercent < this.thresholdPercent){
                el.classList.add("reveal-item--is-visible");
                //di default l'elemento isReveal è true ma quando viene aggiunta la classe reveal-item diventa false in modo da bloccare la funzione che calcola lo scroll solo mentre è true (non è ancora visibile)
                el.isReveal = true;
                //rimuove l'event listener solo quando l'ultimo elemento è stato
                if (el.isLastItem){
                    window.removeEventListener("scroll", this.scrollThrottle);
                }
            }
        }
    }

    hideInitially(){
        //dentro this.itemsToReveal c'è più di un elemento quindi dobbiamo utilizzare la funzione forEach() per agire su tutti
        this.itemsToReveal.forEach(el => {
            el.classList.add("reveal-item");
            //aggiungiamo una variabile che dice false se l'elemento ha già ottenuto la classe reveal-item ovvero se è già stato visualizzato
            el.isReveal = false;
        }); 
        //come prima dobbiamo dare true all'ultimo elemento per far capire quando rimuovere l'event listener
        this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
    }
}

export default RevealOnScroll