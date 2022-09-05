import React from "react";

function Listtable({ nama, kota, provinsi, tempat, status, nomer, long, lat }) {
  // console.log(long);
  return (
    <>
      <tbody>
        <td>{nomer}</td>
        <td>{nama}</td>
        <td>{kota}</td>
        <td>{provinsi}</td>
        <td>{tempat}</td>
        <td>{status}</td>
        <td>{lat}</td>
        <td>{long}</td>
      </tbody>
    </>
  );
}

export default Listtable;
