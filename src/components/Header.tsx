import HomeLogo from "./HomeLogo";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <div className="grid">
      <div className="flex max-w-6xl w-full mx-auto py-2 px-5 h-20 justify-between items-center">
        <HomeLogo />
        <SearchBar className="hidden lg:flex" />
      </div>
      <Navbar />
    </div>
  );
}
