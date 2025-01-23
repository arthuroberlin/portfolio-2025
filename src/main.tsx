import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import Intro from "./pages/Intro";
import GetToKnowMe from "./pages/GetToKnowMe/index.tsx";
import Background from "./components/Background/index.tsx";

import "./globalStyle/style.scss";
import Error from "./pages/Error/";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Background />
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<Error />} />
				<Route path="/" element={<Intro />} />
				<Route path="/gettoknowme" element={<GetToKnowMe />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
