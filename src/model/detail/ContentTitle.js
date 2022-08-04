const ContentTitle = ({ children, className = "" }) => {
    return (
        <h3 className={`my-[25px] font-semibold text-3xl ${className}`}>
            {children}
        </h3>
    );
};

export default ContentTitle;
