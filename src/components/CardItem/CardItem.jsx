import ContentLoader from "react-content-loader"
import classes from './CardItem.module.scss'
const CardItem = ({imgUrl,title,typeHouse,text,loading}) => {
    return (
        <>
            {loading ? 
                    <ContentLoader 
                    speed={2}
                    width={362}
                    height={562}
                    viewBox="0 0 362 562"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="-8" y="1" rx="15" ry="15" width="362" height="329" /> 
                    <rect x="22" y="344" rx="0" ry="0" width="308" height="50" /> 
                    <rect x="8" y="358" rx="0" ry="0" width="21" height="0" /> 
                    <rect x="29" y="417" rx="0" ry="0" width="302" height="124" />
                </ContentLoader>:
                <div className={classes.cardItemBlock}>
                    <div className={classes.cardItemImg}>
                        <img src={imgUrl} alt="houseImg" />
                    </div>
                    <div className={classes.cardItemContent}>
                        {typeHouse && <div className={classes.cardItemType}>{typeHouse}</div>}
                        <div className={classes.cardItemTitle}>
                            {title}
                        </div>
                        <div className={classes.cardItemText}>
                            {text}
                        </div>
                    </div>
                </div>
            }
        </>
    );
}
 
export default CardItem;