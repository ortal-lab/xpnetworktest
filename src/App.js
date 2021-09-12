import logo from './logo.svg';
import './App.css';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import users from "./redux/users.reducer";
import actions from "./redux/actions";
import TableA from "./components/table"
import TablePage from "./components/responsiveTable"

const reducers = combineReducers({ users });
const store = createStore(reducers);

window.store = store;
function App() {
  return (
    
        <Provider store={store}>
          <TableA></TableA>
        </Provider>
      
  );
}

export default App;
