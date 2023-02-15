import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar'
import ClipLoader from 'react-spinners/ClipLoader'

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false);
    },1000)
  },[]);

  return (
    <div>
      {
        loading 
        ?(
          <div className='flex justify-center items-center h-screen'>
            <ClipLoader size={150} color={"#000"} loading={loading}/>
          </div>
        )
        
        :(<Navbar/>)
      }
    </div>
  );
}

export default App;
