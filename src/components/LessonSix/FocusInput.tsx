import {useEffect, useRef} from "react";

const FocusInput = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        inputRef.current?.focus();
    }

    useEffect(() => {
        inputRef.current?.focus();
    }, [])

    return (
        <>
            <div className="text-center space-x-4 my-4">
                <input
                    ref={inputRef}
                    type="text"
                    className="border px-4 py-2 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button className="bg-cf-dark-gray  text-white px-4 py-2"
                        onClick={handleClick}>
                    Focus Input
                </button>
            </div>
        </>
    )
}
export default FocusInput;
