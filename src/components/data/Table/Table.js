import React from "react";
import { useState } from "react";
import swal from "sweetalert";

import ListTable from "./ListTable";
const Table = ({ data, kota }) => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <div className="bg-white">
        <div className="overflow-x-auto py-14 px-14 ">
          <div className="mb-5 float-right">
            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <table className="table w-full ">
            <thead>
              <tr className=" underline underline-offset-8 decoration-secondary-content text-2xl font-bold ">
                <th>N0</th>
                <th>Nama</th>
                <th>Kota</th>
                <th>Provinsi</th>
                <th>Status</th>
                <th>Status</th>
                <th>Latitude</th>
                <th>Longitude</th>
              </tr>
            </thead>
            <>
              {data
                .sort((item) => {
                  if (kota === item) {
                    return item;
                  } else if (
                    item.provinsi.toLowerCase().includes(kota.toLowerCase())
                  ) {
                    console.log(true);
                    return item;
                  } else {
                    swal({
                      button: false,
                      title: "Not Found",
                      text: "Provice in your select not available",
                      icon: "warning",
                    });
                    return item;
                  }
                })
                // eslint-disable-next-line array-callback-return
                .filter((item) => {
                  if (search === item) {
                    return item;
                  } else if (
                    item.nama.toLowerCase().includes(search.toLowerCase()) ||
                    item.kota.toLowerCase().includes(search.toLowerCase()) ||
                    item.provinsi
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    item.jenis_faskes
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    item.status.toLowerCase().includes(search.toLowerCase()) ||
                    item.latitude
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    item.longitude.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return item;
                  }
                })
                .map((item) => (
                  <ListTable
                    key={item.id}
                    nomer={item.id}
                    nama={item.nama}
                    kota={item.kota}
                    provinsi={item.provinsi}
                    tempat={item.jenis_faskes}
                    status={item.status}
                    lat={item.latitude}
                    long={item.longitude}
                  />
                ))}
            </>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
