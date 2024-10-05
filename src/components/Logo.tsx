import React from "react";
import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <Image
        width={36}
        height={20}
        src="/Image.png"
        alt="Garage Sale"
        className="mr-2"
      />
    </Link>
  );
}

export default Logo;
