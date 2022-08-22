import classes from './Pagination.module.scss'
const Pagination = ({postsPerPage,totalPosts, paginate,currentPage}) => {
    const pageNumbers = []
    for(let i = 1;i <= Math.ceil(totalPosts / postsPerPage);i++){
        pageNumbers.push(i)
    }
    return (
        <ul className={classes.paginationItems}>
            {pageNumbers.map((number,index) => {
                return(<li 
                    key={number} 
                    className={number === currentPage ? classes.paginateItemActive:classes.paginateItem} 
                    onClick={() => {
                        paginate(number)
                    }}
                >   
                    {number}
                </li>)
            })}
        </ul>
    );
}
 
export default Pagination;