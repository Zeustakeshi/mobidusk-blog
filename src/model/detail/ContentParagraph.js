const ContentParagraph = ({ children, className = "mb-10 ", ...props }) => {
    return (
        <p
            {...props}
            className={`text-lg leading-relaxed font-medium text-black ${className}`}
        >
            {children}
        </p>
    );
};

export default ContentParagraph;
