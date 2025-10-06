import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="flex flex-col items-center justify-center text-center space-y-4 mt-4">
        <p className="text-sm">
          &copy; 2025 Fylo. Todos los derechos reservados.
        </p>

        <div className="w-full flex flex-col justify-start p-4 space-y-2 text-left">
          <a href="#" className="hover:text-blue-400 transition">
            About Us
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            Jobs
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            Press
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            Blog
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            Contact Us
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            Terms
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            Privacy
          </a>
        </div>

        <div className="flex space-x-4">
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-blue-500 transition"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-blue-400 transition"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-pink-500 transition"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </footer>
  );
};
