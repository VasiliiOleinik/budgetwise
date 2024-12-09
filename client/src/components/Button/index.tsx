const Button = ({children, className, ...rest}) => {
    return (
        <button 
            className={`py-4 px-6 transition text-sm font-bold rounded-[44px] bg-blue-500 text-white shadow-custom-blue hover:scale-105 ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;