import { React} from 'react';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import './index.css';

import Landingpage from './pages/LandingPage.jsx';

export default function App() {
  return (
<>
    <BrowserRouter>
        <Landingpage />
    </BrowserRouter>
</>
  );
}
