import React from "react";
import { useState } from "react";

import ListTable from "./ListTable";
const Table = ({ data }) => {
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

            {data
              // eslint-disable-next-line array-callback-return
              .filter((item) => {
                if (search === "") {
                  return item;
                } else if (
                  item.nama.toLowerCase().includes(search.toLowerCase()) ||
                  item.kota.toLowerCase().includes(search.toLowerCase()) ||
                  item.provinsi.toLowerCase().includes(search.toLowerCase()) ||
                  item.jenis_faskes
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  item.status.toLowerCase().includes(search.toLowerCase()) ||
                  item.latitude.toLowerCase().includes(search.toLowerCase()) ||
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
          </table>
        </div>
      </div>

      {/* <div class="overflow-x-auto py-14 px-14">
        <table class="table w-full">
          <thead>
            <tr className="underline underline-offset-8 decoration-secondary-content text-2xl font-bold">
              <th>Nama</th>
              <th>Kota</th>
              <th>Provinsi</th>
              <th>Tempat Vaksin</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.length
              ? data.map((item) => (
                  <List
                    key={0}
                    nama={item.nama}
                    kota={item.kota}
                    provinsi={item.provinsi}
                    tempat={item.jenis_fakes}
                    status={item.status}
                  />
                ))
              : null}

            {data.length
              ? data.map((item) => (
                  <List
                    key={0}
                    nama={item.nama}
                    kota={item.kota}
                    provinsi={item.provinsi}
                    tempat={item.jenis_fakes}
                    status={item.status}
                  />
                ))
              : null}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default Table;
