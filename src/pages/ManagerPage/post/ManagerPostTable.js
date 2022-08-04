import React from "react";
import {
    IconEditWrite,
    IconEyeOpen,
    IconTrash,
} from "../../../component/icons";
import Image from "../../../component/Image";

const ManagerPostTable = () => {
    return (
        <div className="max-h-[450px]">
            <table className="w-full h-full rounded-lg p-5 overflow-hidden">
                <thead className=" bg-slate-100">
                    <tr>
                        <th className="p-3 text-left">Id</th>
                        <th className="p-3 text-left">Post</th>
                        <th className="p-3 text-left">Category</th>
                        <th className="p-3 text-left">Author</th>
                        <th className="p-3 text-left">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {new Array(10).fill(0).map((item, index) => (
                        <tr key={index}>
                            <td className="p-3">
                                <div className="font-semibold">
                                    {index + 1 < 10
                                        ? `0${index + 1}`
                                        : index + 1}
                                </div>
                            </td>
                            <td className="max-w-[450px]">
                                <div className=" p-3 flex justify-start items-start gap-3 ">
                                    <div className=" w-[100px] h-[80px] rounded-lg">
                                        <Image
                                            alt=""
                                            src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                        />
                                    </div>
                                    <div className=" flex flex-col justify-start items-start max-w-[300px]">
                                        <h4
                                            className="content-overflow-limitline font-semibold text-lg"
                                            style={{ ["--line"]: 1 }}
                                        >
                                            Hello My Car!!!
                                        </h4>
                                        <div className="flex justify-center items-center gap-1 text-gray-600 text-sm font-medium">
                                            <span>Date:</span>
                                            <span>25 Otc 2021</span>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="max-w-[100px] ">
                                <div className="content-overflow-one-line p-3 text-base text-left text-gray-500 font-medium">
                                    Car
                                </div>
                            </td>
                            <td className="max-w-[200px]">
                                <div className="content-overflow-one-line p-3 text-base text-gray-500 font-medium">
                                    Minh Hieu
                                </div>
                            </td>
                            <td className=" w-[200px]">
                                <div className="p-3 flex justify-start items-center gap-3">
                                    <span className="p-2 border border-gray-200 rounded-md cursor-pointer text-gray-500">
                                        <IconEyeOpen />
                                    </span>
                                    <span className="p-2 border border-gray-200 rounded-md cursor-pointer text-gray-500">
                                        <IconEditWrite />
                                    </span>
                                    <span className="p-2 border border-gray-200 rounded-md cursor-pointer text-gray-500">
                                        <IconTrash />
                                    </span>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManagerPostTable;
