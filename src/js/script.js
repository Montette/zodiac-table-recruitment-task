(function (){

const users = document.querySelectorAll('.user');

const showModal = (user) => {
    user.querySelector('.modal').classList.add('active');
    user.classList.add('remove')
}

const removeFromDOM = (event) => {
    if (!('remove' in Element.prototype)) {
        Element.prototype.remove = function() {
            if (this.parentNode) {
                this.parentNode.removeChild(this);
            }
        };
    }
    event.target.remove();
}

const removeUser = (user) => {
    // user.querySelector('.modal').classList.remove('active');
    user.classList.add('remove-animation');
    user.addEventListener('animationend', removeFromDOM)

}

const cancelRemoving = (user) => {
    user.querySelector('.modal').classList.remove('active');
    user.classList.remove('remove')
}

[...users].forEach(user => {
    user.addEventListener('click', (event)=> {
        console.log(event.target)
        if(event.target.classList.contains('action__button')) {
            showModal(user)
        }
        if(event.target.classList.contains('modal__button--confirm')) {
            removeUser(user)
        }
        if(event.target.classList.contains('modal__button--reject')) {
            cancelRemoving(user)
        }
    })
})
})()