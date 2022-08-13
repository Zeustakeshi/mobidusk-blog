import React from "react";
import { useState } from "react";
import SearchPost from "../../../component/search/SearchPost";

const ProfileUserViewPage = () => {
    const [searchValue, setSearchValue] = useState([]);
    return (
        <div className="p-10">
            <SearchPost setSearchValue={setSearchValue} />
            <div>{JSON.stringify(searchValue)}</div>
        </div>
    );
};

export default ProfileUserViewPage;
