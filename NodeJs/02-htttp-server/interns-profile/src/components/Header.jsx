const Header = () => {
  return (
    <header className="px-8 py-4 shadow-md font-poppins flex items-center justify-between bg-white">
      <div>
        <h2 className="text-xl font-semibold">
          <span className="text-[#0dba4b]">Fetch Interns </span>profiles from
          Node
        </h2>
      </div>
      <nav>
        <button className="bg-[#0dba4b] text-white font-semibold px-4 py-1 rounded-md">
          <a
            target="_blank"
            href="https://github.com/vedhatech002/CYBERDUDE-CHALLENGES/tree/main/JavaScript/javaScriptDom/05-github-API-Project"
          >
            GitHub
          </a>
        </button>
      </nav>
    </header>
  );
};
export default Header;
