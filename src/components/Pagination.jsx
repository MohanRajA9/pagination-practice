import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

const Pagination = ({ npages, currentPage, setCurrentPage }) => {
    const pageNumbers = [...Array(npages + 1).keys()].slice(1)
    console.log(pageNumbers)
    const goToPrevious = () => {
        if (currentPage != 1) { setCurrentPage(currentPage - 1) }
    }
    const goToNext = () => {
        if (currentPage != npages) { setCurrentPage(currentPage + 1) }
    }
    return (
        <nav>
            <ul className="pagination justify-content-center" >
                <li className="page-item" >
                    <a className="page-link" onClick={goToPrevious} href="#" >
                        Previous
                    </a>
                </li>
                {
                    pageNumbers.map(num => (
                        <li key={num} className={`page-item ${currentPage == num ? "active" : ""}`} >
                            <a onClick={() => setCurrentPage(num)} className="page-link" href="#">
                                {num}
                            </a>
                        </li>
                    ))
                }
                <li className="page-item" >
                    <a className="page-link" onClick={goToNext} href="#" >
                        Next
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination