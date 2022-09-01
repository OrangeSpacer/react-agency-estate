import classes from './Pagination.module.scss'
const Pagination = ({jump,currentPage,maxPage}) => {
    const pageNumbers = []
    for(let i = 1;i <= maxPage;i++){
        pageNumbers.push(i)
    }
    return (
        <ul className={classes.paginationItems}>
            {pageNumbers.map((number,index) => {
                return(<li 
                    key={number} 
                    className={number === currentPage ? classes.paginateItemActive:classes.paginateItem} 
                    onClick={() => {
                        jump(number)
                    }}
                >   
                    {number}
                </li>)
            })}
        </ul>
    );
}
 
export default Pagination;