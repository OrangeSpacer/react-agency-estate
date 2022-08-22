import CardItem from '../../components/CardItem/CardItem';
import Pagination from '../../components/Pagination/Pagination';
import Container from '../../components/UI/Container/Container';
import Title from '../../components/UI/Title/Title';
import classes from './Blog.module.scss'
const Blog = ({blogItems,loading,searchValue,handlerSearchValue,postsPerPage,totalPosts,paginate,currentPage}) => {
    const renderItems = () => {
        return(
            (loading ? [...Array(4)] : blogItems.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))).map((item,index) => {
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
                <Pagination postsPerPage={postsPerPage} currentPage={currentPage} totalPosts={totalPosts} paginate={paginate}/>
            </div>
        </Container>
    );
}
 
export default Blog;