let enter=document.querySelector('.enter')

window.addEventListener("load",function(){
    if(enter.style.display="flex"){
        this.document.body.style.overflow="hidden"
    }
setTimeout(() => {
    enter.classList.add("enter-time")
    
}, 2000);
setTimeout(() => {
    enter.classList.add("display")
    this.document.body.style.overflow="scroll"
}, 3000);
})
let _close=document.querySelector('.close')
let contact=document.querySelectorAll('.c-1')
let menus=document.querySelector('.menus')




contact.forEach(item=>{
    item.addEventListener("click",function(){
        document.body.style.overflow="hidden"
        menus.classList.add('block')
        menus.style.transform="translateY(0)"
    })
})
let contacts=document.querySelector(".cc")
contacts.addEventListener("click",function(){
    menus.classList.add('block')
    menus.style.transform="translateY(0)"
})
_close.addEventListener("click",function(){
   
        menus.classList.add("enter-time")
    setTimeout(() => {
        document.body.style.overflow="scroll"
        menus.style.transform="translateY(-100%)"
    }, 1000);
    setTimeout(() => {
        menus.classList.remove("enter-time")
    }, 2100);
})
 
window.addEventListener('mousemove',function(e){
    let curser=document.getElementById("curser")
let x=e.clientX
let y=e.clientY
curser.style.left=`${x}px`
curser.style.top=`${y}px`
})
var num=true
document.querySelectorAll("li").forEach(item=>{
    let curser=document.getElementById("curser")

 if (num) {
    item.addEventListener("mouseenter",function(){
        curser.classList.toggle("mouseover")
        
     })
    } else {
        num=!num
        item.addEventListener("mouseleave",function(){
            curser.classList.remove("mouseover")
         })
        
 
 }
   
}) 

    window.addEventListener('scroll',function(){
        let num=this.document.querySelector('.num')
        let sectionImg=document.querySelector(".img")
        let texts=document.querySelector(".s")
        let texts2=document.querySelector(".s-2")
        let h1=document.querySelector(".h1")
        let h2=document.querySelector(".h2")
        let texts3=document.querySelector(".texts-3")
   if(this.window.scrollY>sectionImg.offsetTop-100){
    sectionImg.style.opacity='1'
    sectionImg.style.transform='translateY(0)'
   }else{
    sectionImg.style.opacity='0'
    sectionImg.style.transform='translateY(15%)'
   }
   if(this.window.scrollY>texts.offsetTop-150){
   texts.style.transform="translateY(0)"
   texts.style.opacity="1"
   texts2.style.transform="translateY(0)"
   texts2.style.opacity="1"
   h1.style.transform="translateX(0)"
   h2.style.transform="translateX(0)"
   h1.style.opacity="1"
   h2.style.opacity="1"
   texts3.style.transform="translateY(0)"
   texts3.style.opacity="1"
   }else{
    texts.style.transform="translateY(30%)"
    texts.style.opacity="0"
    texts2.style.transform="translateY(30%)"
    texts2.style.opacity="0"
    h1.style.transform="translateX(30%)"
   h2.style.transform="translateX(30%)"
   h1.style.opacity="0"
   h2.style.opacity="0"
   texts3.style.transform="translateY(30%)"
   texts3.style.opacity="0"
   }
   let movie=document.querySelector(".movie")
   let movieshild=document.querySelector('.movie-child')
   let images=this.document.querySelector(".images")
   let hold=this.document.querySelector('.hold')
   let real=this.document.querySelector(".real")
   if (this.window.scrollY>movie.offsetTop-300) {
   movie.style.position="fixed"
   movieshild.style.height="200px"
   setTimeout(() => {
    images.style.opacity="1"
   }, 1000);
   }else{
    movieshild.style.height="0"
    images.style.opacity="0"
   }
   let tx1=this.document.querySelector(".tx-1")
   let tx2=this.document.querySelector(".tx-2")
   let txx=this.document.querySelector(".txx")
   let zero=images.children[0]
   let first=images.children[1]
   let second=images.children[2]
   let three=images.children[3]
   let four=images.children[4]
   
   if (this.window.scrollY>movie.offsetTop-50 && window.scrollY<real.offsetTop-400) {
    tx1.style.transform="rotate(-90deg) translateY(0)"
    tx2.style.transform="rotate(-90deg) translateY(0)"
    txx.style.opacity='1'
    txx.style.transform='translateY(0)'
    }else{
        tx1.style.transform="rotate(-90deg) translateY(-140%)"
        tx2.style.transform="rotate(-90deg) translateY(140%)"
        txx.style.opacity="0"
        txx.style.transform='translateY(5%)'
    }
    
    let _h1=txx.children[0]
    let _p1=txx.children[1]
   

            if (window.scrollY<movie.offsetTop+zero.offsetTop) {
                _h1.innerHTML="IMAGE FILM"
                zero.style.transform="rotate(-15deg)  scale(1)"
        }else if (window.scrollY>movie.offsetTop+zero.offsetTop && window.scrollY<movie.offsetTop+first.offsetTop){
            zero.style.transform="rotate(0deg)  scale(1.2)"  
            first.style.transform="rotate(-15deg)  scale(1)"
            num.innerHTML="01"
    } else if (window.scrollY>movie.offsetTop+first.offsetTop && window.scrollY<movie.offsetTop+second.offsetTop) {
            _h1.innerHTML="MUSIC VIDEO"
            second.style.transform="rotate(-15deg)  scale(1)"
           first.style.transform="rotate(0deg)  scale(1.2)" 
           num.innerHTML="02"
        } else if (window.scrollY>movie.offsetTop+second.offsetTop && window.scrollY<movie.offsetTop+three.offsetTop){
            _h1.innerHTML="SHORT FILM"
            three.style.transform="rotate(-15deg)  scale(1)"
           second.style.transform="rotate(0deg)  scale(1.2)"
           num.innerHTML="03"
        }else if (window.scrollY>movie.offsetTop+three.offsetTop && window.scrollY<movie.offsetTop+four.offsetTop){
            _h1.innerHTML=" PRUDUCT"
           three.style.transform="rotate(0deg)  scale(1.2)"
           four.style.transform="rotate(-15deg)  scale(1)"
           num.innerHTML="04"
        }else if (window.scrollY>movie.offsetTop+four.offsetTop ){
            num.innerHTML="05"
            four.style.transform="rotate(0deg)  scale(1.2)"
            _h1.innerHTML="VIDEO CLIP"
        }
       let more=this.document.querySelector(".more") 
      if (window.scrollY>more.offsetTop-600  ){
        txx.classList.add("none")

    } else{
        txx.classList.remove("none")
    }
    let _one=this.document.querySelector('.on')
    let _two=this.document.querySelector('.tw')  
       if (window.scrollY>real.offsetTop && window.scrollY<movie.offsetTop-50 ){
       setTimeout(() => {
        hold.classList.add("non")
       }, 500);
      
    } else {
        hold.classList.remove("non")
    
    } 
    if (window.scrollY>real.offsetTop-200) { 
       
        _one.style.opacity="1"
        _two.style.opacity="1"
        _one.style.transform="translateY(0)"
        _two.style.transform="translateY(0)"
    }else{
        _one.style.opacity="0"
        _two.style.opacity="0"
        _one.style.transform="translateY(100%)"
        _two.style.transform="translateY(0%)"
    }
    let award=this.document.querySelector('.award')
    let titl=this.document.querySelector('.titl')
    if (window.scrollY>award.offsetTop-200) {

        titl.style.transform="translateY(0)"
    }else{
        titl.style.transform="translateY(-120%)"
    }
    let footer=document.querySelector('.footer')
    let titleFooter=document.querySelector(".title-footer")
    let z=document.querySelector(".z")
    let o=document.querySelector(".o")
    let k=document.querySelector(".k")
    if (window.scrollY>footer.offsetTop) { 
       
titleFooter.style.opacity="1"
setTimeout(() => {
   z.style.opacity="1" 
   setTimeout(() => {
    k.style.opacity="1"
    setTimeout(() => {
        o.style.opacity="1"
    }, 500);
   }, 500);
}, 500);
      
   }else{
    titleFooter.style.opacity="0"
    z.style.opacity="0" 
    o.style.opacity="0" 
    k.style.opacity="0" 
   }
   
})

