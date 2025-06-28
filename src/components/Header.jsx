import { useState } from "react";
import icon from "../assets/images/header-icon.png";

export default function Header() {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <header className="py-[20px] lg:px-10 px-4 bg-[#FAFAFA0D] shadow shadow-[0px 2px 4px 0px #0000000D">
            <div className="flex justify-between items-start relative">
                <h1 className="md:text-[24px] text-[20px] font-bold text-[#000000]">Assign Test Subject</h1>
                <div className="flex items-center space-x-3 relative">
                    <div className="text-right dashboard-profile md:flex flex-col hidden">
                        <h2 className="text-[#000000] text-[24px] font-[700] mb-0 leading-normal">James</h2>
                        <p className="text-[#00000099] text-[16px] font-[700] leading-normal">James@firetechsupplies.com</p>
                    </div>
                    <div
                        className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer"
                        onClick={() => setShowDropdown(!showDropdown)} >
                        <img width={60} height={60} src={icon} alt="profile" />
                    </div>
                    <div className={`absolute right-0 top-12 bg-white p-3 rounded-lg shadow-lg z-20 text-left w-48 transition-all duration-300 md:hidden
                        ${showDropdown ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}>
                        <h2 className="text-[#000000] text-[18px] font-[700] leading-normal">James</h2>
                        <p className="text-[#00000099] text-[12px] font-[700] leading-normal">James@firetechsupplies.com</p>
                    </div>
                </div>
            </div>
        </header>
    );
}
