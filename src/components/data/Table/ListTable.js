import React from "react";

function List({ nama, kota, provinsi, tempat, status, nomer }) {
  return (
    <>
      <tbody>
        <td>{nomer}</td>
        <td>{nama}</td>
        <td>{kota}</td>
        <td>{provinsi}</td>
        <td>{tempat}</td>
        <td>{status}</td>
      </tbody>
    </>
  );
}

export default List;
