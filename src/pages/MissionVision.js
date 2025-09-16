import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  CalendarDaysIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  UserCircleIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const MissionVision = () => {
  const quickLinks = [
    { icon: CalendarDaysIcon, label: 'School Calendar', href: '/school-calendar' },
    { icon: DocumentTextIcon, label: 'School Meals', href: '/food-services' },
    { icon: MapPinIcon, label: 'Transportation', href: '/transportation' },
    { icon: AcademicCapIcon, label: 'NYC Department of Education', href: '/doe-updates' },
    { icon: UserCircleIcon, label: 'NYC School Account', href: '/myschools-nyc' }
  ];

  return (
    <main className="bg-white">
      <Navbar />

      {/* Page Header */}
      <section className="pt-40 pb-10 bg-gradient-to-b from-[#1b4332] via-[#1b4332]/60 via-[#1b4332]/30 to-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-3">
            <div className="inline-flex items-center gap-2 text-xs bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-sm">
              <ol className="flex items-center gap-2">
                <li>
                  <Link to="/" className="text-gray-700 hover:text-brand-primary font-medium">Home</Link>
                </li>
                <li aria-hidden="true" className="text-gray-400">/</li>
                <li>
                  <span className="text-gray-600 font-medium">About Us</span>
                </li>
                <li aria-hidden="true" className="text-gray-400">/</li>
                <li className="text-gray-900 font-semibold">Mission & Vision</li>
              </ol>
            </div>
          </nav>
          <div className="mb-4">
            <span className="inline-flex items-center text-xs font-medium px-4 py-2 rounded-full bg-white/95 backdrop-blur-sm text-brand-primary shadow-lg border border-white/20">
              <AcademicCapIcon className="h-3 w-3 mr-1" />
              About Us
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-light text-white drop-shadow-lg" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
            Our Mission & Vision
          </h1>
          <div className="w-16 h-0.5 bg-white/80 mt-3 mb-4 drop-shadow-sm"></div>
          <p className="text-white/95 max-w-3xl drop-shadow-md font-medium" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.4)'}}>
            A clear purpose guides our Hawks community. Explore the beliefs and goals that shape PS/MS 007.
          </p>

          {/* Section anchor nav */}
          <div className="mt-6">
            <ul className="flex flex-wrap items-center gap-3 text-sm">
              <li>
                <a href="#vision" className="inline-flex items-center px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-white/30 hover:bg-white hover:border-brand-primary text-gray-700 hover:text-brand-primary transition-all duration-300 shadow-md font-medium">Vision</a>
              </li>
              <li>
                <a href="#mission" className="inline-flex items-center px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-white/30 hover:bg-white hover:border-brand-primary text-gray-700 hover:text-brand-primary transition-all duration-300 shadow-md font-medium">Mission</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Main */}
            <div className="lg:col-span-8 space-y-8">
              {/* Banner Image placeholder */}
              <div className="w-full h-48 md:h-60 lg:h-64 rounded-xl border border-brand-secondary/20 bg-gradient-to-br from-brand-secondary/10 via-brand-primary/5 to-brand-neutral/5 overflow-hidden flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-brand-secondary/10 flex items-center justify-center">
                    <AcademicCapIcon className="h-6 w-6 text-brand-secondary" />
                  </div>
                  <span className="text-brand-neutral text-sm font-medium">Hawks Mission & Vision</span>
                </div>
              </div>

              {/* Vision */}
              <article id="vision" className="bg-gradient-to-b from-brand-primary/3 to-white border border-brand-primary/20 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-900 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center mr-3">
                    <svg className="h-4 w-4 text-brand-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                    </svg>
                  </div>
                  Vision Statement
                </h2>
                <div className="mt-3 h-1 w-16 bg-brand-primary rounded"></div>
                <p className="mt-6 text-gray-700 leading-relaxed">
                  Our vision is to create, develop, and nurture an academic and emotionally supportive
                  campus environment that prepares all students from 3K to eighth grade for the
                  highest levels of achievement in high school, college, and careers—aligned to their
                  own personal and professional goals.
                </p>
              </article>

              {/* Mission */}
              <article id="mission" className="bg-gradient-to-b from-brand-secondary/3 to-white border border-brand-secondary/20 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-900 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-brand-secondary/10 flex items-center justify-center mr-3">
                    <svg className="h-4 w-4 text-brand-secondary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  Mission Statement
                </h2>
                <div className="mt-3 h-1 w-16 bg-brand-secondary rounded"></div>
                <p className="mt-6 text-gray-700 leading-relaxed">
                  PS/MS 007 strives to create a collaborative culture among all stakeholders to ensure
                  a rigorous academic and extra‑curricular experience that engages all learners through
                  inquiry, design, and arts‑based work. We engage the whole child by cultivating an arts
                  program that fosters the curiosities necessary for scholars to develop a sense of
                  their place in the world by engaging in work that challenges them with real‑life
                  situations and meaningful opportunities for reflection.
                </p>
              </article>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24 self-start">
              <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden" role="navigation" aria-label="Quick Links">
                <div className="bg-brand-primary text-white px-5 py-4">
                  <h3 className="text-lg font-semibold flex items-center">
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
                    </svg>
                    Quick Links
                  </h3>
                </div>
                <div className="p-4">
                  <ul className="space-y-2">
                    {quickLinks.map((item, idx) => (
                      <li key={idx}>
                        <Link
                          to={item.href}
                          className="group flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
                        >
                          <item.icon className="h-5 w-5 text-brand-primary" />
                          <span className="text-sm font-medium">{item.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Contact card */}
              <div className="bg-gradient-to-b from-brand-neutral/5 to-white border border-brand-neutral/20 rounded-2xl p-6 shadow-sm">
                <h4 className="text-base font-semibold text-gray-900 mb-2 flex items-center">
                  <svg className="h-4 w-4 mr-2 text-brand-secondary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  Questions?
                </h4>
                <p className="text-gray-600 text-sm mb-4">We are here to help with Hawks information.</p>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-brand-primary text-white rounded-lg hover:bg-[#b71c1c] transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default MissionVision;


