const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Footer Essentials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Essentials</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#about"
                className="hover:text-white transition duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-white transition duration-200"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-white transition duration-200"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#privacy"
                className="hover:text-white transition duration-200"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://github.com/snehilsanyal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition duration-200"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.kaggle.com/snehilsanyal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition duration-200"
              >
                <i className="fab fa-kaggle text-2xl"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/snehilsanyal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition duration-200"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/snehilsanyal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition duration-200"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
            </li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Subscribe</h3>
          <p className="text-sm text-gray-400 mb-4">
            Get updates on our latest content and events.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-4 py-2 rounded-l-md bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} AIVidha. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
