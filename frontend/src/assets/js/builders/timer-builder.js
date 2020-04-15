import * as timer from '../timer.js'

class TimerBuilder {

    constructor() {
        let body = document.querySelector('#main-element')
        this._container = document.createElement('div');
        this._container.id = 'timer';
        this._bar = document.createElement('div');
        this._bar.id = 'bar';
        this._container.appendChild(this._bar);

        this._moveButton = document.createElement('button');
        this._moveButton.innerText = 'Click me to drain the time bar';

        body.appendChild(this._container);
        body.appendChild(document.createElement('br'));
        body.appendChild(this._moveButton);
        body.appendChild(new InputBuilder('10', '10', undefined, undefined, true));
        body.appendChild(new LabelBuilder('10', '10 sec'));
        body.appendChild(new InputBuilder('30', '30'));
        body.appendChild(new LabelBuilder('30', '30 sec'));
        body.appendChild(new InputBuilder('60', '60'));
        body.appendChild(new LabelBuilder('60', '60 sec'));
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