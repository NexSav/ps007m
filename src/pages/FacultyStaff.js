import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  CalendarDaysIcon,
  DocumentTextIcon,
  UsersIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

const FacultyStaff = () => {
  const [query, setQuery] = useState('');

  const sections = useMemo(() => ([
    {
      id: 'administration',
      title: 'Administration',
      items: [
        { name: 'Michelle Martinez', role: 'Principal' },
        { name: 'Sandy George', role: 'Assistant Principal' },
        { name: 'Katalina Navarette', role: 'School Secretary' },
      ],
    },
    {
      id: 'guidance',
      title: 'Guidance & Parent Support',
      items: [
        { name: 'Emma Chinyere', role: 'Guidance' },
        { name: 'Gayle Ureal', role: 'School Counselor' },
        { name: 'Crystal LaMar', role: 'Parent Coordinator' },
        { name: 'Kesha Atterbury', role: 'Social Worker' },
      ],
    },
    {
      id: 'support',
      title: 'Support Personnel',
      items: [
        { name: 'Paola Nunez Betancur', role: 'Spanish Teacher' },
        { name: 'Stamatina Fostinis', role: 'ENL/ELL' },
        { name: 'Nomi Rothstein', role: 'Special Education' },
      ],
    },
    {
      id: 'cse',
      title: 'Committee on Special Education',
      items: [
        { name: 'Julia Burgos', role: 'Family Worker' },
        { name: 'Katiusca Pena', role: 'Bilingual Social Worker' },
      ],
    },
    {
      id: 'related',
      title: 'Related Services',
      items: [
        { name: 'Roberta Harrison', role: 'IEP Teacher / SETSS' },
        { name: 'Alexa Shonhaut', role: 'Speech K–6' },
        { name: 'Meaghan Smith', role: 'Speech K–5' },
        { name: 'Michelle Cohen', role: 'Occupational Therapist' },
        { name: 'Stephanie Gilbert', role: 'Occupational Therapist' },
      ],
    },
    {
      id: 'paras',
      title: 'Paraprofessionals & School Aides',
      items: [
        { name: 'Ruth Velez', role: 'Paraprofessional' },
        { name: 'Yicurzli Ramirez', role: 'Paraprofessional' },
        { name: 'Kimberly Anderson', role: 'Paraprofessional' },
        { name: 'Adolina Holger', role: 'Paraprofessional' },
        { name: 'Maira De Jesus', role: 'Paraprofessional' },
        { name: 'Kendra Briggs', role: 'Paraprofessional' },
        { name: 'Cina Cray', role: 'Paraprofessional' },
        { name: 'Pearlene Dixon', role: 'Paraprofessional' },
        { name: 'Daryl Williams', role: 'Paraprofessional' },
        { name: 'Lourdes Mendez', role: 'Paraprofessional' },
        { name: 'Ariana Luciano', role: 'Paraprofessional' },
        { name: 'Angela Yagual', role: 'Paraprofessional' },
        { name: 'Marlene Cirineo', role: 'Paraprofessional' },
        { name: 'Nancy De Jesus', role: 'School Aide' },
        { name: 'Leticia Pieretti', role: 'School Aide' },
        { name: 'Mirta Santos', role: 'School Aide' },
        { name: 'Jason Matos', role: 'School Aide' },
        { name: 'Sandra Manzanillo', role: 'School Aide' },
        { name: 'Dairen Manzanillo', role: 'School Aide' },
        { name: 'Henrilka Ovalle', role: 'School Aide' },
        { name: 'Boriken Health Clinic', role: 'School Aide' },
        { name: 'Idanna Acosta', role: "Physician's Assistant" },
      ],
    },
    {
      id: 'custodial',
      title: 'Custodial Staff',
      items: [
        { name: 'Peter Roberti', role: 'Custodial Engineer' },
        { name: 'Kenny Thomas', role: 'Custodian' },
        { name: 'Dion Roberson', role: 'Custodian' },
      ],
    },
  ]), []);

  const navAnchors = [
    { id: 'administration', label: 'Administration' },
    { id: 'guidance', label: 'Guidance' },
    { id: 'support', label: 'Support Personnel' },
    { id: 'cse', label: 'CSE' },
    { id: 'related', label: 'Related Services' },
    { id: 'paras', label: 'Paraprofessionals' },
    { id: 'custodial', label: 'Custodial' },
  ];

  const filteredSections = useMemo(() => {
    if (!query.trim()) return sections;
    const q = query.toLowerCase();
    return sections
      .map((sec) => ({
        ...sec,
        items: sec.items.filter((i) =>
          `${i.name} ${i.role}`.toLowerCase().includes(q)
        ),
      }))
      .filter((sec) => sec.items.length > 0);
  }, [query, sections]);

  return (
    <main className="bg-white">
      <Navbar />

      {/* Header */}
      <section className="pt-24 pb-10 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-3">
            <ol className="flex items-center gap-2 text-xs text-gray-500">
              <li><Link to="/" className="hover:text-gray-700">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><span className="text-gray-600">About Us</span></li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-900">Faculty & Staff</li>
            </ol>
          </nav>

          <div className="mb-4">
            <span className="inline-flex items-center text-xs font-medium px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary">About Us</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-light text-gray-900">Faculty & Staff</h1>
          <p className="mt-3 text-gray-600 max-w-3xl">Meet the dedicated team that supports our students and families.</p>

          {/* Anchor nav */}
          <div className="mt-6">
            <ul className="flex flex-wrap items-center gap-3 text-sm">
              {navAnchors.map((a) => (
                <li key={a.id}>
                  <a href={`#${a.id}`} className="inline-flex items-center px-3 py-1.5 rounded-full border border-gray-200 hover:border-brand-primary hover:text-brand-primary transition-colors">{a.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Main */}
            <div className="lg:col-span-8 space-y-10">
              {/* Banner placeholder */}
              <div className="w-full h-44 md:h-56 lg:h-60 rounded-xl border border-gray-200 bg-gray-100 overflow-hidden flex items-center justify-center">
                <span className="text-gray-500 text-sm">School artwork banner</span>
              </div>

              {/* Search */}
              <div className="flex items-center gap-3">
                <div className="relative w-full max-w-md">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search by name or role"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-transparent"
                    aria-label="Search staff"
                  />
                </div>
              </div>

              {/* Year pill */}
              <div className="mt-2">
                <span className="inline-flex items-center px-2.5 py-1 text-xs rounded-full bg-gray-100 text-gray-700">2024–2025 Roster</span>
              </div>

              {/* Sections */}
              {filteredSections.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-24">
                  <div className="mb-4">
                    <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
                    <div className={`mt-2 h-1 w-12 ${section.id === 'mission' ? 'bg-brand-secondary' : 'bg-brand-primary/70'} rounded`}></div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                    <div className="grid grid-cols-2 text-xs font-semibold uppercase tracking-wide text-gray-500 border-b border-gray-200">
                      <div className="px-4 py-3">Staff Member</div>
                      <div className="px-4 py-3">Position</div>
                    </div>
                    <ul role="list" className="divide-y divide-gray-100">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="grid grid-cols-2 items-center">
                          <div className="px-4 py-3 text-gray-900">{item.name}</div>
                          <div className="px-4 py-3 text-gray-700">{item.role}</div>
                        </li>
                      ))}
                      {section.items.length === 0 && (
                        <li className="px-4 py-6 text-sm text-gray-500">No staff found in this section.</li>
                      )}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24 self-start">
              <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden" role="navigation" aria-label="Shortcuts">
                <div className="bg-brand-primary text-white px-5 py-4">
                  <h3 className="text-lg font-semibold">Shortcuts</h3>
                </div>
                <div className="p-4">
                  <ul className="space-y-2">
                    {navAnchors.map((a) => (
                      <li key={a.id}>
                        <a href={`#${a.id}`} className="group flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                          <UsersIcon className="h-5 w-5 text-brand-primary" />
                          <span className="text-sm font-medium">{a.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
                <div className="bg-gray-900 text-white px-5 py-4">
                  <h3 className="text-lg font-semibold">Rosters</h3>
                </div>
                <div className="p-4">
                  <ul className="space-y-2">
                    <li>
                      <Link to="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                        <DocumentTextIcon className="h-5 w-5 text-brand-primary" />
                        <span className="text-sm font-medium">3-K Faculty</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                        <DocumentTextIcon className="h-5 w-5 text-brand-primary" />
                        <span className="text-sm font-medium">Middle School Faculty</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                        <DocumentTextIcon className="h-5 w-5 text-brand-primary" />
                        <span className="text-sm font-medium">Cluster Faculty</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h4 className="text-base font-semibold text-gray-900 mb-2">Questions?</h4>
                <p className="text-gray-600 text-sm mb-4">Contact our main office for assistance.</p>
                <Link to="/contact-us" className="inline-flex items-center justify-center px-5 py-2.5 bg-brand-primary text-white rounded-lg hover:bg-[#e13f37] transition-colors">Contact Us</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default FacultyStaff;


