import React from 'react';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: '',
      view: [],
    };
  }

  render() {
    return (
      <form>
        <div className="form-group">
        <label className="">Input</label>
        <input
          className='form-control input'
          type='text'
          required
          maxLength='29'
        />
        <small className="form-text text-muted">Prepare to be Sortinated</small>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

export default Form;