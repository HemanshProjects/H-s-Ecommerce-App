import { createStore } from "redux";
import CartReducer from "./CartReducer";


 const store= createStore(CartReducer)
 store.subscribe(() => {
    console.log('State updated:', store.getState());
});

 export default store