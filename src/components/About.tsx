
const About = () => {
  return (
    <section id="about" className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1590419690008-905895e8fe0d?auto=format&fit=crop&q=80"
              alt="Labradoodle family"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-4xl font-playfair font-bold text-brown mb-6">
              About Our Family
            </h2>
            <p className="text-gray-700 font-inter mb-6 leading-relaxed">
              Welcome to Lila Labradoodles, where we've dedicated ourselves to raising 
              exceptional Australian Labradoodle puppies with love and care. Our journey 
              began with a passion for these intelligent, affectionate dogs and has grown 
              into a commitment to matching perfect companions with loving families.
            </p>
            <p className="text-gray-700 font-inter mb-8 leading-relaxed">
              Each puppy is raised in our home with attention to health, temperament, 
              and early socialization. We take pride in our ethical breeding practices 
              and the ongoing support we provide to our puppy families.
            </p>
            <a
              href="#contact"
              className="inline-block bg-brown hover:bg-brown-light text-white font-inter px-8 py-3 rounded-md transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
