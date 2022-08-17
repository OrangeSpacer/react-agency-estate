import AccordionItem from "./AccordionItem/AccordionItem";
import classes from './Accordion.module.scss'
import { useState } from "react";
const Accordion = ({content}) => {
    const AccordionContent = [...content]
    const [accordionOpen,setAccordionOpen] = useState(null)
    const handlerAccordionClick = (i) => {
        console.log(i)
        if(accordionOpen == i){
            return setAccordionOpen(null)
        }
        setAccordionOpen(i)
    }
    return (
        <div className={classes.accordion}>
            {AccordionContent.map((item,index) => <AccordionItem click={() => handlerAccordionClick(index)} id={index}  selected={accordionOpen} title={item.title} text={item.text} key={index}/>)}
        </div>
    );
}
 
export default Accordion;