import React from "react";

export const MenuOverLay = () => {
    const [isVisible, setVisible] = React.useState(false);
    const [isVisible1, setVisible1] = React.useState(false);
    const [isVisible2, setVisible2] = React.useState(false);
    const [isVisible3, setVisible3] = React.useState(false);
    const domRef = React.useRef();
    const domRef1 = React.useRef();
    const domRef2 = React.useRef();
    const domRef3 = React.useRef();

    function remove_hash_from_url() {
        var uri = window.location.toString();
        console.log('abcd');

        history.replaceState("", document.title, window.location.pathname);

    }

    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        const observer1 = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible1(entry.isIntersecting));
        });
        const observer2 = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible2(entry.isIntersecting));
        });

        const observer3 = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible3(entry.isIntersecting));
        });
        observer.observe(domRef.current);
        observer1.observe(domRef1.current);
        observer2.observe(domRef2.current);
        observer3.observe(domRef3.current);

        window.addEventListener('hashchange', () => {
            window.history.replaceState('', '', '/', ('#')[0]);
        });

        if (window != 'undefined') {
            if (window.performance.getEntriesByType('navigation')[0]?.type == 'reload') {
                event.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' })
                remove_hash_from_url();
            }
        }
    }, []);


    return (
        <>
            <div className="overlay overlay-slide-left" id="overlay">
                <nav>
                    <ul>
                        <li id="nav-1" className="slide-out-1 center">
                            <a href="#home" className="center">Home</a>
                        </li>
                        <li id="nav-2" className="slide-out-2 center">
                            <a href="#products" className="center">Products</a>
                        </li>
                        <li id="nav-3" className="slide-out-3 center">
                            <a href="#solutions" className="center">Solutions</a>
                        </li>
                        <li id="nav-4" className="slide-out-4 center">
                            <a href="#resources" className="center">Resources</a>
                        </li>
                        <li id="nav-5" className="slide-out-5 center">
                            <a href="#company" className="center">Company</a>
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
                      <div className="center content mb-5">
                        <h2>SLHUB</h2>
                        <h2>SLHUB</h2>
                    </div>
                    <div className="slide slide-right bg-none center mt-5">
                        <h1 className="d-flex justify-content-center gap-4 align-items-center ">Meet SLHUB <img className="robot-icon" src="/img/robot.svg" /></h1>
                    </div>
                    <div className="slide slide-left mt-5 bg-none center">
                        <h1>Accelerate wins with your AI Sales Engineer</h1>
                    </div>
                </div>
            </section>
            <section id="products" className="center">
                <div ref={domRef} className={`fade-in-section d-flex flex-column center ${isVisible ? 'is-visible' : ''}`}>
                <h1 >Take your sales process from chaos to clarity with our products</h1>
                <h3 className="mt-4">Unlock 100% trusted semantic search</h3>
                <div>
                    <h5 className="mt-5 fw-bold glow-text">	
                    &#x2714; Enforce access permissions from source applications in results through SiftHub’s out-of-the-box privacy and security features</h5>
                   <h5 className="mt-4 fw-bold glow-text">  &#x2714; Empower your knowledge search with semantic understanding for natural language queries, thanks to deep learning-based LLMs</h5>
                   </div>
               </div>
            </section>
            <section id="solutions" className="center">
                <h1 ref={domRef1} className={`fade-in-section center ${isVisible1 ? 'is-visible' : ''}`}>Enterprise-grade security guaranteed solutions</h1>
            </section>
            <section id="resources" className="center">
                <h1 ref={domRef2} className={`fade-in-section center ${isVisible2 ? 'is-visible' : ''}`}>Bring in your best sales engineer on every deal</h1>
            </section>
            <section id="company" className="center">
                <h1 ref={domRef3} className={`fade-in-section center ${isVisible3 ? 'is-visible' : ''}`}>Have Our AI make decisions for you</h1>
            </section>
        </>
    )
}