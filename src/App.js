import classes from './App.module.css'

import Header from './components/header/Header';
import ListItem from './components/listitem/ListItem';


function App() {
  return (

      <div className={classes.App}>
        <div>
          <Header />
          <ListItem />
        </div>
      </div>

  );
}

export default App;
