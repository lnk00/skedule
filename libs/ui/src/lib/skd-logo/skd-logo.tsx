/* eslint-disable-next-line */
export interface SkdLogoProps {}

export function SkdLogo(props: SkdLogoProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="h-1/2 rotate-180 inline-block">
        <svg height="100%" viewBox="-50 -50 300 300">
          <polygon
            className=" fill-main-500 stroke-main-500 stroke-[48px] "
            strokeLinejoin="round"
            points="100,0 0,200 200,200"
          />
        </svg>
      </div>
      <div className="h-1/2 inline-block">
        <svg height="100%" viewBox="-50 -50 300 300">
          <polygon
            className=" fill-main-500 stroke-main-500 stroke-[48px] "
            strokeLinejoin="round"
            points="100,0 0,200 200,200"
          />
        </svg>
      </div>
    </div>
  );
}

export default SkdLogo;
