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
      <section className="pt-24 pb-10 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-3">
            <ol className="flex items-center gap-2 text-xs text-gray-500">
              <li>
                <Link to="/" className="hover:text-gray-700">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <span className="text-gray-600">About Us</span>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-900">Mission & Vision</li>
            </ol>
          </nav>
          <div className="mb-4">
            <span className="inline-flex items-center text-xs font-medium px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary">
              About Us
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-light text-gray-900">Our Mission & Vision</h1>
          <p className="mt-3 text-gray-600 max-w-3xl">
            A clear purpose guides our community. Explore the beliefs and goals that shape PS/MS 007.
          </p>

          {/* Section anchor nav */}
          <div className="mt-6">
            <ul className="flex flex-wrap items-center gap-3 text-sm">
              <li>
                <a href="#vision" className="inline-flex items-center px-3 py-1.5 rounded-full border border-gray-200 hover:border-brand-primary hover:text-brand-primary transition-colors">Vision</a>
              </li>
              <li>
                <a href="#mission" className="inline-flex items-center px-3 py-1.5 rounded-full border border-gray-200 hover:border-brand-primary hover:text-brand-primary transition-colors">Mission</a>
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
              {/* Banner Image placeholder - keep neutral */}
              <div className="w-full h-48 md:h-60 lg:h-64 rounded-xl border border-gray-200 bg-gray-100 overflow-hidden flex items-center justify-center">
                <span className="text-gray-500 text-sm">School artwork banner</span>
              </div>

              {/* Vision */}
              <article id="vision" className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-900">Vision Statement</h2>
                <div className="mt-2 h-1 w-12 bg-brand-primary/70 rounded"></div>
                <p className="text-gray-700 leading-relaxed">
                  Our vision is to create, develop, and nurture an academic and emotionally supportive
                  campus environment that prepares all students from 3K to eighth grade for the
                  highest levels of achievement in high school, college, and careers—aligned to their
                  own personal and professional goals.
                </p>
              </article>

              {/* Mission */}
              <article id="mission" className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-900">Mission Statement</h2>
                <div className="mt-2 h-1 w-12 bg-brand-secondary/80 rounded"></div>
                <p className="text-gray-700 leading-relaxed">
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
                  <h3 className="text-lg font-semibold">Quick Links</h3>
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

              {/* Contact card (optional, matches Home tone) */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h4 className="text-base font-semibold text-gray-900 mb-2">Questions?</h4>
                <p className="text-gray-600 text-sm mb-4">We are here to help.</p>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-brand-primary text-white rounded-lg hover:bg-[#e13f37] transition-colors"
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


