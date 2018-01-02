import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

//redux
import {createStore} from "redux";
import {groceryListApp} from "./reducers";
import {Provider} from "react-redux";
import {addItem, purchaseItem, setPurchaseFilter, sort} from "./actions";

let store = createStore(groceryListApp);

let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
registerServiceWorker();
