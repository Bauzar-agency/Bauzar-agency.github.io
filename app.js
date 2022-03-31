const cads = [...document.querySelectorAll('#cads')];
const nxt = [...document.querySelectorAll('#nxt')];
const prex = [...document.querySelectorAll('#prex')];

cads.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxt[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    prex[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})




const carousselLeft =  [...document.querySelectorAll('#carousselLeft')];
const carousselRight=  [...document.querySelectorAll('#carousselRight')];
const caroussel     =  [...document.querySelectorAll('#caroussel')];


caroussel.forEach((items , i) => {
    let containerCarousselDimensions = items.getBoundingClientRect();
    let containerWidth              = containerCarousselDimensions.width;

    carousselLeft[i].addEventListener('click' , () => {
          items.scrollLeft  -= containerWidth;
    })

    carousselRight[i].addEventListener('click' , () => {
          items.scrollLeft  += containerWidth;
    })
        
    });




const  project      = [...document.querySelectorAll('#project')];
const  projectLeft  = [...document.querySelectorAll('#projectLeft')];
const projectRight  = [...document.querySelectorAll('#projectRight')];
const fao1          = document.querySelector('#fao1');
const fao2          = document.querySelector('#fao2');



function delet() {
     fao2.style.backgroundColor="rgb(33, 30, 58)";
     fao1.style.backgroundColor="transparent";
}

function deletLeft() {
    fao2.style.backgroundColor="transparent";
    fao1.style.backgroundColor="rgb(33, 30, 58)";
}

project.forEach((item, i) => {
    let containerDimensionProject = item.getBoundingClientRect();
    let containeranouncementWidth = containerDimensionProject.width;

    projectLeft[i].addEventListener('click', () => {
        item.scrollLeft -= containeranouncementWidth;
        deletLeft();
    })

    projectRight[i].addEventListener('click', () => {
        item.scrollLeft += containeranouncementWidth;
        delet();
    })
});




let       image1             = document.querySelector('#image1');
let       image2             = document.querySelector('#image2');
let       arrowImage1Left    = document.querySelector('#arrowImage1Left');
let       arrowImage2Right   = document.querySelector('#arrowImage2Right');


image2.style.display = "none";

function OpenBackgroundHide() {
     image2.style.display = "block";
     image1.style.display = "none";
}

arrowImage1Left.addEventListener('click' , () => {
         image1.style.display = "block";
         image2.style.display ="none";
});
arrowImage2Right.addEventListener('click' , () => {
      OpenBackgroundHide();
})




const leftBouton      =    [...document.querySelectorAll('#leftBouton')];
const  rightBouton    =    [...document.querySelectorAll('#rightBouton')];
const blocPartner     =    [...document.querySelectorAll('#blocPartner')];



blocPartner.forEach( (box, e)  =>  {
        let blocDimensionPartner = box.getBoundingClientRect();
        let containerPartnerWidth = blocDimensionPartner.width;

        leftBouton[e].addEventListener('click', () => {
            box.scrollLeft -= containerPartnerWidth;
        });

        rightBouton[e].addEventListener('click', () => {
            box.scrollLeft += containerPartnerWidth;
        });
    });






let openMenu    = document.querySelector('#openMenu');
let closeMenu    = document.querySelector('#closeMenu');
let aside       = document.querySelector('#asideHeader')


// aside.style.display = "none";

openMenu.addEventListener('click' , () => {
     document.querySelector('#asideHeader').style.display = "block";
});
closeMenu.addEventListener('click' , () => {
       document.querySelector('#asideHeader').style.display = "none";
});







// let titleAbout    = document.querySelector('#titleAbout');
// let listAbout     = document.querySelector('#listAbout');
// let divAbout      = document.querySelector('#divAbout');

// titleAbout.addEventListener('click' , () => {
//          document.querySelector('#listAbout').style.display = "block";
//          document.querySelector('#divAbout').style.height = "800px";
// })