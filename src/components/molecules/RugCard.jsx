
export const RugCard = (props) => {
    return (
      <div className={`flex items-center gap-4 w-[25%] ${ props.backgroundRug }`} >
        <img src={props.rug} alt="rug" />
        <p className="text-base font-bold">{props.text}</p>
      </div>
    );
  };