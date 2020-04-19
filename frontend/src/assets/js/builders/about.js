class AboutSection {
    constructor() {
        this._container = document.createElement('section')
        this._container.classList.add('about-section')
        this._header = document.createElement('div')
        this._header.classList.add('about-header')

        this._header.innerHTML = '<h1>About Us </h1>'

        this._body = document.createElement('div')
        this._body.innerHTML = `<h3> Ben Beers </h3> <p> Philosophy, software, and music; some of my favorite hobbies. So, I decided to turn creating software into a living and enjoy Heidegger essays and Shostakovich records for when I get home. I am proud to say I am a full-stack Java developer, living in Columbus Ohio. <br> <a href="https://www.linkedin.com/in/ben-beers-75746829/" target="_blank"> <i class="fab fa-linkedin fa-2x"></i> </a>
        <a href="https://ben-beers.github.io/" target="_blank"><i class="fa fa-desktop fa-2x"></i> </a>
         <br> </p>
        <h3> Noah Doughty </h3> <p> Full-stack web developer during the day, savior of cats and beard enthusiast in the evening. As a nuclear welder and weld inspector In the Navy I found that I thoroughly enjoyed technical activities and developed a penchant for attention to detail. Tinkering and getting things to function properly became not only a job but a hobby as well. Once I found coding it was only natural that I was drawn to it, and through this bootcamp have grown to love the difficulty and problem solving it brings. <br> <a href="https://www.linkedin.com/in/noah-doughty/"target="_blank"> <i class="fab fa-linkedin fa-2x"></i> </a>
        <a href="https://ndought.github.io/" target="_blank"><i class="fa fa-desktop fa-2x"></i> </a>
        <br> </p>
        <h3> Jonathan Hardeman </h3> <p> I have devoted my career to cultivating memorable experiences. A decade in Hospitality Management developed a passion for cooking and creativity, collaboration and delivering results. Now life has given me the opportunity to parlay this passion into another field I love, Technology, where the potential for creatation is boundless.  
        <br> <a href="https://www.linkedin.com/in/jhardeman/" target="_blank"> <i class="fab fa-linkedin fa-2x"></i>
         </a>
         <a href="https://jhardeman.github.io/" target="_blank"><i class="fa fa-desktop fa-2x"></i> </a>
        <br> </p>
        <h3> Albert Sigman </h3> <p> Throughout my career that spans marketing, advertising and urban planning-- technology has given me the tools to approach problems with creativity and to build with limitless possibility. <br> <a href="https://www.linkedin.com/in/albertksigman26/" target="_blank"> <i class="fab fa-linkedin fa-2x"></i> </a>
        <a href="https://nightingalemedia.github.io/" target="_blank"><i class="fa fa-desktop fa-2x"></i> </a>
        <br> </p>
        <h3> Colin Wakefield </h3> <p> I began learning Java at the age of 15, throwing myself into the deep end with no idea what I was doing. Since then, I became increasingly fascinated with the power of different languages and I wanted to make sure I knew at least the basic syntax of multiple languages, because what would be a 50 line solution in one language could be a 5 line solution with better performance in another. I couldn't be happier with my journey so far and I'm constantly striving to learn new technologies and leverage that knowledge to help create a more efficient piece of software. <br> <a href="https://www.linkedin.com/in/colinwake/" target="_blank"> <i class="fab fa-linkedin fa-2x"></i> </a>
        <a href="https://colinwake.github.io/" target="_blank"><i class="fa fa-desktop fa-2x"></i> </a>
        <br> </p>`


        this._container.appendChild(this._header)
        this._container.appendChild(this._body)
        return this._container;

    }

}

export {
    AboutSection
}