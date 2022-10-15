export interface SkdLinkProps {
  link: string;
  children: string;
}

export function SkdLink(props: SkdLinkProps) {
  return (
    <div className="text-sm">
      <a
        href={props.link}
        className="font-medium text-main-600 hover:text-main-500"
      >
        {props.children}
      </a>
    </div>
  );
}

export default SkdLink;
