/*
 * @Author: hft
 * @Date: 2021-10-12 11:37:59
 * @LastEditors: hft
 * @LastEditTime: 2021-10-12 11:56:54
 * @Description: file content
 */
import React, { useState } from 'react'

// interface searchInfo{
//     search:string   
// }
const Search = ({ search }: any) => {
    const [searchValue, setSearchValue] = useState<string>("");
    const handleSearchInputChanges = (e: any) => {
        setSearchValue(e.target.value);
    };
    const resetInputField = (): void => {
        setSearchValue("");
    };

    const callSearchFunction = (e: any) => {
        e.preventDefault();
        search(searchValue);
        resetInputField();
    };
    return (
        <form className="search">
            <input
                value={searchValue}
                onChange={handleSearchInputChanges}
                type="text"
            />
            <input onClick={callSearchFunction} type="submit" value="SEARCH" />
        </form>
    )
}
export default Search