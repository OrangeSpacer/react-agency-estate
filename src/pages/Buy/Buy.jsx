import AppartamentsSlider from '../../components/AppartamentsSlider/AppartamentsSlider';
import CardItem from '../../components/CardItem/CardItem';
import ContactUs from '../../components/ContactUs/ContactUs';
import Pagination from '../../components/Pagination/Pagination';
import SmallBlock from '../../components/SmallBlockContent/SmallBlock';
import Container from '../../components/UI/Container/Container';
import Title from '../../components/UI/Title/Title'
import usePagination from '../../Hooks/usePagination';
import classes from './Buy.module.scss'
const Buy = ({contentSlider,isLoading,buyItems}) => {
    const itemsPagination = isLoading ? [...Array(4)] : buyItems[0]
    const {jump, newArray, currentPage, maxPage} = usePagination(itemsPagination,4)
    const rednerItems = () => {
        return(
            (isLoading ? [...Array(4)]:newArray).map((item,index) => 
                <CardItem 
                    loading={isLoading}
                    key={index}
                    {...item}
                />
            )
        )
    }
    return (
        <Container>
            <div className={classes.titleBlock}>
                <h2 className={classes.buyTitle}>
                    Apartments <br/><span>in Dubai</span>
                </h2>
                <img src="/img/MainSlider/slider1.png" alt="backGroundImg" className={classes.titleImg}/>
            </div>
            <div>
                <AppartamentsSlider slidesBlock={contentSlider} isLoading={isLoading}/>
            </div>
            <div>
                <SmallBlock 
                    title="Apartments" 
                    subtitle="Everything along the way"
                    textTitle="To and from, fascinated her: every pebble, ant, stick, leaf, blade of grass, and crack in the sidewalk was something to be picked up, looked at, tasted, smelled, and shaken. Everything was interesting to her. She knew nothing. I knew everything…been there, done that. She was in the moment, I was in the past. She was mindful. I was mindless."
                    textSubTitle="One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. The same is true as we experience the emotional sensation of stress from our first instances of social rejection or ridicule. We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds, including the most common of all: making mistakes."
                />
            </div>
            <div>
                <Title title="Bset offers"/>
                <div className={classes.itemsBlock}>
                    {rednerItems()}
                </div>
                <div>
                    <Pagination jump={jump} currentPage={currentPage}  maxPage={maxPage}/>
                </div>
            </div>
            <div>
                <ContactUs/>
            </div>
        </Container>
    );
}
 
export default Buy;