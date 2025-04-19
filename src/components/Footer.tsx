
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brown text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">
              Rellie Labradoodles
            </h3>
            <p className="font-inter text-gray-300">
              Bringing joy to families with our adorable Australian Labradoodle puppies.
            </p>
          </div>
          
          <div>
            <h4 className="font-playfair text-xl font-bold mb-4">Contact Us</h4>
            <p className="font-inter text-gray-300 mb-2">Email: info@rellielabradoodles.com</p>
            <p className="font-inter text-gray-300">Phone: (555) 123-4567</p>
          </div>
          
          <div>
            <h4 className="font-playfair text-xl font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gold transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gold/30 mt-8 pt-8 text-center">
          <p className="font-inter text-sm text-gray-300">
            © {new Date().getFullYear()} Rellie Labradoodles. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
