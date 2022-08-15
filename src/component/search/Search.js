import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import { IconSearch } from "../icons";
import Input from "../Input/Input";

const Search = ({ placeholder, icon = false, handleSearch = () => {} }) => {
    const [value, setValue] = useState("");
    const debounceValue = useDebounce(value, 500);
    useEffect(() => {
        if (debounceValue === "") return;
        handleSearch(debounceValue.toLowerCase());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounceValue]);

    return (
        <div>
            <Input
                name="search"
                type="text"
                placeholder={placeholder || "Search..."}
                className="max-w-[300px] h-[60px]"
                inputClassName=" placeholder: text-lg px-5 py-3"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            >
                {icon || <IconSearch />}
            </Input>
        </div>
    );
};

export default Search;
