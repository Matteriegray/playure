import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#f4f9fc] to-[#f6f7fa] text-gray-700">
      <div className="text-center py-12 px-4 text-xl italic text-gray-600 max-w-4xl mx-auto">
        “We could never learn to be brave and patient, if there were only joy in the world.”
        <br />
        <span className="font-semibold text-gray-700">— Helen Keller</span>
      </div>

      <div className="border-t border-gray-300" />

      <div className="py-12 px-6 md:px-16 lg:px-24 grid md:grid-cols-5 gap-10">
        <div className="col-span-2">
          <h2 className="text-2xl font-semibold text-blue-600">SportsCareer</h2>
          <p className="mt-2 text-sm text-gray-500">
            Building the future for sports players worldwide. Your one-stop solution for athletic career development and networking.
          </p>

          <div className="mt-4 space-y-2 text-sm text-gray-600">
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-blue-600" /> hello@sportscareer.com
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-600" /> +1 (555) 123-4567
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-600" /> San Francisco, CA
            </p>
          </div>

          <div className="flex gap-4 mt-6 text-xl text-gray-600">
            <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
            <FaTwitter className="hover:text-blue-600 cursor-pointer" />
            <FaInstagram className="hover:text-pink-600 cursor-pointer" />
            <FaYoutube className="hover:text-red-600 cursor-pointer" />
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Platform</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Features</li>
            <li>Competitions</li>
            <li>Athletes</li>
            <li>AI Assistant</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Sports</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Basketball</li>
            <li>Football</li>
            <li>Tennis</li>
            <li>Swimming</li>
            <li>Track & Field</li>
            <li>More Sports</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-300" />

      <div className="flex flex-col md:flex-row justify-between items-center text-sm px-6 md:px-16 lg:px-24 py-6 text-gray-500">
        <p>© 2025 SportsCareer. All rights reserved.</p>
        <p className="flex items-center gap-1">Made with <span className="text-red-500">❤</span> for athletes worldwide</p>
      </div>
    </footer>
  );
};

export default Footer;