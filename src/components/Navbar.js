import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    {
      name: 'About us',
      href: '/about-us',
      dropdown: [
        { name: 'Our School', href: '/our-school' },
        { name: 'Mission & Vision', href: '/mission-vision' },
        { 
          name: 'Administration', 
          href: '/administration',
          subDropdown: [
            { name: 'Principal\'s Message', href: '/principal-message' },
            { name: 'Assistant Principal', href: '/assistant-principal' },
            { name: 'Staff Directory', href: '/staff-directory' }
          ]
        },
        { name: 'Our History', href: '/our-history' },
        { name: 'School Tour', href: '/school-tour' }
      ]
    },
    {
      name: 'Academics',
      href: '/academics',
      dropdown: [
        { 
          name: 'Curriculum', 
          href: '/curriculum',
          subDropdown: [
            { name: 'Elementary (K-5)', href: '/curriculum/elementary' },
            { name: 'Middle School (6-8)', href: '/curriculum/middle-school' }
          ]
        },
        { name: 'Academic Programs', href: '/academic-programs' },
        { name: 'Special Education', href: '/special-education' },
        { name: 'English Language Learners', href: '/english-language-learners' },
        { name: 'Gifted & Talented', href: '/gifted-talented' },
        { 
          name: 'Assessment & Testing', 
          href: '/assessment-testing',
          subDropdown: [
            { name: 'State Tests', href: '/state-tests' },
            { name: 'School Report Card', href: '/school-report-card' }
          ]
        }
      ]
    },
    {
      name: 'Students',
      href: '/students',
      dropdown: [
        { name: 'Student Life', href: '/student-life' },
        { 
          name: 'Clubs & Activities', 
          href: '/clubs-activities',
          subDropdown: [
            { name: 'Academic Clubs', href: '/academic-clubs' },
            { name: 'Arts & Music', href: '/arts-music' },
            { name: 'Sports & Athletics', href: '/sports-athletics' }
          ]
        },
        { name: 'Student Handbook', href: '/student-handbook' },
        { name: 'Code of Conduct', href: '/code-of-conduct' },
        { 
          name: 'Student Services', 
          href: '/student-services',
          subDropdown: [
            { name: 'Guidance Counseling', href: '/guidance-counseling' },
            { name: 'Health Services', href: '/health-services' },
            { name: 'Social Work Services', href: '/social-work-services' }
          ]
        },
        { name: 'Uniforms & Dress Code', href: '/uniforms-dress-code' }
      ]
    },
    {
      name: 'Families',
      href: '/families',
      dropdown: [
        { name: 'Parent Resources', href: '/parent-resources' },
        { name: 'Family Engagement', href: '/family-engagement' },
        { 
          name: 'Parent Coordinator', 
          href: '/parent-coordinator',
          subDropdown: [
            { name: 'Contact Information', href: '/parent-coordinator/contact' },
            { name: 'Workshop Schedule', href: '/parent-coordinator/workshops' }
          ]
        },
        { name: 'Parent-Teacher Association', href: '/pta' },
        { name: 'School Leadership Team', href: '/school-leadership-team' },
        { 
          name: 'Communication', 
          href: '/communication',
          subDropdown: [
            { name: 'Messages for Families', href: '/messages-families' },
            { name: 'Newsletter', href: '/newsletter' },
            { name: 'School Calendar', href: '/school-calendar' }
          ]
        },
        { 
          name: 'Resources & Support', 
          href: '/resources-support',
          subDropdown: [
            { name: 'Food Services', href: '/food-services' },
            { name: 'Transportation', href: '/transportation' },
            { name: 'Before/After School Care', href: '/before-after-school-care' }
          ]
        }
      ]
    },
    {
      name: 'Partners',
      href: '/partners',
      dropdown: [
        { name: 'Community Partners', href: '/community-partners' },
        { name: 'Edible Schoolyard NYC', href: '/edible-schoolyard-nyc' },
        { name: 'Local Organizations', href: '/local-organizations' },
        { name: 'Business Partnerships', href: '/business-partnerships' }
      ]
    },
    {
      name: 'Learning Resources',
      href: '/learning-resources',
      dropdown: [
        { 
          name: 'Digital Learning', 
          href: '/digital-learning',
          subDropdown: [
            { name: 'Online Platforms', href: '/online-platforms' },
            { name: 'Educational Apps', href: '/educational-apps' },
            { name: 'Tech Support', href: '/tech-support' }
          ]
        },
        { name: 'Library Resources', href: '/library-resources' },
        { name: 'Homework Help', href: '/homework-help' },
        { 
          name: 'Summer Programs', 
          href: '/summer-programs',
          subDropdown: [
            { name: 'Summer Rising', href: '/summer-rising' },
            { name: 'Reading Programs', href: '/summer-reading-programs' }
          ]
        },
        { name: 'NYC DOE Resources', href: '/nyc-doe-resources' }
      ]
    }
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
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-brand-primary' : 'text-white'
            }`}>
              PS/MS 007 <span className="font-light">Samuel Stern School</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
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
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white/95 backdrop-blur-md border border-gray-200 shadow-xl rounded-xl py-2 z-50 transition-all"
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <div key={dropdownIndex} className="relative">
                            {dropdownItem.subDropdown ? (
                              <div className="group/sub">
                                <button
                                  className="w-full relative px-6 py-3 text-base text-gray-800 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                                  onMouseEnter={() => setActiveSubDropdown(`${index}-${dropdownIndex}`)}
                                >
                                  <span className="block text-center w-full">{dropdownItem.name}</span>
                                  <ChevronDownIcon className="h-3 w-3 rotate-[-90deg] absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                </button>
                                {activeSubDropdown === `${index}-${dropdownIndex}` && (
                                  <div 
                                    className="absolute top-0 left-full ml-2 w-64 bg-white/95 backdrop-blur-md border border-gray-200 shadow-xl rounded-xl py-2 z-50"
                                    onMouseLeave={() => setActiveSubDropdown(null)}
                                  >
                                    {dropdownItem.subDropdown.map((subItem, subIndex) => (
                                      <Link
                                        key={subIndex}
                                        to={subItem.href}
                                        className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors rounded"
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
                                className="block px-6 py-3 text-base text-gray-800 hover:bg-gray-50 hover:text-gray-900 transition-colors text-center"
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