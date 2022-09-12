import React from 'react';
import Tracker from './Tracker';
class Monthly extends React.Component {
  constructor() {
    super();
    this.state = {
      date: '',
      activity: [],
      activeDate: [],
    };
  }

  handleAdd = (elm) => {
    this.setState((prevstate) => {
      
      if (prevstate.activeDate.includes(elm)) {

        let ind = this.state.activeDate.findIndex((t) => t === elm);

        this.state.activeDate.splice(ind, 1);
      } else {
        this.state.activeDate.push(elm);
      }
      return { activeDate: this.state.activeDate };
    });

  };

  handleChange = ({ target }) => {
    let { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      activity: this.state.activity.concat(this.state.date),
      date: '',
    });
  };

  handleClick = (i) => {
    let c = this.state.activity.splice(i, 1);
    this.setState({
      activity: this.state.activity,
    });
  };

  render() {
    // console.log(this.state.activeDate);
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className='input-div'>
            <input
              className='input'
              type='text'
              name='date'
              value={this.state.date}
              onChange={(e) => this.handleChange(e)}
              placeholder='Enter date'
            />
            <input className='submit' type='submit' value='Submit' />
          </div>
          {this.state.activity.map((elm, i, arr) =>
            arr.length >= 0 ? (
              <Tracker
                data={elm}
                clickFn={this.handleClick}
                index={i}
                add={this.handleAdd}
                date={this.state.activeDate}
              />
            ) : (
              ''
            )
          )}
        </form>
      </>
    );
  }
}

export default Monthly;
