import { works } from "../data/work";
import { ArrowRight } from "lucide-react";

export function Work() {
  return (
    <section className="flex flex-row items-center justify-center text-white px-[10rem] py-[5rem] overflow-hidden w-[100%]">
      {/* Main Container */}
      <div className="flex flex-col items-center justify-center gap-[59px]">
        {/* Heading */}
        <div className="flex flex-col items-center gap-[12px]">
          <span className="section-head-title">OUR WORK</span>
          <h2 className="section-heading">Projects We Are Proud Of</h2>
          <p className="section-subheading">
            A selection of our recent client works.
          </p>
        </div>
        {/* Work Cards */}
        <div className="grid grid-cols-3 gap-6">
          {works.map((work) => (
            // Card Container
            <div className="relative overflow-hidden rounded-xl flex flex-col items-start bg-card-background border border-color-border">
              {/* Card Image Container */}
              <div>
                <img
                  className="h-[180px] w-[400px] object-cover"
                  src={work.image}
                  alt={work.title}
                />
              </div>
              {/* Card Descriptions Container */}
              <div className="flex flex-col items-start gap-2 px-8 py-4 w-[100%]">
                {/* Card Pill */}
                <div className=" font-medium text-[12px] text-[#A78BFA] py-1 px-2 content-center text-center bg-[#7C3AED]/20 rounded-[999px] border border-[#7c3aed]/40">
                  {work.category}
                </div>
                {/* Card Title */}
                <h3 className="text-[18px] font-semibold">{work.title}</h3>
                {/* Action Text */}
                <a
                  className="text-purple-accent text-[14px] font-medium flex flex-row items-center justify-start gap-[10px] self-end"
                  href={work.link}
                >
                  View Case
                  <span>
                    <ArrowRight />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
