
const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1593134257782-e89567b7718a?auto=format&fit=crop&q=80"
          alt="Labradoodle puppy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            Welcome to Rellie Labradoodles
          </h1>
          <p className="text-xl md:text-2xl font-inter mb-8 max-w-2xl mx-auto">
            Bringing joy to families with our adorable, healthy Australian Labradoodle puppies
          </p>
          <a
            href="#contact"
            className="bg-brown hover:bg-brown-light text-white font-inter px-8 py-3 rounded-md transition-colors inline-block"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
