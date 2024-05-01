
gsap.registerPlugin('scrollTrigger');



const Loder = function (){
    document.querySelector('.Loder').classList.add('erase');
    document.querySelector('.container').classList.remove('erase');
}
Loder();


const type = new Typed(".autotype" , {
    strings:['ANIKET CHATURVEDI' , 'FREELANCER' , 'UI/UX DESIGNER' ,'FRONTEND DEVELOPER'],
    typespeed:150,
    backspeed:150,
    loop:true,
})


let displayMode = 'neight';


let navitemLi = document.querySelector('.navitem').querySelectorAll('li');
let navLinkNo = 0;
navitemLi[0].querySelector('.line').style.width = '100%';
let eraseAllLine = (value)=>{
    navitemLi.forEach((item,index)=>{
        if(index!=value)
            item.querySelector('.line').style.width = '0%';
    })
}

document.querySelector('.day').style.display = 'none';
document.querySelector('.neight').style.display = 'block';
let mode = document.querySelector('.modelogo');

mode.addEventListener('click',()=>{
    console.log(displayMode);
    document.querySelector('.container').classList.toggle('mode');
    document.querySelectorAll('.skills-meter').forEach((item)=>{
        item.classList.toggle('bg-white');
    })
    
    if (displayMode === 'day') {
        document.querySelector('.day').style.display = 'none';
        document.querySelector('.neight').style.display = 'block';
    } else {
        document.querySelector('.day').style.display = 'block';
        document.querySelector('.neight').style.display = 'none';
    }
    
    displayMode = displayMode === 'day' ? 'neight' : 'day';
})

navitemLi.forEach((element,index)=>{
    element.addEventListener('mouseenter' , ()=>{
        eraseAllLine(navLinkNo);
        element.querySelector('.line').style.width = '100%';
    })
    element.addEventListener('mouseleave' , ()=>{
        if(navLinkNo != index)
            element.querySelector('.line').style.width = '0%';
    })
    element.addEventListener('click' , ()=>{
        navLinkNo = index
        eraseAllLine(navLinkNo);
        element.querySelector('.line').style.width = '100%';
    })
})

let menuicon = document.querySelector('.menuicon');
let navitem = document.querySelector('.navitem');
menuicon.addEventListener('click',()=>{
    menuicon.classList.toggle('rotate');
    navitem.classList.toggle('none');
})



function firstPageAnime(){
    let vl = gsap.timeline();
    vl.from('.text',{
        x:100,
        opacity:0,
        duration:2,
        ease:Expo.easeout,
    })
    vl.from('.imgBottom',{
        opacity:0,
        duration:2,
        delay:-1,
    })
    vl.from('.topmoon',{
        opacity:0,
        duration:3,
        delay:-3,
    })
    .from('.navitem li',{
        y:-400,
        duration:2,
        delay:-4,
        color:'red',
        opacity:0,
        stagger:{
            from:'end',
            amount:.3
        }
    })

};
function navBg(){
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.main',  
            start: '100% 70%',
            // markers:true,
            end: '100% 70%',
            scrub: 2
        },
    });
    tl.to('.nav' ,{
        backgroundColor:' rgba(15, 16, 63, 1)',
        duration:.1,
    })

}


function scrollProjectImg(){
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger:'.project',
            // markers:true,
            start:"28% 48%",
            end:'100% 50%',
            scrub:2,
            pin:true,
        }
    });
    tl.to('#card1', {
        top: '-3%',
        width:'100%'
    }, 'a')
    tl.to('#card2', {
        top: '100%',
        width:'100%'
    }, 'a')

    .to('#card2', {
        top: '0%',
    }, 'b')
    .to('#card1', {
        width:'80%',
    }, 'b')
    .to('#card3', {
        top: '100%',
        width:'100%'
    }, 'b')

    .to('#card3', {
        top: '3%',
    }, 'c')
    .to('#card2', {
        width:'82%',
    }, 'c')
    .to('#card3', {
        width:'84%',
    }, 'd')
}

function projectScroll(){
    let tl = gsap.timeline({
        scrollTrigger:{
            // markers:true,
            trigger:'.main',
            start:'100% 80%',
            end:'100% 100%',
            scrub:2
        }
    });
    tl.to('.project_h1',{
        y:0,
    })
    
}
navBg();
firstPageAnime();
scrollProjectImg();
projectScroll();


// Skills
let skills_box_item = document.querySelectorAll('.skills-box');
let score = [90,75,85,76,85,80];
let skillsLebel = ()=>{
        skills_box_item.forEach((element,index)=>{
        let skills_meter_lebel = element.querySelector('.skills-meter-lebel');
        let skills_meter_value = score[index];
        for(let i=0;i<=skills_meter_value;i++){
            setTimeout(() => {
                element.querySelector('.skills-meter-value').innerText = `${i}`;
            }, i*10);
        }
        skills_meter_lebel.style.width = `${skills_meter_value}%`;
    })
}
// skillsLebel();


let skills = document.querySelector('.skills'); 
let screenHeight = window.innerHeight;

let skillsScrollAnimation = ()=>{
    let flag = true;
    window.addEventListener('scroll',()=>{
        let skillsPageHeight = skills.getBoundingClientRect().bottom - skills.getBoundingClientRect().top;
        let skillsPageTop = skills.getBoundingClientRect().top;
        let enterValue = screenHeight - skillsPageTop;
        let enterPercent = (enterValue / skillsPageHeight) * 100;
        console.log(enterPercent);

        if(enterPercent>=40){
            if(flag === true){
                skills_box_item.forEach((element,index)=>{
                    let skills_meter_lebel = element.querySelector('.skills-meter-lebel');
                    let skills_meter_value = score[index];
                    for(let i=0;i<=skills_meter_value;i++){
                        setTimeout(() => {
                            element.querySelector('.skills-meter-value').innerText = `${i}`;
                        }, i*10);
                    }
                    skills_meter_lebel.style.width = `${skills_meter_value}%`;
                })

                flag = false;
            }
        }
        else{
            flag = true;
            skills_box_item.forEach((element,index)=>{
                let skills_meter_lebel = element.querySelector('.skills-meter-lebel');
                element.querySelector('.skills-meter-value').innerText = '0';
                skills_meter_lebel.style.width = `0%`;
            })
        }
    })
}
skillsScrollAnimation();