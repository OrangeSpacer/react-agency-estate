import Header from "../components/Header/Header";
import ProjectCart from "../components/LatestProject/ProjectCart";
import MainSlider from "../components/MainSlider/MainSlider";
import Container from "../components/UI/Container/Container";


const Main = () => {
    const projectCarts = [
        {title: 'Villas',hoverText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.',imgPath:'/img/LatestProject/Houses.png'},
        {title: 'Dubai',hoverText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.',imgPath:'/img/LatestProject/Villas.png'},
        {title: 'Houses',hoverText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.',imgPath:'/img/LatestProject/Houses.png'},
        {title: 'Villas',hoverText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.',imgPath:'/img/LatestProject/Villas2.png'},
    ]
    return (
        <div>
            <Header />
            <MainSlider />
            <Container>
                <h2 style={{fontSize: '48px',color: '#FFFFFF',fontWeight: '700',marginTop:'100px',paddingLeft:'350px'}}>
                    Latest projects
                </h2>
                <div style={{display:'flex',gap:'20px'}}>
                    {projectCarts.map((item,index) => <ProjectCart title={item.title} hoverText={item.hoverText} imgPath={item.imgPath} key={index}/>)}
                </div>
            </Container>
        </div>
    );
}
 
export default Main;