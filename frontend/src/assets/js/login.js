const login = () => {

    let formData = new FormData();

    formData.append('username', document.querySelector('#usernameField').value);

    formData.append('password', document.querySelector('#passwordField').value);

    fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        body: formData,
    })
        .then(res => res.json())
        .then(user => {
            if (user.username != null) {
                document.querySelector('#topbar-user').innerText = user.username;
                document.querySelector('#sidebar-user').innerText = user.username;
                return user.username;
            }
        });

    return 'fail';
}

export {
    login
}