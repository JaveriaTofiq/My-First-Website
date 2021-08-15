document.addEventListener("DOMContentLoaded",()=>{
    function counter(id,start,and,duration){
        let obj=document.getElementById(id),current=start,range=and-start,increment=and>start?1:-1,step=Math.abs(Math.floor(duration/range)),timer=setInterval(()=>{
            current+=increment;
            obj.textContent=current;
            if(current==end){
                clearInterval(timer);
            }
        },step);
    }
    counter("count1",1,1287,4000);
    counter("count2",2,1547,2000);
    counter("count3",0,1147,3800);
    counter("count4",1,1027,2887);
});
let nav=document.querySelector(".navigation-wrap");
window.onscroll=function(){
    if(document.documentElement.scrollTop>20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}
let navbar=document.querySelectorAll('.navlink');
let navCollapse=document.querySelector.apply('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })
})
