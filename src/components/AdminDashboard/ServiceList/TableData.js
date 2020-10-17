import React from "react";

const TableData = ({ order }) => {
    console.log(order);
    const { name, email, clientBrief, title, status } = order;
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{title}</td>
            <td>{clientBrief}</td>
            <td>
                <select name="status">
                    <option value="volvo">{status}</option>
                    <option value="saab">On Going</option>
                    <option value="opel">Done</option>
                </select>
            </td>
        </tr>
    );
};

export default TableData;
