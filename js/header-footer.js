class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="menu-dropdown">
        <div class="menu-dropdown__inner" data-value="start">
            <div class="screen screen--start">
                <div class="menu-dropdown__close">
                    <svg class="icon">
                        <use xlink:href="#close"></use>
                    </svg>
                </div>
                <div class="d-block d-lg-none bottom-20">
                    <div class="screen__item screen--trigger item--active" data-category="screen-one">
                        <span>Home</span><span>
                            <svg class="icon">
                                <use xlink:href="#chevron-right"></use>
                            </svg></span>
                    </div>
                    <div class="screen__item screen--trigger" data-category="screen-two">
                        <span>About Us</span><span>
                            <svg class="icon">
                                <use xlink:href="#chevron-right"></use>
                            </svg></span>
                    </div>
                    <div class="screen__item screen--trigger" data-category="screen-three">
                        <span>Services</span><span>
                            <svg class="icon">
                                <use xlink:href="#chevron-right"></use>
                            </svg></span>
                    </div>
                    <div class="screen__item screen--trigger" data-category="screen-three">
                        <span>Network</span><span>
                            <svg class="icon">
                                <use xlink:href="#chevron-right"></use>
                            </svg></span>
                    </div>
                    <div class="screen__item screen--trigger" data-category="screen-five">
                        <span>Achievements</span><span>
                            <svg class="icon">
                                <use xlink:href="#chevron-right"></use>
                            </svg></span>
                    </div>
                    <div class="screen__item screen--trigger" data-category="screen-four">
                        <span>Contact Us</span><span>
                            <svg class="icon">
                                <use xlink:href="#chevron-right"></use>
                            </svg></span>
                    </div>
                </div>
    
                <div class="menu-dropdown__block top-50"><span class="block__title">Email</span><a class="screen__link"
                        href="mailto:info@dolphinmaritime.in">info@dolphinmaritime.in</a></div>
                <div class="menu-dropdown__block top-20">
                    <span class="block__title">Phone number</span>
                    <a class="screen__link" href="tel:+912266310673">+91-22-66310673</a>
                </div>
                <div class="menu-dropdown__block">
                    <ul class="socials list--reset">
                        <li class="socials__item"><a class="socials__link" href="#">
                                <svg class="icon">
                                    <use xlink:href="#facebook"></use>
                                </svg></a></li>
                        <li class="socials__item"><a class="socials__link" href="#">
                                <svg class="icon">
                                    <use xlink:href="#twitter"></use>
                                </svg></a></li>
                        <li class="socials__item"><a class="socials__link" href="#">
                                <svg class="icon">
                                    <use xlink:href="#linkedin"></use>
                                </svg></a></li>
                        <li class="socials__item"><a class="socials__link" href="#">
                                <svg class="icon">
                                    <use xlink:href="#inst"></use>
                                </svg></a></li>
                    </ul>
                </div>
                <div class="menu-dropdown__block top-50"><a class="button button--filled" href="request.html">Get a
                        Quote</a>
                </div>
            </div>
        </div>
        <div class="menu-dropdown__inner" data-value="screen-one">
            <div class="screen screen--sub">
                <div class="screen__heading">
                    <h6 class="screen__back">
                        <svg class="icon">
                            <use xlink:href="#chevron-left"></use>
                        </svg> <span>Home</span>
                    </h6>
                </div>
            </div>
        </div>
        <div class="menu-dropdown__inner" data-value="screen-two">
            <div class="screen screen--sub">
                <div class="screen__heading">
                    <h6 class="screen__back">
                        <svg class="icon">
                            <use xlink:href="#chevron-left"></use>
                        </svg> <span>About Us</span>
                    </h6>
                </div>
                <div class="screen__item"><a class="screen__link" href="bod.html">Board Of Directors</a></div>
                <div class="screen__item"><a class="screen__link" href="kmp.html">List Of KMP</a></div>
                <div class="screen__item"><a class="screen__link" href="officelocations.html">Office Locations</a></div>
            </div>
        </div>
        <div class="menu-dropdown__inner" data-value="screen-three">
            <div class="screen screen--sub">
                <div class="screen__heading">
                    <h6 class="screen__back">
                        <svg class="icon">
                            <use xlink:href="#chevron-left"></use>
                        </svg> <span>Services</span>
                    </h6>
                </div>
    
            </div>
        </div>
        <div class="menu-dropdown__inner" data-value="screen-four">
            <div class="screen screen--sub">
                <div class="screen__heading">
                    <h6 class="screen__back">
                        <svg class="icon">
                            <use xlink:href="#chevron-left"></use>
                        </svg> <span>Network</span>
                    </h6>
                </div>
                <div class="screen__item"><a class="screen__link" href="overseasnetwork.html">Overseas Network</a></div>
    
            </div>
        </div>
        <div class="menu-dropdown__inner" data-value="screen-five">
            <div class="screen screen--sub">
                <div class="screen__heading">
                    <h6 class="screen__back">
                        <svg class="icon">
                            <use xlink:href="#chevron-left"></use>
                        </svg> <span>Achievements</span>
                    </h6>
                </div>
            </div>
        </div>
        <div class="menu-dropdown__inner" data-value="screen-six">
            <div class="screen screen--sub">
                <div class="screen__heading">
                    <h6 class="screen__back">
                        <svg class="icon">
                            <use xlink:href="#chevron-left"></use>
                        </svg> <span>Contact Us</span>
                    </h6>
                </div>
            </div>
        </div>
    </div>
    <header class="page-header">
    <div class="container-fluid">
        <div class="row align-items-center">
            <div class="col-8 col-md-6 col-lg-3 d-flex align-items-center">
                <!-- menu-trigger start-->
                <div class="hamburger d-none d-md-inline-block">
                    <div class="hamburger-inner"></div>
                </div>
                <!-- menu-trigger end-->
                <div class="page-header__logo"><a href="index.html"><img style="max-width: 100%; height: auto;"
                            src="img/main_logo.jpg" alt="logo" /></a></div>
            </div>
            <div class="col-lg-7 d-none d-lg-flex justify-content-center">
                <!-- main menu start-->
                <ul class="main-menu">
                    <li class="main-menu__item main-menu__item--active"><a class="main-menu__link"
                            href="index.html"><span>Home</span></a>
                      
                    </li>
                    <li class="main-menu__item main-menu__item--has-child"><a class="main-menu__link"
                            href="about.html"><span>About Us</span></a>
                        <!-- sub menu start-->
                        <ul class="main-menu__sub-list sub-list--style-2">
                            <li><a href="bod.html"><span>Board of Directors</span></a></li>
                            <li><a href="kmp.html"><span>List of KMP</span></a></li>
                            <li><a href="officelocations.html"><span>Office Locations</span></a></li>
                        </ul>
                        <!-- sub menu end-->
                    </li>
                    <li class="main-menu__item"><a class="main-menu__link"
                            href="services.html"><span>Services</span></a>
                     
                    </li>
                    <li class="main-menu__item main-menu__item--has-child"><a class="main-menu__link"
                            href="network.html"><span>Network</span></a>
                        <!-- sub menu start-->
                        <ul class="main-menu__sub-list">
                            <li><a href="overseasnetwork.html"><span>Overseas Network</span></a></li>
                        </ul>
                        <!-- sub menu end-->
                    </li>
                    <li class="main-menu__item"><a class="main-menu__link"
                            href="javascript:void(0);"><span>achievements</span></a>
                        
                    </li>
                    <li class="main-menu__item"><a class="main-menu__link" href="contacts.html"><span>Contact
                                Us</span></a>
                       
                    </li>
                </ul>
                <!-- main menu end-->
            </div>
            <div class="col-4 col-md-6 col-lg-2 d-flex justify-content-end align-items-center">
                <a class="button button--filled" href="request.html">Get a Quote</a>
                <!-- menu-trigger start-->
                <div class="hamburger d-inline-block d-md-none">
                    <div class="hamburger-inner"></div>
                </div>
                <!-- menu-trigger end-->
            </div>
        </div>
    </div>
</header>
      `
    }
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<footer class="page-footer"><img class="section--bg b0 r0" src="img/footer-bg.png" alt="bg" />
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-lg-4">
                    <h6 class="page-footer__title title--white">Discover</h6>
                    <ul class="page-footer__menu list--reset">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="">Office Locations</a></li>

                        <li><a href="services.html">Services</a></li>
                        <li><a href="network.html">Network</a></li>
                        <li><a href="">Achievements</a></li>
                        <li><a href="contacts.html">Contact Us</a></li>
                        <li><a href="request.html">Get a Quote</a></li>
                    </ul>
                </div>
                <div class="col-md-6 col-lg-5 col-xl-4 offset-xl-1 top-40 top-md-0">
                    <h6 class="page-footer__title title--white">Main office</h6>
                    <div class="page-footer__details">
                        <p><strong> <b> Address:</b></strong> <br>
                            <span>321, Podar Chambers,
                                S A Brelvi Road
                                Fort Mumbai-400001
                            </span>
                        </p>
                        <br>
                        <p><strong> <b>Phone:</b> </strong> <a href="tel:+912266310673">+91 2266310673</a></p>
                        <p><strong>  <b>Email:</b> </strong> <a href="mailto:info@dolphinmaritime.in
                            ">info@dolphinmaritime.in
                            </a></p>
                        <br>
                        <p><strong> <b>Openning hours</b> :</strong>
                            <br><span>Mon - Fri:- 10:00 AM - 06:00 PM</span>
                            <br>
                            <span>Sat: 10.00 AM - 04.00 PM</span>
                            <br>
                            <span>Sun: Closed</span>
                        </p>
                    </div>
                </div>
                <div class="col-lg-3 d-flex flex-column justify-content-between align-items-sm-center align-items-lg-end top-40 top-lg-0">
                    <div class="page-footer__logo"><a href="index.html"><img src="img/DMLOGO-transformed.png"
                                alt="logo" /></a></div>
                    <ul class="socials list--reset">
                        <li class="socials__item"><a class="socials__link" href="">
                                <svg class="icon">
                                    <use xlink:href="#facebook"></use>
                                </svg></a></li>
                        <li class="socials__item"><a class="socials__link" href="">
                                <svg class="icon">
                                    <use xlink:href="#twitter"></use>
                                </svg></a></li>
                        <li class="socials__item"><a class="socials__link" href="">
                                <svg class="icon">
                                    <use xlink:href="#linkedin"></use>
                                </svg></a></li>
                        <li class="socials__item"><a class="socials__link" href="">
                                <svg class="icon">
                                    <use xlink:href="#inst"></use>
                                </svg></a></li>
                    </ul>
                </div>
            </div>
            <div class="row top-50 last">
                <div class="col-lg-6 text-sm-center text-lg-left">
                    <div class="page-footer__privacy"><a href="">Terms and conditions</a><a href="">Privacy
                            policy</a><a href="">Cookies</a></div>
                </div>
                <div class="col-lg-6 text-sm-center text-lg-right">
                    <div class="page-footer__copyright">&copy; Copyright 2023 by  <a class="CW" href="index.html">Sahara Maritime Pvt Ltd.</a> All rights Reserved.</div>
                </div>
            </div>
        </div>
    </footer>
        `
    }
}

customElements.define('my-footer', MyFooter)