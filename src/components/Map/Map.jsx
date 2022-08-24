import classes from './Map.module.scss'
const Map = () => {
    return (
        <>
            <iframe
                title="MainOffice"
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A7486ac7a85e11ed897554b0e3cec8ac5fe2a9ab4bd640495a3eb120a0c684969&amp;source=constructor;scroll=false" 
                frameBorder="0" 
                className={classes.mapItem}>
            </iframe>
        </>
    );
}
 
export default Map;