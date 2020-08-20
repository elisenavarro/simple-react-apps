import React, { Component }from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchStream, updateStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamUpdate extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.updateStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading Video Streams...</div>;
    }

    return (
      <div>
        <h3>Edit a Video Stream</h3>
        <StreamForm
          // initialValues available via ReduxForm
          // _.pick via lodash, return new obj with selected props
          initialValues={_.pick(this.props.stream, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream, updateStream }
)(StreamUpdate);