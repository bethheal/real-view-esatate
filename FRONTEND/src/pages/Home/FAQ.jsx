import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "How can I list my property on Real View?",
      answer:
        "Simply create an account, go to your dashboard, and click 'Add Property'. You’ll be able to upload photos, add descriptions, and set pricing details.",
    },
    {
      question: "Do I need to pay to post a property?",
      answer:
        "Basic listings are free, but premium listings with higher visibility require a small one-time fee. You can choose your plan after submitting your property details.",
    },
    {
      question: "Can I contact the property owner directly?",
      answer:
        "Yes! Once you find a property you’re interested in, use the contact button on the property page to message the owner or agent directly through our secure chat system.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "Click on 'Forgot Password' on the login page, enter your registered email, and follow the instructions in the email we’ll send you.",
    },
    {
      question: "Is Real View available outside Ghana?",
      answer:
        "Currently, we are focused on properties in Ghana. Expansion plans to nearby regions are in progress.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 lg:px-20 bg-[#f9f8fb]">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#887232] mb-2">FAQ / Help Center</h2>
        <p className="text-gray-600">
          Have questions? We’re here to help you understand how Real View works.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="max-w-3xl mx-auto space-y-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl bg-white p-5 shadow-sm hover:shadow-md 
                       transition-all duration-300 hover:border-[#887232]"
          >
            <button
              className="flex justify-between items-center w-full text-left"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {faq.question}
              </h3>
              <span
                className={`text-[#887232] text-2xl transition-transform duration-300 ${
                  openIndex === index ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>

            {openIndex === index && (
              <p className="mt-3 text-gray-600 border-t border-gray-100 pt-3 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
