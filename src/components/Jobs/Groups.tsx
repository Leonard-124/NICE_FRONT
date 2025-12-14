

//import React from 'react'
//import { Link } from "react-router-dom";
//import { Rocket } from "lucide-react";
import rocket from "../../assets/images/rocket.png"
import space_explore from "../../assets/images/space_explore.png"
import launch_rocket from "../../assets/images/launch_rocket.png"
import upgrade_rocket from "../../assets/images/upgrade_rocket.png"

//<script src="js/main.js" defer></script> HTML

const Groups = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black dark:text-white sm:scroll-smooth">
      <nav className="bg-teal-700 text-white sticky top-0 z-10">
      <div className="max-w-4-xl mx-auto p-4 flex justify-between items-center">
        
        <a href="#hero" className="text-3xl font-medium">IBONNI Systems 🚀</a>
        <div>
          
            <button id="hamburger-button" className="text-3xl md:hidden cursor-pointer"> {/*&#9776;*/}
              <div className="bg-white w-8 h-1 rounded absolute top-4 mt-0.5 before:content-[''] before:bg-white before:rounded before:absolute before:transition-all before:duration-500 before:-translate-x-4 before:-translate-y-3 after:content-[''] after:w-8 after:h-1 after:bg-white after:rounded after:absolute after:transition-all after:duration-500 after:-translate-x-4 after:-translate-y-3 
              "></div>
            </button>
            <nav className="hidden md:block space-x-8 text-xl" aria-label="main">
                <a href="#rockets" className="hover:opacity-">Our Virtues</a>
                <a href="#testimonials" className="hover:opacity-">Testimonial</a>
                <a href="#contact" className="hover:opacity-">Contact</a>
            </nav>
        </div>
      </div>
      <section id="mobile-menu" className="absolute top-68 bg-black w-full text-5xl  flex-col justify-content-center origin-top animate-open-menu hidden">
        <button className="text-8xl self-end px-6">
          &times;
        </button>
        <nav className="flex flex-col min-h-screen items-center py-8" aria-label="mobile">
          <a href="#hero" className="w-full text-center py-6 hover:opacity-90">Home</a>
          <a href="#rockets" className="w-full text-center py-6 hover:opacity-90">Our Rockets</a>
          <a href="#testimonials" className="w-full text-center py-6 hover:opacity-90">Testimonials</a>
          <a href="#contact" className="w-full text-center py-6 hover:opacity-90">Contact Us</a>
          <a href="#footer" className="w-full text-center py-6 hover:opacity-90">Legal</a>
        </nav>
      </section>
      </nav>
      <main className="max-w-4xl mx-auto">
        <section id="hero" className="flex flex-col-reverse justify-center sm:flex-row px-6 items-center gap-8 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height">
            <article className="sm:w-1/2">
            <h2 className="max-w-md text-4xl font-bold text-center sm:text-5sl sm:text-left text-slate-900 dark:text-white">We Invest in technologies and <span className="text-indigo-700 dark:text-indigo-300">System Engineering Design</span> that make us thrive.</h2>
            <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">We're creating a system that is user friendly and meets our customer satisfaction and needs.</p>
            <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">Through the technologies that we employ in our stack everything just falls into place and boom that system is serving its purpose.</p>
            </article>
            <img className="w-1/2" src={rocket} alt="rocket-img"/>
        </section>
        <hr className="mx-auto bg-black dark:bg-white w-1/2" />
        <section id="rockets" className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height">
            <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">Technologies.</h2>
            <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
            <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
            <img src={space_explore} alt="" className="w-1/2 mb-6" />
            <h3 className="text-3xl text-center text-slate-900 dark:text-white">Explorer</h3>
            <p className="hidden sm:block text-3xl text-center text-slate-500 dark:text-slate-400">Explorer</p>
            <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">Affordable Exploration</p>
            </li>

            <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
            <img src={launch_rocket} alt="" className="w-1/2 mb-6" />
            <h3 className="text-3xl text-center text-slate-900 dark:text-white">Adventure</h3>
            <p className="hidden sm:block text-3xl text-center text-slate-500 dark:text-slate-400">Best Selling</p>
            <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">Rocket Launch</p>
            </li>

            <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
            <img src={upgrade_rocket} alt="" className="w-1/2 mb-6" />
            <h3 className="text-3xl text-center text-slate-900 dark:text-white">Infinity</h3>
            <p className="hidden sm:block text-3xl text-center text-slate-500 dark:text-slate-400">Best Brand.</p>
            <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">Luxury Exploration</p>
            </li>

            </ul>
        </section>
        <hr className="mx-auto bg-black dark:bg-white w-1/2" />

        <section id="testimonials" className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height">
            <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">Testimonials.</h2>
            <figure className="my-12">
              <blockquote className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
                <p className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2  after:content-['\201D'] after:font-serif after:absolute after:-bottom-20 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2">
                  Acme
                  has always been there for me. Their Explorer rocket arrived in a wooden crate as expected. Life-long customer! A++ shopping experience.
                </p>
              </blockquote>
              <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
                  &#8212;While E. Coyote, Genius
                </figcaption>
            </figure>
            <figure className="my-12">
              <blockquote className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
                <p className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2  after:content-['\201D'] after:font-serif after:absolute after:-bottom-20 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2">
                  Acme
                  This exploration is full of fan and life feels good when you are on the verge of it all <span className="italic">This Makes Me very Happy!</span> I mean Who wouldn't want such an experience tailored to them on the table.
                </p>
              </blockquote>
              <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
                  &#8212;Marvin The Builder &amp; G-8
                </figcaption>
            </figure>
            <figure className="my-12">
              <blockquote className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
                <p className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2  after:content-['\201D'] after:font-serif after:absolute after:-bottom-20 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2">
                  Infinity
                  It is beloved matrix that makes the machine in our rockets scale like it has never been seen before, this just shows the scale and magnitude used to move these machines.
                </p>
              </blockquote>
              <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
                  &#8212;Oluoch Leonard &amp; IAAS
                </figcaption>
            </figure>
        </section>
        <hr className="mx-auto bg-black dark:bg-white w-1/2" />

        <section id="contact" className="p-6 my-12 scroll-mt-16 widescreen:section-min-height tallscreen:section-min-height">
            <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">Contact Us.</h2>
        </section>
        <hr className="mx-auto bg-black dark:bg-white w-1/2" />
        <form action="" className="max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col items-left gap-4">
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" required minLength={3} maxLength={60} placeholder="Your Subject" className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border-solid border-slate-900 dak:border-none bg-white"/>
          <label htmlFor="message">Message:</label>
          <textarea name="message" id="message" cols={30} rows={10} placeholder="Your Message" required className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border-solid border-slate-900 dak:border-none bg-white"></textarea>
          <button className="bg-teal-700 hover:bg-teal-600 active:bg-teal-500 text-white p-3 w-48 rounded-xl border border-solid border-slate-900 dark:border-none">Submit</button>
        </form>
      </main>
      <footer className="bg-teal-700 text-white text-xl" id="footer">
        <section className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between">
          <address>
            <h2 className="text-">Acme Rocket - Powered Products, Inc.</h2>
            555 Astro Way<br/>
            Fairfield, New Jersey 12345-5555<br/>
            Email: <a href="mailto:inquiries@acmerockets.com">Inquiry@AcmeRockets.com</a><br/>
            Phone: <a href="tel:+155555555">(555) 555-55555</a>
          </address>
          <nav className="hidden md:flex flex-col gap-2" aria-label='footer'>
            <a href="#rockets" className="hover:opacity-90">Our Rockets</a>
          <a href="#testimonials" className="hover:opacity-90">Testimonials</a>
          <a href="#contact" className="hover:opacity-90">Contact Us</a>
          </nav>
          <div className="flex flex-cols sm:gap-2">
            <p className="text-right ">Copyright &copy; <span id="year">2025</span></p>
            <p className="text-right">All Rights Reserved</p>
          </div>
        </section>
      </footer>
      {/* <script>{
        const initApp = () => {
          const hamburgerBtn = document.getElementById('hamburger-button')
          const mobileMenu = document.getElementById('mobile-menu')
          const toggleMenu = () => {
            mobileMenu.classList.toggle('hidden')
            mobileMenu.classList.toggle('flex')
            hamburgerBtn.classList.toggle('toggle-btn')
          }

          hamburgerBtn.addEventListener('click', toggleMenu)
          mobileMenu.addEventListener('click', toggleMenu)
        }

        document.addEventListener('click', toggleMenu)
        mobileMenu.addEventListener("click", toggleMenu)

        document.addEventListener('DOMContentLoaded', initApp)
        } </script> */}
    </div>
  )
}

export default Groups;
