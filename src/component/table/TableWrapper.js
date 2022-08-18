import React from "react";

const TableWrapper = ({
    fields = [],
    fieldsClassName,
    className = "",
    children,
}) => {
    return (
        <div className={`md:max-h-[60vh] max-h-full relative ${className}`}>
            <table className="w-full h-full rounded-lg p-5">
                <thead className=" bg-slate-100 sticky top-[-8px] z-20 shadow-sm">
                    <tr>
                        {fields.map((field) => (
                            <th
                                key={field}
                                className={`p-3 text-left ${fieldsClassName}`}
                            >
                                {field}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>{children}</tbody>
            </table>
        </div>
    );
};

export default TableWrapper;
