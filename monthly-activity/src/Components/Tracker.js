import React from 'react';

class Tracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let arr = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ];

 


    let str = '';
    str += new Date();
    let value = str.split(' ')[1];
    return (
      <>
        <section className='section'>
          <div className='box-30'>
            <h2 className='heading'>
              {this.props.data} <br></br> {value}
            </h2>
          </div>
          <div className='box-60'>
            <div className='span'>
              <span
                className='span'
                onClick={() => this.props.clickFn(this.props.index)}
              >
                ❌{' '}
              </span>
            </div>
            <div className='list'>
              {arr.map((elm) => {
                return (
                  <li
                    key={elm}
                    className='list-item'
                    id={this.props.date.includes(elm)? "active" : ""}
                    onClick={() => this.props.add(elm)}
                  >
                    {elm}{' '}
                  </li>
                );
              })}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Tracker;
