import { Link } from "react-router-dom";
import logo from "../assets/logo-light.png";

function Footer() {
  return (
    <footer className="bg-primary text-putih py-10 px-6 md:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <img src={logo} alt="Lyrical Invitation Logo" className="h-20 w-auto" />
          <h2 className="text-3xl font-bold">Lyrical Invitation</h2>
          <p className="mt-2 text-gray-300">Elevate your events with our smart and seamless digital invitations.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-yellow-500">Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-500">About</Link></li>
            <li><Link to="/pricing" className="hover:text-yellow-500">Pricing</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-500">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">Twitter</a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-500 mt-8 pt-4 text-center text-gray-300">
        <p>&copy; {new Date().getFullYear()} Lyrical Invitation. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
