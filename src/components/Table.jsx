import { useState } from "react";
import Search from "../assets/images/Search.png";
import check from "../assets/images/check.png";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

const testSubjects = [
    { id: "56843265", firstName: "Wilson", lastName: "Wilson", location: "Phoenix, AZ", company: "FireTech 05" },
    { id: "23652365", firstName: "Michael", lastName: "Smith", location: "Los Angeles, CA", company: "FireTech 02" },
    { id: "98985656", firstName: "Daniel", lastName: "Wilson", location: "Phoenix, AZ", company: "FireTech 05" },
    { id: "65562365", firstName: "John", lastName: "Miller", location: "Houston, TX", company: "FireTech 04" },
    { id: "56982365", firstName: "James", lastName: "William", location: "New York, NY", company: "FireTech 01" },
];

export default function Table() {
   const [selectedIds, setSelectedIds] = useState([]);

   const toggleSelection = (id) => {
    setSelectedIds(prev =>
        prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
};

    return (
        <div className="py-[20px] lg:px-10 px-4">
            <div className="border border-[#E9EDF5] rounded-[16px] ">
                <div className="flex justify-end bg-[#F893101A] py-[25px] px-4 rounded-tr-[16px] rounded-tl-[16px]">
                    <div className="flex justify-end md:gap-14 gap-4 items-center">
                        <div className="w-full relative inline">
                            <input type="text" placeholder="Search..." className="bg-[#FFFFFF] border px-8 py-2 rounded-[6px] shadow-[0_0_0_1px_#68718229] border-none focus:outline-none w-full max-w-[350px]" />
                            <img src={Search} className="input-icon" alt="" />
                        </div>
                        <button className="whitespace-nowrap bg-[linear-gradient(275deg,_#F34417_-51.95%,_#F89310_119.39%)] text-white text-[14px] md:text-[18px] px-3 md:px-10 py-2 rounded-[6px] cursor-pointer">
                            Add Test Subject
                        </button>
                    </div>
                </div>
                <div className="w-full overflow-x-auto">
                    <table className="min-w-[600px] w-full text-left border-collapse border-b border-[#F7F9FC]">
                        <thead className="bg-[#F893101A]">
                            <tr>
                                <th className="p-2 w-[70px]"></th>
                                <th className="p-2 text-[16px] font-[600] text-[#000] whitespace-nowrap">Test Subject ID</th>
                                <th className="p-2 text-[16px] font-[600] text-[#000] whitespace-nowrap">First Name</th>
                                <th className="p-2 text-[16px] font-[600] text-[#000] whitespace-nowrap">Last Name</th>
                                <th className="p-2 text-[16px] font-[600] text-[#000] whitespace-nowrap">Location</th>
                                <th className="p-2 text-[16px] font-[600] text-[#000] whitespace-nowrap">Company</th>
                            </tr>
                        </thead>
                        <tbody className="bg-[#fff] px-4">
                            {testSubjects.map(subject => (
                                <tr key={subject.id}>
                                    <td className="flex justify-center py-5 items-center text-[#464F60] text-base font-normal">
                                        <label className="relative w-[16px] h-[16px] cursor-pointer block">
                                            <input
                                                type="checkbox"
                                                checked={selectedIds.includes(subject.id)}
                                                onChange={() => toggleSelection(subject.id)}
                                                className="peer hidden"
                                            />
                                            <div className={`w-[16px] h-[16px] rounded-full border border-[#C3C3C3] flex items-center justify-center ${selectedIds.includes(subject.id) ? 'bg-[#2264E5]' : ''}`}>
                                                {selectedIds.includes(subject.id) && (
                                                    <img src={check} alt="Checked" className="w-[10px] h-[10px]" />
                                                )}
                                            </div>
                                        </label>
                                    </td>
                                    <td className="p-2 text-[#464F60] text-base font-normal whitespace-nowrap">{subject.id}</td>
                                    <td className="p-2 text-[#464F60] text-base font-normal whitespace-nowrap">{subject.firstName}</td>
                                    <td className="p-2 text-[#464F60] text-base font-normal whitespace-nowrap">{subject.lastName}</td>
                                    <td className="p-2 text-[#464F60] text-base font-normal whitespace-nowrap">{subject.location}</td>
                                    <td className="p-2 text-[#464F60] text-base font-normal whitespace-nowrap">{subject.company}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-center mx-auto items-center rounded-br-[16px] rounded-bl-[16px] bg-white gap-[10px] py-4 border-t border-[#C3C3C3]/40">
                    <button className="bg-[#F7F9FC] shadow-[0_0_0_1px_#464F603D] rounded-[6px] px-2 py-2 cursor-pointer">
                        <MdOutlineNavigateBefore size={20} />
                    </button>
                    <p className="text-[12px] font-[500]">
                        <span className="text-[#171C26]">1</span>
                        <span className="text-[#687182]">/10</span>
                    </p>
                    <button className="bg-[#F7F9FC] shadow-[0_0_0_1px_#464F603D] rounded-[6px] px-2 py-2 cursor-pointer">
                        <MdOutlineNavigateNext size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}
