import { useReveal } from '@/hooks/useIntersectionObserver';

const skillCategories = [
  {
    title: 'Programming',
    items: ['C++', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'Bash'],
  },
  {
    title: 'Frontend',
    items: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'ShadCN UI'],
  },
  {
    title: 'Backend & APIs',
    items: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'JWT', 'Inngest'],
  },
  {
    title: 'Databases & AI',
    items: ['PostgreSQL', 'MySQL', 'Neon PostgreSQL', 'Prisma ORM', 'ChromaDB', 'LangChain', 'Gemini AI'],
  },
  {
    title: 'Tools & Concepts',
    items: ['Git', 'GitHub', 'Postman', 'Render', 'Linux', 'Authentication', 'Authorization', 'MVC Architecture'],
  },
];

export default function Skills() {
  useReveal();

  return (
    <section id="skills" className="relative py-24 px-6 bg-[#0d0d0d] overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#E50914]/8 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="reveal mb-16 text-center">
          <span className="text-[#E50914] text-sm font-bold tracking-[0.3em] uppercase mb-3 block">
            Technical Arsenal
          </span>
          <h2 className="font-bebas text-5xl md:text-6xl tracking-wider text-white">
            Skills & <span className="text-[#E50914]">Expertise</span>
          </h2>
        </div>

        <div className="space-y-10">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="reveal" style={{ transitionDelay: `${index * 80}ms` }}>
              <h3 className="row-title mb-5">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="tech-tag hover:bg-[#E50914]/25 hover:border-[#E50914]/60 hover:text-white transition-all duration-200 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
