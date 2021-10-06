export const renderHome = () => {
    const content = `
    <section class="hero">
    <div class="content">
        <p>Hi, my name is</p>
        <h2 class="name">Paulo Omega.</h2>
        <h3>I build things that lives on the web.</h3>
        <div>
            <p>
                I am a web developer specializing in building (and      occasionally designing) exceptional
                full-stack web applications and anything in
                between.
            </p>
        </div>
    </div>

    <div class="social--media">
        <a href="https://github.com/omegapaulo" crossorigin="anonymous"         target="_blank"
            aria-label="Link to social media"><i class="fab         fa-github-square"></i></a>
        <a href="https://www.linkedin.com/in/paulo-omega-4899ab171/"        crossorigin="anonymous"
            target="_blank" aria-label="Link to social media"><i class="fab         fa-linkedin"></i></a>
        <a href="https://twitter.com/omegapaulo_" crossorigin="anonymous"       target="_blank"
            aria-label="Link to social media"><i class="fab         fa-twitter-square"></i></a>
        <a href="https://www.instagram.com/omegapaulo/"         crossorigin="anonymous" target="_blank"
            aria-label="Link to social media"><i class="fab         fa-instagram-square"></i></a>
        <div class="line--up"></div>
    </div>
    </section>
`;
    document.querySelector('#app').innerHTML = content;
};
