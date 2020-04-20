import {
    goToAllTopics
} from "./app.js";

const login = () => {

    let formData = new FormData();

    formData.append('username', document.querySelector('#usernameField').value);

    formData.append('password', document.querySelector('#passwordField').value);

    fetch('https://random-access-cards.herokuapp.com/auth/login', {
            method: 'POST',
            body: formData,
        })
        .then(res => res.json())
        .then(user => {
            if (user.username != null) {
                document.querySelector('#topbar-user').innerHTML = ` <i class="fas fa-user"></i> ${user.username}`;
                document.querySelector('#sidebar-user').innerText = user.username;

                // return user.username;
            }
        });

    goToAllTopics();
}

export {
    login
}