const app = {
  init() {
    this.cacheElements();
    this.eventListeners();
  },
  cacheElements() {
    this.$splash = document.querySelector(".splash");

    this.$halocheck = document.querySelector("#haloCheck");
    this.$santaHatCheck = document.querySelector("#santaHatCheck");
    this.$christmasBellCheck = document.querySelector("#christmasBellCheck");
    this.$christmasBallCheck = document.querySelector("#christmasBallCheck");

    this.$santaHatEntity = document.querySelector("#santaHatEntity");
    this.$christmasBellEntity = document.querySelector("#christmasBellEntity");
    this.$christmasBallEntityLeft = document.querySelector("#christmasBallEntityLeft");
    this.$christmasBallEntityRight = document.querySelector("#christmasBallEntityRight");
    this.$haloEntity = document.querySelector("#haloEntity");
  },
  eventListeners() {
    this.$splash.addEventListener("click", this.hideSplashscreen, false);
    this.$halocheck.addEventListener("change", this.showHalo.bind(this), false);
    this.$santaHatCheck.addEventListener("change",this.showSantaHat.bind(this),false);
        this.$christmasBallCheck.addEventListener("change", this.showChristmasBall.bind(this), false);
    this.$christmasBellCheck.addEventListener("change",this.showChristmasBell.bind(this),false);
  },
  hideSplashscreen() {
    this.style.opacity = 0;
    setTimeout(() => {
      this.classList.add("hidden");
    }, 610);
  },
  showHalo() {
    if (this.$halocheck.checked) {
      this.$haloEntity.setAttribute("visible", true);
    } else {
      this.$haloEntity.setAttribute("visible", false);
    }
  },
  showSantaHat() {
    if (this.$santaHatCheck.checked) {
      this.$santaHatEntity.setAttribute("visible", true);
    } else {
      this.$santaHatEntity.setAttribute("visible", false);
    }
  },
  showChristmasBell() {
    if (this.$christmasBellCheck.checked) {
      this.$christmasBellEntity.setAttribute("visible", true);
    } else {
      this.$christmasBellEntity.setAttribute("visible", false);
    }
  },
  showChristmasBall() {
    if (this.$christmasBallCheck.checked) {
      this.$christmasBallEntityLeft.setAttribute("visible", true);
      this.$christmasBallEntityRight.setAttribute("visible", true);
    } else {
      this.$christmasBallEntityLeft.setAttribute("visible", false);
      this.$christmasBallEntityRight.setAttribute("visible", false);
    }
  },
};
app.init();
