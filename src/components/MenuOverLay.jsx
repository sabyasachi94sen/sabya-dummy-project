export const MenuOverLay = () => {
    return (
        <>
            <div className="overlay overlay-slide-left" id="overlay">
                <nav>
                    <ul>
                        <li id="nav-1" className="slide-out-1 center">
                            <a href="#home" className="center">Home</a>
                        </li>
                        <li id="nav-2" className="slide-out-2 center">
                            <a href="#about" className="center">Products</a>
                        </li>
                        <li id="nav-3" className="slide-out-3 center">
                            <a href="#skills" className="center">Solutions</a>
                        </li>
                        <li id="nav-4" className="slide-out-4 center">
                            <a href="#projects" className="center">Resources</a>
                        </li>
                        <li id="nav-5" className="slide-out-5 center">
                            <a href="#contact" className="center">Company</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="hamburger-menu" id="hamburger-menu">
                <div className="menu-bar1"></div>
                <div className="menu-bar2"></div>
                <div className="menu-bar3"></div>
            </div>
            <section id="home" className="center">
                <p className="logo">SLHUB</p>
                <div className="d-flex flex-column">
                <div className="slide slide-right bg-none center">
                    <h1>Take your sales process from chaos to clarity</h1>
                </div>
                <div className="line fade-in mt-5"></div>
                <div className="slide slide-left mt-5 bg-none center">
                    <h1>Accelerate wins
                    with your AI Sales Engineer</h1>
                </div>
                </div>
            </section>
            <section id="about" className="center">
                <h1>Take your sales process from chaos to clarity</h1>
            </section>
            <section id="skills" className="center">
                <h1>Enterprise-grade security guaranteed</h1>
            </section>
            <section id="projects" className="center">
                <h1>Bring in your best sales engineer on every deal</h1>
            </section>
            <section id="contact" className="center">
                <h1>Have Our AI make decisions for you</h1>
            </section>
        </>
    )
}