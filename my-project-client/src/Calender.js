import React from 'react'

export default class Calender extends React.Component {

  render() {

    return (
        <>
        <label htmlFor="start"> Calender: </label>
        <input
        type="date"
        id="start"
        name="trip-start"
       value={this.props.dateSelected}
       min="2018-01-01"
       max="2020-07-07"
       onChange={e => this.props.handleDateChange(e)}
    >
       </input>
        </>
    )
  }
}