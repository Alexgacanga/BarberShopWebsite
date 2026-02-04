import bg1 from "../assets/bg1.png";
import pic1 from "../assets/pic1.jpeg";
import bg from "../assets/bg.jpg"
import { Navbar } from "./Navbar";
import g1 from "../assets/g1.jpeg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import g4 from "../assets/g4.jpg";
import g5 from "../assets/g5.jpg";
import g6 from "../assets/g6.jpg";
import g7 from "../assets/g7.jpg";
import g8 from "../assets/g8.jpg";
import g9 from "../assets/g9.jpg";
import g10 from "../assets/g10.jpg";
import g11 from "../assets/g11.jpg";
import g12 from "../assets/g12.jpg";
import g13 from "../assets/g13.jpg";
import g14 from "../assets/g14.jpg";
import g15 from "../assets/g15.jpg";
import g16 from "../assets/g16.jpg";
import { Phone, Mail, MessageSquare, MapPin } from 'lucide-react';


export const Homepage = () => {
    const images1 = [
    g1,
    g2,
    g3,
    g4,
    g5,
    g6,
    g7,
    g8,
  ];
  const images2 = [
    g9,
    g10,
    g11,
    g12,
    g13,
    g14,
    g15,
    g16,
  ]
  
  return (
    <div>
      <Navbar />
      <section
      id="home"
        className="bg-cover bg-center h-170 md:h-150 sm:h-140 lg:h-160 xl:h-190 2xl:h-220 items-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.3)), url(${bg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex-row">
          <div className="md:ml-15 lg:w-220 sm:pt-40 pt-50 md:pt-50 lg:pt-60 xl:pt-70 ml-10 md:w-160 sm:w-150 w-70">
            <h1 className="text-orange-500 sm:text-6xl lg:text-7xl md:text-6xl text-4xl font-poppins font-bold">
              Welcome to Urban Trims
            </h1>
            <div className="sm:w-130 lg:w-200">
              <p className="md:text-xs lg:text-s text-white sm:text-1xl lg:w-180 font-poppins text-xs">
                Experience the art of grooming at Urban Trims, where style meets
                precision. Our skilled barbers are dedicated to providing you
                with a personalized grooming experience that leaves you looking
                and feeling your best. Whether you're in need of a classic
                haircut, a modern fade, or a clean shave, our team is here to
                deliver exceptional service in a welcoming atmosphere. Step into
                our barbershop and let us transform your look with expert care
                and attention to detail.
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </section>



              <section id="about">
                <section>
                  <div className="pt-30 mt-10 md:mb-20 md:mt-30">
                      <h1 className="text-center m-auto font-poppins sm:text-4xl md:text-5xl text-3xl font-bold">OUR STORY</h1>
                  </div>
                </section>
                <section className="bg-white md:mb-20 lg:mb-25">
                  <div className="flex-col sm:flex sm:flex-row content-center m-8">
                      <div className="md:basis-1/2">
                          <img className="lg:w-120 md:w-80 w-70 m-auto rounded-xl border-3 border-b-black h-full" src={pic1} alt="Barber Pic" />
                      </div>
                      <div className="mt-9 text-center md:text-xs lg:text-xl text-xs w-60  content-center font-poppins m-auto md:basis-1/2 md:w-full p-">
                          <p><span className="text-2xl md:text-4xl sm:text-3xl font-bold text-center"><span className="text-blue-700">Sharp. </span><span className="text-orange-500">Modern. </span><span className="text-gray-600">Iconic.</span></span>
                          <br />
                          <br />
                          <br />
                        <span className="italic">
                            "Urban Trims sits at the intersection of street style and professional grooming. I started this journey because I saw a gap between the traditional barbering of the past and the evolving style needs of today.
                            
                            With a focus on modern techniques and architectural precision, my goal is to help you cultivate a look that is distinctly yours. From skin fades to beard sculpting, I treat every cut as a collaborative project. I stay ahead of the trends so you don't have to, ensuring that when you walk out of our doors, you look as sharp as you feel. This isn't just a haircut; it's an upgrade to your personal brand."
                        </span></p>
                      </div>
                  </div>
                </section>
              </section>




              <section 
              id="services"
              className="flex pt-20 flex-row content-center"
                          style={{
                        backgroundImage: `linear-gradient(rgba(249, 115, 22, 0.6), rgba(249, 115, 22, 0.6)), url(${bg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}    >
         
                    <div className="flex-col m-auto">
                        <div className="pt-7 sm:pt-12 md:pt-15">
                            <h1 id="hs">Services</h1>
                        </div>
                        <div className="pt-3 sm:pt-5 md:pt-10 mb-15 sm:mb-18 md:mb-20">
                                <table>
                                    <tr>
                                        <th>Haircut</th>
                                        <td>Ksh. 800</td>
                                    </tr>
                                    <tr>
                                        <th>Beard Trim</th>
                                        <td>Ksh. 500</td>
                                    </tr>
                                    <tr>
                                        <th>Hair Wash & Scalp Massage</th>
                                        <td>Ksh. 1,500</td>
                                    </tr>
                                    <tr>
                                        <th>Facial Scrub</th>
                                        <td>Ksh. 500</td>
                                    </tr>
                                    <tr>
                                        <th>Hair Color</th>
                                        <td>Ksh. 1,000</td>
                                    </tr>
                                    <tr>
                                        <th>Hair & Scalp Treatment</th>
                                        <td>Ksh. 2,000</td>
                                    </tr>
                                    <tr>
                                        <th>Caucasian Hair Cut</th>
                                        <td>Ksh. 1,500</td>
                                    </tr>
                                    <tr>
                                        <th>Head & Neck Massage</th>
                                        <td>Ksh. 1,500</td>
                                    </tr>
                                    <tr>
                                        <th>Head, Neck & Shoulder massage</th>
                                        <td>Ksh. 2,000</td>
                                    </tr>
                                    <tr>
                                        <th>Head, Neck, Shoulder & Head Massage</th>
                                        <td>Ksh. 2,500</td>
                                    </tr>
                                    <tr>
                                        <th>Manicure</th>
                                        <td>Ksh. 1,000</td>
                                    </tr>
                                    <tr>
                                        <th>Pedicure</th>
                                        <td>Ksh. 2,000</td>
                                    </tr>
                                    <tr>
                                        <th>Nail Clipping & Wash</th>
                                        <td>Ksh. 500</td>
                                    </tr>
                                </table>
                            </div>
                    </div>
              </section>

{/* 


              <section id="gallery" className="pt-25">
                <div className="flex flex-col m-auto mx-15 lg:mx-35 md:mx-28 sm:mx-22">
                  <div>
                    <h1 className="text-center font-bold font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl sm:pb-10 md:pb-13 lg:pb-15 pb-5">GALLERY</h1>
                  </div>
                  <div className="flex flex-row flex-wrap gap-1.5 lg:gap-3 justify-center">
                    <img className="w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-lg" src={pic1} alt="Gallery Pic 1" />
                    <img className="w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-lg" src={bg1} alt="Gallery Pic 2" />
                    <img className="w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-lg" src={pic1} alt="Gallery Pic 3" />
                    <img className="w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-lg" src={bg1} alt="Gallery Pic 4" />
                    <img className="w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-lg" src={pic1} alt="Gallery Pic 5" />
                    <img className="w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-lg" src={bg1} alt="Gallery Pic 6" />
                    <img className="w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-lg" src={pic1} alt="Gallery Pic 7" />
                    <img className="w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-lg" src={bg1} alt="Gallery Pic 8" />
                  </div>
                </div>
              </section>
 */}








    <div id="gallery" className="pt-25 w-full bg-gradient-to-b from-slate-50 to-slate-100 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center font-poppins mb-4">
          Our Gallery
        </h2>
        <p className="text-center text-slate-600 text-lg">
          Explore our stunning collection of moments
        </p>
      </div>

      {/* First Row - Moving Right */}
      <div className="relative mb-6 overflow-hidden">
        <div className="flex gap-6 animate-scroll-right">
          {[...images1, ...images1].map((img, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 w-64 sm:w-72 md:w-80 lg:w-96 h-48 sm:h-56 md:h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <img
                src={img}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Second Row - Moving Left */}
      <div className="relative overflow-hidden">
        <div className="flex gap-6 animate-scroll-left">
          {[...images2, ...images2].map((img, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 w-64 sm:w-72 md:w-80 lg:w-96 h-48 sm:h-56 md:h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <img
                src={img}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }

        .animate-scroll-right:hover,
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>







    <section
      style={{
                        backgroundImage: `linear-gradient(rgba(249, 115, 22, 0.6), rgba(249, 115, 22, 0.6)), url(${bg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}     
    id="contact" className="pt-25 md:pt-30 w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-indigo-900 font-bold mb-3">Contact Us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ready for a fresh look?
          </h2>
          <p className="text-white max-w-xl">
            We're here to help you find your personal style and tailor our services to your vision . Reach out to book your spot or drop by for a classic experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
              <Phone className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600 text-sm mb-6">Speak to our friendly team</p>
            <div className="pt-4 border-t border-gray-100">
              <a 
                href="tel:+8940220232" 
                className="text-gray-700 hover:text-indigo-600 transition-colors"
              >
                +894 022 0232
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
              <Mail className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 text-sm mb-6">Speak to our friendly team</p>
            <div className="pt-4 border-t border-gray-100">
              <a 
                href="mailto:info@gmail.com" 
                className="text-gray-700 hover:text-indigo-600 transition-colors"
              >
                info@gmail.com
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
              <MessageSquare className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Chat With Us</h3>
            <p className="text-gray-600 text-sm mb-6">Let's contact with us</p>
            <div className="pt-4 border-t border-gray-100">
              <button className="text-gray-700 hover:text-indigo-600 transition-colors">
                <a href="https://wa.me/">Click To Start</a>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Office</h3>
            <p className="text-gray-600 text-sm mb-6">Visit our office today</p>
            <div className="pt-4 border-t border-gray-100">
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-indigo-600 transition-colors"
              >
                View on google map
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>






              <footer class="bg-gray-100">
  <div class="mx-auto max-w-5xl px-4 pb-5 pt-16 sm:px-6 lg:px-8">

    <p class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
<span className="font-medium text-black">OPENING HOURS</span> <br />
Mon - Fri: 7am - 10pm <br />Saturday: 8am - 10pm <br />Sunday: 8am - 11pm
    </p>

    <ul class="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
      <li>
        <a class="text-gray-700 transition hover:text-gray-700/75" href="#home"> Home </a>
      </li>

      <li>
        <a class="text-gray-700 transition hover:text-gray-700/75" href="#about"> About </a>
      </li>

      <li>
        <a class="text-gray-700 transition hover:text-gray-700/75" href="#services"> Services </a>
      </li>

      <li>
        <a class="text-gray-700 transition hover:text-gray-700/75" href="#gallery"> Gallery </a>
      </li>

      <li>
        <a class="text-gray-700 transition hover:text-gray-700/75" href="#contact"> Contacts </a>
      </li>
    </ul>

    <ul class="mt-12 flex justify-center gap-6 md:gap-8">
      <li>
        <a href="#" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:text-gray-700/75">
          <span class="sr-only">Facebook</span>
          <svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
          </svg>
        </a>
      </li>

      <li>
        <a href="#" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:text-gray-700/75">
          <span class="sr-only">Instagram</span>
          <svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
          </svg>
        </a>
      </li>
      <li>
  <a href="#" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:text-gray-700/75">
    <span class="sr-only">TikTok</span>
    <svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  </a>
</li>
    </ul>
<div>
  <p className="text-center pt-5 pb-0 mb-0 text-gray-700">&copy; 2026 by Alex Mwangi, Software Engineer</p>
</div>
  </div>
</footer>


    </div>
  )
}
