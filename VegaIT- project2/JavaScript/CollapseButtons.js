var collapse = document.getElementsByClassName('capabilities__collapse');

for(i = 0; i < collapse.length; i++){
    collapse[i].addEventListener("click",function(){
        var capabilities__content = this.nextElementSibling;
        var icon = this.querySelector('.icon');
        
        if(capabilities__content.style.display === "flex"){
            capabilities__content.style.display = "none";
            icon.innerHTML = 'add';
            this.setAttribute('aria-expanded', 'false');
        }else {
            capabilities__content.style.display = "flex";
            icon.innerHTML = 'remove';
            this.setAttribute('aria-expanded', 'true');
        }
    });
}
