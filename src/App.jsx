import "./App.css";
import Counter from "./component/counter";
import store from "./store/index";
import { Provider } from "react-redux";
function App() {
  return (
    <>
      <Provider store={store}>
        <Counter />
      </Provider>
    </>
  );
}

export default App;
