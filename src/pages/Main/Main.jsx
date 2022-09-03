import Articles from "../../components/Articles/Articles";
import Comment from "../../components/Comment/Commnet";
import CommentSlider from "../../components/CommentSlider/CommentSlider";
import ContactUs from "../../components/ContactUs/ContactUs";
import Faq from "../../components/Faq/Faq";
import ProjectCart from "../../components/LatestProject/ProjectCart";
import MainSlider from "../../components/MainSlider/MainSlider";
import SmallBlock from "../../components/SmallBlockContent/SmallBlock";
import Container from "../../components/UI/Container/Container";


const Main = () => {
    const projectCarts = [
        {title: 'Villas',hoverText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.',imgPath:'/img/LatestProject/Houses.png'},
        {title: 'Dubai',hoverText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.',imgPath:'/img/LatestProject/Villas.png'},
        {title: 'Houses',hoverText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.',imgPath:'/img/LatestProject/Houses.png'},
        {title: 'Villas',hoverText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.',imgPath:'/img/LatestProject/Villas2.png'},
    ]
    const smallBlockContent = [
        {title: '"The best apartment in Dubai" we will find your dream"',textTitle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nibh massa, euismod ut libero id, blandit posuere augue. Morbi porta volutpat diam egestas ultrices. Phasellus tempus fringilla neque, nec viverra orci tristique vel. In efficitur vehicula magna, varius pellentesque nisl vehicula vel. Aenean vel sem ac elit commodo finibus in nec massa. Nulla facilisi. Nulla vestibulum venenatis sollicitudin. Etiam auctor mollis justo eu tincidunt. Aliquam varius varius tortor. Cras id venenatis sem. Quisque ut risus ex. Sed et tempor massa. Praesent ac eros hendrerit, congue justo ac, molestie urna. Fusce nec neque vitae dolor dapibus elementum. Maecenas nec orci quis sem condimentum dapibus varius a lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
    ]
    return (
        <div>
            <MainSlider />
            <Container>
                <h2 style={{fontSize: '48px',color: '#FFFFFF',fontWeight: '700',marginTop:'100px'}}>
                    Latest projects
                </h2>
                <div style={{display:'flex',gap:'20px',flexWrap:'wrap',justifyContent:'center'}}>
                    {projectCarts.map((item,index) => <ProjectCart title={item.title} hoverText={item.hoverText} imgPath={item.imgPath} key={index}/>)}
                </div>
            </Container>
            {smallBlockContent.map((item,index) => <SmallBlock title={item.title} textTitle={item.textTitle} key={item.title}/>)}
            <Comment commentText='“Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.”' Author='— Mary Kay Ash'/>
            <ContactUs />
            <Articles/>
            <CommentSlider/>
            <Faq/>
        </div>
    );
}
 
export default Main;