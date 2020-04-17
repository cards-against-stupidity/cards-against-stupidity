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

        this._moveButton = document.createElement('input');
        this._moveButton.type = 'checkbox'
        this._moveButton.innerText = 'Click me to drain the time bar';
        this._moveButton.id = 'timer-onoff'

        this._span = document.createElement('span');
        this._span.id = "timer-button-span"

        this._btbg = document.createElement('span');
        this._btbg.id = "button-bg"

        this._inputHolder = document.createElement('label');
        this._inputHolder.id = 'input-holder'

        this._timerContainer.appendChild(this._container);
        this._timerContainer.appendChild(document.createElement('br'));
   
        this._inputHolder.appendChild(this._moveButton);
        this._inputHolder.appendChild(this._span);
        this._inputHolder.appendChild(this._btbg);

        let timerLabel = new LabelBuilder('timer', `Timer`)
        timerLabel.id = 'timer-label'


        this._inputHolder.appendChild(timerLabel)
        this._timerContainer.appendChild(this._inputHolder)
        this._timerContainer.appendChild(new InputBuilder('10', '10', undefined, undefined, true));
        this._timerContainer.appendChild(new LabelBuilder('10', '10 sec'));
        this._timerContainer.appendChild(new InputBuilder('30', '30'));
        this._timerContainer.appendChild(new LabelBuilder('30', '30 sec'));
        this._timerContainer.appendChild(new InputBuilder('60', '60'));
        this._timerContainer.appendChild(new LabelBuilder('60', '60 sec'));
        // this._timerContainer.appendChild(new RangeBuilder('timer-range', 0, 600, undefined, 'range'))
        body.appendChild(this._timerContainer)
        this._moveButton.addEventListener('click', () => {

            this._moveButton.checked ? (timer.move()) : (timer.stop());
        })
    }

}
class RangeBuilder{
    constructor(id, min, max, type = 'range', name) {
        let input = document.createElement('input');
        input.id = id;
        input.type = 'range';
        input.min = min;
        input.max = max;
        input.name = name;
        input.value = 100;
        return input;
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