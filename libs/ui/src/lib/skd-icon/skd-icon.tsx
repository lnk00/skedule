export interface SkdIconProps {
  link?: string;
  children: JSX.Element;
}

export function SkdIcon(props: SkdIconProps) {
  return (
    <a
      href={props.link}
      className="flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none cursor-pointer"
    >
      {props.children}
    </a>
  );
}

export default SkdIcon;
