document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    //send data to server
    const response = await fetch('/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    });

    const data = await response.json();

    if(response.ok){
        alert('New user created!');
    } else {
        alert(data.message);
    }
});