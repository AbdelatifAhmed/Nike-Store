const Button = ({ label, iconURL }) => {
  return (
    <button className="group flex justify-center items-center 
    gap-2 px-7 py-4 border font-montserrat text-lg 
    leading-none bg-coral-red rounded-full transition duration-75
  text-white border-coral-red hover:border-1 hover:bg-transparent hover:text-coral-red
   hover:font-semibold focus:ring focus:ring-coral-red">
      {label}
      <img src={iconURL} alt="Icon" className="ml-2 rounded-full w-5 h-5 group-hover:bg-coral-red 
      group-hover:border-2 group-hover: border-coral-red" />
    </button>
  );
};

export default Button;
