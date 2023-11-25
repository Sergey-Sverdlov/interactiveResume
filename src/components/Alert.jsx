import React from 'react';

const Alert = ({type, text}) => {
    return (
        <div className="absolute top-20 left-0 right-0 flex justify-center ">
            <div className={`${type === 'danger' ? "bg-red-800" : "bg-blue-800"} p-2
                text-indigo-100 leading-none lg:rounded-full flex justify-center items-center"}`}
                 role='alert'>
                <p className={`${type === 'danger' ? "bg-red-500" : "bg-blue-500"} flex 
                rounded-full uppercase px-2 py-1 font-semibold mr-3 text-xs`}>
                    {type === 'danger' ? 'Ошибка' : "Успех"}
                </p>
                <p className="mr-2  text-left flex items-center
                 rounded-full px-2 py-1 uppercase font-semibold text-xs">{text}</p>
            </div>
        </div>
    );
};

export default Alert;
