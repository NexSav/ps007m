import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Bars3Icon, 
  XMarkIcon,
  ChevronDownIcon 
} from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    // On interior pages, keep navbar solid for readability
    if (!isHome) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHome]);

  const navItems = [
    {
      name: 'About us',
      href: '/about-us',
      dropdown: [
        { name: 'Our Mission & Vision', href: '/mission-vision' },
        { name: "Principal's Message", href: '/principal-message' },
        { name: 'Assistant Principal', href: '/assistant-principal' },
        { name: 'Faculty & Staff', href: '/faculty-staff' },
        { name: 'Policies & Procedures', href: '/policies-procedures' },
        { name: 'Admissions', href: '/admissions' },
        { name: 'Contact Us', href: '/contact-us' },
      ]
    },
    {
      name: 'Academics',
      href: '/academics',
      dropdown: [
        { name: 'Curricula', href: '/curricula' },
        { name: 'Testing Dates', href: '/testing-dates' },
        { name: 'Grading Policy', href: '/grading-policy' },
        { name: 'School Counseling', href: '/school-counseling' },
        { name: '3-K Program', href: '/3k-program' },
        { name: 'Early Childhood', href: '/early-childhood' },
      ]
    },
    {
      name: 'Students',
      href: '/students',
      dropdown: [
        { name: 'Bell Schedule', href: '/bell-schedule' },
        { name: 'Food Services', href: '/food-services' },
        { name: 'Cell Phone Policy', href: '/cell-phone-policy' },
        { name: 'Behavioral Expectations', href: '/behavioral-expectations' },
        { name: 'School Uniforms', href: '/school-uniforms' },
      ]
    },
    {
      name: 'Families',
      href: '/families',
      dropdown: [
        { name: 'DOE Updates', href: '/doe-updates' },
        { name: "Chancellor's Messages to Families", href: '/chancellor-messages' },
        { name: 'Family Resources', href: '/family-resources' },
        { name: 'Supply Lists', href: '/supply-lists' },
        { name: 'Student Health', href: '/student-health' },
        { name: 'School Calendar', href: '/school-calendar' },
        { name: 'Parent Coordinator', href: '/parent-coordinator' },
        { name: 'Parent Association', href: '/parent-association' },
        { name: 'PA Executive Board', href: '/pa-executive-board' },
        { name: 'Title I / CPAC', href: '/title1-cpac' },
        { name: 'MYSchools NYC', href: '/myschools-nyc' },
      ]
    },
    {
      name: 'Partners',
      href: '/partners',
      dropdown: [
        { name: 'Edible Schoolyard NYC', href: '/edible-schoolyard-nyc' },
        { name: 'Counseling In Schools', href: '/counseling-in-schools' },
        { name: 'Union Settlement', href: '/union-settlement' },
        { name: 'I Have a Dream', href: '/i-have-a-dream' },
        { name: 'Boriken Health Clinic', href: '/boriken-health-clinic' },
        { name: 'National Dance Institute', href: '/national-dance-institute' },
        { name: 'ABC Crisis Team', href: '/abc-crisis-team' },
      ]
    },
    {
      name: 'Learning Resources',
      href: '/learning-resources',
      dropdown: [
        { name: 'Learning Resources', href: '/learning-resources' },
        { name: 'Google Classroom', href: '/google-classroom' },
      ]
    },
  ];

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
    setActiveSubDropdown(null); // Close sub-dropdown when main dropdown changes
  };

  const handleSubDropdownToggle = (index) => {
    setActiveSubDropdown(activeSubDropdown === index ? null : index);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? '' // Remove full-width white bg
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center -ml-8">
            <img
              src="/assets/images/logo.png"
              alt="PS/MS 007 Samuel Stern School Logo"
              className="h-28 w-auto object-contain drop-shadow-md mt-20"
              style={{ maxWidth: '180px' }}
            />
          </Link>

          {/* Desktop Navigation with animated white background on scroll */}
          <div
            className={`hidden lg:flex items-center space-x-1 px-8 py-2 border transition-all duration-500
              ${isScrolled
                ? 'bg-white/95 rounded-2xl shadow-lg border-gray-100'
                : 'bg-transparent border-transparent shadow-none rounded-2xl'}
            `}
            style={{ backdropFilter: isScrolled ? 'blur(8px)' : 'none' }}
          >
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.dropdown ? (
                  <div>
                    <button
                      className={`flex items-center px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                        isScrolled 
                          ? 'text-gray-700 hover:text-brand-primary' 
                          : 'text-white/90 hover:text-white'
                      }`}
                      onMouseEnter={() => setActiveDropdown(index)}
                    >
                      {item.name}
                      <ChevronDownIcon className="ml-1 h-4 w-4" />
                    </button>
                    {activeDropdown === index && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-56 min-w-[12rem] bg-white/95 backdrop-blur-md border border-gray-200 shadow-xl rounded-xl py-2 z-50 transition-all duration-200 ease-in-out transform scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                        style={{ opacity: activeDropdown === index ? 1 : 0, transform: activeDropdown === index ? 'scale(1)' : 'scale(0.95)' }}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <div key={dropdownIndex} className="relative">
                            {dropdownItem.subDropdown ? (
                              <div className="group/sub">
                                <button
                                  className="w-full relative px-5 py-2 text-base text-gray-800 hover:bg-gray-50 hover:text-brand-primary transition-all duration-150 rounded-lg font-medium border-l-2 border-transparent hover:border-brand-primary text-left"
                                  onMouseEnter={() => setActiveSubDropdown(`${index}-${dropdownIndex}`)}
                                >
                                  <span className="block w-full">{dropdownItem.name}</span>
                                  <ChevronDownIcon className="h-3 w-3 rotate-[-90deg] absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                </button>
                                {activeSubDropdown === `${index}-${dropdownIndex}` && (
                                  <div 
                                    className="absolute top-0 left-full ml-2 w-48 min-w-[10rem] bg-white/95 backdrop-blur-md border border-gray-200 shadow-xl rounded-xl py-2 z-50 transition-all duration-200 ease-in-out transform scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                                    style={{ opacity: activeSubDropdown === `${index}-${dropdownIndex}` ? 1 : 0, transform: activeSubDropdown === `${index}-${dropdownIndex}` ? 'scale(1)' : 'scale(0.95)' }}
                                    onMouseLeave={() => setActiveSubDropdown(null)}
                                  >
                                    {dropdownItem.subDropdown.map((subItem, subIndex) => (
                                      <Link
                                        key={subIndex}
                                        to={subItem.href}
                                        className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-primary transition-all duration-150 rounded-lg font-medium border-l-2 border-transparent hover:border-brand-primary"
                                      >
                                        {subItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ) : (
                              <Link
                                to={dropdownItem.href}
                                className="block px-5 py-2 text-base text-gray-800 hover:bg-gray-50 hover:text-brand-primary transition-all duration-150 rounded-lg font-medium border-l-2 border-transparent hover:border-brand-primary text-left"
                              >
                                {dropdownItem.name}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-brand-primary' 
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-colors duration-300 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => handleDropdownToggle(index)}
                      className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-gray-800 hover:text-brand-primary hover:bg-gray-50"
                    >
                      {item.name}
                      <ChevronDownIcon className={`h-5 w-5 transform transition-transform ${
                        activeDropdown === index ? 'rotate-180' : ''
                      }`} />
                    </button>
                    {activeDropdown === index && (
                      <div className="pl-4">
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <div key={dropdownIndex}>
                            {dropdownItem.subDropdown ? (
                              <div>
                                <button
                                  onClick={() => handleSubDropdownToggle(`${index}-${dropdownIndex}`)}
                                  className="w-full flex items-center justify-between px-3 py-2.5 text-sm text-gray-700 hover:text-brand-primary hover:bg-gray-50 rounded"
                                >
                                  {dropdownItem.name}
                                  <ChevronDownIcon className={`h-4 w-4 transform transition-transform ${
                                    activeSubDropdown === `${index}-${dropdownIndex}` ? 'rotate-180' : ''
                                  }`} />
                                </button>
                                {activeSubDropdown === `${index}-${dropdownIndex}` && (
                                  <div className="pl-4">
                                    {dropdownItem.subDropdown.map((subItem, subIndex) => (
                                      <Link
                                        key={subIndex}
                                        to={subItem.href}
                                        className="block px-3 py-2 text-xs text-gray-600 hover:text-brand-primary hover:bg-gray-50 rounded"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                      >
                                        {subItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ) : (
                              <Link
                                to={dropdownItem.href}
                                className="block px-3 py-2.5 text-sm text-gray-700 hover:text-brand-primary hover:bg-gray-50 rounded"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {dropdownItem.name}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="block px-3 py-3 text-base font-medium text-gray-800 hover:text-brand-primary hover:bg-gray-50 rounded"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;