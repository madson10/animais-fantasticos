

export default class ScrollSuave{
    constructor (links,options) {
         this.linksInterno = document.querySelectorAll(links)
         if(options === undefined){
            this.options = { block:"start",behavior:"smooth"}
        }
            else{
                this.options = options
            }
            this.scrollToSection = this.scrollToSection.bind(this)
         }
    
 

     scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href)
        //const topo = section.offsetTop;

        section.scrollIntoView(this.options)
    //forma alterantiva
        //window.scrollTo({
        //  top:topo,
        //  behavior:"smooth",
        //})
    }
    addLinkEvents(){
       this.linksInterno.forEach((link)=>{
            link.addEventListener('click',this.scrollToSection)
        
     });
    }

     init(){
        if(this.linksInterno.length){
            this.addLinkEvents();
        }
     }
    }
  
