window.addEventListener("load", function () {
  const pics = this.document.querySelectorAll(".pic");
  const lightbox = this.document.querySelector("#lightbox");
  const lightboxImg = this.document.querySelector("#lightboxImage");
  pics.forEach(function (pic) {
    pic.addEventListener("click", function () {
        const bigImg = this.getAttribute("data-src")
        lightboxImg.setAttribute("src", bigImg)
        lightbox.style.display = "block"
    });
  });
  lightbox.onclick = function(){
    lightbox.style.display = "none"
  }
});
