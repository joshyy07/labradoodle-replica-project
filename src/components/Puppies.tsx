
const Puppies = () => {
  const puppies = [
    {
      name: "Luna",
      description: "Cream Australian Labradoodle",
      image: "https://images.unsplash.com/photo-1590419690008-905895e8fe0d?auto=format&fit=crop&q=80"
    },
    {
      name: "Charlie",
      description: "Chocolate Australian Labradoodle",
      image: "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?auto=format&fit=crop&q=80"
    },
    {
      name: "Bailey",
      description: "Caramel Australian Labradoodle",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section id="puppies" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-brown mb-4">
            Our Available Puppies
          </h2>
          <p className="text-gray-600 font-inter max-w-2xl mx-auto">
            Meet our adorable Australian Labradoodle puppies looking for their forever homes.
            Each puppy is raised with love and care in our family environment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {puppies.map((puppy) => (
            <div key={puppy.name} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <img
                src={puppy.image}
                alt={puppy.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-playfair font-bold text-brown mb-2">
                  {puppy.name}
                </h3>
                <p className="text-gray-600 font-inter mb-4">
                  {puppy.description}
                </p>
                <a
                  href="#contact"
                  className="inline-block bg-brown hover:bg-brown-light text-white font-inter px-6 py-2 rounded-md transition-colors text-sm"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Puppies;
