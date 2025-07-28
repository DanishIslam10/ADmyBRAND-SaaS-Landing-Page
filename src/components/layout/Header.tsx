import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="w-full md:px-6 px-3 py-2 bg-[#e8e8e8] backdrop-blur-md top-0 z-50 text-white">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo + Text */}
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="/logo.svg"
                        alt="AddMyBrand Logo"
                        width={200}
                        height={50}
                        layout="responsive"
                        className="rounded"
                    />
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex space-x-6 text-[#313131] font-[600]">
                    <Link href="#features" className=" hover:bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6]  hover:text-[white] duration-200 px-4 py-1 rounded">
                        Features
                    </Link>
                    <Link href="#pricing" className=" hover:bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6]  hover:text-[white] duration-200 px-4 py-1 rounded">
                        Pricing
                    </Link>
                    <Link href="#contact" className=" hover:bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6]  hover:text-[white] duration-200 px-4 py-1 rounded">
                        Contact
                    </Link>
                </nav>

                {/* CTA Button */}
                <Link href="#_" className="hidden md:block relative items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6]">
                        <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                        <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">Get Started</span>
                        <span className="absolute inset-0 rounded-full"></span>
                </Link>


                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button className="text-[#393838] focus:outline-none text-2xl">☰</button>
                </div>
            </div>
        </header>
    );
}
