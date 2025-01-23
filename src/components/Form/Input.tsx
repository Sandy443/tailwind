import React from "react";

type FieldType = 'input' | 'textarea'; 

const common = "block px-2.5 pb-2.5 pt-4 w-full text-sm text-textColor bg-transparent rounded-lg border-1 " + 
               "border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-accent-4 peer";

const renderInputField = (name: string) => (
  <input
    type="text"
    id={name}
    className={common}
    placeholder=" "
  />
);

const renderTextAreaField = (name: string) => (
  <textarea
    id={name}
    className={`${common} h-36 max-h-40`}
    placeholder=" "
  />
);

interface InputProps {
  name: string;
  type: FieldType;  
}

const Input: React.FC<InputProps> = ({ name, type }) => {
  const additional = type === 'textarea' ? 
    "peer-placeholder-shown:-translate-y-2 peer-placeholder-shown:top-5" : 
    "peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2";

  const renderField = () => {
    switch (type) {
      case 'textarea':
        return renderTextAreaField(name);
      case 'input':
      default:
        return renderInputField(name);
    }
  };

  return (
    <div className="relative my-xs">
      {renderField()}
      <label
        htmlFor={name}
        style={{ backgroundColor: 'rgba(247, 212, 195, 0)' }}
        className={`absolute text-sm text-textLight duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] 
                     backdrop-blur-md px-2 peer-focus:px-2 peer-focus:text-accent-4 peer-placeholder-shown:scale-100 
                    peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 
                    rtl:peer-focus:left-auto start-1 ${additional}`}
      >
        {name}
      </label>
    </div>
  );
};

export default Input;
