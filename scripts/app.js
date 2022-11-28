const app={
    init(){
        this.cacheElements();
        this.eventListeners();
    },
    cacheElements(){
        this.$splash = document.querySelector('.splash');

    },
    eventListeners(){
        this.$splash.addEventListener("click",this.hideSplashscreen,false)
    },
    hideSplashscreen(){
        console.log(this);
        this.style.opacity=0;
        setTimeout(()=>{
            this.classList.add('hidden')
          },610)
    },
}
app.init();