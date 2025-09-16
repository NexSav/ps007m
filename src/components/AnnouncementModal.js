import React, { useState, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const AnnouncementModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already seen this announcement
    const hasSeenAnnouncement = localStorage.getItem('hasSeenWelcomeBackAnnouncement');
    
    if (!hasSeenAnnouncement) {
      // Show modal after a short delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    // Mark as seen in localStorage
    localStorage.setItem('hasSeenWelcomeBackAnnouncement', 'true');
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[80vh] overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Header */}
        <div className="bg-brand-primary text-white px-6 py-5 relative">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close announcement"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
          
          <div className="pr-12">
            <h2 className="text-xl font-semibold mb-1">Welcome Back to School</h2>
            <p className="text-white/90 text-sm">September - Message for Families</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[55vh] overflow-y-auto">
          <div className="space-y-4">
            
            {/* Family Workshop */}
            <div className="pb-4 border-b border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">Tuesday, September 16th</h3>
              <p className="text-gray-700 text-sm">
                <strong>Family Workshop:</strong> <em>Attendance</em><br />
                In-person at 9:00 AM in the Cafeteria
              </p>
            </div>

            {/* Meet the Teacher */}
            <div className="pb-4 border-b border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">Wednesday, September 17th</h3>
              <p className="text-gray-700 text-sm">
                <strong>Meet the Teacher</strong><br />
                3:30 PM - 7:00 PM (In Person)
              </p>
            </div>

            {/* No School Days */}
            <div className="pb-4 border-b border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">Tuesday & Wednesday, September 23rd & 24th</h3>
              <p className="text-gray-700 text-sm">
                <strong>No School</strong> <em>(Rosh Hashanah)</em>
              </p>
            </div>

            {/* PA's Townhall */}
            <div className="pb-4 border-b border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">Thursday, September 25th</h3>
              <p className="text-gray-700 text-sm">
                <strong>PA's Townhall</strong>
              </p>
            </div>

            {/* Zoom Meeting Info */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Virtual Meeting Information</h3>
              <div className="space-y-1 text-sm text-gray-700">
                <p><strong>Via Zoom at 9:00 AM</strong></p>
                <p><strong>Zoom ID:</strong> 924 5409 3456</p>
                <p><strong>Password:</strong> 123456</p>
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              PS/MS 007 Samuel Stern School
            </p>
            <button
              onClick={closeModal}
              className="bg-brand-primary hover:bg-brand-primary/90 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Got it!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementModal;
