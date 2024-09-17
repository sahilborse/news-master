import React from 'react'

function NewsCard(props) {
  return (
    <div>
         <div>
        <div className="card" style={{width: "18rem"}}>
            <img src={props.imageUrl?props.imageUrl:"https://ktla.com/wp-content/uploads/sites/4/2023/07/Powerball-1-2-1-1.jpg?w=1280"} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h3 className="card-title">{props.title}...</h3>
                    <p className="card-text">{props.description}...</p>
                    <a href={props.newsUrl} target="_blank" rel="noreferrer"  className="btn btn-dark">ReadMore</a>
                </div>
            </div>
      </div>
    </div>
  )
}

export default NewsCard
