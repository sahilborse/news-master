import React ,{useState,useEffect, useContext} from 'react'
import Layout from '../components/Layout'
import NewsCard from '../components/NewsCard'
// import Mystate from '../context/Mystate'
import MyContext from '../context/MyContext'
export default function Home() {
    const [page,setPage]=useState(1)
    const [pageCount,setPageCount]=useState(0)
    const [articles,setArticles] =useState([])
    const {newsType}=useContext(MyContext)
    console.log(newsType)
    useEffect(()=>{

        async function fetching (){
          let url=`https://newsapi.org/v2/top-headlines?category=${newsType}&apiKey=2b0f971201db421499089c1304317783`
          let data=await fetch(url) 
          let parsedData=await data.json();
          setArticles(parsedData.articles)
          setPageCount(parsedData.totalResults)
            console.log("pagecount",pageCount)
            console.log("page",page)
        }
        fetching()},[newsType,page,pageCount]  
      );
const showPrevPage=async()=>{
    
        let url=`
        https://newsapi.org/v2/top-headlines?category=${newsType}&apiKey=2b0f971201db421499089c1304317783&pageSize=21&page=${page}`
        let data=await fetch(url);
        let parsedData=await data.json();
        setPage(page-1);
        setArticles(parsedData.articles);
      };
const showNextPage=async()=>{
        if(!(page+1 > (Math.floor(pageCount/20)+1))){
        
        let url=`https://newsapi.org/v2/top-headlines?category=${newsType}&apiKey=2b0f971201db421499089c1304317783&pageSize=21&page=${page+1}`;
        let data=await fetch(url) 
        let parsedData=await data.json();
        setPage(page+1);
        setArticles(parsedData.articles);
        }
      };
  return (
    <div>
      <Layout>
    <div className='container my-3' >
      <div className='row mx-3'>
      {articles.map((element)=>{
        return <div className='h-20 col-md-4'key={element.url}>
        <NewsCard title={element.title?element.title.slice(0,30):""} description={element.description?element.description.slice(0,80):""}imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>
      })}
      </div >
      <div className='container d-flex justify-content-between'>
          <button target="_blank" rel="noreferrer" disabled={page<=1} type="button" className="btn btn-dark " onClick={showPrevPage}>Previous</button>
          <button target="_blank" rel="noreferrer" disabled={page + 1 > (Math.floor(pageCount/20)+1)} type="button" className="btn btn-dark " onClick={showNextPage}>Next </button>
          </div>
        </div>
      </Layout>
    </div>
  )
}
