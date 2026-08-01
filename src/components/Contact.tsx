import { useReveal } from '@/hooks/useIntersectionObserver';
import {
  Mail,
  Linkedin,
  Github,
  Code2,
  Trophy,
  Send,
  MapPin,
  CheckCircle,
  Phone,
} from 'lucide-react';
import { useState } from 'react';

const socials = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/jayant-tomar/', icon: Linkedin, color: 'hover:bg-[#0A66C2]' },
  { name: 'GitHub', href: 'https://github.com/jaguar202020', icon: Github, color: 'hover:bg-[#333]' },
  { name: 'LeetCode', href: 'https://leetcode.com/u/Jayant_Tomar20/', icon: Code2, color: 'hover:bg-[#285D34]' },
  { name: 'Codeforces', href: 'https://codeforces.com/profile/jayanttomr', icon: Trophy, color: 'hover:bg-[#008B8B]' },
  { name: 'CodeChef', href: 'https://www.codechef.com/users/jayant_tomar20', icon: Trophy, color: 'hover:bg-[#964B00]' },
];

const email = 'jayanttomr@gmail.com';
const phone = '+91-8077691582';

export default function Contact() {
  useReveal();
  const [name, setName] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!name || !emailValue || !message) return;

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${emailValue})`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-24 px-6 bg-[#0d0d0d] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E50914]/8 rounded-full blur-[120px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="reveal mb-16 text-center">
          <span className="text-[#E50914] text-sm font-bold tracking-[0.3em] uppercase mb-3 block">
            Let&apos;s Connect
          </span>
          <h2 className="font-bebas text-5xl md:text-6xl tracking-wider text-white mb-4">
            Get In <span className="text-[#E50914]">Touch</span>
          </h2>
          <p className="text-[#808080] max-w-xl mx-auto">
            If you have an internship, project, or collaboration in mind, I&apos;d love to talk through it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="reveal-left space-y-6">
            <a
              href={`mailto:${email}`}
              className="block glass-card rounded-xl p-6 netflix-card group"
            >
              <Mail className="text-[#E50914] mb-3" size={24} />
              <div className="text-xs text-[#808080] mb-1">Email me at</div>
              <div className="text-white font-medium group-hover:text-[#E50914] transition-colors break-all">
                {email}
              </div>
            </a>

            <a
              href={`tel:${phone}`}
              className="block glass-card rounded-xl p-6 netflix-card group"
            >
              <Phone className="text-[#E50914] mb-3" size={24} />
              <div className="text-xs text-[#808080] mb-1">Call or WhatsApp</div>
              <div className="text-white font-medium group-hover:text-[#E50914] transition-colors">
                {phone}
              </div>
            </a>

            <div className="glass-card rounded-xl p-6">
              <MapPin className="text-[#E50914] mb-3" size={24} />
              <div className="text-xs text-[#808080] mb-1">Based in</div>
              <div className="text-white font-medium">India - Open to internships, freelance, and remote work</div>
            </div>

            <div className="glass-card rounded-xl p-6">
              <div className="text-xs text-[#808080] mb-4">Find me on</div>
              <div className="grid grid-cols-2 gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-[#b3b3b3] hover:text-white transition-all duration-200 hover:scale-[1.03] ${social.color}`}
                  >
                    <social.icon size={18} />
                    <span className="text-sm font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="reveal-right">
            <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6 md:p-8 space-y-5">
              <div>
                <label className="block text-xs text-[#808080] mb-2 font-medium">Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 focus:border-[#E50914] rounded-lg px-4 py-3 text-white text-sm placeholder:text-[#404040] outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-xs text-[#808080] mb-2 font-medium">Your Email</label>
                <input
                  type="email"
                  value={emailValue}
                  onChange={(event) => setEmailValue(event.target.value)}
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 focus:border-[#E50914] rounded-lg px-4 py-3 text-white text-sm placeholder:text-[#404040] outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-xs text-[#808080] mb-2 font-medium">Message</label>
                <textarea
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Tell me about your project or opportunity..."
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 focus:border-[#E50914] rounded-lg px-4 py-3 text-white text-sm placeholder:text-[#404040] outline-none transition-colors resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#E50914] hover:bg-[#b20710] text-white font-semibold py-3.5 rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-95"
              >
                {sent ? (
                  <>
                    <CheckCircle size={18} /> Opening your email app...
                  </>
                ) : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
