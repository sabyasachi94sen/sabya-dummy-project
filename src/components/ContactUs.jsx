import { Button } from "@mui/base"

export const ContactUs = () => {
    return (
        <section className="footer_get_touch_outer">
            <div className="container">
                <div className="footer_get_touch_inner grid-70-30">
                    <div className="colmun-70 get_form">
                        <div className="get_form_inner">
                            <div className="get_form_inner_text">
                                <h3>Get In Touch</h3>
                            </div>
                            <form action="#" className="contact-form">
                                <div className="grid-50-50 contact-form-ip">
                                    <input type="text" placeholder="First Name" />
                                    <input type="text" placeholder="Last Name" />
                                    <input type="email" placeholder="Email" />
                                    <input type="tel" placeholder="Phone/Skype" />
                                </div>
                                <div className="grid-full">
                                    <textarea placeholder="About Your Project" cols="30" rows="10"></textarea>
                                    {/* <Button >Book a Demo</Button> */}
                                    <div className="button-wrapper"><input data-w-id="65d25ac6-2995-4086-701c-b36ae063db80" className="btn-primary mt-1-5rem w-button" type="submit" value="Submit" />Join Our Team</div>
                                </div>
                            </form>
                        </div>

                    </div>

                    <div className="colmun-30 get_say_form">
                        <h5>Say Hi!</h5>
                        <ul className="get_say_info_sec">
                            <li>
                                <i className="fa fa-envelope"></i>
                                <a href="mailto:">ks@crenovent.com</a>
                            </li>
                            <li>
                                <i className="fa fa-whatsapp"></i>
                                <a href="tel:">+91-9818700854 </a>
                            </li>
                            <li>
                                <i className="fa fa-skype"></i>
                                <a target="_blank" href="https://www.linkedin.com/in/kaushalsingh/">Linkedin</a>
                            </li>
                        </ul>
                        <ul className="get_say_social-icn">
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}