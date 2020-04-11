import {login} from "./login.js";

const addEventListener = (query, functionToRun) => {
    document.querySelectorAll(query).forEach(element => {
        element.addEventListener('click', event => {
            event.preventDefault();
            // clearView();
            functionToRun();
        });
    });
};

addEventListener('#btn', login);
