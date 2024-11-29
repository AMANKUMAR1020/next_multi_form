// import StepOneForm from "./StepOneForm";

// export default function StepOne(){
//     return(<div className=" h-full w-full flex" >
//             <div className=" flex p-2 m-2 rounded-md bg-slate-600 text-gray-200 w-1/3 h-80 place-items-center justify-center">
//                 <StepOneForm/>
//             </div>
//     </div>)
// }

import React from 'react';
import StepOneForm from './StepOneForm';

export default function StepOne() {
  return (
    <div>
      <StepOneForm />
    </div>
  );
}