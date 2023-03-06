const container = document.querySelectorAll('.opinions__slider');
var btnPrevious = document.querySelectorAll('.opinions__btn--previous');
var btnNext = document.querySelectorAll('.opinions__btn--next');
var action = 1;

container.forEach((item, i)=>{
    btnPrevious[i].addEventListener('click', () =>{
        item.scrollLeft -= 475;
        if ( action == 3 ) {
            document.getElementById("radio3").style.cssText ="height:1.3rem ;width:1.3rem;opacity:0.5";
            document.getElementById("radio2").style.cssText ="height:1.9rem ;width:1.9rem;opacity:1";
            action = 2;
            btnPrevious[0].style.opacity = "1";
            btnNext[0].style.opacity ="1";
        } else if (action==2){
            document.getElementById("radio2").style.cssText ="height:1.3rem ;width:1.3rem;opacity:0.5";
            document.getElementById("radio1").style.cssText ="height:1.9rem ;width:1.9rem;opacity:1";
            action = 1;
            btnPrevious[0].style.opacity = "0.5";
        }
    });
    btnNext[i].addEventListener('click', () =>{
        item.scrollLeft += 475; 
        if ( action == 1 ) {
            document.getElementById("radio1").style.cssText ="height:1.3rem ;width:1.3rem;opacity:0.5";
            document.getElementById("radio2").style.cssText ="height:1.9rem ;width:1.9rem;opacity:1";
            action = 2;
            btnPrevious[0].style.opacity = "1";
            btnNext[0].style.opacity ="1";
        } else if (action==2){
            document.getElementById("radio2").style.cssText ="height:1.3rem ;width:1.3rem;opacity:0.5";
            document.getElementById("radio3").style.cssText ="height:1.9rem ;width:1.9rem;opacity:1";
            action = 3;
            btnNext[0].style.opacity ="0.5";
        }
    });
})