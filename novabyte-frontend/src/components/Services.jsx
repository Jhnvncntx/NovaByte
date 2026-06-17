import { services } from "../data/services";
import { Code, Palette, TrendingUp, Megaphone, ArrowRight } from "lucide-react";

export function Services() {
  const iconMap = {
    Code: <Code size={22} color="#A78BFA" />,
    Palette: <Palette size={22} color="#A78BFA" />,
    TrendingUp: <TrendingUp size={22} color="#A78BFA" />,
    Megaphone: <Megaphone size={22} color="#A78BFA" />,
  };
  return (
    <section className="flex flex-row items-center justify-center text-white px-[10rem] py-[5rem] overflow-hidden w-[100%]">
      {/* Main Container */}
      <div className="flex flex-col items-center gap-[59px]">
        {/* Heading */}
        <div className="flex flex-col items-center gap-[12px]">
          <span className="section-head-title">WHAT WE DO</span>
          <h2 className="section-heading">Services That Drives Results</h2>
          <p className="section-subheading">
            From strategy to execution, we cover every angle.
          </p>
        </div>
        {/* Services Cards */}
        <div className="flex flex-row gap-[24px]">
          {/* Card */}
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-left gap-[16px] p-[24px] max-w-[300px] bg-card-background border border-color-border rounded-[12px]"
            >
              <div className="h-[44px] w-[44px] rounded-[10px] bg-[#7C3AED]/15 text-[#7C3AED] flex items-center justify-center">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-[18px] font-semibold">{service.title}</h3>
              <p className="text-secondary-text text-[14px]">
                {service.description}
              </p>
              <a
                className="text-purple-accent text-[14px] font-medium flex flex-row items-center justify-start gap-[10px]"
                href="#"
              >
                Learn more
                <span>
                  <ArrowRight />
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
