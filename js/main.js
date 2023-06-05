// 1 -----------------------------------------------------------------------------------------------
const button = document.querySelector('#button');
const content = document.querySelector('#content');


button.addEventListener('click', function(){

    if (content.classList.toggle('content-hidden')) {
        button.textContent = 'Открыть блок';
    } else {
        button.textContent = 'Закрыть блок';
    }
});

// 2 -----------------------------------------------------------------------------------------------

const headers = document.querySelectorAll('[data-name="accordeon-title"]');

headers.forEach(function (item){
    item.addEventListener('click', function() {
        this.nextElementSibling.classList.toggle('hidden');
    })
});

// 3 -----------------------------------------------------------------------------------------------

const tabHeaders = document.querySelectorAll('[data-tab]');
const contentBoxes = document.querySelectorAll('[data-tab-content]')
tabHeaders.forEach(function (item) {
    item.addEventListener('click', function () {
        contentBoxes.forEach(function(item) {
            item.classList.add('hidden');
        });
        const contentBox = document.querySelector('#' + this.dataset.tab);
        contentBox.classList.remove('hidden');
    })
})

// 4 One Modal -----------------------------------------------------------------------------------------------

// const buttons = document.querySelector('[data-modal-button]');
// const modal = document.querySelector('[data-modal]');
// const buttonsClose = document.querySelector('[data-modal-close]');

// buttons.addEventListener('click', function(){
//     modal.classList.remove('hidden');
// })

// buttonsClose.addEventListener('click', function(){
//     modal.classList.add('hidden');
// })

// modal.addEventListener('click', function(){
//     modal.classList.add('hidden');
// })

// modal.querySelector('.modal-window').addEventListener('click', function(e){
//     e.stopPropagation();
// })

// 4 Restyle - Multiple windows ----------------------------------------------------------------------

const modalButtons = document.querySelectorAll('[data-modal-button');
const modalCloseButtons = document.querySelectorAll('[data-modal-close]');
const allModals = document.querySelectorAll('[data-modal]');

modalButtons.forEach(function (item) {
    item.addEventListener('click', function(){
        const modalId = this.dataset.modalButton;
        const modal = document.querySelector('#' + modalId);
        modal.classList.remove('hidden');

        modal.querySelector('.modal-window').addEventListener('click', function(e){
            e.stopPropagation();
        })
    })
})


modalCloseButtons.forEach(function (item) {
    item.addEventListener('click', function(){
        const modal = this.closest('[data-modal]');

        modal.classList.add('hidden');
    })
})

allModals.forEach(function (item) {
    item.addEventListener('click', function(){
        this.classList.add('hidden');
    })
})