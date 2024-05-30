class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header class="main-header header-style-one">
        

        <!-- Header Lower -->
        <div class="header-lower">
            <!-- Main box -->
            <div class="main-box">
                <div class="logo-box">
                    <div class="logo"><a href="index.html"><img src="img/main_logo.png" alt="" title="Dolphin Maritime"></a></div>
                </div>

                        <!--Nav Box-->
                <div class="nav-outer">

                    <nav class="nav main-menu">
                        <ul class="navigation">
 
                            <li><a href="index.html">Home</a>
                            </li>

                            <li class="dropdown"><a href="about.html">About us</a>
                            <ul>
                            <li class="dropdown eff"><a href="#">The team</a>
                                    <ul>
                                    <li class="eff"><a href="bod.html">Board of Directors</a></li>
                                    <li class="eff"><a href="kmp.html">List of KMP</a></li>
                                   <!-- <li class="eff"><a href="officelocations.html">Office Locations</a></li>  -->
                                    </ul>
                                </li>
                            </ul>
                            </li>
                            <li><a href="services.html">Services</a>
                            </li>
                            <li><a href="network.html">Network</a>
                               <!-- <ul>
                                    <li class="eff"><a href="overseasnetwork.html">Overseas Network</a></li>
                                </ul> -->
                            </li>
                            <li><a href="achievements.html">Achievements</a></li>
                            <li><a href="contacts.html">Contact Us</a></li>
                            <li><a href="request.html">Get A Quote</a></li>

                        </ul>
                    </nav>
                    <!-- Main Menu End-->

                    <div class="outer-box">
                    
                        <!-- Mobile Nav toggler -->
                        <div class="mobile-nav-toggler"><span class="icon lnr-icon-menu"></span></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Header Lower -->

        <!-- Mobile Menu  -->
        <div class="mobile-menu">
            <div class="menu-backdrop"></div>

            <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
            <nav class="menu-box">
                <div class="upper-box">
                    <div class="nav-logo"><a href="index.html"><img src="img/main_logo.jpg" alt="" title="dolphin"></a></div>
                    <div class="close-btn"><i class="icon fa fa-times"></i></div>
                </div>

                <ul class="navigation clearfix">
                    <!--Keep This Empty / Menu will come through Javascript-->
                </ul>
                <ul class="contact-list-one">
                    <li>
                        <!-- Contact Info Box -->
                        <div class="contact-info-box">
                            <i class="icon lnr-icon-phone-handset"></i>
                            <span class="title">Call Now</span>
                            <a class="rmv" href="tel:+912266310673">+91 2266310673</a>
                            
                        </div>
                        
                        
                    </li>
                    <li>
                        <!-- Contact Info Box -->
                        <div class="contact-info-box">
                            <span class="icon lnr-icon-envelope"></span>
                            <span class="title">Send Email</span>
                            <a class="rmv" href="mailto:info@dolphinmaritime.in">info@dolphinmaritime.in
                            </a>
                        </div>
                    </li>
                    <li>
                        <!-- Timing Info Box -->
                        <div class="contact-info-box">
                            <span class="icon lnr-icon-clock"></span>
                            <span class="title">Timing</span>
                            <span>Mon - Fri:- 10:00 AM - 06:00 PM</span>
                            <br>
                            <span>Sat: 10.00 AM - 04.00 PM</span>
                            <br>
                            <span>Sun: Closed</span>
                        </div>
                    </li>
                </ul>


                
            </nav>
        </div><!-- End Mobile Menu -->
        <!-- Sticky Header  -->

        <!-- End Sticky Menu -->
    </header>
      `;
  }
}

customElements.define("my-header", MyHeader);

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
                      <!--  <li><a href="">Office Locations</a></li> -->

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
                        <p><strong><b>Fax:</b></strong> <a href="fax:+912266310674">022 6631 0674</a></p>
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
                    <div class="page-footer__logo"><a href="index.html"><img src="img/footerlogo.png"
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
                    <div class="page-footer__copyright">&copy; Copyright 2023 by  <a class="CW" href="index.html">Dolphin Maritime Pvt Ltd.</a> All rights Reserved.</div>
                </div>
            </div>
        </div>
    </footer>
        `;
  }
}

customElements.define("my-footer", MyFooter);
