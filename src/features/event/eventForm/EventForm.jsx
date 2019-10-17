import React, { Component } from 'react';
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react';

class EventForm extends Component {
	render() {
		return (
		          <Segment>
		            <Form>
		              <Form.Field>
		                <label>Name</label>
		                <input placeholder="Give your event a name"/>
		              </Form.Field>
					  <Form.Field>
		                <label>Event Date</label>
		                <input type="date" placeholder="Event Date" />
		              </Form.Field>
		              <Form.Field>
						<label>City</label>
						<input placeholder="City event is taking place" />
		              </Form.Field>
					  <Form.Field>
						<label>Venue</label>
						<input placeholder="Venue Name" />
		              </Form.Field>
					  <Form.Field>
						<label>Hosted By</label>
						<input placeholder="Enter the host name" />
		              </Form.Field>
		              <Button positive type="submit">
		                Submit
		              </Button>
		              <Button type="button">
		                Cancel
		              </Button>

		            </Form>
		          </Segment>
		)
	}
}

export default EventForm
