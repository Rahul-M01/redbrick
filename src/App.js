import React from "react";
import ReactDOM from "react-dom";
import './App.scss';
import logo from './images/logo.png';
import cover from './images/cover2.png'
import background from './images/background.jpg'

(function () {
    const id = "3ede9488-2db9-11ec-8f7e-0242ac130002";
    let ci_search = document.createElement('script');
    ci_search.type = 'text/javascript';
    ci_search.async = true;
    ci_search.src = 'https://cse.expertrec.com/api/js/ci_common.js?id=' + id;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ci_search, s);
})();

function App() {
    return (
        <body onload="onload()">
            <nav>
                <div class="logo">
                    <img src={logo} />
                </div>
                <div class="hamburger">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div>
                <ul class="nav-links">
                    <li><a class="nav-link-effect" href="#">Home</a></li>
                    <li><a class="nav-link-effect" href="about/about.html">About</a></li>
                    <li><a class="nav-link-effect" href="events/events.html">Events</a></li>
                    <li><a class="nav-link-effect" href="services/services.html">Services</a></li>
                    <li><a class="nav-link-effect" href="contact/contact.html">Contact Us</a></li>
                    <li><a href="join/join.html"><button class="join-button">Join</button></a></li>
                    <div class="container-hamburger" onclick="myFunction(this);openNav()">
                        <div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>
                    </div>
                </ul>
            </nav>
            <div id="mySidenav" class="sidenav">
                <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                <a href="#">Welcome</a>
                <a href="#">Schedule</a>
                <a href="#">Join</a>
            </div>
            <div class="cover-container">
                <img id="top-image" src={cover} class="cover-image" alt="" />
                <div class="text-on-image">
                    <p>Welcome to <br />Redbrick</p><br /><br />
                    <div id="scroll-down-animation">
                        <span class="mouse">
                            <span class="move"></span>
                        </span>
                    </div>
                </div>
            </div>




            <div id="main">
                <div id="welcome">

                    <p class="content-title">WELCOME</p>
                    <hr class="full"></hr>
                    <p class="content-text">This website is a collection of all you need to know about Redbrick<br /> - from Events to the Services we offer!<br></br>
                        <br />Redbrick is DCU’s Computer Networking society. We host events for: <br /> everything computing related this ranges from; <br />- How to setup your own website
                        <br />- Storing your photos online<br />- System Administration <br />-Computer Programming Tutorials.<br /><br /> We also host a number of services for our membership.<br />
                        If you have any questions, please visit the Wiki,<br /> otherwise use the Help page to contact us.</p>
                </div>




                <div id="services">
                    <p class="content-title">SERVICES</p>
                    <hr class="full"></hr>
                    <p class="content-text">We offer a number of services for our members.<br />
                        {/*Create cards for each service*/}
                        <div class="card-container">
                            <div class="card">
                                <img src={logo} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>

                            <div class="card">
                                <img src={logo} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>

                            <div class="card">
                                <img src={logo} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </p>

                </div>
                <div id="join">
                    <p class="title"><span style={{ color: '#ff2e2e' }}>Join</span> Us</p><br /><br />
                    <p class="content">Anyone can register to be a member. Redbrick is a friendly and welcoming society with an environment suitable for those from both technical and non technical backgrounds. We have a strict non-tolerance policy towards discrimination of any kind, and as a result we are a very inclusive and diverse group.<br></br>

                        For more information please view the <a href="join/join.html" class="link-effect">joining Redbrick</a> page.</p><br />
                </div>
            </div>
            <center>
                <section id="jm">
                    <h1>Follow us on Social Media</h1>
                    <div class="fa-icon-wrap fa-icon-effect-8">
                        <a href="https://www.facebook.com/dcuredbrick/" class="fa-icon fa fa-facebook"></a>
                        <a href="https://www.instagram.com/redbrickdcu/?hl=en" class="fa-icon fa-instagram"></a>
                        <a href="https://www.youtube.com/channel/UC3DvQVTPHTM6Pgm-bY_N75A" class="fa-icon fa fa-youtube"></a>
                        <a href="https://twitter.com/redbrickdcu?lang=en" class="fa-icon fa fa-twitter"></a>
                        <a href="https://www.linkedin.com/company/redbrickdcu/about/" class="fa-icon fa fa-linkedin"></a>
                    </div>
                </section>
            </center>
        </body>
    );
}

export default App;
