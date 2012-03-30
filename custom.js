(function(document, window) {
   function appendToSlides(selector, innerHTML) {
     var slides = document.querySelectorAll(selector+" > div.slide");
     for (var i = 0; i < slides.length; ++i) {
       var slide = slides[i];
       slide.innerHTML = innerHTML + "<div class='content'>" + slide.innerHTML +'</div>';
     }
   }
   function revealSlide() {
     var selector = this.querySelectorAll('.hidden')l
     for (var i = 0; i < selector.length; ++i) {
       selector[0].classList.add('appear');
     }
   }
   window.appendToSlides = appendToSlides;
   window.revealSlide = revealSlide;
   var slides = document.querySelectorAll("div.slide");
   var nav    = document.querySelectorAll("#navigation > div.content")[0];
   var ul     = document.createElement("ul");
   var level  = 0;
   for (var i = 0; i < slides.length; ++i) {
     var slide = slides[i];
     var li = document.createElement("li");
     var a  = document.createElement("a");
     a.href = "#"+slide.id;
     var title;
     if (slide.getAttribute("title")) {
       title = slide.getAttribute("title");
     } else {
       title = slide.id;
       title = title[0].toUpperCase() + title.slice(1);
     }
     var txt = document.createTextNode(title);
     if (slide.classList.contains("section")) {
       a.style.fontWeight="bold";
     }
     if (slide.getAttribute("level")) {
       level = slide.getAttribute("level");
       li.setAttribute("level", level);
     } else {
       li.setAttribute("level", level);
     }
     a.appendChild(txt);
     li.appendChild(a);
     ul.appendChild(li);
   }
   nav.appendChild(ul);
})(document, window);
