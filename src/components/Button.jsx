const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`
    group flex justify-center items-center 
    gap-2 px-7 py-4 border font-montserrat text-lg 
    leading-none
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : "bg-coral-red text-white border-coral-red"
    }
    transition duration-75 rounded-full ${fullWidth && 'w-full' }
    hover:border-1 hover:bg-transparent hover:text-coral-red
    hover:font-semibold focus:ring focus:ring-coral-red`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="Icon"
          className="ml-2 rounded-full w-5 h-5 group-hover:bg-coral-red 
      group-hover:border-2 group-hover:border-coral-red dark:group-hover:bg-zero"
        />
      )}
    </button>
  );
};

export default Button;
