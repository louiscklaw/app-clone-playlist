import React from 'react'

export default () =>{
  React.useEffect(()=>{
    fetch('//localhost:3001/feed').then((res) => res.json()).then(res_json => console.dir(res_json))

  },[])
  return(
    <>prisma_helloworld</>
  )
}
