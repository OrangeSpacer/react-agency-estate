import Main from "./pages/Main";
import classes from './App.module.scss'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const footerItems = [
    {title:'Buy',items:['Apartment in Dubai','House in Dubai','Apartments in Dubai','Loft in Dubai','Penthouse in Dubai','Villa in Dubai'],isButton:false},
    {title:'Services',items:['Property management in Dubai, UAE','Sell ​​property in Dubai, UAE','Rent property in Dubai, UAE','Investments in Dubai, UAE','Real estate for cryptocurrency in Dubai','Moving to Dubai, UAE'],isButton:false},
    {title:'Information',items:['Video','Podcasts','Laws','Questions and answers','Books','Articles'],isButton:false},
    {title:'About company',items:['Jobs ','Story','Licenses','Why are we','Real estate agency'],isButton:false},
    {title:'Contact',items:['964 Worthington Drive Dubai, UAE','dubairealty@mail.com'],isButton:true}
  ]
  const footerSocialLinks = [
    {imgPath:'/img/Footer/FaceBook.svg'},
    {imgPath:'/img/Footer/Instagram.svg'},
    {imgPath:'/img/Footer/LinkedIn.svg'},
    {imgPath:'/img/Footer/Twitter.svg'},
    {imgPath:'/img/Footer/YouTube.svg'},
  ]
  return (
    <div className={classes.App}>
      <Header/>
      <Main />
      <Footer footerItems={footerItems} footerSocialLInks={footerSocialLinks}/>
    </div>
  );
}

export default App;
