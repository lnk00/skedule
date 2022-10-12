export interface SkdLinkProps {
  link: string;
  children: string;
}

export function SkdLink(props: SkdLinkProps) {
  return (
    <div className="text-sm">
      <a
        href={props.link}
        className="font-medium text-indigo-600 hover:text-indigo-500"
      >
        {props.children}
      </a>
    </div>
  );
}

export default SkdLink;
