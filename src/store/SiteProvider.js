import { useReducer , createContext, useContext} from "react";

const SiteContext = createContext();

const SiteProvider = ({initialState , reducer , children}) => {

    return (
        <SiteContext.Provider value = {useReducer(reducer,initialState)}>
            {children}
        </SiteContext.Provider>
    );
}

export const useSiteContext = () => useContext(SiteContext);

export default SiteProvider;