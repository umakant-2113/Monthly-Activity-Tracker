import React from 'react';

class Tracker extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    function getDaysInMonth(year, month) {
      return new Date(year, month, 0).getDate();
    }
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth() + 1;
    const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth);

    let arr = [];
    for (let i = 1; daysInCurrentMonth >= i; i++) {
      arr.push(i);
    }

    let str = '';
    str += new Date();
    let value = str.split(' ')[1];

    let { data, index, add, clickFn } = this.props;

    return (
      <>
        <section className='section'>
          <div className='box-30'>
            <h2 className='heading'>
              {data.task} <br />
              <br /> {value}
            </h2>
          </div>
          <div className='box-60'>
            <div className='span'>
              <span className='span' onClick={() => clickFn(index)}>
                ❌{' '}
              </span>
            </div>
            <div className='list'>
              {arr.map((elm) => {
                return (
                  <li
                    key={elm}
                    className='list-item'
                    id={data.dates?.includes(elm) ? 'active' : ' '}
                    onClick={(e) => add(e, elm, data.task ) }
                  >
                    {elm}
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
