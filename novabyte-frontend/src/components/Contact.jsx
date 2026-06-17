export function Contact() {
  return (
    <section className="flex items-center justify-center w-[100%] px-[10rem] py-[5rem] overflow-hidden">
      {/* MAIN CONTAINER */}
      <div className="flex flex-col items-center justify-center gap-8 p-3">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center gap-3">
          <span className="section-head-title">GET IN TOUCH</span>
          <h2 className="section-heading">Let's Build Something Great</h2>
          <p className="section-subheading">
            Tell us about your project and we'll get back to you within 24
            hours.
          </p>
        </div>
        {/* Contact Form */}
        <form className="flex flex-col items-center justify-between gap-3 w-[90%] max-w-[700px]">
          <input
            className="contact-input"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="contact-input"
            type="text"
            placeholder="Your Email"
          />
          <textarea
            className="contact-input"
            placeholder="Tell us about your project..."
          ></textarea>
          <button className="button-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}
