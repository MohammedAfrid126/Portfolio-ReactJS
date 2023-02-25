import React from 'react'
import Banner from '../Components/Banner'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import Projects from '../Components/Projects'
import Skills from '../Components/Skills'


export default function Layout() {
    return (
        <>
            <NavBar/>
            <Banner/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </>
    )
}
