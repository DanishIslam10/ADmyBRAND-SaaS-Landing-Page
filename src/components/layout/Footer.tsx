import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Ad My Brand</h2>
          <p className="text-sm opacity-70">
            Empowering businesses to boost their visibility with powerful ad campaigns and analytics.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-primary">Home</a></li>
            <li><a href="#" className="hover:text-primary">Features</a></li>
            <li><a href="#" className="hover:text-primary">Pricing</a></li>
            <li><a href="#" className="hover:text-primary">Testimonials</a></li>
            <li><a href="#" className="hover:text-primary">FAQs</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: <a href="mailto:hello@admybrand.com" className="hover:text-primary">hello@admybrand.com</a></li>
            <li>Phone: <span className="opacity-80">+91 9876543210</span></li>
            <li>Address: <span className="opacity-80">Mumbai, India</span></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-primary">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-primary">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="hover:text-primary">
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm opacity-60">
        © {new Date().getFullYear()} Ad My Brand. All rights reserved.
      </div>
    </footer>
  );
}
