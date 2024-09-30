import React from "react";
import Image from "next/image";

function Logo() {
  return (
    <Image
      width={36}
      height={20}
      src="/Image.png"
      alt="Garage Sale"
      className="mr-2"
    />
  );
}

export default Logo;
