import  React from 'react';

export default function Input({ placeholder, type, name, value, onChange }) {
    const [inputValue, setInputValue] = React.useState('');

    const hanleOnChange = (e) => {
        setInputValue(e.target.value);
    };

  return (
    <>
   <div className='flex items-center gap-2'>
   <h1>result: { inputValue }</h1>
    <input
    className='h-10 rounded-md px-2 w-64 bg-slate-300 border-2 border-blue-800'
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={hanleOnChange}
    />
   </div>
    </>
  );
}
