import React from 'react';
import Image from 'next/image';
import SectionTitle from '../Common/SectionTitle';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Fikih Firmansyah',
    position: 'Founder and CEO',
    description: 'Experienced in computational psychometrics, software engineering, and data analytics, driving innovation and passionate about creating scalable, secure, and data-driven solutions for education and organizations worldwide.',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQF9_vgeVqZPpQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722158745557?e=1738800000&v=beta&t=h_JBxkMIlQ3uOlzNtvHj2Vi5rye4lmFRL3Xu7SxRW1c',
    linkedin: 'https://linkedin.com/in/fikih-firmansyah',
    twitter: 'https://twitter.com',
    github: 'https://github.com'
  },
  {
    name: 'Rasyid Hafiz',
    position: 'Founder and CMO',
    description: 'A creative and user-focused designer with a proven track record in UX, branding, and visual storytelling, leading efforts to craft impactful narratives and innovative strategies that connect with our diverse audience.',
    image: 'https://media.licdn.com/dms/image/v2/C4D03AQE9TcZA3o6mog/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1644316300100?e=1738800000&v=beta&t=b9ui-FbbfySgEdh0ATVdSqdpt8YF7hOQjD13wrYWGfg',
    linkedin: 'https://www.linkedin.com/in/r-hafiz/',
    twitter: 'https://twitter.com',
    github: 'https://github.com'
  },
  {
    name: 'Amalia',
    position: 'CSO',
    description: 'Expert in Natural Language Processing with a distinguished academic and research background, driving innovation and advancing AI-powered solutions for transformative online assessment experiences.',
    image: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/Dosen-Amel.png',
    linkedin: 'https://www.linkedin.com/in/amalia-mahdi-2365b4258/',
    twitter: 'https://twitter.com',
    github: 'https://github.com'
  }
];

const TeamMemberCard = ({ member }) => (
  <div className="rounded-sm bg-white px-8 py-10 shadow-three hover:shadow-one dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out p-6 rounded-lg">
    <Image
      className="w-24 h-24 rounded-full mx-auto"
      src={member.image}
      alt={member.name}
      width={96}
      height={96}
    />
    <h2 className="text-xl font-semibold mt-4 text-center">{member.name}</h2>
    <p className="text-gray-600 text-center">{member.position}</p>
    <p className="mb-7 text-base text-body-color mt-2 text-center">{member.description}</p>
    <div className="flex justify-center mt-4">
      <a href={member.linkedin} target='blank' className="text-blue-500 mx-2"><FaLinkedin size={20} /></a>
      {/* <a href={member.twitter} className="text-blue-400 mx-2"><FaTwitter size={20} /></a> */}
      {/* <a href={member.github} className="text-gray-800 mx-2"><FaGithub size={20} /></a> */}
    </div>
  </div>
);

const AboutSectionTeam = () => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/3">
              <SectionTitle
                title="Meet Our Team"
                paragraph="Meet the dedicated team behind TestMate! Our diverse group of innovators, educators, and technologists is united by a shared passion for transforming online assessments. With expertise spanning AI, UX design, education, and software development, we are committed to creating an adaptive and inclusive platform that redefines how knowledge is assessed. Together, we aim to empower educators and learners worldwide with smarter, more efficient, and secure tools for modern education."
                mb="44px"
              />
            </div>
            <div className="w-full px-4 lg:w-2/3">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {teamMembers.map((member, index) => (
                  <TeamMemberCard key={index} member={member} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTeam;