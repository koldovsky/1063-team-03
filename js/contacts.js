const toggleButtons = document.querySelectorAll('.toggle-button');


toggleButtons.forEach((toggleButton) => {
    toggleButton.addEventListener ('click', () => {
        const listItem = toggleButton.closest('.list-item');
        const answear = listItem.querySelector('.answear');
        answear.classList.toggle('answear_active');
            
        
        
    });
});

const form = document.getElementById("contact-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  const status = document.getElementById("contact-form-status");
  fetch(event.target.action, {
    method: 'POST',
    body: new FormData(event.target),
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Thanks for your submission!";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form"
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit);
