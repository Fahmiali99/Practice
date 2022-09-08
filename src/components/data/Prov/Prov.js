import React from "react";

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
              <h1>{item.value}</h1>
            </div>
          </option>
        ))}
      </select>
    </div>
  );
};

export default Prov;
