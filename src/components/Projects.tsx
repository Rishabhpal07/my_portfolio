import { Github } from "lucide-react";
import Card from "./Card";

const cardData = [
  {
    description: 'BaseBuild is a platform designed to help developers find teammates and coding partners for hackathons and collaborative projects. It connects programmers, designers, and tech enthusiasts, enabling them to team up based on their skills, interests, and project goals.',
    imageUrl: 'basebuild.png',
    link1:'https://github.com/Rishabhpal07/Basebuild_app',
    link2:'https://basebuild-6vnd.onrender.com/chat'
  },
  {
    description: 'The PM Internship Engine is an AI-powered platform that automates the process of matching students to internships by analyzing their skills and company requirements, ensuring optimal and fair placements.',
    imageUrl: 'pmInternship.png',
    link1:'https://github.com/Rishabhpal07/aimatch-allocator',
    link2:'https://aimatch-allocator.vercel.app'
  },
  {
    description: 'A Voting System built with Node.js where users can vote for candidates, and an admin manages the process by registering candidates and overseeing voting, ensuring a secure and efficient election process.',
    imageUrl: 'voting.png',
    link1:'https://github.com/Rishabhpal07/voting_app_in_nodejs'
  },
];

function Projects() {
  return (
    <section id="projects" className="py-10 px-5">
      <h2 className="text-center text-4xl font-semibold mb-10">My Projects</h2>

      <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cardData.map((card, index) => (
          <Card
            key={index}
            description={card.description}
            imageUrl={card.imageUrl}
            link1={card.link1}
            link2={card.link2}
          />
        ))}
      </div>

      {/* Centered View All Projects Button */}
      <div className="flex justify-center mt-10 ">
        <a
          href="https://github.com/rishabhpal07?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white hover:bg-[#D3DAD9] text-black h-12 flex gap-2 rounded-xl items-center justify-center px-5 shadow  transition"
        >
          View All Projects on Github <Github size={20} />
        </a>
      </div>
    </section>
  );
}

export default Projects;
