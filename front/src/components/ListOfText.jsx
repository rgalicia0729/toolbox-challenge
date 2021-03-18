import React from 'react';
import { connect } from 'react-redux';

import InputOfText from './InputOfText';

const ListOfText = ({ palindrome }) => {
  return (
    <div className="row">
      <div className="col-md-2" />
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            {
              palindrome.texts.map((text) => (
                <InputOfText key={text.text} {...text} />
              ))
            }
          </div>
        </div>
      </div>
      <div className="col-md-2" />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    palindrome: state.palindrome
  }
}

export default connect(mapStateToProps, null)(ListOfText);
