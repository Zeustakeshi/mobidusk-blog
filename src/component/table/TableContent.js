const TableContent = ({ className, children }) => {
    return <td className={`max-w-[200px] ${className}`}>{children}</td>;
};

export default TableContent;
