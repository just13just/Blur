import { combineReducers } from "redux";
import notifierSlice from "./slices/notifierSlice";
import loadingSlice from "./slices/loadingSlice";
import orderSlice from "./slices/orderSlice";
import pokemonSlice from "./slices/pokemonSlice";

const rootReducer = combineReducers({
  order: orderSlice,
  pokemon: pokemonSlice,
  loading: loadingSlice,
  notifier: notifierSlice,
});

export default rootReducer;
