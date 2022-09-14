import React from 'react';
import Tracker from './Tracker';
class Monthly extends React.Component {
  constructor() {
    super();
    this.state = {
      activity:JSON.parse(localStorage.getItem('list'))|| [],
    };
  }

  handleAdd = (e, elm, task) => {
    let act = [...this.state.activity];

    act?.map((item) => {
      if (item.task === task) {
        if (item.dates?.includes(elm)) {
          let ind = item.dates.findIndex((date) => date == elm);
          let newDates = item.dates.splice(ind, 1);
        } else {
          item.dates.push(elm);
        }
      }
    });

    this.setState((prevState) => ({
      activity: [...act],
    }));
    localStorage.setItem('list', JSON.stringify([...act]))
  };

  handleChange = (e) => {
    let { name, value } = e.target;
    if (e.keyCode === 13) {
      let act = [...this.state.activity];
      act.push({ task: value, dates: [] });

      this.setState({
        activity: [...act],
      });
      e.target.value = '';
      localStorage.setItem('list', JSON.stringify([...act]))
    }
   
  };

  handleClick =async (i) => {
    let c = this.state.activity.splice(i, 1);

   await  this.setState({
      activity: this.state.activity,
    });
    
    localStorage.setItem('list', JSON.stringify(this.state.activity))
  };

  render() {
    return (
      <>
        <div className='input-div'>
          <input
            className='input'
            type='text'
            name='task'
            value={this.state.activity?.task}
            onKeyUp={(e) => this.handleChange(e)}
            placeholder='Enter Task'
          />
          <input className='submit' type='submit' value='Add Activity' />
        </div>
        {this.state.activity?.map((elm, i, arr) =>
          arr.length >= 0 ? (
            <Tracker
              data={elm}
              clickFn={this.handleClick}
              index={i}
              add={this.handleAdd}
            />
          ) : (
            ''
          )
        )}
      </>
    );
  }
}

export default Monthly;
