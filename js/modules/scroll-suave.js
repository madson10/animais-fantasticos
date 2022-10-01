export default function initScrollSuave(){
    const linksInterno = document.querySelectorAll('[data-menu="suave"] a[href^="#"]')

    function scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href)
        //const topo = section.offsetTop;

        section.scrollIntoView({
            block:"start",
            behavior:"smooth",
        })
    //forma alterantiva
        //window.scrollTo({
        //  top:topo,
        //  behavior:"smooth",
        //})
    }
    linksInterno.forEach((link)=>{
        link.addEventListener('click',scrollToSection);
    })
}
