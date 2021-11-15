$(document).ready(function(){
    $("a").on('click', function(event) {

    if (this.hash !== "") {

    event.preventDefault();

    var hash = this.hash;


    $('html, body').animate({
    scrollTop: $(hash).offset().top
    },600, function(){

    window.location.hash = hash;

          });
        }
      });
    });

    let am = gsap.timeline({
      scrollTrigger:{
          trigger: '#intro',
          start: "center bottom",
      }
  });

  am.from('.box.in',{
      opacity: 0, duration: 2.4, y: 50,
  });

  let qo = gsap.timeline({
    scrollTrigger:{
        trigger: '#quote',
        start: "center bottom",
    }
});

qo.from('.quote',{
    opacity: 0, duration: 2.4, y: 50,
});

let el = gsap.timeline({
  scrollTrigger:{
      trigger: '#early-life',
      start: "top center",
  }
});

el.from('.articles',{
  opacity: 0, duration: 2.4, y: 50,
});

let al = gsap.timeline({
  scrollTrigger:{
      trigger: '#adult-life',
      start: "top center",
  }
});

al.from('.box.al',{
  opacity: 0, duration: 2.4, y: 50,
});

let inv = gsap.timeline({
  scrollTrigger:{
      trigger: '#inventions',
      start: "top center",
  }
});

inv.from('.row.inv',{
  opacity: 0, duration: 2.4, y: 50,
});

let com = gsap.timeline({
  scrollTrigger:{
      trigger: '#communication',
      start: "top center",
  }
});

com.from('.com',{
  opacity: 0, duration: 2.4, y: 50,
});

let pl = gsap.timeline({
  scrollTrigger:{
      trigger: '#personal-life',
      start: "top center",
  }
});

pl.from('.pl',{
  opacity: 0, duration: 2.4, y: 50,
});


