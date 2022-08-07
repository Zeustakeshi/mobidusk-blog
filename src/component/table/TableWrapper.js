import React from "react";

const TableWrapper = ({
    fields = [],
    fieldsClassName,
    className,
    children,
}) => {
    return (
        <div className={`max-h-[calc(100vh-250px)] ${className}`}>
            <table className="w-full h-full rounded-lg p-5 overflow-hidden">
                <thead className=" bg-slate-100">
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
