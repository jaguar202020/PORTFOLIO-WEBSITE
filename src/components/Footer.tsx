import { ArrowUp } from 'lucide-react';

const socials = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/jayant-tomar/' },
  { name: 'GitHub', href: 'https://github.com/jaguar202020' },
  { name: 'LeetCode', href: 'https://leetcode.com/u/Jayant_Tomar20/' },
  { name: 'Codeforces', href: 'https://codeforces.com/profile/jayanttomr' },
  { name: 'CodeChef', href: 'https://www.codechef.com/users/jayant_tomar20' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/5 pt-16 pb-8 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#E50914]/40 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="font-bebas text-3xl text-[#E50914] tracking-widest mb-3">Jayant Tomar</div>
            <p className="text-[#808080] text-sm leading-relaxed max-w-xs">
              Full stack developer focused on AI-enabled web products, strong backend systems, and clean UX.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Achievements', 'Education'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-[#808080] hover:text-[#E50914] text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wider">Connect</h4>
            <ul className="space-y-2">
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#808080] hover:text-[#E50914] text-sm transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#404040] group-hover:bg-[#E50914] rounded-full transition-colors" />
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-[#404040] text-xs">
            &copy; {new Date().getFullYear()} Jayant Tomar. Built to showcase projects, skills, and competitive programming work.
          </p>
          <a
            href="#hero"
            className="flex items-center gap-2 text-[#808080] hover:text-white text-xs transition-colors group"
          >
            Back to top
            <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#E50914] group-hover:bg-[#E50914]/10 transition-all">
              <ArrowUp size={14} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
