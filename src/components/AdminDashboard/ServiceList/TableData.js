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
            <td>{status}</td>
        </tr>
    );
};

export default TableData;
