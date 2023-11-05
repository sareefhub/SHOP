import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Homepage from './page/Homepage';
import Termgame from './page/Termgame';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage/>}/>
        <Route path='/home'element={<Homepage/>}/>
        <Route path='/term' element={<Termgame/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;