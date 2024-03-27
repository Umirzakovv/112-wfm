import { navbarLinks } from "@/consts/navbar-links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

const Navbar: FC = () => {
  const pathname = usePathname();
  return (
    <nav>
      <ul>
        {navbarLinks?.map((link) => {
          return (
            <Link
              key={link?.id}
              className={`${pathname === link?.href ? "font-bold" : ""}`}
              href={link?.href}
            >
              {link?.title}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
