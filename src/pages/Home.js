import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  ChatBubbleLeftRightIcon, 
  UserGroupIcon, 
  CalendarDaysIcon,
  BookOpenIcon,
  DocumentTextIcon,
  PlayIcon,
  MapPinIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      // No-op: removed isScrolled
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="bg-white">
      <Navbar />

      {/* Clean Hero Section - Inspired by the reference */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/assets/videos/home/ps0072.mov" type="video/mp4" />
            {/* Fallback image in case video doesn't load */}
            <img 
              src="/assets/images/home/ps007-building.jpg" 
              alt="PS/MS 007 Samuel Stern School Building" 
              className="w-full h-full object-cover"
            />
          </video>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/25"></div>
        </div>
        
        <div className="relative z-10 h-screen flex">
          {/* Left side content - Clean Typography */}
          <div className="flex flex-col justify-end pb-32 pl-8 md:pl-16 lg:pl-24 max-w-4xl">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-2 text-xs font-medium uppercase tracking-wider rounded-full ring-1 ring-white/30">
                Welcome to PS/MS 007
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-6 leading-tight">
              PS/MS 007
            </h1>
            <h2 className="text-2xl md:text-3xl text-white/90 font-normal mb-8 max-w-2xl">
              Samuel Stern School
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-12 leading-relaxed max-w-2xl">
              Serving our Lower East Side community with high expectations and creating the greatest opportunities for our students since our founding.
            </p>
            
            <Link 
              to="#about" 
              className="group inline-flex items-center gap-3 bg-white/95 text-brand-primary hover:bg-white px-8 py-4 font-medium text-base transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl"
            >
              <span className="text-xs opacity-70">Now</span>
              <span>Discover Our Story</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Access Widget Section - Cleaner Design */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: BookOpenIcon, title: "Learning Resources", href: "/learning-resources" },
              { icon: ChatBubbleLeftRightIcon, title: "Messages for Families", href: "/messages" },
              { icon: UserGroupIcon, title: "Family Resources", href: "/family-resources" },
              { icon: DocumentTextIcon, title: "NYC DOE Updates", href: "/nyc-doe-updates" }
            ].map((item, index) => (
              <a key={index} href={item.href} className="group flex flex-col items-center text-center rounded-2xl bg-white hover:bg-gray-50 shadow-sm hover:shadow-md hover:ring-1 ring-brand-primary/30 p-4 sm:p-5 transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-brand-primary/40">
                <div className="w-16 h-16 mb-4 rounded-full flex items-center justify-center bg-brand-primary/10 ring-1 ring-brand-primary/20 group-hover:bg-brand-primary/15 group-hover:ring-brand-primary/30 transition-colors duration-300">
                  <item.icon className="h-8 w-8 text-brand-primary" />
                </div>
                <h3 className="text-sm font-medium text-gray-900 text-center leading-tight">
                  {item.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Our School Section - Clean Layout */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Column: Text Content */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="inline-block bg-brand-primary text-white px-4 py-2 text-sm font-medium uppercase tracking-wider mb-8 rounded-full">
                Since our founding
              </span>
              
              <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8 leading-tight">
                Our Educational Legacy.
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                PS/MS 007 Samuel Stern School has been serving the diverse Lower East Side community with excellence in education. We foster academic achievement, creativity, and character development in our K-8 learning environment.
              </p>
              
              <div className="flex gap-4">
                <button className="bg-brand-primary hover:bg-[#e13f37] text-white px-6 py-3 text-sm font-medium transition-colors duration-300 rounded-lg shadow-sm">
                  Learn More
                </button>
                <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 text-sm font-medium transition-colors duration-300 rounded-lg">
                  Contact Us
                </button>
              </div>
            </div>

            {/* Right Column: Image Grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-6 h-[500px]">
                <div className="col-span-2 overflow-hidden rounded-xl shadow-sm">
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-600 font-medium">School Building</span>
                  </div>
                </div>
                <div className="overflow-hidden rounded-xl shadow-sm">
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-600 font-medium">Students</span>
                  </div>
                </div>
                <div className="bg-brand-primary flex items-center justify-center rounded-xl shadow-sm">
                  <div className="text-center text-white p-6">
                    <div className="text-3xl font-light mb-2">K-8</div>
                    <div className="text-sm font-medium">Grades Served</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Message Section - Clean Card Design */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-gray-900 mb-12">
            Welcome to PS/MS 007 Samuel Stern School
          </h2>
          
          <div className="bg-white p-12 shadow-md rounded-2xl">
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              On behalf of our entire school community, we are happy to welcome you! We look forward to working diligently with you to set forth high expectations for our students and to create the greatest of future and live opportunities for our students. Students have received high school achievements tied to high achievement.
            </p>
            <div className="flex items-center justify-center mb-12">
              <div className="w-12 h-px bg-gray-200"></div>
              <div className="w-1 h-1 bg-gray-300 rounded-full mx-4"></div>
              <div className="w-12 h-px bg-gray-200"></div>
            </div>
            
            {/* Staff Information - Clean Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Michelle Martinez</h3>
                <p className="text-brand-primary font-medium">Principal</p>
              </div>
              <div className="text-center bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Sandy George</h3>
                <p className="text-brand-primary font-medium">Assistant Principal</p>
              </div>
              <div className="text-center bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Crystal Lamar</h3>
                <p className="text-brand-primary font-medium">Parent Coordinator</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-gray-600">
              <div className="flex items-center space-x-2">
                <PhoneIcon className="w-5 h-5" />
                <span className="font-medium">(212) 960-5527</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPinIcon className="w-5 h-5" />
                <span>140 Hester Street, NYC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News and Announcements - Two Column Clean Layout */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column - News */}
            <div className="lg:col-span-8">
              <div className="flex items-center mb-12">
                <DocumentTextIcon className="h-8 w-8 text-brand-primary mr-4" />
                <h2 className="text-3xl font-light text-gray-900">News and Announcements</h2>
              </div>

              <div className="space-y-12">
                {/* NYC Department of Education School Year Calendar */}
                <article className="pb-8">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">
                    NYC Department of Education School Year Calendar 2025-2026
                  </h3>
                  <p className="text-gray-600 mb-4">
                    <strong>Calendario escolar del Departamento de Educación de la Ciudad de Nueva York 2025-2026</strong>
                  </p>
                  <button type="button" className="inline-flex items-center text-brand-primary hover:text-[#e13f37] font-medium" aria-label="View Calendar">
                    View Calendar →
                  </button>
                </article>

                {/* Transportation Update */}
                <article className="pb-8">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">
                    🚌 Transportation Update
                  </h3>
                  <p className="text-gray-600 mb-4">
                    From school busing to subway to taxi to Metro-North buses that some riders experienced delays in some of our students would likely have experienced delays to school so we ask all families to check their NYC School Account (NYCSA) for any transportation updates.
                  </p>
                </article>

                {/* Summer Rising Program */}
                <article className="pb-8">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">
                    Summer Rising Program
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Registration for Summer Rising is currently available for students in Grades 3-8. Program Application: Instructions from all ages need to know their student's ID and should check out for information.
                  </p>
                  <ul className="space-y-2 text-gray-600 mb-4">
                    <li>• <strong>Summer Rising Program 2025:</strong> Free for NYC Students</li>
                    <li>• <strong>Programa Rising Verano 2025:</strong> gratuito para estudiantes de la ciudad de Nueva York</li>
                    <li>• <strong>NYC Public Schools 2024-2025 School Year Calendar</strong></li>
                    <li>• <strong>NYC Public Schools Messages for Families</strong></li>
                  </ul>
                </article>
              </div>

              <div className="mt-12">
                <button type="button" className="text-brand-primary hover:underline underline-offset-4 font-medium" aria-label="Archived Announcements">
                  Archived Announcements →
                </button>
              </div>
            </div>

            {/* Right Column - Calendar and Programs */}
            <div className="lg:col-span-4 space-y-12">
              {/* School Calendar */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="bg-brand-primary p-4">
                  <h3 className="text-xl font-medium text-white">2024-2025 School Calendar</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-7 gap-1 text-center text-sm mb-4">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
                      <div key={day} className="font-medium text-gray-600 py-2">{day}</div>
                    ))}
                    {Array.from({length: 35}, (_, i) => (
                      <div key={i} className="h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 cursor-pointer rounded">
                        {i > 6 && i < 32 ? i - 6 : ''}
                      </div>
                    ))}
                  </div>
                  <p className="text-center text-gray-500 text-sm">Selected Calendar: 2024-2025</p>
                </div>
              </div>

              {/* Rise Up! PS/MS 007 */}
              <div className="bg-white p-8 text-gray-900 rounded-2xl shadow-sm">
                <h3 className="text-xl font-medium mb-6">Rise Up! - PS/MS 007</h3>
                <div className="bg-gray-100 p-6 mb-6 flex items-center justify-center h-32 rounded">
                  <PlayIcon className="h-12 w-12 text-gray-500" />
                </div>
                <button className="bg-brand-primary text-white font-medium px-6 py-3 w-full hover:bg-[#e13f37] transition-colors rounded-lg">Save for College</button>
                <p className="text-sm text-gray-600 mt-4">This program is available to students in Grades 6-8</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Edible Schoolyard NYC Section - Clean Design */}
      <section className="py-24 bg-brand-secondary/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <div className="w-16 h-16 bg-brand-secondary mx-auto mb-8 flex items-center justify-center rounded-2xl">
              <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
              </svg>
            </div>
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              EDIBLE SCHOOLYARD NYC
            </h2>
            <h3 className="text-xl text-brand-secondary font-medium mb-8">
              Edible Education for All
            </h3>
          </div>

          <div className="bg-white p-12 shadow-xl mb-12 rounded-3xl">
            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto">
              We are a nonprofit organization with a mission to support edible education for all New York City public school students. We believe that every student deserves access to healthy food and connects communities through hands-on cooking & gardening education, transforming children's relationship with food.
            </p>
            
            <button className="bg-brand-secondary hover:bg-[#3c7801] text-white font-medium px-8 py-4 transition-colors duration-300 rounded-lg shadow-sm">
              Learn More About Edible Schoolyard NYC
            </button>
          </div>

          {/* Program Images - Simple Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Garden Learning", color: "from-brand-primary/80 to-brand-primary" },
              { title: "Healthy Cooking", color: "from-brand-secondary/80 to-brand-secondary" },
              { title: "Community Building", color: "from-brand-accent/80 to-brand-accent" }
            ].map((item, index) => (
              <div key={index} className="bg-white overflow-hidden rounded-2xl shadow-sm">
                <div className={`h-48 bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                  <span className="text-white font-medium">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section - Clean List Design */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-8">
              Upcoming Events
            </h2>
          </div>
          
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-brand-primary p-6">
              <h3 className="text-xl font-medium text-white flex items-center">
                <CalendarDaysIcon className="h-6 w-6 mr-3" />
                School Events
              </h3>
            </div>
            <div className="p-8">
              <div className="space-y-8">
                {[
                  { date: "2025", month: "JAN", title: "Spring Semester Begins", time: "Regular School Hours" },
                  { date: "TBD", month: "FEB", title: "Summer Rising Program Applications", time: "Applications Available" },
                  { date: "2026", month: "SEP", title: "NYC DOE School Year Calendar", time: "New Academic Year" }
                ].map((event, index) => (
                  <div key={index} className="flex items-center py-4 last:border-b-0">
                    <div className="flex-shrink-0 w-16 h-16 bg-brand-primary text-white flex flex-col items-center justify-center mr-6">
                      <span className="text-xs font-medium">{event.month}</span>
                      <span className="text-sm font-bold">{event.date}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 mb-1">{event.title}</h4>
                      <p className="text-gray-600 text-sm">{event.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <button className="bg-brand-primary hover:bg-[#e13f37] text-white font-medium px-6 py-3 transition-colors duration-300 rounded-lg">
                  View Full Calendar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section - Clean Design */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-light text-white mb-4">
            Let's get social
          </h3>
          <p className="text-gray-400 mb-8">
            Here are some ways to follow the NYC DOE
          </p>
          
          <div className="flex justify-center space-x-6">
            {[
              { color: "bg-brand-primary hover:bg-[#e13f37]" },
              { color: "bg-brand-secondary hover:bg-[#3c7801]" },
              { color: "bg-brand-accent hover:bg-[#eac635]" }
            ].map((social, index) => (
              <button key={index} type="button" className={`w-12 h-12 ${social.color} flex items-center justify-center transition-colors duration-300 rounded-lg`} aria-label="Social link">
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Home;