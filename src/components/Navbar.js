export default function Navbar() {
  const navs = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];
  const navButtons = (content) => {
    return (
      <button className="text-gray-800 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
        {content}
      </button>
    );
  };
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center">
          <button className="text-xl font-bold text-gray-800">Portfolio</button>
          {/* <div className="md:hidden">Fix</div> */}
        </div>
        {/* <ul className="hidden md:flex md:items-center">
          {navs.map((item, index) => (
            <li key={index}>{navButtons(item.name, item.link)}</li>
          ))}
        </ul> */}
      </div>
    </nav>
  );
}
