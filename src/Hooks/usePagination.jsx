import { useState } from 'react';

function usePagination(paginationArray,itemsPerPage) {
    console.log('Кол-во страниц:',itemsPerPage)
    const [currentPage,setCurrentPage] = useState(1)
    const maxPage = Math.ceil(paginationArray.length/itemsPerPage)
    
    function next(){
        setCurrentPage((currentPage) => Math.min(currentPage+1,maxPage))
    }
    function prev(){
        setCurrentPage((currentPage) => Math.max(currentPage-1,1))
    }

    function jump(page){
        const pageNumber = Math.max(1,page)
        setCurrentPage(() => Math.min(pageNumber,maxPage))
    }

    const begin = (currentPage - 1) * itemsPerPage
    const end = begin + itemsPerPage
    const newArray =  paginationArray.slice(begin,end)
    
        return { next, prev, jump, newArray, currentPage, maxPage }
}

export default usePagination;