import React from 'react'

const Pet = (prams) => {
  return (
    <>
    <br></br>
    <div>Name{prams.name} </div>
    
     <div>breed is {prams.breed}</div>
     <div>location {prams.location} </div>
     <br></br>
     </>
  )
}

export default Pet