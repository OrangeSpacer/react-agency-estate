import CardItem from '../../components/CardItem/CardItem';
import Pagination from '../../components/Pagination/Pagination';
import Container from '../../components/UI/Container/Container';
import Title from '../../components/UI/Title/Title';
import usePagination from '../../Hooks/usePagination';
import classes from './Blog.module.scss'
const Blog = ({blogItems,loading,searchValue,handlerSearchValue}) => {
    const itemsPagination = loading ? blogItems : blogItems[0]
    const {jump, newArray, currentPage, maxPage} = usePagination(itemsPagination,4)
    const renderItems = () => {
        return(
            (loading ? [...Array(4)] : newArray.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))).map((item,index) => {
                return(
                <CardItem
                    loading={loading}
                    key={index}
                    {...item}
                />)
            })
        )
    }
    return (
        <Container>
            <div className={classes.mainBlock}>
                <Title title="Blog"/>
                <div>
                    <input placeholder="Search..." value={searchValue} onChange={handlerSearchValue}/>
                </div>
            </div>
            <div className={classes.cartItems}>
                {renderItems()}
            </div>
            <div style={{textAlign:'center'}}>
                <Pagination jump={jump} currentPage={currentPage}  maxPage={maxPage}/>
            </div>
        </Container>
    );
}
 
export default Blog;