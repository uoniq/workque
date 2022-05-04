import React, { Component } from "react";
//import {NavLink} from 'react-router-dom'
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Carousel from './Carousel';
import News from './News';
import Calendar from './Calendar';
import Stats from './Stats';
import Docs from './Docs';
import Contacts from './Contacts';



const logo = require('./media/logo.png')
//const eye = require('./media/eye.png')
//const headset = require('./media/headset.png')

class Navbar extends Component {
    componentDidMount() {
        var elem = document.querySelector(".sidenav");
        var instance = M.Sidenav.init(elem, {
            edge: "right",
            inDuration: 250
        });
    }

    render() {
        return (
            <div>
            	<nav className = "z-depth-0 white">
					<div className="nav-custom valign-wrapper">
						<img className = "logo responsive-img" alt="" src = {logo}/>
						<ul className="hide-on-med-and-down">
							<li><a href="/">Главная</a></li>
							<li><a href="/news">Новости</a></li>
							<li><a href="/calendar">Календарь</a></li>
							<li><a href="/stats">Статистика</a></li>
							<li><a href="/docs">Документы</a></li>
							<li><a href="/contacts">Контакты</a></li>
							{/*<li><a href="collapsible.html"><img className = "icon" alt="" src = {eye}/></a></li>
							<li><a href="collapsible.html"><img className = "icon" alt="" src = {headset}/></a></li>*/}
						</ul>
						<a href="#" data-target="mobile-demo" className="sidenav-trigger">menu</a>
					</div>
				</nav>
                <ul className="sidenav" id="mobile-demo">
				    <li><a href="/">Главная</a></li>
					<li><a href="/news">Новости</a></li>
					<li><a href="/calendar">Календарь</a></li>
					<li><a href="/stats">Статистика</a></li>
					<li><a href="/docs">Документы</a></li>
					<li><a href="/contacts">Контакты</a></li>
					{/*<li><a href="collapsible.html"><img className = "icon responsive-img" alt="" src = {eye}/></a></li>
					<li><a href="collapsible.html"><img className = "icon responsive-img" alt="" src = {headset}/></a></li>*/}
			  	</ul>
			  	<Router>
			  		<Routes>
			  			<Route exact path="/" element={<Carousel/>}/>
			  			<Route exact path="/news" element={<News/>}/>
			  			<Route exact path="/calendar" element={<Calendar/>}/>
			  			<Route exact path="/stats" element={<Stats/>}/>
			  			<Route exact path="/Docs" element={<Docs/>}/>
			  			<Route exact path="/Contacts" element={<Contacts/>}/>
			  		</Routes>
			  	</Router>
            </div>
        );
    }
}

export default Navbar