import classes from './FooterItem.module.scss'
import Button from '../../UI/Button/Button';
const FooterItem = ({name,items,isButton,}) => {
    return (
        <div>
            <h5 className={classes.footerTitle}>
                {name}
            </h5>
            <div>
                <ul className={classes.itemList}>
                    {items.map((item,index) => 
                        <li 
                            key={index} 
                            className={classes.itemListItem}>
                                <a href="/" className={classes.itemLink}>{item}</a>
                        </li>)}
                        {isButton ? <li><Button text='Book a consultation' click={() => console.log('click')} type='modal'/></li>:null}
                </ul>
            </div>
        </div>
    );
}
 
export default FooterItem;