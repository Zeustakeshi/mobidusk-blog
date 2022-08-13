import React from "react";
import Search from "./Search";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase-app/firebase-config";

const SearchPost = ({ setSearchValue = () => {}, user }) => {
    const handleSearchPost = async (filter) => {
        const postsRef = collection(db, "posts");
        const q = !user
            ? query(
                  postsRef,
                  where("searchValue", ">=", filter),
                  where("searchValue", "<=", filter + "utf8")
              )
            : query(
                  postsRef,
                  where("searchValue", ">=", filter),
                  where("searchValue", "<=", filter + "utf8")
              );
        const querySnapshot = await getDocs(q);
        const results = [];
        querySnapshot.forEach((doc) => {
            results.push({
                id: doc.id,
                ...doc.data(),
            });
        });
        setSearchValue(results);
    };
    return (
        <Search handleSearch={handleSearchPost} placeholder="search post ..." />
    );
};

export default SearchPost;
