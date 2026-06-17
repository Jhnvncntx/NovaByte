import { testimonials } from "../data/testimonials";

export function Testimonials() {
  return (
    <section className="flex items-center justify-center w-[100%] px-[10rem] py-[5rem] overflow-hidden">
      {/* MAIN CONTAINER */}
      <div className="flex flex-col items-center justify-center gap-12">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center gap-3">
          <span className="section-head-title">TESTIMONIALS</span>
          <h2 className="section-heading">What Our Clients Say</h2>
        </div>
        {/* Cards */}
        <div className="flex flex-row items-center justify-center gap-6">
          {testimonials.map((testimonial) => (
            // CARD
            <div
              key={testimonial.id}
              className="flex flex-col items-center justify-center gap-5 p-8 bg-card-background border border-color-border rounded-[12px]"
            >
              <span>⭐⭐⭐⭐⭐</span>
              <p className="text-center">{testimonial.quote}</p>
              {/* Profile */}
              <div className="flex items-center justify-center gap-3 rounded-[.75rem] border border-color-border px-4 py-2">
                {/* avatar */}
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  src={testimonial.avatar}
                />
                {/* info */}
                <div className="flex flex-col items-center justify-center gap-1">
                  <h3 className="text-[15px] font-semibold">
                    {testimonial.name}
                  </h3>
                  <p className="text-[13px]">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
