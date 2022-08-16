import { useState } from 'react';
import classes from './ArticlesCard.module.scss'
const ArticlesCard = ({title,hoverText,data,imgPath}) => {
    const [hoverCard,setHoverCard] = useState(false)
    const handlerHoverCard = () => {
        setHoverCard(!hoverCard)
    }
    return (
        <div onMouseEnter={handlerHoverCard} onMouseLeave={handlerHoverCard} className={classes.cardBlock}>
            <div className={classes.cardContent}>
                {hoverCard ? 
                    <div className={classes.cardData}>
                        {data}
                    </div>:
                    null
                }
                <div className={classes.cardTitle}>
                    {title}
                </div>
                {hoverCard ? 
                    <div className={classes.cardHoverText}>
                        {hoverText}
                    </div>:
                    null
                }
                <img src={imgPath} className={classes.cardImg} alt="imgArhitecture"/>
                {hoverCard ? <div className={classes.cardBorder} />: null}
            </div>
        </div>
    );
}
 
export default ArticlesCard;