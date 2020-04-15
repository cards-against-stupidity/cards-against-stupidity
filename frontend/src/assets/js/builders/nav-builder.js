class NavBar {
    constructor() {
        this._container = document.createElement('div');
        this._container.className = "topnav";

    }

    createLi(idName, text) {
        this._menuElement = document.createElement('li');
        this._menuElementDiv = document.createElement('div');
        this._menuElementDiv.id = idName;
        this._menuElementDiv.innerText = text;
        this._menuElement.appendChild(this._menuElementDiv)
        this._container.appendChild(this._menuElement);
        return this;

    }

    render() {
        return this._container;

    }
}
export{
    NavBar
}