import React, { useState } from "react";

function Pagination(props) {

    const [pageNo, setPageNo] = useState(1);

    const handleNext = function () {
        setPageNo(pageNo + 1);
    }

    const handlePrev = function () {
        if (pageNo > 1) {
            setPageNo(pageNo - 1);
        }

    }
    return (
        <div className="text-1.8xl flex gap-4 bg-slate-400 m-2 p-4 justify-center">
            <div className="cursor-pointer" onClick={handlePrev}>
                <i className="fa-solid fa-arrow-left"></i>
            </div>

            <div className="font-bold">{pageNo}</div>

            <div className="cursor-pointer" onClick={handleNext}>
                <i className="fa-solid fa-arrow-right"></i>
            </div>
        </div>
    )
}

export default Pagination;