// import external modules
import React, { Fragment, Component } from "react";
import {
   Row,
   Col,
   Modal,
   ModalBody,
   ModalFooter,
   Button,
   Input,
   Card,
   CardBody
} from "reactstrap";
import ReactBigCalender from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { connect } from "react-redux";
import DateTimePicker from "react-datetime";
import "react-datetime/css/react-datetime.css";

import { handleAddEvent } from "../../redux/actions/calenderAction/calenderAction";

ReactBigCalender.momentLocalizer(moment);
const allViews = Object.keys(ReactBigCalender.Views).map(
   k => ReactBigCalender.Views[k]
);

class Calender extends Component {
   state = {
      modal: false,
      start: new Date(),
      end: new Date(),
      eventTitle: "Enter Your Title",
      events: []
   };

   toggleModal = () => {
      this.setState(prevState => ({
         modal: !prevState.modal
      }));
   };

   handleChange = e => {
      this.setState({
         eventTitle: e.target.value
      });
   };

   handleStartDateTimeChange = date => {
      this.setState(prevState => ({
         start: date._d
      }));
   };

   handleEndDateTimeChange = date => {
      this.setState(prevState => ({
         end: date._d
      }));
   };

   handleSubmit = () => {
      const { handleAddEvent } = this.props;

      this.setState(
         prevState => {
            const { start, eventTitle, end, events } = this.state;
            return {
               events: [
                  ...events,
                  {
                     title: eventTitle,
                     allDay: true,
                     start: start,
                     end: end
                  }
               ]
            };
         },
         () => {
            const { start, end, eventTitle, events } = this.state;
            let param = {
               start,
               eventTitle,
               end
            };
            handleAddEvent(param, events);
         }
      );
      this.toggleModal();
   };

   handleSlotSelect = slotInfo => {
      this.toggleModal();
      this.setState(prevState => ({
         start: slotInfo.start,
         end: slotInfo.end,
         eventTitle: "Enter Your Title"
      }));
   };

   render() {
      const { calender } = this.props;
      const { modal, eventTitle, start, end } = this.state;
      return (
         <Fragment>
            <Modal isOpen={modal} toggle={this.toggleModal}>
               <ModalBody>
                  <label>Event Title</label>
                  <Input value={eventTitle} onChange={this.handleChange} />
                  <Fragment>
                     <div>
                        <label>Start Date</label>
                        <DateTimePicker
                           onChange={this.handleStartDateTimeChange}
                           defaultValue={calender.startDate}
                           value={start}
                        />
                     </div>
                     <div>
                        <label>End Date</label>
                        <DateTimePicker
                           onChange={this.handleEndDateTimeChange}
                           defaultValue={calender.startDate}
                           value={end}
                        />
                     </div>
                  </Fragment>
               </ModalBody>
               <ModalFooter>
                  <Button color="secondary" onClick={this.toggleModal}>
                     Cancel
                  </Button>
                  <Button color="success" onClick={this.handleSubmit}>
                     Submit
                  </Button>
               </ModalFooter>
            </Modal>
            <Row>
               <Col xs="12">
                  <div className="content-header">Calendar</div>
                  <p className="content-sub-header">
                     <a href="https://github.com/intljusticemission/react-big-calendar" target="_blank" rel="noopener noreferrer">React Big Calendar</a> is gcal/outlook like calendar component. This is the most advanced example having various features.
                     This example lists all the events on the calendar with Add new event functionality.
                     <a href="https://github.com/intljusticemission/react-big-calendar" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.shields.io/github/stars/intljusticemission/react-big-calendar.svg?style=social" alt="Stars" />
                        <img src="https://img.shields.io/npm/dm/react-big-calendar.svg" alt="Downloads"/>
                     </a>
                  </p>
               </Col>
            </Row>

            <Card>
               <CardBody>
                  <div style={{ height: 700 }}>
                     <ReactBigCalender
                        events={calender.events}
                        views={allViews}
                        step={60}
                        defaultDate={new Date()}
                        selectable={true}
                        onSelectSlot={this.handleSlotSelect}
                     />
                  </div>
               </CardBody>
            </Card>
         </Fragment>
      );
   }
}

const mapStateToProps = state => ({
   calender: state.calender
});

export default connect(
   mapStateToProps,
   { handleAddEvent }
)(Calender);
