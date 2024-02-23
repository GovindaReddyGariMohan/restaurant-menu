import './App.css';
import Navigation from './navigationBar/navigationBar';
import Video from './Video/titleVideo';
import Menuitems from './menuItems/menuItems';
import { useState } from 'react';
import Items from './Constants/Items';
function App() {
  const [filterItems, setFilteritems] = useState(Items)
  console.log('filterItems',filterItems)
  return (
    <div className="App">
      <Navigation  sItems={setFilteritems} all={Items}/>
      <Video />
      <Menuitems FItems={filterItems}/>
    </div>
  );
}

export default App;
