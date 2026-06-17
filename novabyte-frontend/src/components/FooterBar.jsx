export function FooterBar() {
  return (
    <footer className="w-[100%] h-[80px] flex items-center justify-between bg-[#13131A] px-8 py-3">
      {/* Left */}
      <div className="flex items-center justify-center gap-4 p-3">
        <h2 className="text-[18px] font-bold">NovaByte</h2>
        <p className="text-[14px] text-secondary-text">
          © 2025 All rights reserved.
        </p>
      </div>
      {/* Right */}
      <ul className="flex justify-between items-center content-center gap-10 text-[1rem] p-3 text-secondary-text">
        <li className="cursor-pointer hover:underline">Services</li>
        <li className="cursor-pointer hover:underline">Work</li>
        <li className="cursor-pointer hover:underline">About</li>
        <li className="cursor-pointer hover:underline">Contact</li>
      </ul>
    </footer>
  );
}
