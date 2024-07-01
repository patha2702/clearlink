import React from "react";
import siteLogo from "/assets/clearlink-logo.svg";
import { Menu } from 'lucide-react';

const MobileNav = () => {
	return (
		<nav className="sm:hidden px-2 py-6 w-full flex justify-between items-center border border-black">
			<img src={siteLogo} alt="Clear Link logo" className="cursor-pointer" />
			<Menu />
		</nav>
	)
}

export default MobileNav