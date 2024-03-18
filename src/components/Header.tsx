import Link from "next/link";

const Header = () => {
  return (
    <header className=" bg-white py-4 pl-3 pr-3 ">
      <div className="max-w-4xl mx-auto flex justify-between ">
        <div className="flex flex-row gap-8  ">
          <Link href="/" className="font-bold text-xl">
            LinkTree
          </Link>

          <nav className="flex gap-4 text-slate-500 text-md items-center">
            <Link href="/about">About</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
        <div className="flex gap-4 text-slate-600 ">
          <Link href="/login">Sign In</Link>
          <Link href="/register">Create Account</Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
