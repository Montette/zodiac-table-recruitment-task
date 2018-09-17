(function () {

    const users = document.querySelectorAll('.user');

    const showModal = (user) => {
        const modal = user.querySelector('.modal');
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        user.classList.add('remove')
    }

    const removeFromDOM = (event) => {
        if (!('remove' in Element.prototype)) {
            Element.prototype.remove = function () {
                if (this.parentNode) {
                    this.parentNode.removeChild(this);
                }
            };
        }
        event.target.remove();
    }

    const removeUser = (user) => {
        user.classList.add('remove-animation');
        user.addEventListener('animationend', removeFromDOM)
    }

    const cancelRemoving = (user) => {
        const modal = user.querySelector('.modal');
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        user.classList.remove('remove')
    }

    [...users].forEach(user => {
        user.addEventListener('click', (event) => {
            if (event.target.classList.contains('action__button')) {
                showModal(user)
            }
            if (event.target.classList.contains('modal__button--confirm')) {
                removeUser(user)
            }
            if (event.target.classList.contains('modal__button--reject')) {
                cancelRemoving(user)
            }
        })
    })
    
})()