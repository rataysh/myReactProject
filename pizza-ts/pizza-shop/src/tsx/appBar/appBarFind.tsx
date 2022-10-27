import React, { useRef } from "react";

export default function AppBarFind() {
    // let [colorFocusedFindFlag, setColorFocusedFind] = useState(false)
    const refInput = useRef<HTMLInputElement>(null)
    const handleClick = () => {
        if (refInput && refInput.current) {
            refInput.current.focus()
        };
    }
    // const changeFlag = () => {
    //     setColorFocusedFind(colorFocusedFindFlag=!colorFocusedFindFlag);
    //     if (colorFocusedFindFlag) {handleClick()};
    // }
    // useEffect(() => {
    //     handleClick();
    // }, [])  


    return (
        <div className="flex place-items-center justify-between space-x-4">
            <form className= "hover md:appBarFindInput md:border-orange-200" >
                <input ref={refInput} className="hidden md:flex outline-none" type="text" placeholder="Find your favorite pizza" />
            </form>
            <button onClick={ handleClick }>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </button>   
        </div>
    )
}