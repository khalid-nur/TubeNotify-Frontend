import { FiCpu } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa6";
import { HiOutlineBolt } from "react-icons/hi2";

const Footer = () => {
  return (
    <footer className="bg-gray-900 px-6 py-16 text-gray-400">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-2xl text-white">TubeNotify</h3>
            <p className="leading-relaxed">
              Never miss a video from your favorite creators. Get instant SMS
              alerts with AI-powered summaries.
            </p>
          </div>

          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <HiOutlineBolt className="text-white" size={18} />
              <span>Instant SMS alerts</span>
            </div>
            <div className="flex items-center gap-3">
              <FiCpu className="text-white" size={18} />
              <span>AI-powered video summaries</span>
            </div>
            <div className="flex items-center gap-3">
              <FaRegBell className="text-white" size={18} />
              <span>Track your favorite creators effortlessly</span>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm">
          <p>&copy; 2026 TubeNotify.</p>
          <p className="mt-2 text-gray-500">
            Designed & developed by Khalid Nur
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
