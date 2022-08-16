import { useState } from 'react';
import classes from './ProjectCart.module.scss';

const ProjectCart = ({title,hoverText,imgPath}) => {
    const [mouseEnter,setMouseEnter] = useState(false)
    const handlerMouseEnter = () => {
        setMouseEnter(!mouseEnter)
    }
    return (
        <div onMouseEnter={() => handlerMouseEnter()} onMouseLeave={() => handlerMouseEnter()} className={classes.CartBlock}>
            <div className={classes.title}>
                {title}
            </div>
            {mouseEnter ? 
                <div className={classes.hoverText}>
                    {hoverText}
                </div>
                :
                null    
            }
            <img src={imgPath} className={classes.img}/>
        </div>
    );
}
 
export default ProjectCart;