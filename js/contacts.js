const toggleButtons = document.querySelectorAll('.toggle-button');


toggleButtons.forEach((toggleButton) => {
    toggleButton.addEventListener ('click', () => {
        const listItem = toggleButton.closest('.list-item');
        const answear = listItem.querySelector('.answear');
        answear.classList.toggle('answear_active');
            
        
        
    });
});


