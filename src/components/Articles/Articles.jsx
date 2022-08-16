import Container from "../UI/Container/Container";
import ArticlesCard from "./ArticlesCard/ArticlesCard";
import classes from './Articles.module.scss'
const Articles = () => {
    const articlesCards = [
        {title:'Discover Architecture',hoverText:'Projects for many large domestic and foreign corporations, enterprises in many elds such',data:'Jule 03, 2022',imgPath:"/img/Articles/1.png"},
        {title:'Discover Architecture',hoverText:'Projects for many large domestic and foreign corporations, enterprises in many elds such',data:'Jule 03, 2022',imgPath:"/img/Articles/2.png"},
        {title:'Discover Architecture',hoverText:'Projects for many large domestic and foreign corporations, enterprises in many elds such',data:'Jule 03, 2022',imgPath:"/img/Articles/1.png"}
    ]
    return (
        <Container>
            <h2 className={classes.mainTitle}>
                Useful articles
            </h2>
            <div className={classes.articlesCards}>
                {articlesCards.map((item,index) => <ArticlesCard title={item.title} hoverText={item.hoverText} data={item.data} imgPath={item.imgPath} key={index}/>)}
            </div>
        </Container>
    );
}
 
export default Articles;