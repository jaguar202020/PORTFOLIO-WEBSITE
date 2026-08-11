import { useReveal } from '@/hooks/useIntersectionObserver';
import { Trophy, Medal, Target, TrendingUp, Award, Star, Flag } from 'lucide-react';

const platforms = [
  {
    name: 'Codeforces',
    handle: 'jayanttomr',
    rating: '1304',
    rank: 'Pupil',
    href: 'https://codeforces.com/profile/jayanttomr',
    icon: TrendingUp,
    color: 'text-blue-400',
    accent: 'from-blue-500/20 to-blue-700/10',
    border: 'border-blue-500/30',
  },
  {
    name: 'LeetCode',
    handle: 'Jayant_Tomar20',
    rating: '700+ DSA solved',
    rank: 'Problem Solver',
    href: 'https://leetcode.com/u/Jayant_Tomar20/',
    icon: Target,
    color: 'text-amber-400',
    accent: 'from-amber-500/20 to-orange-700/10',
    border: 'border-amber-500/30',
  },
  {
    name: 'CodeChef',
    handle: 'jayant_tomar20',
    rating: '1513',
    rank: '2-star',
    href: 'https://www.codechef.com/users/jayant_tomar20',
    icon: Trophy,
    color: 'text-green-400',
    accent: 'from-green-500/20 to-emerald-700/10',
    border: 'border-green-500/30',
  },
];

const achievements = [
  {
    title: '700+ DSA Problems Solved',
    detail:
      'Solved 700+ problems across LeetCode, Codeforces, CodeChef, GeeksforGeeks, and AlgoMaster spanning arrays, trees, graphs, DP, heaps, greedy, and recursion.',
    icon: Medal,
  },
  {
    title: 'CodeChef 2-star',
    detail: 'Earned a 2-star CodeChef profile with a rating of 1513 through consistent contest participation.',
    icon: Award,
  },
  {
    title: 'Codeforces Pupil',
    detail: 'Reached Pupil rank with a Codeforces rating of 1304 while actively competing across problem-solving contests.',
    icon: Trophy,
  },
  {
    title: 'Global Rank 908',
    detail: 'Secured Global Rank 908 in CodeChef Starters 202 among more than 20,000 participants.',
    icon: Flag,
  },
  {
    title: 'JEE Main 98.11 Percentile',
    detail: 'Scored 98.11 percentile in JEE Main 2024 and qualified for JEE Advanced 2024.',
    icon: Star,
  },
  {
    title: ' Global Rank 1027',
    detail: 'Secured Global Rank 1027 in Codeforces Round 1113 (Div. 2) among 25,000+ participants',
    icon: Flag,
  },
];

export default function Achievements() {
  useReveal();

  return (
    <section id="achievements" className="relative py-24 px-6 bg-[#0d0d0d] overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#E50914]/8 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="reveal mb-16 text-center">
          <span className="text-[#E50914] text-sm font-bold tracking-[0.3em] uppercase mb-3 block">
            Competitive Record
          </span>
          <h2 className="font-bebas text-5xl md:text-6xl tracking-wider text-white">
            Achieve<span className="text-[#E50914]">ments</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {platforms.map((platform, index) => (
            <a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal netflix-card group glass-card rounded-xl p-6 border ${platform.border} bg-gradient-to-br ${platform.accent}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-5">
                <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center ${platform.color}`}>
                  <platform.icon size={22} />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-[#808080] font-semibold">View Profile</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{platform.name}</h3>
              <p className="text-[#808080] text-sm mb-4">@{platform.handle}</p>
              <div className="flex items-end justify-between">
                <div>
                  <div className={`font-bebas text-3xl ${platform.color}`}>{platform.rating}</div>
                  <div className="text-[#b3b3b3] text-xs mt-0.5">{platform.rank}</div>
                </div>
                <platform.icon
                  size={20}
                  className="text-[#404040] group-hover:text-[#E50914] group-hover:translate-x-1 transition-all"
                />
              </div>
            </a>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="reveal-left flex gap-5 p-6 rounded-xl glass-card netflix-card group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#E50914]/15 border border-[#E50914]/30 flex items-center justify-center text-[#E50914] group-hover:scale-110 group-hover:bg-[#E50914]/25 transition-all">
                <achievement.icon size={22} />
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-1">{achievement.title}</h3>
                <p className="text-[#808080] text-sm leading-relaxed">{achievement.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
