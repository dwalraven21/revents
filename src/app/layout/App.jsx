import React, {Component, Fragment} from 'react';

import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';

import NavBar from '../../features/nav/navBar/NavBar'

import HomePage from '../../features/home/HomePage'
import EventDashboard from '../../features/event/eventDashboard/EventDashboard'
import EventDetails from '../../features/event/eventDetails/EventDetails'
import PeopleDashboard from '../../features/users/peopleDashboard/PeopleDashboard'
import UserDetails from '../../features/users/userDetails/UserDetails'
import SettingsDashboard from '../../features/users/settings/SettingsDashboard'
import EventForm from '../../features/event/eventForm/EventForm'
import TestComponent from '../../features/testarea/TestComponent'


class App extends Component {
	render() {
		return (
		<Fragment>
			<Route exact path="/" component={HomePage} />
			<Route
				path="/(.+)"
				render={() => (
				<Fragment>
					<NavBar />
					<Container className="main">
						<Route path="/events" component={EventDashboard} />
						<Route path="/events/:id" component={EventDetails} />
						<Route path="/people" component={PeopleDashboard} />
						<Route path="/profile/:id" component={UserDetails} />
						<Route path="/settings" component={SettingsDashboard} />
						<Route path="/create" component={EventForm} />
						<Route path="/test" component={TestComponent} />
					</Container>
				</Fragment>
				)}
			/>
		</Fragment>

	    );
	}
}

export default App;
