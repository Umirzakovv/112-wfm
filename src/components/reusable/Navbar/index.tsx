import { navbarLinks } from "@/consts/navbar-links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

const Navbar: FC = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex gap-10">
        {navbarLinks?.map((link) => {
          return (
            <Link
              key={link?.id}
              className={`font-semibold text-white text-sm ${
                pathname === link?.href
                  ? "text-[#86a8fc] dark:text-[#5b84f4b3]"
                  : ""
              } dark:text-[#5B84F4]`}
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
