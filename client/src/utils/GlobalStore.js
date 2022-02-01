/* import React, { createContext, useContext,useReducer } from "react";
//import { useCharacterReducer } from './CharacterContext'
import { useQuery } from '@apollo/client'; 
import { QUERY_FIGHTS } from './queries';

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  
  const [state, dispatch] = useReducer({
    Characters: [],
    fights: [],
  });


  const { fights } = state;

  const { loading, data: fightData } = useQuery(QUERY_FIGHTS);

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
 */