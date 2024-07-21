import { Fragment, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import ThankYou from "./pages/ThankYou"; // Import the ThankYou page
import { myAuth } from "./store/firebase";
import { useSiteContext } from "./store/SiteProvider";

function App() {
    const dispatch = useSiteContext()[1];

    useEffect(() => {
        const unsubscribe = myAuth.onAuthStateChanged(myAuth.auth, (authUser) => {
            console.log("Here");
            console.log(authUser);

            if (authUser) {
                dispatch({
                    type: "SET_USER",
                    user: authUser.email
                });
            } else {
                dispatch({
                    type: "SET_USER",
                    user: null
                });
            }
        });

        return () => {
            unsubscribe();
        }
    }, [dispatch]);

    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/login" element={<Login />} />
                <Route path="/thank-you" element={<ThankYou />} /> {/* Add the ThankYou route */}
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Fragment>
    );
}

export default App;
