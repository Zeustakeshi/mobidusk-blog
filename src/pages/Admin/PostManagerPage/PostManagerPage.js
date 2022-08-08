import React, { useEffect, useRef, useState } from "react";
import { IconFilTer, IconSearch } from "../../../component/icons";
import Input from "../../../component/Input/Input";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase-app/firebase-config";
import PostManagerTable from "./PostManagerTable";
import { Dropdown, DropdownField } from "../../../component/dropdown";

const filterMethod = ["Featured", "pending", "approve", "none"];
const postsClone = [];

const PostManagerPage = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            const postRef = collection(db, "posts");
            const q = query(postRef, where("isPublic", "==", true));
            const querySnapshot = await getDocs(q);
            const resluts = [];
            querySnapshot.forEach((doc) => {
                const post = {
                    id: doc.id,
                    ...doc.data(),
                    isFeature: doc.data().isFeature || false,
                };
                resluts.push(post);
                postsClone.push(post);
            });
            setPosts(resluts);
        };
        fetchPosts();
    }, []);

    const handleFilter = (prevValue, value) => {
        if (value === prevValue) return null;
        switch (value) {
            case "Featured":
                const aa = JSON.parse(JSON.stringify(postsClone.current));
                console.log(aa.filter((item) => item.isFeature));
                setPosts(postsClone.current.filter((item) => item.isFeature));
                break;
            // case "pending":
            //     setPosts(
            //         postsClone.current.filter(
            //             (item) => item.status === "pending"
            //         )
            //     );
            //     break;
            // case "approve":
            //     setPosts(
            //         postsClone.current.filter(
            //             (item) => item.status === "approve"
            //         )
            //     );
            //     break;
            // case "none":
            //     setPosts(postsClone.current);
            //     break;
            default:
                break;
        }
    };
    return (
        <div>
            <div className="mb-6 flex items-center gap-5 p-5">
                <Input
                    type="text"
                    name="search"
                    placeholder="Search post ..."
                    className="max-w-[300px] ml-auto"
                >
                    <IconSearch />
                </Input>
                <Dropdown className="max-w-[200px] min-w-0 ">
                    <DropdownField.Label
                        label={
                            <div className="flex items-center gap-2">
                                <IconFilTer />
                                <span>filter</span>
                            </div>
                        }
                        className="p-[16px] text-gray-600 bg-[#fff]"
                    ></DropdownField.Label>
                    <DropdownField.Selection className="max-h-[300px]">
                        {filterMethod.map((item) => (
                            <DropdownField.Item
                                key={item}
                                value={item}
                                onClick={(prev) => {
                                    handleFilter(prev, item);
                                }}
                                clickActiveLabel={false}
                            >
                                {item}
                            </DropdownField.Item>
                        ))}
                    </DropdownField.Selection>
                </Dropdown>
            </div>
            <PostManagerTable posts={posts} />
        </div>
    );
};

export default PostManagerPage;

// const postRef = collection(db, "posts");
// const q = query(postRef, where("isPublic", "==", true));
// const unsubscribe = onSnapshot(q, (snapshot) => {
//     const results = [];
//     snapshot.docChanges().forEach((change) => {
//         results.push({
//             id: change.doc.id,
//             ...change.doc.data(),
//             isFeature: change.doc.data().isFeature || false,
//         });
//     });
//     setPosts(results);
// });
// return unsubscribe;
