import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import Menu from "./menu";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <Link href="/" className="flex-start">
          <Image
            src="/images/logo.svg"
            alt={`${APP_NAME} logo`}
            height={48}
            width={48}
            priority={true}
          ></Image>
          <span className="hidden lg:block font-bold text-2xl ml-3">
            {APP_NAME}
          </span>
        </Link>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
