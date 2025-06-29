import { Link } from "react-router-dom";

const LandingPage = () => {
  const backgroundImage =
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80";

  return (
    <div
      className="h-screen w-full bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/50" />

      {/* Central Content */}
      <div className="z-10 text-center px-6 max-w-2xl animate-fadeIn">
        <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-10 shadow-xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
            Connect. Communicate. <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Anywhere in the World
            </span>
          </h1>

          <p className="text-md md:text-xl text-gray-200 mb-8 leading-relaxed">
            Chat, call, and connect globally. Make new friends, learn languages, and share stories — all in one place.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/login">
              <button className="px-6 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md hover:scale-105 transition duration-300">
                Join the Conversation
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-6 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-md hover:scale-105 transition duration-300">
                Create Your Space
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Fade-in animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default LandingPage;
