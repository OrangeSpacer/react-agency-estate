import classes from './AccordionItem.module.scss'
const AccordionItem = ({title,text,click,id,selected}) => {
    return (
        <div className={classes.accordionItemBlock}>
            <div onClick={click}style={{cursor:'pointer',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div className={classes.accordionItemTitle}>
                    {title}
                </div>
                <div style={{width: '50%',height: '100%'}}>
                    <img  
                        style={selected === id ? {transform: 'rotate(0deg)',transition: 'all 0.5s ease'}: null}
                        src="img/Accordion/arrow.svg" 
                        alt="accordionArrow" 
                        className={classes.accordionImgClose} 
                    />
                </div>
            </div>
            <div className={classes.accordionItemTextClose} style={selected === id ? {height:'150px',maxHeight:'auto',transition:'all 0.5s ease',visibility:'visible',overflowY:'auto'}: null}>
                {text}
            </div>
        </div>
    );
}
 
export default AccordionItem;