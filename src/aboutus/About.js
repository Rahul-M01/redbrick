import React from "react";
import ReactDOM from "react-dom";
import './App.scss';

function App() {
  return (
    <body onload="onload()">
        <nav>
        <div class="logo">
        <img src={"https://imgur.com/gallery/piOWPtD"} />
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
            <img id="top-image" src={"https://imgur.com/nKbUuVK"} class="cover-image" alt=""/>
            <div class="text-on-image">
                <p>Welcome to <br/></p>
                <strong class="title-gradient">Redbrick</strong><br/><br/>
                <a href="events/events.html"><button class="join-button">What's Going On</button></a>
                <div id="scroll-down-animation">
                    <span class="mouse">
                        <span class="move"></span>
                    </span>
                </div>
            </div>
        </div>
        
        <div class="searchBox">

            <input class="searchInput"type="text" name="" placeholder="Search"/>
            <button class="searchButton" href="#">
                <i class="fa fa-search" style={{fontsize:'24px'}}></i>
            </button>
        </div>

        {/*<div id="theme-switch">
            <input type="checkbox" id="mode" onClick="darkmode()"/>
            <label class="switch" for="mode">
                <i class="fa fa-moon-o" aria-hidden="true" id="moon"></i>
                <i class="fa fa-sun-o" aria-hidden="true" id="sun"></i>
            </label>
        </div>*/}
        <div id="main">
            <div id="welcome">
                <p class="title">Welcome</p><br/><br/>
                <p class="content">This website is a collection of all you need to know about Redbrick - from <a href="events/events.html" class="link-effect">events</a> to the <a href="services/services.html" class="link-effect">services</a> we offer!<br/>

                    If you have any questions, please visit the <a href="https://www.google.com/" class="link-effect">wiki</a>, otherwise use the <a href="contact/contact.html" class="link-effect">help</a> page to contact us.</p>
            </div>
            <div id="calender">
                <div class="calender-div"><br/>
                    <p class="title">Our <span style={{color: '#ff2e2e;'}}>Schedule</span></p>
                    <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FDublin&src=ZW4uaXJpc2gjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%230B8043&mode=WEEK&showTitle=0&showTz=1&showNav=1&showPrint=0&showTabs=0&showCalendars=1" style={{borderwidth:'0', width: "100%", height: "60%", frameborder: "0", scrolling: "no"}} ></iframe>        
                    <br/><br/>
                </div>
            </div>
            <div id="join">
                <p class="title"><span style={{color: '#ff2e2e'}}>Join</span> Us</p><br/><br/>
                <p class="content">Anyone can register to be a member. Redbrick is a friendly and welcoming society with an environment suitable for those from both technical and non technical backgrounds. We have a strict non-tolerance policy towards discrimination of any kind, and as a result we are a very inclusive and diverse group.<br></br>

                For more information please view the <a href="join/join.html" class="link-effect">joining Redbrick</a> page.</p><br/>
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
