import Link from "next/link";
import Image from "next/image";

export default function FaqHomeFour() {

  const faqs = [
    {
      question: "What is Barramundi (Sea Bass)?",
      answer: "Barramundi is a premium white fish known for its mild flavor, high protein content, and rich omega-3 fatty acids. It is widely recognized as one of the best fish for both health and taste."
    },
    {
      question: "How is your sea bass farmed?",
      answer: "Our barramundi is raised in open marine cages, allowing natural water flow and a clean environment. This sustainable method ensures better fish quality and minimal environmental impact."
    },
    {
      question: "Is your fish suitable for export?",
      answer: "Yes, our products meet international health and quality standards, making them suitable for export to global markets including Europe, Asia, and beyond."
    },
    {
      question: "What makes your fish high quality?",
      answer: "Our fish are naturally raised, free from harmful chemicals, and rich in omega-3. Controlled feeding and expert supervision ensure consistent quality and taste."
    },
    {
      question: "What product types do you offer?",
      answer: "We offer a variety of products including skin-on fillet, skinless fillet, whole fish, and gutted fish in different sizes and packaging options."
    }
  ];

  return (
    <section className="faq-section bg-secondary mx-md-3 mx-xl-4 rounded-4">

      <div className="divider"></div>

      <div className="container">
        <div className="row g-5 align-items-center">

          {/* Image Side */}
          <div className="col-12 col-md-6">
            <div className="service-card-two style-two pe-xxl-5">
              <div className="service-thumb mb-0">
                <Link href="/contact" className="btn">Contact Us</Link>
                <Image src="/assets/img/core-img/seabassclub-filla.jpg" alt="" width={1920} height={1080} priority/>
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="col-12 col-md-6">

            <div className="section-heading mb-5">
              <span className="subtitle"><span>FAQ</span></span>
              <h2 className="mb-0">Frequently Asked Questions</h2>
            </div>

            <div className="faq-accordion theme-two">
              <div className="accordion" id="faqAccordion">

                {faqs.map((faq, index) => (
                  <div className="accordion-item" key={index}>
                    <div className="accordion-header">
                      <button
                        className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faqQuestion${index}`}
                        aria-expanded={index === 0 ? "true" : "false"}
                        aria-controls={`faqQuestion${index}`}
                      >
                        {faq.question}
                      </button>
                    </div>

                    <div
                      id={`faqQuestion${index}`}
                      className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="divider"></div>
    </section>
  );
}