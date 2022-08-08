import {
    IconEditWrite,
    IconEyeOpen,
    IconTrash,
} from "../../../component/icons";
import Image from "../../../component/Image";
import Table from "../../../component/table";
import PostManagerAuthor from "./PostManagerAuthor";
import PostManagerFeature from "./PostManagerFeature";
import PostManagerStatus from "./PostManagerStatus";
const tableField = ["Id", "Post", "Author", "Featured", "Status", "Action"];

const PostManagerTable = ({ posts }) => {
    return (
        <div className="h-full overflow-y-scroll overflow-x-hidden custom-scrollbar p-2">
            <Table.Wrapper fields={tableField}>
                {posts.map((post, index) => (
                    <Table.Item key={post.id}>
                        <Table.Content className="p-3">
                            <div className="font-semibold">
                                {index + 1 < 10 ? `0${index + 1}` : index + 1}
                            </div>
                        </Table.Content>
                        <Table.Content className="max-w-[450px]">
                            <div className=" p-3 flex justify-start items-start gap-3 ">
                                <div className=" w-[100px] h-[80px] rounded-lg">
                                    <Image alt="" src={post.image} />
                                </div>
                                <div className=" flex flex-col justify-start items-start max-w-[300px]">
                                    <h4
                                        className="content-overflow-limitline font-semibold text-xl"
                                        style={{ ["--line"]: 1 }}
                                    >
                                        {post.title}
                                    </h4>
                                    <div className="flex justify-center items-center gap-1 text-gray-600 text-base font-medium">
                                        <span>Date:</span>
                                        <span>25 Otc 2021</span>
                                    </div>
                                </div>
                            </div>
                        </Table.Content>
                        <Table.Content className="max-w-[100px] ">
                            <PostManagerAuthor authorID={post.authorID} />
                        </Table.Content>
                        <Table.Content>
                            <PostManagerFeature
                                isFeature={post.isFeature}
                                postId={post.id}
                            />
                        </Table.Content>
                        <Table.Content>
                            <PostManagerStatus
                                status={post.status}
                                postId={post.id}
                            />
                        </Table.Content>
                        <Table.Content>
                            <div className="p-3 flex justify-start items-center gap-3">
                                <span className="p-2 border border-gray-200 rounded-md cursor-pointer text-gray-500 hover:border-secondary">
                                    <IconEyeOpen />
                                </span>
                                <span className="p-2 border border-gray-200 rounded-md cursor-pointer text-gray-500 hover:border-secondary">
                                    <IconEditWrite />
                                </span>
                                <span className="p-2 border border-gray-200 rounded-md cursor-pointer text-gray-500 hover:border-secondary">
                                    <IconTrash />
                                </span>
                            </div>
                        </Table.Content>
                    </Table.Item>
                ))}
            </Table.Wrapper>
        </div>
    );
};

export default PostManagerTable;
