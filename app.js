const models = [
    {
        name : 'Bmw 418d',
        image : 'img/bmw.jpg',
        link : 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'
    },
    {
        name : 'Mazda CX-3',
        image : 'img/mazda.jpg',
        link : 'http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion'
    },
    {
        name : 'Volvo S60',
        image : 'img/volvo.jpg',
        link : 'http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance'
    },
    {
        name : 'Skoda Superb',
        image : 'img/skoda.jpg',
        link : 'http://www.arabalar.com.tr/skoda/superb/2018/1-4-tsi-active'
    },
    {
        name : 'Honda Civic',
        image : 'img/honda.jpg',
        link : 'http://www.arabalar.com.tr/honda/civic/2018/1-6-elegance'
    }
];

let index =0;
const slaytCount = models.length;

showSlider(index);

const rightBtn = document.querySelector('.fa-arrow-circle-right');
const leftBtn = document.querySelector('.fa-arrow-circle-left');
leftBtn.addEventListener('click',goBeforeImage);
rightBtn.addEventListener('click',goAfterImage);

function goBeforeImage(){
    index--;
    showSlider(index);
    console.log(index);
}
function goAfterImage(){
    index++;
    showSlider(index);
    console.log(index);
}

function showSlider(i){
    index=i;
    if (i<0) {
        index=slaytCount-1;
    }
    if (i >= slaytCount) {
        index=0;
    }
    document.querySelector('.card-img-top').src=models[index].image;
    document.querySelector('.card-title').textContent=models[index].name;
    document.querySelector('.card-link').href=models[index].link;
}


