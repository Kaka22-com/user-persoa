import React from 'react';
import { userPersona } from './constants';
import SectionCard from './components/SectionCard';
import Pill from './components/Pill';
import SkillIndicator from './components/SkillIndicator';

// Icon components defined outside the main App component to prevent re-rendering issues
const UserIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const BriefcaseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const MapPinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const App: React.FC = () => {
  return (
    <main className="h-screen w-screen p-4 sm:p-8 md:p-16 flex items-center justify-center font-sans">
      <div className="w-full max-w-6xl h-full max-h-[750px] bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
        
        {/* Left Side - Image and Quote */}
        <div className="relative md:flex-[2] bg-cover bg-center min-h-[300px] md:min-h-0" style={{ backgroundImage: `url(${userPersona.imageUrl})` }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          <div className="relative h-full flex flex-col justify-end p-6 md:p-10 text-white">
            <p className="text-base lg:text-lg italic bg-black/40 p-4 rounded-lg backdrop-blur-sm max-w-md">
              "{userPersona.quote}"
            </p>
          </div>
        </div>

        {/* Right Side - Details */}
        <div className="md:flex-[3] p-6 md:p-8">
           <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-800 mb-6">{userPersona.name}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
            {/* --- Column 1 --- */}
            <div className="flex flex-col space-y-5">
              <SectionCard title="About">
                <ul className="space-y-4 text-lg text-gray-700">
                  <li className="flex items-center">
                    <UserIcon className="w-6 h-6 mr-4 text-red-500 flex-shrink-0" />
                    <span>{userPersona.about.age} years old</span>
                  </li>
                  <li className="flex items-center">
                    <BriefcaseIcon className="w-6 h-6 mr-4 text-red-500 flex-shrink-0" />
                    <span>{userPersona.about.occupation}</span>
                  </li>
                  <li className="flex items-center">
                    <MapPinIcon className="w-6 h-6 mr-4 text-red-500 flex-shrink-0" />
                    <span>{userPersona.about.location}</span>
                  </li>
                </ul>
              </SectionCard>

              <SectionCard title="Bio">
                <p className="text-base leading-relaxed text-gray-600">{userPersona.bio}</p>
              </SectionCard>
              
              <SectionCard title="Pain Points">
                <p className="text-base leading-relaxed text-gray-600">{userPersona.painPoints}</p>
              </SectionCard>
            </div>
            
            {/* --- Column 2 --- */}
            <div className="flex flex-col space-y-5 mt-6 md:mt-0">
               <SectionCard title="Goals & Motivations">
                <p className="text-base leading-relaxed text-gray-600">{userPersona.goals}</p>
              </SectionCard>

              <SectionCard title="Skills">
                <div className="space-y-4">
                  {userPersona.skills.map(skill => (
                    <SkillIndicator key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </SectionCard>

              <SectionCard title="Favorite Apps">
                <div className="flex flex-wrap gap-2">
                  {userPersona.apps.map(app => <Pill key={app} text={app} />)}
                </div>
              </SectionCard>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;