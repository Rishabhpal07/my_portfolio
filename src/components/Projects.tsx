import { Github } from "lucide-react";
import Card from "./Card";

const cardData = [
  {
    description: 'An AI-powered website generator that creates modern, responsive website UIs instantly. It lets you make seamless inline edits without re-prompting, access the full source code, and use ImageKit integration for both image uploads and AI-generated visuals — all in one intuitive platform. ',
    imageUrl: 'ai_website.png',
    link1:'https://github.com/Rishabhpal07/AI_Website_Generator',
    link2:'https://ai-website-generator-tau.vercel.app/'
  },
  {
    description: 'A smart stock tracker that keeps you ahead of the market with real-time insights, personalized portfolio tracking, and AI-powered daily finance news summaries delivered straight to your inbox—so you never miss what matters. ',
    imageUrl: 'signalist.png',
    link1:'https://github.com/Rishabhpal07/tradingView',
    link2:'https://trading-view-n1o9.vercel.app'
  },
  {
    description: 'BaseBuild is a platform designed to help developers find teammates and coding partners for hackathons and collaborative projects. It connects programmers, designers, and tech enthusiasts, enabling them to team up based on their skills, interests, and project goals.',
    imageUrl: 'basebuild.png',
    link1:'https://github.com/Rishabhpal07/Basebuild_app',
    link2:'https://basebuild-6vnd.onrender.com/chat'
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
