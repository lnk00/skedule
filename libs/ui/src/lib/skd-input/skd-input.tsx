import { Dispatch, SetStateAction } from 'react';

export interface SkdInputProps {
  label: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  type: string;
  name: string;
  autocomplete?: string;
}

export function SkdInput(props: SkdInputProps) {
  return (
    <div>
      <label
        htmlFor={props.name}
        className="block text-sm font-medium text-gray-700"
      >
        {props.label}
      </label>
      <div className="mt-1">
        <input
          id={props.name}
          name={props.name}
          type={props.type}
          autoComplete={props.autocomplete ?? 'off'}
          required
          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-main-500 focus:outline-none focus:ring-main-500 sm:text-sm"
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default SkdInput;
