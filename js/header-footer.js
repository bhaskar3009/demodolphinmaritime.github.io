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
                    <!-- <a class="screen__link" href="tel:+18009756511">+ 1800 - 975 65 11</a> -->
                </div>
                <div class="menu-dropdown__block">
                    <ul class="socials list--reset">
                        <li class="socials__item"><a class="socials__link" href="#">
                                <svg class="icon">
                                    <use xlink:href="#youtube"></use>
                                </svg></a></li>
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
                <div class="screen__item"><a class="screen__link" href="">Board Of Directors</a></div>
                <div class="screen__item"><a class="screen__link" href="">List Of KMP</a></div>
                <div class="screen__item"><a class="screen__link" href="">Office Locations</a></div>
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
                <div class="screen__item"><a class="screen__link" href="#">Overseas Network</a></div>
    
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
                            <li><a href="team.html"><span>Board of Directors</span></a></li>
                            <li><a href="team.html"><span>List of KMP</span></a></li>
                            <li><a href="locations.html"><span>Office Locations</span></a></li>
                        </ul>
                        <!-- sub menu end-->
                    </li>
                    <li class="main-menu__item"><a class="main-menu__link"
                            href="services.html"><span>Services</span></a>
                     
                    </li>
                    <li class="main-menu__item main-menu__item--has-child"><a class="main-menu__link"
                            href=""><span>Network</span></a>
                        <!-- sub menu start-->
                        <ul class="main-menu__sub-list">
                            <li><a href="service-details.html"><span>Overseas Network</span></a></li>
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
        this.innerHTML = `
        <footer class="main-footer">
        <div class="bg-image"  style="background-image: url(images/background/5.jpg)"></div>
        <div class="anim-icons">
            <span class="icon icon-plane-3 bounce-x"></span>
        </div>

        <!-- Contact info -->
        <div class="contacts-outer">
            <div class="auto-container">
                <div class="row">
                    <!-- Contact Info Block -->
                    <div class="contact-info-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight">
                        <div class="inner-box">
                            <div class="icon-box"><i class="icon flaticon-international-shipping-2"></i></div>
                            <h4 class="title">Address</h4>
                            <div class="text">105, 106 & 108, 1st Floor, Plot no. 142, Plaza Shopping Centre, Sheriff Devji Street, Chakala Market, Mandvi, Mumbai - 400003</div>
                        </div>
                    </div>

                    <!-- Contact Info Block -->
                    <div class="contact-info-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="300ms">
                        <div class="inner-box">
                            <div class="icon-box"><i class="icon flaticon-stock-1"></i></div>
                            <h4 class="title">Contact</h4>
                            <div class="text">

                                <a href="mailto:saharamaritime@hotmail.com
                                ">saharamaritime@hotmail.com
                                </a><br>
                                <a href="tel:+91 9819980001">+91 9819980001</a><br>
    
                                <a href="tel:+022 23479362
                                ">+022 23479362
                                </a>

                            </div>
                        </div>
                    </div>

                    <!-- Contact Info Block -->
                    <div class="contact-info-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="600ms">
                        <div class="inner-box">
                            <div class="icon-box"><i class="icon flaticon-24-hours-2"></i></div>
                            <h4 class="title">Timing</h4>
                            <div class="text">Mon - Sat: 11.00 AM-07.00 PM Sunday: CLOSED</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Contact info -->

        <!--Widgets Section-->
        <div class="widgets-section">
            <div class="auto-container">
                <div class="row">
                    <!--Footer Column-->
                    <div class="footer-column col-xl-4 col-lg-12 col-md-6 col-sm-12">
                    <div class="logo-box">
                    <div class="logo"><a href="#"><img width="150" 
                    height="50" src="images/footer-logo.png.jpg" alt="" title="Sahara Maritime"></a></div>
                </div>
                        <div class="footer-widget about-widget">
                            <div class="logo"><a href="index-2.html"><img src="images/logo-2.png" alt="" ></a></div>
                            <div class="text">We pride ourselves on providing customized logistics solutions for your unique needs and committed to delivering the highest level of customer satisfaction, and we look forward to working with you on your next export shipment</div>
                            <a href="page-about.html" class="theme-btn btn-style-one hvr-light small"><span class="btn-title">About</span></a>
                        </div>
                    </div>

                    <!--Footer Column-->
                    <div class="footer-column col-xl-5 col-lg-3 col-md-6 col-sm-12">
                        <div class="footer-widget">
                            <h3 class="widget-title">Service</h3>
                            <ul class="user-links">
                                <li><a href="#">Freight Forwarding</a></li>
                                <li><a href="#">Logistics and Consulting</a></li>
                                <li><a href="#">Warehousing and Distribution</a></li>
                                <li><a href="#">Real Time Tracking</a></li>
                                <li><a href="#">Customs Clearance and Brokerage</a></li>
                            </ul>
                        </div>
                    </div>


                    <!--Footer Column-->
                    <div class="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="footer-widget gallery-widget">
                            <h3 class="widget-title">Projects</h3>
                            <div class="widget-content">
                                <div class="outer clearfix">
                                    <figure class="image">
                                        <a href="#"><img src="images/resource/project-thumb-1.jpg" alt=""></a>
                                    </figure>

                                    <figure class="image">
                                        <a href="#"><img src="images/resource/project-thumb-2.jpg" alt=""></a>
                                    </figure>

                                    <figure class="image">
                                        <a href="#"><img src="images/resource/project-thumb-3.jpg" alt=""></a>
                                    </figure>

                                    <figure class="image">
                                        <a href="#"><img src="images/resource/project-thumb-4.jpg" alt=""></a>
                                    </figure>

                                    <figure class="image">
                                        <a href="#"><img src="images/resource/project-thumb-5.jpg" alt=""></a>
                                    </figure>

                                    <figure class="image">
                                        <a href="#"><img src="images/resource/project-thumb-6.jpg" alt=""></a>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--Footer Column-->
                    

                </div>
            </div>
        </div>

        <!--Footer Bottom-->
        <div class="footer-bottom">
            <div class="auto-container">
                <div class="inner-container">
                    <div class="copyright-text">
                        <p>&copy; Copyright 2023 by  <a href="index.html">Sahara Maritime Pvt Ltd. All rights Reserved.</a></p>
                    </div>

                    
                </div>
            </div>
        </div>
    </footer>
        `
    }
}

customElements.define('my-footer', MyFooter)