let container = document.querySelector('.container');
let items = document.querySelectorAll('.item');
const rows = document.querySelectorAll('.grid');

const remove = (event) => {
    console.log(event.target);
    event.target.remove();
}

// container.addEventListener('click', (event)=> {
//     event.currentTarget.classList.add('removing');
//     event.currentTarget.addEventListener('animationend', remove)
// })

rows.forEach(row => {
    row.addEventListener('click', (event)=> {
        // event.currentTarget.classList.add('removing');
        // event.currentTarget.addEventListener('animationend', remove)
    })
})

document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (event)=> {
        if(event.target.classList.contains('modal__button--delete')) {
        event.currentTarget.parentElement.classList.add('removing');
    
        event.currentTarget.parentElement.addEventListener('animationend', remove)
        } else if (event.target.classList.contains('modal__button--no-delete')) {
            event.currentTarget.classList.remove('active');
            event.currentTarget.parentElement.classList.remove('removed');
        }
    })
})


const bigger = (event) => {
    console.log(event.currentTarget);
    // event.currentTarget.querySelector('.action').insertAdjacentHTML('afterbegin', '<span>DELETE</span>')
    // event.currentTarget.classList.add('hovering');
    event.currentTarget.querySelector('.modal').classList.add('active');
    // event.currentTarget.querySelector('.zodiac').classList.remove('col-8')
    // event.currentTarget.querySelector('.zodiac').classList.add('col-7')
    // event.currentTarget.querySelector('.action').classList.remove('col-1')
    // event.currentTarget.querySelector('.action').classList.add('col-2')
}

const smaller = (event) => {
    console.log(event.currentTarget);
    event.currentTarget.querySelector('.modal').classList.remove('active');
    // event.currentTarget.classList.remove('hovering');
    // event.currentTarget.querySelector('.zodiac').classList.remove('col-7')
    // event.currentTarget.querySelector('.zodiac').classList.add('col-8')

    // event.currentTarget.querySelector('.action').classList.remove('col-2')
    // event.currentTarget.querySelector('.action').classList.add('col-1')
}

document.querySelectorAll('.grid').forEach(row=> {
    // row.addEventListener('mouseover', bigger);
    // row.addEventListener('mouseleave', smaller);
})


document.querySelectorAll('.fa-trash').forEach(icon => {
    icon.addEventListener('click', (event)=> {
        event.currentTarget.parentElement.nextElementSibling.classList.add('active');
        event.currentTarget.parentElement.parentElement.classList.add('removed')
    })
})