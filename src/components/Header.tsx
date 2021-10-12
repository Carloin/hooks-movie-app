/*
 * @Author: hft
 * @Date: 2021-10-12 11:10:41
 * @LastEditors: hft
 * @LastEditTime: 2021-10-12 11:18:27
 * @Description: file content
 */
import React from 'react'
interface HeaderInfo {
    text: string
}
// 或(props:HeaderInfo)
const Header: React.FC<HeaderInfo> = props => {
    return (
        <header className="App-header">
            <h2>{props.text}</h2>
        </header>
    )
}
export default Header