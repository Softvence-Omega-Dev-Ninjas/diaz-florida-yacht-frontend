import Image from 'next/image';
import React from 'react';
import logo from "@/assets/florida-yacht-logo.png";

const Navbar = () => {
    return (
        <div>
            <Image src={logo} alt="Florida Yacht Logo" width={150} height={50} />
        </div>
    );
};

export default Navbar;