import styles from './skd-button.module.scss';

/* eslint-disable-next-line */
export interface SkdButtonProps {}

export function SkdButton(props: SkdButtonProps) {
  return (
    <button
      type="button"
      className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Button text
    </button>
  );
}

export default SkdButton;
