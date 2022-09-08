/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

import { BASE_API_PROV, URL_API_VAKSIN } from "../../../../config";
import Prov from "../../../data/Prov/Prov";
import Table from "../../../data/Table/Table";

const index = () => {
  const [dataTable, setDataTable] = useState([]);
  const [dataProv, setDataProv] = useState([]);
  const [city, setCity] = useState("");

  useEffect(() => {
    axios
      .get(URL_API_VAKSIN)
      .then((res) => setDataTable(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .post(BASE_API_PROV)
      .then((res) => setDataProv(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  const selectData = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="w-screen h-screen">
      <h1 className="text-3xl text-black font-bold pt-10">Data Vaksin</h1>
      {/* Select */}
      <div onChange={selectData}>
        <Prov prov={dataProv} />
      </div>

      <Table kota={city} data={dataTable} />
    </div>
  );
};

export default index;
