const form = document.querySelector(".form");
const userName = document.querySelector("#name");
const surname = document.querySelector("#secondName");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phone");
const agree = document.querySelector("#agree");
const notification = document.createElement('div');
document.body.appendChild(notification);

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    const response = await fetch(`https://polinashneider.space/user`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer: tonyakolb'
      },
      body: JSON.stringify({
        "name": userName.value,
        "secondName": surname.value,
        "phone": phoneNumber.value,
        "email": email.value,
        "agree": agree.checked
      }),
    });

    const data = await response.json();
    console.log(data);

    showNotification('Данные успешно отправлены','success')
    form.reset();
  }
  catch (error) {
    console.log(error);
    showNotification('Произошла ошибка','error')
  }
});


function showNotification(message, status) {
  notification.textContent = message;
  notification.classList.add('notification');
  notification.style.display = 'block';
  notification.style.backgroundColor = status === 'success' ? 'green' : 'red';

  setTimeout(() => {
    notification.style.display = 'none';
  }, 10000);
}