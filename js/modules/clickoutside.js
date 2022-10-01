
export default function initDropdowMenu(){
}

const dropdowMenus = document.querySelectorAll('[data-dropdown]');

dropdowMenus.forEach((menu)=>{
    ['touchstart','click'].forEach(userEvent=>{
        menu.addEventListener(userEvent,handleClick);
    })
    
})

function handleClick(event){
   event.preventDefault();
    this.classList.add('active')
    outsideClick(this,()=>{
        this.classList.remove('active');
    });

}

function outsideClick(element,callback){
    const html = document.documentElement;
    const outside = 'data-outside';

    if(!element.hasAtributte(outside,)){
        html.addEventListener('click',handleOutsideClick);
        element.setAtriubutte(outside,'');
    }
    function handleOutsideClick(event){
        if(!element.contains(event.target)){
            element.removeAtributte(outside);
            html.removeEventListener('click',handleOutsideClick);
            callback();
        }
    }
}

