export function About() {
  const stats = [
    { number: "80+", label: "Clients Served" },
    { number: "12", label: "Countries" },
    { number: "5", label: "Years Experience" },
  ];
  return (
    <section className="flex items-center justify-center w-[100%] px-[10rem] py-[5rem] overflow-hidden">
      {/* MAIN CONTAINER */}
      <div className="flex items-center justify-between gap-[80px] px-[80px]">
        {/* Left Side */}
        <div className="flex flex-col items-center justify-center gap-[20px] px-[25px]">
          <span className="section-head-title">WHO WE ARE</span>
          <h2 className="section-heading">
            We're a Team of <br /> Digital Obsessives
          </h2>
          <p className="section-subheading">
            Since 2019, NovaByte has helped over 80 clients across 12 countries
            <br />
            build digital products that perform. We don't just design - we
            think,
            <br />
            strategize, and execute.
          </p>
          {/* Stats */}
          <div className="flex items-center justify-center gap-[40px]">
            {stats.map((stat, index) => (
              <>
                <div className="flex flex-col w-[100px] h-[100px]">
                  <h2 className="text-white text-[36px] font-bold text-center">
                    {stat.number}
                  </h2>
                  <span className="text-secondary-text text-[14px] text-center">
                    {stat.label}
                  </span>
                </div>
                {index < stats.length - 1 && (
                  <div className="w-[1px] h-[60px] bg-color-border" />
                )}
              </>
            ))}
          </div>
        </div>
        {/* Right Side */}
        <div className=" bg-card-background border border-color-border rounded-[1rem] overflow-hidden">
          <img
            className="w-[560px] h-[420px] object-cover"
            src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
    </section>
  );
}
