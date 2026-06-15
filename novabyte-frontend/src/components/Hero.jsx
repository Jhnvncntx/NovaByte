export function Hero() {
  return (
    <section className="flex flex-row items-center justify-center gap-[10rem] text-white w-[100%] px-[10rem] py-[10rem] relative overflow-hidden">
      {/* THE GLOWING CIRCLE */}
      <div className="w-[450px] h-[450px] bg-[#7c3aed]/30 rounded-[50%] absolute -z-10 blur-[100px] left-[240px]"></div>
      {/* LEFT SIDE */}
      <div className="flex flex-col items-start justify-between gap-[2rem]">
        {/* Pill */}
        <div className=" font-medium text-[13px] text-[#A78BFA] h-[32px] w-[160px] content-center text-center bg-[#7C3AED]/20 rounded-[999px] border border-[#7c3aed]/40">
          ✦ Creative Agency
        </div>
        {/* Heading */}
        <h1 className="font-bold text-[64px] leading-[110%]">
          We Build Digital <br /> Experiences That <br /> Actually Convert
        </h1>
        {/* SubHeading */}
        <h3>
          NovaByte is a full-service creative agency helping brands grow <br />{" "}
          through strategy, design, and development.
        </h3>
        {/* Buttons */}
        <div className="flex flex-row items-center justify-center gap-[1rem]">
          <button className="button-primary">Start a Project</button>
          <button className="button-secondary">View Our Work</button>
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div className="flex flex-col items-center justify-center w-[50%] h-[100%] overflow-hidden rounded-[1rem] filter drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]">
        {/* HEADER */}
        <div className="h-[10%] w-[100%] bg-[#13131A] flex flex-row items-center justify-start pl-[1rem]">
          {/* 3 MacOS dots */}
          <div className="flex flex-row items-center justify-center gap-[10px]">
            <div className="h-[1rem] w-[1rem] bg-red-600 rounded-[50%]" />
            <div className="h-[1rem] w-[1rem] bg-orange-600 rounded-[50%]" />
            <div className="h-[1rem] w-[1rem] bg-green-600 rounded-[50%]" />
          </div>
        </div>
        {/* BODY */}
        <div className="h-[90%] w-[100%] bg-[#1c1c27] border-b border-r border-l border-[#2a2a3a] px-[1.5rem] py-[1rem] flex flex-col gap-[1rem]">
          {/* Fake Content */}
          <div className="flex flex-col items-left justify-center gap-[1rem]">
            <div className="w-[90%] h-[20px] bg-[#94949f]/50 rounded-[.5rem]" />
            <div className="w-[85%] h-[20px] bg-[#94949f]/50 rounded-[.5rem]" />
            <div className="w-[65%] h-[20px] bg-[#94949f]/50 rounded-[.5rem]" />
            <div className="w-[75%] h-[20px] bg-[#94949f]/50 rounded-[.5rem]" />
            <div className="w-[60%] h-[20px] bg-[#94949f]/50 rounded-[.5rem]" />
            <div className="w-[97%] h-[20px] bg-[#94949f]/50 rounded-[.5rem]" />
          </div>
          {/* Card Button */}
          <button className="button-primary w-[10rem] mt-[2rem]">
            View Report
          </button>
        </div>
      </div>
    </section>
  );
}
