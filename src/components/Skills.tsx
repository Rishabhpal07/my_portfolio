const Skills = () => {
  const technicalSkills = [
    { name: 'React/Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'c++', level: 80 },
    { name: 'UI/UX Design', level: 88 },
    { name: 'graphic designing', level: 82 }
  ];

  const technologies = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL',
    'MongoDB', 'AWS', 'Docker', 'GraphQL', 'REST APIs', 'Tailwind CSS',
    'Figma', 'Git', 'CI/CD', 'Testing', 'Agile', 'Microservices'
  ];

  const categories = [
    {
      title: 'Frontend Development',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
    },
    {
      title: 'Backend Development', 
      skills: ['Node.js', 'Python', 'PostgreSQL', 'GraphQL', 'REST APIs']
    },
    {
      title: 'Tools & DevOps',
      skills: ['AWS', 'Docker', 'Git', 'CI/CD', 'Testing']
    },
    {
      title: 'Design & UX',
      skills: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gradient-primary">
              Skills & Expertise
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit for building exceptional digital experiences
            </p>
          </div>

          {/* Technical Skills with Progress Bars */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Technical Proficiency
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-[#B6CEB4] h-3 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills by Category */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Technologies & Tools
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((category, index) => (
                <div key={index} className="space-y-4">
                  <h4 className="font-semibold text-lg text-foreground border-b border-border pb-2">
                    {category.title}
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {category.skills.map((skill, idx) => (
                      <li key={idx}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* All Technologies Cloud */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Technology Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-500 hover:bg-[#708993] text-white px-4 py-2 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
