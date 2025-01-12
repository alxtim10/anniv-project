import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Modal = ({ setIsOpen }) => {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleButtonClick = (value) => {
        if (password.length < 6) {
            setPassword((prev) => prev + value);
        }
    };

    const handleDelete = () => {
        setPassword((prev) => prev.slice(0, -1));
    };

    const handleUnlock = () => {
        if (password === '070124') {
            setPassword('');
            setIsOpen(false);
            navigate('/main')
        } else {
            setPassword('');
            setIsOpen(false);
        }
    };


    return (
        <div className="flex flex-col justify-between items-center text-white">
            <div className="flex mb-10 mt-4">
                {Array(6)
                    .fill('')
                    .map((_, i) => (
                        <div
                            key={i}
                            className={`w-4 h-4 mx-2 rounded-full ${i < password.length ? 'bg-white border border-white' : 'border border-white'
                                }`}
                        ></div>
                    ))}
            </div>
            <div className="keypad grid grid-cols-3 gap-x-7 gap-y-6 mb-9">
                {['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', 'del'].map((key) => (
                    <button
                        key={key}
                        onClick={() => (key === 'del' ? handleDelete() : handleButtonClick(key))}
                        className="w-16 h-16 bg-gray-400/50 rounded-full text-xl text-white hover:bg-gray-200/50 transition-all"
                    >
                        {key === 'del' ? '⌫' : key}
                    </button>
                ))}
            </div>
            <button
                onClick={handleUnlock}
                className=" bg-gray-400/50 px-6 py-2 rounded text-white hover:bg-gray-200/50 transition-all"
            >
                Unlock
            </button>
        </div>
    )
}

export default Modal