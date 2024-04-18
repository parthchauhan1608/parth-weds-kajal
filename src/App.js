import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import ChooseSidePage from "./pages/ChooseSidePage";
import LadkeWale from "./pages/LadkeWale";
import LadkiWale from "./pages/LadkiWale";
import OurStoryPage from "./pages/OurStoryPage";

function App() {
	return (
		<Switch>
			<Route path="/ourStory" exact>
				<OurStoryPage />
			</Route>
			<Route path="/parth" exact>
				<LadkeWale />
			</Route>
			<Route path="/kajal" exact>
				<LadkiWale />
			</Route>
			<Route path="/chooseSide" exact>
				<ChooseSidePage />
			</Route>
			<Route path="/" exact>
				<HomePage />
			</Route>
			<Route path="*">
				<ErrorPage />
			</Route>
		</Switch>
	);
}

export default App;
