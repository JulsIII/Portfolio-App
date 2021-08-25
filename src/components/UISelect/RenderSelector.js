import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
// import axios from 'axios';

export default function Selector(props) {
  const [menu, setMenu] = useState();

//   const { id } = useParams()
  // Change ^^^ that line and use a hook to obtain the :id parameter from the URL

  const handleClick = (e) => {
    console.log('***', 'Clicked a Btn!')
  };

//   useEffect(() => {
//     axios
    //   .get(`http://localhost:5000/api/movies/${id}`) // Study this endpoint with Postman
    //   .then(response => {
        // Study this response with a breakpoint or log statements
        // console.log('resMOVIE', response)
        // and set the response data as the 'movie' slice of state
    //     setMovie(response.data)
    //   })
    //   .catch(error => {
    //     debugger
    //     console.error(error);
    //   });
    // This effect should run every time time
    // the `id` changes... How could we do this?
//   }, [id]);

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = evt => { }

//   if (!movie) {
//     return <div>Loading movie information...</div>;
//   }

//   const { title, director, metascore, stars } = movie;

  return (
    // <div className="save-wrapper">
    //   <div className="movie-card">
    //     <h2>{title}</h2>
    //     <div className="movie-director">
    //       Director: <em>{director}</em>
    //     </div>
    //     <div className="movie-metascore">
    //       Metascore: <strong>{metascore}</strong>
    //     </div>
    //     <h3>Actors</h3>

    //     {stars.map(star => (
    //       <div key={star} className="movie-star">
    //         {star}
    //       </div>
    //     ))}
    //   </div>
    //   <div className="save-button">Save</div>
    // </div>
    <div>
        <div><button style={{
            fontSize: "1.7rem",
            color: "#46e38f",
            backgroundColor: "#615e5e",
            margin:"15px",
            }} onClick={handleClick}>Load GemUI</button>
        </div>
        <div>
            <button style={{
            fontSize: "1.7rem",
            color: "#46e38f",
            backgroundColor: "#615e5e",
            margin:"15px",
            }} onClick={handleClick}>Load GemUI</button>
        </div>
        <div>
            <button style={{
            fontSize: "1.7rem",
            color: "#46e38f",
            backgroundColor: "#615e5e",
            margin:"15px",
            }} onClick={handleClick}>Load GemUI</button>
        </div>
    </div>
      

  );
}
