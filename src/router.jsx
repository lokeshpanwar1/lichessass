import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import GameDetails from "./components/GameDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/gamedetails/:id",
        element: <GameDetails />
    }
]);
export default router;