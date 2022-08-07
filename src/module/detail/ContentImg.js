import Image from "../../component/Image";

const ContentImg = ({ src, className = "", alt, imgErrorClass = "" }) => {
    return (
        <div className={` ${className} `}>
            <Image src={src} alt={alt} imgErrorClass={imgErrorClass} />
        </div>
    );
};

export default ContentImg;
