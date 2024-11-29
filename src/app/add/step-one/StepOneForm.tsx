// "use client"

// export default function StepOneForm(){
//     return(
//     <form >
//         <div className="flex flex-col">
//             <div className=" flex place-items-center">
//                 <text className=" flex text-gray-200 font-serif text-lg" >Name:-</text>
//                 <input
//                     type="text"
//                     id="name"
//                     className=" p-2 m-2 rounded-md w-10/12 h-8 text-gray-600 font-serif text-lg ::hover outline-blue-500 border border-none -outline-offset-1" placeholder="Jhon Jeo..."
//                     required
//                     />
//             </div>
//             <div className=" flex place-items-center">
//                 <text className=" flex text-gray-200 font-serif text-lg" >Link:-</text>
//                 <input
//                     type="text"
//                     id="link"
//                     className=" p-2 m-2 rounded-md w-10/12 h-8 text-gray-600 font-serif text-lg ::hover outline-blue-500 border border-none -outline-offset-1" placeholder="Jhon Jeo..."
//                     pattern="[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?"
//                     required
//                     />
//             </div>
//       </div>
//     </form>)
// }






// 'use client';

// export default function StepOneForm() {
//   return (
//     <form className="flex flex-1 flex-col items-center">
//       <div className="flex w-full flex-col gap-8 lg:max-w-[700px] "></div>
//     </form>
//   );
// }





'use client';
// import Input from '@/components/Input';
import Input from '../../components/Input'
import { useFormState } from 'react-dom';
import { stepOneFormAction } from './actions';
// import { FormErrors } from '@/types';
import { FormErrors } from '@/app/types';
// import SubmitButton from '@/components/SubmitButton';
import SubmitButton from '@/app/components/SubmitButton';

const initialState: FormErrors = {};

export default function StepOneForm() {
  const [serverErrors, formAction] = useFormState(
    stepOneFormAction,
    initialState
  );

  return (
    <form action={formAction} className="flex flex-1 flex-col items-center">
      <div className="flex w-full flex-col gap-8 lg:max-w-[700px] ">
        <Input
          label="Name"
          id="name"
          type="text"
          required
          errorMsg={serverErrors?.name}
        />
        <Input
          label="Link"
          id="link"
          required
          type="text"
          description='Must start with "http://" or "https://"'
          pattern="[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?"
          errorMsg={serverErrors?.link}
        />
        <SubmitButton text="Continue" />
      </div>
    </form>
  );
}