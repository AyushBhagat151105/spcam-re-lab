import Link from "next/link";
import { FaInstagram, FaGithub, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Section - About */}
          <div>
            <h2 className="text-xl font-semibold">Research Lab</h2>
            <p className="text-gray-400 mt-2 text-sm">
              Innovating the future through technology and research.
            </p>

            <button className="mt-8 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdWIE2gebw31oaMeuW70PcKFWffUEdClqAvso_1XJxCKdKZeA/viewform?usp=sharing "
                  className="hover:text-white"
                >
                  Want to join Team??
                </Link>
              </span>
            </button>
          </div>

          {/* Middle Section - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/about" className="hover:text-gray-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-gray-200">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-gray-200">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Section - Social Media */}
          <div>
            <h3 className="text-lg font-semibold">Connect with Us</h3>
            <div className="flex space-x-4 mt-2">
              <Link
                href="https://github.com/AyushBhagat151105"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-xl"
              >
                <FaGithub />
              </Link>
              <Link
                href="https://www.instagram.com/spcam_research_lab?igsh=MTJrbDNlbHN1bTBsYw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-xl"
              >
                <FaInstagram />
              </Link>
              <Link href="/" className="text-gray-400 hover:text-white text-xl">
                <FaGlobe />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Research Lab. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
