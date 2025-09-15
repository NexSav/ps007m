import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white relative overflow-hidden">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* School Identity */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 text-sm font-medium uppercase tracking-wider mb-4 rounded-full">
                Excellence in Education
              </span>
              <h3 className="text-2xl font-light text-white mb-3 leading-tight">
                PS/MS 007 <span className="font-bold">Samuel Stern School</span>
              </h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                Nurturing tomorrow's leaders through innovative education, fostering creativity, and building character in our diverse learning community.
              </p>
            </div>
            
            {/* Contact */}
            <div className="space-y-3 mb-6">
              <p className="text-white/90 text-sm font-medium">140 Hester Street, New York, NY 10013</p>
              <a href="tel:212-960-5527" className="text-white hover:text-white/80 transition-colors text-sm font-bold block">
                (212) 960-5527
              </a>
              <p className="text-white/90 text-sm font-medium">Main Office Phone: (212) 960-5527</p>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-lg flex items-center justify-center transition-all duration-300 border border-white/20 hover:border-white/40">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-lg flex items-center justify-center transition-all duration-300 border border-white/20 hover:border-white/40">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.52.204 5.036.43a5.493 5.493 0 0 0-1.987 1.292A5.493 5.493 0 0 0 1.757 3.71C1.531 4.194 1.409 4.768 1.375 5.715.013 6.663 0 7.07 0 10.691v2.618c0 3.621.013 4.028.048 4.976.034.947.156 1.521.382 2.005a5.493 5.493 0 0 0 1.292 1.987 5.493 5.493 0 0 0 1.987 1.292c.484.226 1.058.348 2.005.382.948.035 1.355.048 4.976.048h2.618c3.621 0 4.028-.013 4.976-.048.947-.034 1.521-.156 2.005-.382a5.493 5.493 0 0 0 1.987-1.292 5.493 5.493 0 0 0 1.292-1.987c.226-.484.348-1.058.382-2.005.035-.948.048-1.355.048-4.976V7.691c0-3.621-.013-4.028-.048-4.976-.034-.947-.156-1.521-.382-2.005A5.493 5.493 0 0 0 19.778 1.757 5.493 5.493 0 0 0 17.791.465C17.307.239 16.733.117 15.786.083 14.838.048 14.431.035 10.81.035L12.017 0zm0 2.162c3.204 0 3.584.012 4.85.07.3.055.78.166 1.207.415.427.25.78.602 1.03 1.03.249.427.36.907.415 1.207.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.055.3-.166.78-.415 1.207-.25.427-.602.78-1.03 1.03-.427.249-.907.36-1.207.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-.3-.055-.78-.166-1.207-.415-.427-.25-.78-.602-1.03-1.03-.249-.427-.36-.907-.415-1.207-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.055-.3.166-.78.415-1.207.25-.427.602-.78 1.03-1.03.427-.249.907-.36 1.207-.415 1.266-.058 1.646-.07 4.85-.07z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-lg flex items-center justify-center transition-all duration-300 border border-white/20 hover:border-white/40">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Navigation Links - Updated for PS/MS 007 structure */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Our School */}
              <div>
                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Our School</h4>
                <ul className="space-y-3">
                  <li><Link to="/about-us" className="text-white/80 hover:text-white transition-colors text-sm font-medium">About Us</Link></li>
                  <li><Link to="/mission-vision" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Mission & Vision</Link></li>
                  <li><Link to="/history" className="text-white/80 hover:text-white transition-colors text-sm font-medium">History</Link></li>
                  <li><Link to="/principal-message" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Principal's Message</Link></li>
                  <li><Link to="/administration" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Administration</Link></li>
                </ul>
              </div>
              
              {/* Academics */}
              <div>
                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Academics</h4>
                <ul className="space-y-3">
                  <li><Link to="/curriculum" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Curriculum</Link></li>
                  <li><Link to="/learning-resources" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Learning Resources</Link></li>
                  <li><Link to="/classes" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Classes</Link></li>
                  <li><Link to="/academic-programs" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Academic Programs</Link></li>
                </ul>
              </div>
              
              {/* Student Life */}
              <div>
                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Student Life</h4>
                <ul className="space-y-3">
                  <li><Link to="/clubs-activities" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Clubs & Activities</Link></li>
                  <li><Link to="/athletics" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Athletics</Link></li>
                  <li><Link to="/student-services" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Student Services</Link></li>
                  <li><Link to="/student-handbook" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Student Handbook</Link></li>
                </ul>
              </div>
              
              {/* Community */}
              <div>
                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Community</h4>
                <ul className="space-y-3">
                  <li><Link to="/parents" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Parents</Link></li>
                  <li><Link to="/community-events" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Events</Link></li>
                  <li><Link to="/gallery" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Gallery</Link></li>
                  <li><Link to="/staff" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Staff Directory</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-2 md:space-y-0">
            <p className="text-white/80 text-sm font-medium">
              © {new Date().getFullYear()} PS/MS 007 Samuel Stern School • NYC Department of Education District 1
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/80 hover:text-brand-accent text-sm transition-colors font-medium">Privacy Policy</a>
              <a href="#" className="text-white/80 hover:text-brand-accent text-sm transition-colors font-medium">Terms of Use</a>
              <a href="#" className="text-white/80 hover:text-brand-accent text-sm transition-colors font-medium">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;