import { Link } from "react-router-dom";
import { Video, MessageCircle, Users, Globe, ArrowRight, Play, Zap, Shield, Star } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen w-full relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute animate-float-slow opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 6}s`
            }}
          >
            <div 
              className={`rounded-full blur-xl ${
                i % 3 === 0 ? 'bg-blue-500' : i % 3 === 1 ? 'bg-purple-500' : 'bg-pink-500'
              }`}
              style={{
                width: `${50 + Math.random() * 100}px`,
                height: `${50 + Math.random() * 100}px`,
              }}
            />
          </div>
        ))}
        
        {/* Geometric Shapes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`geo-${i}`}
            className="absolute animate-spin-slow opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          >
            <div 
              className="w-20 h-20 border border-white/30 rotate-45"
              style={{
                background: 'linear-gradient(45deg, rgba(168,85,247,0.1) 0%, rgba(59,130,246,0.1) 100%)'
              }}
            />
          </div>
        ))}

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10" />

      {/* Hero Section */}
      <div className="z-10 relative w-full max-w-7xl mx-auto px-6">
        
        {/* Main Hero Content */}
        <div className="text-center mb-16 animate-hero-entrance">
          
          {/* Brand Logo */}
          <div className="relative inline-block mb-8 group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-all duration-500 animate-pulse-slow" />
            <div className="relative bg-black/50 backdrop-blur-xl border border-white/20 rounded-2xl px-8 py-4 flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                  <Zap className="w-8 h-8 text-white animate-pulse" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center animate-bounce">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-black text-white tracking-wider">STREAMIFY</h2>
                <p className="text-sm text-cyan-400 font-medium">Next-Gen Communication</p>
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <div className="relative">
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tight">
              <span className="block animate-slide-down">
                The Future of
              </span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-gradient-x animate-slide-up delay-300">
                Communication
              </span>
              <span className="block text-4xl md:text-6xl mt-4 text-gray-300 animate-fade-in delay-700">
                is Here
              </span>
            </h1>
            
            {/* Floating Elements */}
            <div className="absolute -top-10 -left-20 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-float delay-1000" />
            <div className="absolute -top-16 -right-16 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-float delay-1500" />
            <div className="absolute top-20 left-10 w-12 h-12 bg-pink-500/20 rounded-full blur-xl animate-float delay-2000" />
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-1000">
            Connect instantly with <span className="text-cyan-400 font-semibold">crystal-clear video</span>, 
            chat in <span className="text-purple-400 font-semibold">real-time</span>, and 
            collaborate globally with the most <span className="text-pink-400 font-semibold">advanced platform</span> ever built.
          </p>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            {[
              { icon: Video, title: "4K Video", desc: "Ultra HD Calls", color: "from-blue-500 to-cyan-500", delay: "0s" },
              { icon: MessageCircle, title: "Lightning Chat", desc: "Instant Messages", color: "from-purple-500 to-pink-500", delay: "0.2s" },
              { icon: Shield, title: "Bank-Grade", desc: "Security", color: "from-green-500 to-emerald-500", delay: "0.4s" },
              { icon: Globe, title: "Global Reach", desc: "200+ Countries", color: "from-orange-500 to-red-500", delay: "0.6s" }
            ].map(({ icon: Icon, title, desc, color, delay }, index) => (
              <div 
                key={index}
                className="group relative animate-scale-in cursor-pointer"
                style={{ animationDelay: delay }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl blur" style={{ background: `linear-gradient(to right, ${color.replace('from-', '').replace(' to-', ', ')})` }} />
                <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 group-hover:bg-black/60 transition-all duration-300 hover:scale-105">
                  <div className={`w-12 h-12 bg-gradient-to-r ${color} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
                  <p className="text-gray-400 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in delay-1500">
            <Link to="/login" className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-all duration-300 animate-pulse-slow" />
              <button className="relative bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white px-10 py-5 rounded-2xl font-bold text-xl flex items-center gap-3 hover:scale-105 transition-all duration-300 shadow-xl">
                <Play className="w-6 h-6" />
                <span>Join the Conversation</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
            
            <Link to="/signup" className="group relative">
              <button className="relative bg-black/40 backdrop-blur-xl border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-xl flex items-center gap-3 hover:scale-105 hover:bg-black/60 hover:border-white/50 transition-all duration-300">
                <Star className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <span>Create Your Space</span>
              </button>
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl blur-3xl" />
          <div className="relative bg-black/20 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { number: "10M+", label: "Active Users", subtext: "Growing daily", icon: Users, color: "text-cyan-400" },
                { number: "150+", label: "Countries", subtext: "Worldwide", icon: Globe, color: "text-purple-400" },
                { number: "99.9%", label: "Uptime", subtext: "Guaranteed", icon: Shield, color: "text-green-400" }
              ].map(({ number, label, subtext, icon: Icon, color }, index) => (
                <div key={index} className="group animate-fade-in-up" style={{ animationDelay: `${2 + index * 0.2}s` }}>
                  <div className="flex items-center justify-center mb-4">
                    <Icon className={`w-8 h-8 ${color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <div className={`text-4xl md:text-5xl font-black ${color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {number}
                  </div>
                  <div className="text-white font-semibold text-lg mb-1">{label}</div>
                  <div className="text-gray-400 text-sm">{subtext}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Custom Animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { 
              transform: translateY(0px) rotate(0deg); 
              opacity: 0.7;
            }
            50% { 
              transform: translateY(-20px) rotate(180deg); 
              opacity: 1;
            }
          }
          
          @keyframes float-slow {
            0%, 100% { 
              transform: translateY(0px) scale(1); 
            }
            33% { 
              transform: translateY(-30px) scale(1.1); 
            }
            66% { 
              transform: translateY(20px) scale(0.9); 
            }
          }
          
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          @keyframes gradient-x {
            0%, 100% {
              background-size: 200% 200%;
              background-position: left center;
            }
            50% {
              background-size: 200% 200%;
              background-position: right center;
            }
          }
          
          @keyframes hero-entrance {
            0% { 
              opacity: 0; 
              transform: translateY(100px) scale(0.8); 
              filter: blur(10px);
            }
            50% {
              opacity: 0.7;
              transform: translateY(20px) scale(0.95);
              filter: blur(2px);
            }
            100% { 
              opacity: 1; 
              transform: translateY(0) scale(1); 
              filter: blur(0px);
            }
          }
          
          @keyframes slide-down {
            0% { 
              opacity: 0; 
              transform: translateY(-50px);
            }
            100% { 
              opacity: 1; 
              transform: translateY(0);
            }
          }
          
          @keyframes slide-up {
            0% { 
              opacity: 0; 
              transform: translateY(50px);
            }
            100% { 
              opacity: 1; 
              transform: translateY(0);
            }
          }
          
          @keyframes scale-in {
            0% { 
              opacity: 0; 
              transform: scale(0.8) rotate(-5deg);
            }
            100% { 
              opacity: 1; 
              transform: scale(1) rotate(0deg);
            }
          }
          
          @keyframes fade-in {
            0% { 
              opacity: 0; 
            }
            100% { 
              opacity: 1; 
            }
          }
          
          @keyframes fade-in-up {
            0% { 
              opacity: 0; 
              transform: translateY(40px);
            }
            100% { 
              opacity: 1; 
              transform: translateY(0);
            }
          }
          
          @keyframes pulse-slow {
            0%, 100% { 
              opacity: 0.4;
              transform: scale(1);
            }
            50% { 
              opacity: 1;
              transform: scale(1.05);
            }
          }
          
          /* Animation Classes */
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          .animate-float-slow {
            animation: float-slow 8s ease-in-out infinite;
          }
          
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
          
          .animate-gradient-x {
            animation: gradient-x 8s ease infinite;
          }
          
          .animate-hero-entrance {
            animation: hero-entrance 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
            opacity: 0;
          }
          
          .animate-slide-down {
            animation: slide-down 1s ease-out forwards;
            opacity: 0;
          }
          
          .animate-slide-up {
            animation: slide-up 1s ease-out forwards;
            opacity: 0;
          }
          
          .animate-scale-in {
            animation: scale-in 0.8s ease-out forwards;
            opacity: 0;
          }
          
          .animate-fade-in {
            animation: fade-in 1.2s ease-out forwards;
            opacity: 0;
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 1s ease-out forwards;
            opacity: 0;
          }
          
          .animate-pulse-slow {
            animation: pulse-slow 3s ease-in-out infinite;
          }
          
          /* Delay Classes */
          .delay-200 { animation-delay: 0.2s; }
          .delay-300 { animation-delay: 0.3s; }
          .delay-500 { animation-delay: 0.5s; }
          .delay-700 { animation-delay: 0.7s; }
          .delay-1000 { animation-delay: 1s; }
          .delay-1500 { animation-delay: 1.5s; }
          .delay-2000 { animation-delay: 2s; }
          
          /* Responsive animations */
          @media (prefers-reduced-motion: reduce) {
            .animate-float,
            .animate-float-slow,
            .animate-spin-slow,
            .animate-gradient-x,
            .animate-pulse-slow {
              animation: none;
            }
          }
        `}
      </style>
    </div>
  );
};

export default LandingPage;