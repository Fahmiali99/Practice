import React from "react";

import Listprov from "./Listprov";

const Prov = ({ prov, id }) => {
  return (
    <div>
      <select className="select w-full max-w-xs mt-10">
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
