// 'use client';

// export default function StepThreeForm() {
//   return (
//     <form className="flex flex-1 flex-col items-center">
//       <div className="flex w-full flex-col gap-8 lg:max-w-[700px] "></div>
//     </form>
//   );
// }







'use client';
// import Input from '@/components/Input';
import Input from '@/app/components/Input';
// import SubmitButton from '../../../components/SubmitButton';
import SubmitButton from '@/app/components/SubmitButton';
import { stepThreeFormAction } from './actions';
// import { FormErrors } from '@/types';
import { FormErrors } from '@/app/types';
import { useFormState } from 'react-dom';

const initialState: FormErrors = {};

export default function StepThreeForm() {
  const [serverErrors, formAction] = useFormState(
    stepThreeFormAction,
    initialState
  );
  return (
    <form action={formAction} className="flex flex-1 flex-col items-center">
      <div className="flex w-full flex-col gap-8 lg:max-w-[700px] ">
        <Input
          label="Contact Name"
          id="contactName"
          required
          type="text"
          errorMsg={serverErrors?.contactName}
        />
        <Input
          label="Contact Email"
          id="contactEmail"
          required
          type="email"
          errorMsg={serverErrors?.email}
        />

        <SubmitButton text="Continue" />
      </div>
    </form>
  );
}