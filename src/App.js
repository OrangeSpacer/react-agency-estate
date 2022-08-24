import Main from "./pages/Main/Main";
import classes from './App.module.scss'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog/Blog";
import { useEffect, useState } from "react";
import axios from "axios";
import Contact from "./pages/Contact/Contact";

function App() {
  const [blogItems,setBlockItems] = useState([])
  const [currentPage,setCurrentPage] = useState(1)
  const [postPerPage] = useState(4)
  const [searchValue,setSearchValue] = useState('')
  const[isLoading,setIsLoading] = useState(true)
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
  
  useEffect(() => {
    (async function(){
      setIsLoading(true)
      const blogItemsBlock = await axios.get(`http://localhost:3002/Blog`)

      setBlockItems(prev => [...prev,blogItemsBlock.data])
      setIsLoading(false)
    })()
  },[])

  const handlerSearchValue = (e) => {
    setSearchValue(e.target.value)
  }
  
  const indexOfLastPosts = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPosts - postPerPage
  let currentPosts = []
  if(blogItems[0]!==undefined){
    currentPosts =  blogItems[0].slice(indexOfFirstPost,indexOfLastPosts)
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className={classes.App}>
      <Header/>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/Blog" element={<Blog blogItems={currentPosts} currentPage={currentPage} postsPerPage={postPerPage} paginate={paginate} totalPosts={blogItems[0]!==undefined ? blogItems[0].length: [].length} searchValue={searchValue} handlerSearchValue={handlerSearchValue} loading={isLoading}/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      <Footer footerItems={footerItems} footerSocialLInks={footerSocialLinks}/>
    </div>
  );
}

export default App;
