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
const setEntity = (index, pastObject) => {
    const past = document.querySelector(`#project${pastObject}`);
    const project = document.querySelector(`#project${index}`);

    const pastNextProject = document.querySelector(`#next-project-${pastObject}`);
    const nextProject = document.querySelector(`#next-project-${index}`);

    city.innerHTML = entities[index].city;
    area.innerHTML = entities[index].area;
    time.innerHTML = entities[index].time;
    img.src = entities[index].img;

    project.classList.add('active');
    past.classList.remove('active');

    nextProject.classList.add('next-project_active');
    pastNextProject.classList.remove('next-project_active');

}


// Стрелки 
const leftArrow = document.querySelector('#left-arrow');
const rightArrow = document.querySelector('#right-arrow');

// Счётчик
let currentIndex = 0;

leftArrow.addEventListener('click', () => {
    if (currentIndex <= 0) {
        currentIndex = 2;
        setEntity(currentIndex, 0);
    }
    else {
        currentIndex -= 1;
        setEntity(currentIndex, currentIndex + 1);
    }

})

rightArrow.addEventListener('click', () => {
    if (currentIndex < 2) {
        currentIndex += 1;
        setEntity(currentIndex, currentIndex - 1);
    }
    else {
        currentIndex = 0;
        setEntity(currentIndex, 2);
    }
})

// Кружочки между стрелками
const nextProject0 = document.querySelector('#next-project-0').addEventListener('click', () => {
    setEntity(0, 1);
    setEntity(0, 2);
    currentIndex = 0;
})
const nextProject1 = document.querySelector('#next-project-1').addEventListener('click', () => {
    setEntity(1, 0);
    setEntity(1, 2);
    currentIndex = 1;
})
const nextProject2 = document.querySelector('#next-project-2').addEventListener('click', () => {
    setEntity(2, 1);
    setEntity(2, 0);
    currentIndex = 2;
})


// Ссылки над слайдером
const project0 = document.querySelector('#project0').addEventListener('click', () => {
    setEntity(0, 1);
    setEntity(0, 2);
    currentIndex = 0;
})
const project1 = document.querySelector('#project1').addEventListener('click', () => {
    setEntity(1, 0);
    setEntity(1, 2);
    currentIndex = 1;
})
const project2 = document.querySelector('#project2').addEventListener('click', () => {
    setEntity(2, 1);
    setEntity(2, 0);
    currentIndex = 2;
})