import jesus from "./images/jesus_screenshot.jpg"
import joseph from "./images/joseph_screenshot.jpg" 
import koby from "./images/koby_screenshot.jpg"
import caleb from "./images/caleb_screenshot.jpg"
import jungwoo from "./images/jungwoo_screenshot.jpg"
import sean from "./images/sean_screenshot.jpg"
 
 const AboutUs = () => {
    return (
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Story
            </h2>
            <p className="mt-3 text-lg text-gray-500">
            We're just a bunch of coding nerds with a passion for web development and DnD. We came up with this idea when creating the final project
               for our coding bootcamp. After putting in lots of man hours and injesting enough caffine to kill a small elephant we created this DnD character 
               generator.
            </p>
          </div>
          <br></br>
          <div className="mt-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Team
            </h2>
            <p className="mt-3 text-lg text-gray-500">
            Our team consists of six amazing Full Stack Developers with a bright future in programming. 
            </p>
            <div className="mt-4">

              <div>
              </div>
              
              <span className="text-gray-500 font-medium mr-4"> Jesus Perez Alvarado </span>
              <img className="h-48 w-full object-cover lg:h-auto lg:w-48" src={jesus} alt="Team Member" />
              <br></br>

              <span className="text-gray-500 font-medium mr-4"> Joseph Bullock-Palser</span>
              <img className="h-48 w-full object-cover lg:h-auto lg:w-48 mt-4" src={joseph} alt="Team Member" />
              <br></br>

              <span className="text-gray-500 font-medium mr-4"> Koby Sillito </span>
              <img className="h-48 w-full object-cover lg:h-auto lg:w-48 mt-4" src={koby} alt="Team Member" />
              <br></br>

              <span className="text-gray-500 font-medium mr-4"> Caleb Davidson </span>
              <img className="h-48 w-full object-cover lg:h-auto lg:w-48 mt-4" src={caleb} alt="Team Member" />
              <br></br>

              <span className="text-gray-500 font-medium mr-4"> Sean Yanez </span>
              <img className="h-48 w-full object-cover lg:h-auto lg:w-48 mt-4" src={sean} alt="Team Member" />
              <br></br>

              <span className="text-gray-500 font-medium mr-4"> Jungwoo Lee </span>
              <img className="h-48 w-full object-cover lg:h-auto lg:w-48 mt-4" src={jungwoo} alt="Team Member" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutUs;
  

  
  