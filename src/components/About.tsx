import { useReveal } from '@/hooks/useIntersectionObserver';
import { MapPin, GraduationCap, Code, Trophy, Award } from 'lucide-react';

const stats = [
  { value: '700+', label: 'DSA Problems Solved', icon: Code },
  { value: '3-star', label: 'CodeChef Rating 1622', icon: Award },
  { value: 'Pupil', label: 'Codeforces Rating 1322', icon: Trophy },
  { value: '98.11%', label: 'JEE Main Percentile', icon: GraduationCap },
];

export default function About() {
  useReveal();

  return (
    <section id="about" className="relative py-24 px-6 bg-[#141414] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[#E50914]/40 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-16 text-center">
          <span className="text-[#E50914] text-sm font-bold tracking-[0.3em] uppercase mb-3 block">Get to know me</span>
          <h2 className="font-bebas text-5xl md:text-6xl tracking-wider text-white">
            About <span className="text-[#E50914]">Me</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3 reveal-left">
            <p className="text-[#b3b3b3] text-lg leading-relaxed mb-6">
              I&apos;m a <span className="text-white font-semibold">Computer Science and Data Science undergraduate</span> at
              <span className="text-white font-semibold"> IIIT Bhopal</span> with hands-on experience building
              full-stack and AI-enabled products.
            </p>
            <p className="text-[#808080] text-base leading-relaxed mb-6">
              My work combines <span className="text-white font-medium">strong core CS fundamentals</span> in DSA,
              DBMS, operating systems, networks, and software engineering with
              <span className="text-white font-medium"> practical product delivery</span> using React.js, Next.js,
              Node.js, Express.js, PostgreSQL, Prisma, Clerk, LangChain, and Stripe.
            </p>
            <p className="text-[#808080] text-base leading-relaxed mb-8">
              I enjoy designing reliable backend systems, polished interfaces, and responsive SaaS experiences that
              feel thoughtful from login to deployment.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                { icon: GraduationCap, text: 'IIIT Bhopal' },
                { icon: MapPin, text: 'India' },
                { icon: Code, text: 'React - Node.js - PostgreSQL' },
              ].map(({ icon: Icon, text }) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm text-[#b3b3b3]"
                >
                  <Icon size={14} className="text-[#E50914]" />
                  {text}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 gap-4 reveal-right">
            {stats.map(({ value, label, icon: Icon }, index) => (
              <div
                key={label}
                className="glass-card rounded-xl p-5 netflix-card group"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <Icon size={22} className="text-[#E50914] mb-3 group-hover:scale-110 transition-transform" />
                <div className="font-bebas text-2xl text-white tracking-wide leading-tight">{value}</div>
                <div className="text-[#808080] text-xs mt-1 leading-tight">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
