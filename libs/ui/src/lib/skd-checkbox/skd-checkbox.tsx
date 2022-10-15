import { Dispatch, SetStateAction } from 'react';

export interface SkdCheckboxProps {
  label: string;
  value: boolean;
  onChange: Dispatch<SetStateAction<boolean>>;
  name: string;
}

export function SkdCheckbox(props: SkdCheckboxProps) {
  return (
    <div className="flex items-center">
      <input
        id={props.name}
        name={props.name}
        type="checkbox"
        checked={props.value}
        onChange={() => props.onChange(!props.value)}
        className="h-4 w-4 rounded border-gray-300 text-main-600 focus:ring-main-500"
      />
      <label htmlFor={props.name} className="ml-2 block text-sm text-gray-900">
        {props.label}
      </label>
    </div>
  );
}

export default SkdCheckbox;
