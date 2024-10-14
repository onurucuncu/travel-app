import React from 'react'

const SearchBox = ({ children, name ,hasMutipleInputs}) => {
  
  return (
    <div>
      <div className="flex bg-white w-full">
        <div className="bg-red-500 w-10/12">{children}</div>
        <button className="text-black w-2/12">Test btn</button>
      </div>
      {hasMutipleInputs ? (
        <input type="text" />
      ) : (
        <>
          <input type="text" />
          <input type="text" />
        </>
      )}
    </div>
  );
}

export default SearchBox