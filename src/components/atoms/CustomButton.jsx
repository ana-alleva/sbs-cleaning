
export const CustomButton = (props) => {
  return (
    <>
      <a className="hover:bg-indigo-400 transition delay-300 duration-300 bg-indigo-500 italic uppercase py-4 px-6 rounded text-white text-sm font-bold w-fit text-center" href={props.path}>{props.text}</a>
    </>
  );
};