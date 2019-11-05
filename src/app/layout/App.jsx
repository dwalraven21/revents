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


class App extends Component {
	render() {
		return (
		<Fragment>
			<NavBar />
			<Container className="main">
				<Route
					exact path="/"
					component={HomePage}
				/>
				<Route
					path="/events"
					component={EventDashboard}
				/>
				<Route
					path="/events/:id"
					component={EventDetails}
				/>
				<Route
					path="/people"
					component={PeopleDashboard}
				/>
				<Route
					path="/profile/:id"
					component={UserDetails}
				/>
				<Route
					path="/settings"
					component={SettingsDashboard}
				/>
				<Route
					path="/create"
					component={EventForm}
				/>
			</Container>
		</Fragment>
	    );
	}
}

export default App;
