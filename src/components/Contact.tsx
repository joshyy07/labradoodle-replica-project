
const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-brown mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 font-inter max-w-2xl mx-auto">
            Interested in adding a Lila Labradoodle to your family? We'd love to hear from you!
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-inter mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-inter mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-inter mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-inter mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-brown hover:bg-brown-light text-white font-inter px-8 py-3 rounded-md transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
