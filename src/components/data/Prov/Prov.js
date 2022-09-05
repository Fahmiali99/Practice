import React, { useState } from "react";

import Listprov from "./Listprov";

const Prov = ({ prov, id }) => {
  const [city, setCity] = useState("");

  const selectData = (event) => {
    setCity(event.target.value);
    console.log(city);
  };

  return (
    <div>
      <select className="select w-full max-w-xs mt-10" onChange={selectData}>
        <option disabled selected>
          Pick your favorite Simpson
        </option>
        {prov.map((item) => (
          <option>
            <div>
              <Listprov name={item.value} />
            </div>
          </option>
        ))}
      </select>
    </div>
  );
};

export default Prov;
