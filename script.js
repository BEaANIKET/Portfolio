
gsap.registerPlugin('scrollTrigger');

let navitemLi = document.querySelector('.navitem').querySelectorAll('li');
navitemLi.forEach((element)=>{
    element.addEventListener('mouseenter' , ()=>{
        element.querySelector('.line').style.width = '100%';
    })
    element.addEventListener('mouseleave' , ()=>{
        element.querySelector('.line').style.width = '0%';
    })
})

let menuicon = document.querySelector('.menuicon');
let navitem = document.querySelector('.navitem');
menuicon.addEventListener('click',()=>{
    menuicon.classList.toggle('rotate');
    navitem.classList.toggle('none');
})



function firstPageAnime(){
    console.log("hello");
    let vl = gsap.timeline();
    vl.to('.hidden2',{
        y:0,
        duration:1,
        ease:Expo.easeout,
        stagger:.3
    })
    vl.from('.imgBottom',{
        opacity:0,
        duration:2,
        delay:-1,
    })
    vl.from('.topmoon',{
        opacity:0,
        duration:3,
        delay:-2,
    })
    .from('.navitem li',{
        y:-400,
        duration:1,
        delay:-4,
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
            start:"28% 50%",
            end:'100% 50%',
            scrub:2,
            pin:true,
        }
    });
    tl.to('#card1', {
        top: '0%',
    }, 'a')
    tl.to('#card2', {
        top: '100%',
    }, 'a')

    .to('#card2', {
        top: '3%',
    }, 'b')
    .to('#card1', {
        width:'60%',
    }, 'b')
    .to('#card3', {
        top: '100%',
    }, 'b')

    .to('#card3', {
        top: '6%',
    }, 'c')
    .to('#card2', {
        width:'65%',
    }, 'c')
    .to('#card4', {
        top:'100%',
    }, 'c')
    
    .to('#card4', {
        top:'9%',
    }, 'd')
    .to('#card3', {
        width:'66%',
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
let score = [90,75,85,76,60,80];
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

        // console.log(enterPercent);
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




// let cheak = ()=>{
//     let skills = document.querySelector('.skills'); 
//     window.addEventListener('scroll',()=>{
//         let skillsPageTop = skills.getBoundingClientRect().top;
//         let enterValue = screenHeight - skillsPageTop;
//         let enterPercent = (enterValue / screenHeight * 100);
//         console.log(enterPercent);
//         console.log(skills.getBoundingClientRect().top);
//     })
// }
// cheak()