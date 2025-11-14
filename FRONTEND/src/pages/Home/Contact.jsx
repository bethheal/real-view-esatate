import React from "react";

const Contact = () => {
  return (
    <section className="py-16 px-6 lg:px-20 bg-[#f9f8fb] min-h-screen">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#887232] mb-2">Contact Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions, feedback, or partnership inquiries? We’d love to hear from you.  
          Fill out the form below or reach out through our contact channels.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all">
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#887232]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#887232]"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message here..."
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#887232]"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#887232] to-[#887111] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center bg-[#887232] text-white rounded-2xl p-8 shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
          <p className="mb-6 text-white/90">
            You can also reach us directly through our contact channels below.
          </p>

          <div className="space-y-4">
            <p className="flex items-center gap-3">
              📍 <span>12 Real Estate Ave, East Legon, Accra, Ghana</span>
            </p>
            <p className="flex items-center gap-3">
              📞 <span>+233 55 123 4567</span>
            </p>
            <p className="flex items-center gap-3">
              ✉️ <span>support@realview.com</span>
            </p>
            <p className="flex items-center gap-3">
              🌐 <a href="/" className="underline hover:text-[#fff6b6]">www.realview.com</a>
            </p>
          </div>

          {/* Optional Map */}
          <div className="mt-8">
            <iframe
              title="Real View Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.9937303026017!2d-0.1869647!3d5.603716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzYnMTMuNCJOIDDCsDExJzEyLjUiVw!5e0!3m2!1sen!2sgh!4v1697021115475!5m2!1sen!2sgh"
              width="100%"
              height="250"
              style={{ border: "0", borderRadius: "0.75rem" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
