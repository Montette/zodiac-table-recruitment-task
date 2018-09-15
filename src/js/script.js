document.querySelectorAll('.fa-trash').forEach(icon => {
    icon.addEventListener('click', (event)=> {
        console.log('gg');
        event.currentTarget.parentElement.nextElementSibling.classList.add('active');
        event.currentTarget.parentElement.parentElement.classList.add('remove')
    })
})