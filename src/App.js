import { Router, Switch, Route } from "react-router";
import history from "./history";

import Landing from "./components/landing/landing";
import Contact from "./components/contact/contact";
import Location from "./components/location/location";

function App() {
	return (
		<div className="App">
			<Router history={history}>
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route path="/contact" component={Contact} />
					<Route path="/location" component={Location} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
