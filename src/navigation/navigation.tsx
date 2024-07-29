import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import App from '../App';
import { HomeScreen } from "../screens/HomeScreen/HomeScreen";
import { AboutScreen } from "../screens/AboutScreen/AboutScreen";
import CertificatesScreen from "../screens/CertificatesScreen";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<HomeScreen />} />
            <Route path="about-me" element={<AboutScreen />} />
            <Route path="my-certificates" element={<CertificatesScreen />} />
        </Route>
    )
);
