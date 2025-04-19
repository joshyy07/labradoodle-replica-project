
const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Our puppy from Rellie Labradoodles has brought so much joy to our family. The care and attention they give to their puppies is outstanding.",
      location: "Portland, OR"
    },
    {
      name: "Michael Chen",
      text: "The entire experience with Rellie Labradoodles was amazing. They were professional, caring, and helped us find the perfect companion.",
      location: "Seattle, WA"
    },
    {
      name: "Emily Davis",
      text: "We couldn't be happier with our labradoodle. The ongoing support from Rellie has been incredible - they truly care about their puppies and families.",
      location: "San Francisco, CA"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-brown mb-4">
            Happy Families
          </h2>
          <p className="text-gray-600 font-inter max-w-2xl mx-auto">
            Read what our wonderful families have to say about their experience with Rellie Labradoodles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-700 font-inter mb-6 italic">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-playfair font-bold text-brown">
                  {testimonial.name}
                </p>
                <p className="text-gray-500 font-inter text-sm">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
