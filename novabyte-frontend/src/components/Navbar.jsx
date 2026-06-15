export function Navbar() {
  return (
    <nav className="bg-primary-background/50 backdrop-blur-md sticky top-0 left-0 text-white flex content-center justify-between px-[100px] border-b border-color-border h-[72px] z-50">
      <div className="text-[22px] font-bold content-center cursor-pointer">
        NovaByte
      </div>
      <div className="flex flex-row items-center gap-20">
        <ul className="flex justify-between content-center gap-10 text-[1rem]">
          <li className="cursor-pointer hover:underline">Services</li>
          <li className="cursor-pointer hover:underline">Work</li>
          <li className="cursor-pointer hover:underline">About</li>
          <li className="cursor-pointer hover:underline">Contact</li>
        </ul>
        <button className="button-primary">Get Started</button>
      </div>
    </nav>
  );
}
