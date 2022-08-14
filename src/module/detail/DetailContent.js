import parse from "html-react-parser";
import { usePostDetail } from "../../context/postDetailContext";

const DetailContent = ({ className = "" }) => {
    const { postInfo } = usePostDetail();

    return (
        <div className={`p-5 entry-content ${className}`}>
            {parse(postInfo?.content || "")}
        </div>
    );
};

export default DetailContent;
