
import './App.css';
import PermanentDrawerLeft from './component/Drawer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Posts from './component/pages/Posts';
import Albums from './component/pages/Albums';
import Todos from './component/pages/Todos';
import Users from './component/pages/Users';
import Home from './component/pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PermanentDrawerLeft />
        <Routes>
          <Route index path="/*" element={<Home />} />
          <Route path="POSTS" element={<Posts />} />
          <Route path="ALBUMS" element={<Albums />} />
          <Route path="TODOS" element={<Todos />} />
          <Route path="USER" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
