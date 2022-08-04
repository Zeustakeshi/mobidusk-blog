const ContentTitle = ({ children, className = "" }) => {
    return (
        <h3 className={`my-[25px] font-semibold text-xl ${className}`}>
            {children}
        </h3>
    );
};

export default ContentTitle;
