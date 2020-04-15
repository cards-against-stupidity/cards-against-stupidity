import * as timer from '../timer.js'

class TimerBuilder {

    constructor() {
        let body = document.querySelector('.study-mode')

        this._timerContainer = document.createElement('div');
        this._timerContainer.id = "timer-container";

        this._container = document.createElement('div');
        this._container.id = 'timer';
        this._bar = document.createElement('div');
        this._bar.id = 'bar';
        this._container.appendChild(this._bar);

        this._moveButton = document.createElement('button');
        this._moveButton.innerText = 'Click me to drain the time bar';

        this._timerContainer.appendChild(this._container);
        this._timerContainer.appendChild(document.createElement('br'));
        this._timerContainer.appendChild(this._moveButton);
        this._timerContainer.appendChild(new InputBuilder('10', '10', undefined, undefined, true));
        this._timerContainer.appendChild(new LabelBuilder('10', '10 sec'));
        this._timerContainer.appendChild(new InputBuilder('30', '30'));
        this._timerContainer.appendChild(new LabelBuilder('30', '30 sec'));
        this._timerContainer.appendChild(new InputBuilder('60', '60'));
        this._timerContainer.appendChild(new LabelBuilder('60', '60 sec'));
        body.appendChild(this._timerContainer)
        this._moveButton.addEventListener('click', timer.move);
    }

}

class InputBuilder {

    constructor(id, value, type = 'radio', name = 'time', checked = false) {
        let input = document.createElement('input');
        input.id = id;
        input.type = type;
        input.name = name;
        input.checked = checked;
        input.value = value;
        return input;
    }

}

class LabelBuilder {

    constructor(whatFor, value) {
        let label = document.createElement('label');
        label.htmlFor = whatFor;
        label.innerText = value;
        return label;
    }

}

export {
    TimerBuilder
}