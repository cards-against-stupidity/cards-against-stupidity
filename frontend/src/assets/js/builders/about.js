
class AboutSection {
    constructor(){
        this._container = document.createElement('section')
        this._container.classList.add('about-section')
        this._header = document.createElement('div')
        this._header.classList.add('about-header')
    
        this._header.innerHTML = '<h1>About Us </h1>'

        this._body = document.createElement('div')
        this._body.innerHTML = `<p> Random access cards is a
        study tool made by students for students.  In just three weeks
        we developed a full stack application using Java and Javascript.
        Working 100% remotely due to rules from quarantine we were able to use
        GitHub and Agile methodologies. <br><br> 
        The idea for the app is simple, log in, create a topic and make a deck of
        cards that will help you study.  After creating a deck, you can 
        enter 'study mode' and start studying.  Things like the timer make
        it more exciting so you can track your project.`;

        this._container.appendChild(this._header)
        this._container.appendChild(this._body)
        return this._container;

    }

}

export {AboutSection}