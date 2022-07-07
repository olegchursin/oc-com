import Link from 'next/link';
import Logo from './logo';
import ThemeSwitch from './themeSwitch';

const Navbar: React.FC = () => {
  return (
    <nav className="shadow-md">
      <div className="container flex items-center justify-between p-6">
        <Link href="/">
          <Logo />
        </Link>

        <div className="flex items-center gap-6">
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
