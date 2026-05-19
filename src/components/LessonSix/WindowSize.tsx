import {useEffect, useState} from "react";

const WindowSize = () => {

    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

       window.addEventListener("resize", handleResize)
    },[])



    return (
        <>
            <div className="text-center pt-2">
                <h1 className="text-cf-dark-grey text-2xl mb-4">
                    Window size : {size.width} x {size.height}
                </h1>
                <p className="text-cf-dark-grey text-2xl mb-4">
                    Resize the window and watch it update!
                </p>
            </div>
        </>
    )
}
export default WindowSize;