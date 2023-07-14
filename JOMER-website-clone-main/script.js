function loco(){
    gsap.registerPlugin(ScrollTrigger);

    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#bgs"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy("#bgs", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, 
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector("#bgs").style.transform ? "transform" : "fixed"
    });
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
   ScrollTrigger.refresh();
    
}
loco()
gsap.to("#loader ", {
        height: "0%",
        duration: 4,
        ease:"Expo.easeInOut"
})
gsap.to("#loader img", {
  duration: 2,
      rotate:"360deg"
    })

gsap.to(".imgs,.imgss",{
    scrollTrigger:{
        trigger:("#part2"),
        end:"top 100%",
        start:"top 130%",
        scroller:"#bgs",
        scrub:5,
         },
         y:"-600",
        delay:5
})

gsap.to(".right-move",{
    scrollTrigger:{
        trigger:("#part2"),
        end:"top 100%",
        start:"top 110%",
        scroller:"#bgs",
        scrub:5,
         },
         x:"200",
        //  ease:"Expo.easeInOut",
        duration:8
})
gsap.to(".left-move",{
    scrollTrigger:{
        trigger:("#part2"),
        end:"top 100%",
        start:"top 110%",
        scroller:"#bgs",
        scrub:5,
         },
         x:"-100",
        //  ease:"Expo.easeInOut",
        duration:8
})
gsap.to(".part1-text-box h1", {
  delay: 2,
  opacity: 1,
  duration: 1,
  rotateX: "0deg",
  scale:1
  
})

gsap.to("#part1-text-containor",{
    scrollTrigger: {
      trigger:"#part1-text-containor",
      start:"top 15.5%",
      end:"top -120%",
      pin:true,
      scrub:2,
      scroller:"#bgs",

       },
      //  x:"-200",
       ease:"Expo.easeInOut",
      duration:4
})
gsap.to("#part2-black-layer",{
  scrollTrigger:{
    trigger:"#part2",
    start:"top 110%",
    end:"top 50%",
    scrub:true,
    scroller:"#bgs"
  },
  y:-700,
  scale:3,
})
gsap.to("#part2-text-box h1",{
  scrollTrigger:{
    trigger:"#part2",
    start:"top 90%",
    end:"top 50%",
    scrub:true,
    scroller:"#bgs",
  },
  opacity:1,
  stagger:2,
  y:-50
})

var tl=gsap.timeline({
  repeat:"-1"
});

tl.from(".part1-text-box .imgs:nth-child(1) img",{
  stagger:2,
  opacity:0,
  delay:.2,
},"a")
tl.from(".part1-text-box .imgs:nth-child(2) img",{
  stagger:2,
  delay:.8,
  opacity:0
},"a")
tl.from(".part1-text-box .imgs:nth-child(3) img",{
  stagger:2,
  opacity:0,
 
},"a")
tl.from(".part1-text-box .imgss img",{
  stagger:2,
  opacity:0,
  delay:0.5
},"a")

gsap.to(".part2-circle,.part2-big-circle",{
  scrollTrigger:{
    trigger:"#part2",
    start:"top 40%",
    end:"top -40%",
    scrub:10,
    scroller:"#bgs",
    duration:5
  },
  x:-200
})
gsap.to("#part2-text-box h1:nth-child(1)",{
  scrollTrigger:{
    trigger:"#part2",
    start:"top 50%",
    end:"top 0%",
    scrub:10,
    scroller:"#bgs",
    duration:5
  },
  x:-50
})
gsap.to("#part2-text-box h1:nth-child(2)",{
  scrollTrigger:{
    trigger:"#part2",
    start:"top 50%",
    end:"top 0%",
    scrub:10,
    scroller:"#bgs",
    duration:5
  },
  x:50
})
gsap.to("#part3-containor h1:nth-child(1)",{
  scrollTrigger:{
    trigger:"#part3",
    start:"top 80%",
    end:"top 40%",
    scrub:5,
    scroller:"#bgs",
    duration:5
  },
  x:-100
})
gsap.to("#part3-containor h1:nth-child(3)",{
  scrollTrigger:{
    trigger:"#part3",
    start:"top 80%",
    end:"top 40%",
    scrub:5,
    scroller:"#bgs",
    duration:5
  },
  x:100
})

gsap.from("#part4 h2",{
  scrollTrigger:{
    trigger:"#part4",
    start:"top 80%",
    end:"top 60%",
    scroller:"#bgs",
    duration:5,
    scrub:2,
  },
  opacity:0,
  y:100,
  ease:"Expo.easeInOut"
})
gsap.from("#part4-text h1",{
  scrollTrigger:{
    trigger:"#part4",
    start:"top 5%",
    end:"top 0%",
    scroller:"#bgs",
    duration:5,
    scrub:5,
  },
  opacity:0,
  y:80,
  ease:"Expo.easeInOut"
})

gsap.to("#part5-layer",{
  scrollTrigger: {
    trigger:"#part5-layer",
    start:"top 0%",
    end:"top -100%",
    pin:true,
    scrub:2,
    scroller:"#bgs",

     },
    scale:1.4,
     ease:"Expo.easeInOut",
    duration:4
})
gsap.to("#part6 #part6-layer",{
  scrollTrigger: {
    trigger:"#part6 #part6-layer",
    start:"top 0%",
    end:"top -100%",
    pin:true,
    scrub:2,
    scroller:"#bgs",

     },
     scale:1.4,
     ease:"Expo.easeInOut",
    duration:4
})
gsap.to(".chalja",{
  scrollTrigger: {
    trigger:".chalja",
    start:"top 0%",
    end:"top -100%",
    pin:true,
    scrub:2,
    scroller:"#bgs",

     },
     scale:1.4,
     ease:"Expo.easeInOut",
    duration:4
})
gsap.to(".chalja2",{
  scrollTrigger: {
    trigger:".chalja2",
    start:"top 0%",
    end:"top -90%",
    pin:true,
    scrub:2,
    scroller:"#bgs",

     },
     scale:1.4,
     ease:"Expo.easeInOut",
    duration:4
})
gsap.to("#page9-layer",{
  scrollTrigger: {
    trigger:"#page9",
    start:"top 90%",
    end:"top 50%",
    scrub:2,
    scroller:"#bgs",
     },
     scale:1.4,
     ease:"Expo.easeInOut",
})

gsap.to("#page9-move-top",{
  scrollTrigger:{
    trigger:"#page9",
    start:"top 90%",
    end:"top 0%",
    scrub:2,
    scroller:"#bgs",
    duration:5
  },
  x:0
})
gsap.to("#page9-move-bottom",{
  scrollTrigger:{
    trigger:"#page9-move-bottom",
    start:"top 95%",
    end:"top 10%",
    scrub:5,
    scroller:"#bgs",
    duration:8
  },
  x:-500
})
gsap.to("#page9-bottom-left h1",{
  scrollTrigger:{
    trigger:"#page9",
    start:"top 10%",
    end:"top 5%",
    scrub:5,
    scroller:"#bgs",
    duration:8
  },
  y:-27
})


var circle=document.querySelector("#circle");
var flag=0;

circle.addEventListener("click",function(){
    if(flag===0){
        circle.style.transform =`translateX(44px)`;
        circle.style.transition="all ease .5s";
        document.documentElement.style.setProperty('--black', 'white');
        document.documentElement.style.setProperty('--white', 'black');
        document.documentElement.style.setProperty('--thr', 'blue');
       
        flag=1;
    }
    else{
        circle.style.transform =`translateX(0px)`;
        circle.style.transition="all ease .5s";
        document.documentElement.style.setProperty('--black', 'black');
        document.documentElement.style.setProperty('--white', 'white');
        flag=0;
    }
})

var cursor=document.querySelector("#cursor")
var bgs = document.querySelector("#bgs")

window.addEventListener('mousemove', (e) => {
  cursor.style.left = e.pageX + `px`;
  cursor.style.top = e.pageY + `px`;
  cursor.setAttribute('data-fromTop', (cursor.offsetTop - scrollY))
});
window.addEventListener('scroll', () => {
  const fromTop = parseInt(cursor.getAttribute('data-fromTop'));
  cursor.style.top = scrollY + fromTop + 'px';
});
