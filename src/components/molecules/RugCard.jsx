import cn from "classnames";

export const RugCard = ({ rug, bgImage, text, className }) => {
    return (
      <div className={cn("relative flex items-center", className)} >
        <img src={bgImage} alt="" className="absolute w-full h-full z-0"/>
        <img src={rug} alt="rug" className="z-10 ml-4" />
        <p className="text-base font-bold ml-4 z-10">{text}</p>
      </div>
    );
  };