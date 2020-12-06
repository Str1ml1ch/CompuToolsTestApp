import React from 'react'
import '../CSS/NotFound.css'


export const NotFound = ({location}) =>
{
    return(
        <div className="error">
      <h1>ERROR 404</h1>
      <h3>No match found for <code>{location.pathname}</code></h3>
   </div>
    )
}