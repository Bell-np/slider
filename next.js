const entities = [
    {
        city: 'Rostov-on-Don <br> LCD admiral',
        area: '81 m2',
        time: '3.5 months',
        nextProjectActive: 'next-project_active',
        active: 'active',
        img: './Images/Images_png/image 2.1.png'
    },
    {
        city: 'Sochi <br> Thieves',
        area: '105 m2',
        time: '4 months',
        nextProjectActive: 'next-project_active',
        active: 'active',
        img: './Images/Images_png/image 2 (1).png'
    },
    {
        city: 'Rostov-on-Don <br> Patriotic',
        area: '93 m2',
        time: '3 months',
        nextProjectActive: 'next-project_active',
        active: 'active',
        img: './Images/Images_png/image 3 (1).png'
    }
]

const city = document.querySelector('#city');
const area = document.querySelector('#area');
const time = document.querySelector('#time');
const img = document.querySelector('#img-example');

// Функция смены информации слайдера
const setEntity = (index) => {
    city.innerHTML = entities[index].city;
    area.innerHTML = entities[index].area;
    time.innerHTML = entities[index].time;
    img.src = entities[index].img;
}


// Стрелки 
const leftArrow = document.querySelector('#left-arrow');
const rightArrow = document.querySelector('#right-arrow');

// Счётчик
let currentIndex = 0;

leftArrow.addEventListener('click', () => {
    if (currentIndex <= 0) {
        currentIndex = 2;
        setEntity(currentIndex);
    }
    else {
        currentIndex -= 1;
        setEntity(currentIndex);
    }

})

rightArrow.addEventListener('click', () => {
    if (currentIndex < 2) {
        currentIndex += 1;
        setEntity(currentIndex);
    }
    else {
        currentIndex = 0;
        setEntity(currentIndex);
    }
})


// Кружочки между стрелками
const nextProject1 = document.querySelector('#next-project-1').addEventListener('click', () => {
    setEntity(0);
})
const nextProject2 = document.querySelector('#next-project-2').addEventListener('click', () => {
    setEntity(1);
    currentIndex = 1;
})
const nextProject3 = document.querySelector('#next-project-3').addEventListener('click', () => {
    setEntity(2);
})


// Ссылки над слайдером
const project1 = document.querySelector('#project1').addEventListener('click', () => {
    setEntity(0);
})
const project2 = document.querySelector('#project2').addEventListener('click', () => {
    setEntity(1);
    currentIndex = 1;
})
const project3 = document.querySelector('#project3').addEventListener('click', () => {
    setEntity(2);
})