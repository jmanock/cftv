import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const localizer = BigCalendar.momentLocalizer(moment);

let navigate = {
  PREVIOUS:'PREV',
  NEXT:'NEXT',
  TODAY:'TODAY',
  DATE:'DATE'
};

let events = [
  {title:'Euro Car', start:new Date(2018,11,4), end:new Date(2018,11,4), bikes:false, cars:true, time:'6pm'},
  {title:'Ford Night', start:new Date(2018,11,5), end:new Date(2018,11,5), bikes:false, cars:false, time:'6pm'},
  {title:'Bike Night', start:new Date(2018,11,6), end:new Date(2018,11,6), bikes:true, cars:false, time:'6pm'},
  {title:'Van Night + 365 Jeep Life', start:new Date(2018,11,7), end:new Date(2018,11,7), bikes:false, cars:true, time:'6pm'},
  {title:'Corvette Meet', start:new Date(2018,11,10), end:new Date(2018,11,10), bikes:false, cars:true, time:'6pm'},
  {title:'Paint Night', start:new Date(2018,11,10), end:new Date(2018,11,10), bikes:false, cars:false, time:'7pm'},
  {title:'Festivals of Speed', start:new Date(2018,11,11), end:new Date(2018,11,11), bikes:false, cars:true, time:'6pm'},
  {title:'Mopar Night', start:new Date(2018,11,12), end:new Date(2018,11,12), bikes:false, cars:false, time:'6pm'},
  {title:'Humble Society Meet', start:new Date(2018,11,12), end:new Date(2018,11,12), bikes:false, cars:false, time:'6pm'},
  {title:'Bike Night', start:new Date(2018,11,13), end:new Date(2018,11,13), bikes:true, cars:false, time:'6pm'},
  {title:'Modern Muscle', start:new Date(2018,11,14), end:new Date(2018,11,14), bikes:false, cars:false, time:'6pm'},
  {title:'Cars & Coffee By: Hagerty', start:new Date(2018,11,15), end:new Date(2018,11,15), bikes:false, cars:false, time:'8am - 11am'},
  {title:'Sunday Brunch', start:new Date(2018,11,16), end:new Date(2018,11,16), bikes:false, cars:false, time:'10am - 2pm'},
  {title:'Camaro Club Meet', start:new Date(2018,11,16), end:new Date(2018,11,16), bikes:false, cars:true, time:'9:30am'},
  {title:'Mopar Mafia Toy Drive', start:new Date(2018,11,16), end:new Date(2018,11,16), bikes:false, cars:false, time:'3pm - 6pm'},
  {title:'Porsche & Mercedes Night', start:new Date(2018,11,17), end:new Date(2018,11,17), bikes:false, cars:true, time:'6pm'},
  {title:'BMW Night', start:new Date(2018,11,18), end:new Date(2018,11,18), bikes:false, cars:true, time:'6pm'},
  {title:'Jeep & Trucks', start:new Date(2018,11,19), end:new Date(2018,11,19), bikes:false, cars:true, time:'6pm'},
  {title:'Bike Night', start:new Date(2018,11,20), end:new Date(2018,11,20), bikes:true, cars:false, time:'7pm'},
  {title:'Volkswagen & Audi Group', start:new Date(2018,11,21), end:new Date(2018,11,21), bikes:false, cars:true, time:'6pm'},
  {title:'Sunday Brunch', start:new Date(2018,11,23), end:new Date(2018,11,23), bikes:false, cars:false, time:'10am - 2pm'},
  {title:'Triva Sundays', start:new Date(2018,11,23), end:new Date(2018,11,23), bikes:false, cars:false, time:'7pm'},
  {title:'Gm and Corvetts', start:new Date(2018,11,26), end:new Date(2018,11,26), bikes:false, cars:true, time:'6pm'},
  {title:'Humble Society Meet', start:new Date(2018,11,26), end:new Date(2018,11,26), bikes:false, cars:false, time:'6pm'},
  {title:'Bike Night', start:new Date(2018,11,27), end:new Date(2018,11,27), bikes:true, cars:false, time:'7pm'},
  {title:'Downtown Truck Show', start:new Date(2018,11,28), end:new Date(2018,11,28), bikes:false, cars:true, time:'6pm'},
  {title:'Blues & Bourbon with Miles Minor Band', start:new Date(2018,11,29), end:new Date(2018,11,29), bikes:false, cars:false, time:'8:30pm'}
];

function Event({event}){
  return(
    <span>
      <strong className='eventTitle'>{event.title}</strong>
       <br/>
      <small className='eventTime'>{event.time}</small>
    </span>
  )
}

class CustomToolbar extends Component{
  render(){
    let {localizer:{message},label} = this.props;
    return(
      <div className='rbc-toolbar'>
        <span className='rbc-btn-group'>
          <button type='button' onClick={this.navigate.bind(null, navigate.PREVIOUS)} className='icon'><i className='fas fa-chevron-left'></i></button>
        </span>
        <span className='rbc-toolbar-label'>{label}</span>
        <span className='rbc-btn-group'>
          <button className='icon' type='button' onClick={this.navigate.bind(null, navigate.NEXT)}><i className='fas fa-chevron-right'></i></button>
        </span>
      </div>
    )
  }
  navigate = action =>{
    this.props.onNavigate(action)
  }
}

const Calendar = props =>(
  <div>
    <BigCalendar localizer={localizer} events={events} popup startAccessor='start' endAccessor='end' className={props.calendarIsOpen ? 'open' : ''} components={{event:Event, toolbar:CustomToolbar}} style={{height:'110vh',marginLeft:'40px',marginTop:'20px', marginRight:'30px'}} eventPropGetter={(event,start,end, isSelected) =>{let newStyle = {backgroundColor:'#e53935', color:'white'}; if(event.cars){newStyle.backgroundColor='#43a047'}if(event.bikes){newStyle.backgroundColor='#1e88e5'} return{className:'',style:newStyle}}}/>
  </div>
)

export default Calendar;
