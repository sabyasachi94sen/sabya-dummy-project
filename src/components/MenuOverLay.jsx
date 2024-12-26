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
                <p className="logo">Crenovent</p>
            </section>
            <section id="about" className="center">
                <h1>Know More Who I am</h1>
            </section>
            <section id="skills" className="center">
                <h1>Here's all the stuff I do</h1>
            </section>
            <section id="projects" className="center">
                <h1>Here's stuff I made recently</h1>
            </section>
            <section id="contact" className="center">
                <h1>Have me make stuff for you</h1>
            </section>
        </>
    )
}