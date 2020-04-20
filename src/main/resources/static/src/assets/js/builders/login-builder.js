import {
  login
} from '../login.js';

class LoginBuilder {

  constructor() {
    this._container = document.createElement('section');
    this._container.classList.add('login-section')
    this._form = new FormBuilder('box', 'login-form')
      .addInput('text', 'usernameField', 'username', 'Username')
      .addInput('password', 'passwordField', 'password', 'Password')
      .addButton('btn')
      .addImage();
    this._container.appendChild(this._form.render());

    return this._container;
  }

}

class FormBuilder {

  constructor(className, id) {
    this._form = document.createElement('form')
    this._form.className = className;
    this._form.id = id;
    let header = document.createElement('h1');
    header.innerText = 'Login'
    this._form.appendChild(header);
  }

  addButton(id, type = 'submit') {
    let button = document.createElement('button');

    button.id = id;

    button.type = type;
    button.innerText = "Log In"
    button.addEventListener('click', e => {
      e.preventDefault();
      login();
    })
    this._form.appendChild(button);

    return this;
  }

  addInput(type, id, name, placeholder) {
    let input = document.createElement('input');

    input.type = type;

    input.id = id;

    input.name = name;

    input.placeholder = placeholder;

    this._form.appendChild(input);

    return this;
  }

  addImage(src = './src/images/RAMlogo.png', height = '60%', width = '60%') {
      let image = document.createElement('img');

      image.src = src;

      image.height = height;

      image.width = width;

      this._form.appendChild(image);

      return this;
  }

  render() {
    return this._form;
  }

}

export {
  LoginBuilder
}
