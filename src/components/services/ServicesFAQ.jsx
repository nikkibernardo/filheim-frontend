import { useState } from 'react';
import { FaCaretDown } from "react-icons/fa";


function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How secure is my insurance information?",
      answer: "We prioritize the security of your insurance information. We use advanced encryption and strict data protection measures to ensure your data is safe and confidential."
    },
    {
      question: "How can I customize my insurance coverage?",
      answer: "Our insurance plans are customizable. You can tailor your coverage to meet your specific needs and budget."
    },
    {
      question: "Is there a waiting period for insurance claims?",
      answer: "There may be a waiting period for certain insurance claims, depending on the policy terms and conditions. Please refer to your policy documents for details."
    }
  ];

  return (
    <section id="collection-cabinets" className="py-12">
      <div className="flex justify-center items-center text-center">
        <div className="w-full max-w-screen-xl px-4">
          <div className="space-y-6">
            <div className="flex flex-col items-center">
               <div className="py-12 px-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
                <div className="flex flex-col text-left basis-1/2">
                  <p className="inline-block mb-2 text-lg text-[#9A7842]">Filheim FAQ</p>
                  <p className="sm:text-4xl text-3xl font-extrabold text-base-content" style={{ fontFamily: "'Times New Roman', Times, serif" }}>Frequently Asked <br /> Questions</p>
                </div>
                <ul className="basis-1/2">
                  {faqs.map((faq, index) => (
                    <li key={index}>
                      <button
                        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                        aria-expanded={openIndex === index}
                        onClick={() => toggleFAQ(index)}
                      >
                        <span className="flex-1 text-base-content">{faq.question}</span>
                        <FaCaretDown 
                          className={`text-[#9A7842] flex-shrink-0 w-4 h-4 ml-auto transform transition-transform duration-200 ${
                            openIndex === index ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-[500px]' : 'max-h-0'}`}
                      >
                        <div className="pb-5 text-left text-md">
                          <div className="space-y-1">{faq.answer}</div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesFAQ;