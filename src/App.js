import React from 'react';
import { Main } from './Components/Main';
import './Components/style.css';
import {Routes,Route} from 'react-router-dom'
import { Marvel } from './Components/Marvel';
import {Helmet} from "react-helmet";

function App() {
  return (
    <>
    <Helmet>
      <title>Marvel App | Darrow Code</title>\
      <meta name="description" content="Marvel App | Darrow Code" />
    </Helmet>
     <Routes>
       <Route path='/'element={<Main/>}/>
       <Route path='/:id' element={<Marvel/>}/>
     </Routes>
    </>
  )
}

export default App;