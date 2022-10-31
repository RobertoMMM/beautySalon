import { store } from "store";
import { Provider } from "react-redux";
import CustomRouter from "router";

const App = () => {
  return (
    <Provider store={store}>
      <CustomRouter />
    </Provider>
  );
};

export default App;
