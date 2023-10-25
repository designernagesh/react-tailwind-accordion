import React, { useState } from "react";

function Accordion({ data }) {
    const [ item, setItem ] = useState(data);

    const toggleHandler = () => {
        let newActive = item.active === true ? false : true;
        setItem({ ...item, active: newActive })
    }
  return (
    <>
      {/* Begin Item */}
      <div className={`bg-[#e9e9e9] p-5 border border-[#c9c6c655] rounded-md max-w-[480px] duration-500 mb-2 group ${ item.active === true ? 'is-active bg-white' : '' }`}>
        <div className="flex items-center">
          <div className="w-full font-bold duration-500">
            { item.question }
          </div>
          <div className="text-xl rotate-90 group-[.is-active]:rotate-[270deg] cursor-pointer duration-75"
          onClick={ toggleHandler }>
            >
          </div>
        </div>
        <div className="overflow-hidden max-h-0 group-[.is-active]:max-h-[100%] duration-500">
          { item.answer }
        </div>
      </div>
      {/* End Item */}
    </>
  );
}

export default Accordion;
