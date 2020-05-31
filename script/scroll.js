(() => {
  let span = document.querySelectorAll(".child");
  let links = document.querySelectorAll('[href*="#"]');
  let profesion_name = document.querySelectorAll('.profesion_name');

  window.addEventListener("scroll", Scrolling);
  function Scrolling(e) {
    let size = Math.round(pageYOffset / window.innerHeight);
    for (let i = 0; i < span.length; i++) {
      span[i].classList.remove("radio_active");
      if (i <= size) {
        span[i].classList.add("radio_active");
      }
    }
    if (size >= 1) {
      profesion_name.forEach(elem => elem.style = 'transform: translateX(0%);')
    }else{
      profesion_name[0].style = ' transform: translateX(-150%)';
      profesion_name[1].style = ' transform: translateX(150%)'
    }
    
  }

  for (let link of links) {
    link.addEventListener("click", scroll_document);
    function scroll_document(e) {
      e.preventDefault();
      const blockID = link.getAttribute("href");
      
      document.querySelector("" + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
})();
