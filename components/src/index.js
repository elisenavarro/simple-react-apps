import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
      <div className="ui container comments" style={{marginTop: 20}}>
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          <p>Are you sure you want to do this?</p>
        </div>
      </ApprovalCard>
      <ApprovalCard> {/* parent */}
        <CommentDetail author="Sam" timeAgo="Today at 3:00PM" content="Nice Blog Post" avatar={faker.image.avatar()} /> {/* child */}
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Alex" timeAgo="Today at 1:30PM" content="Great Work" avatar={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Jane"timeAgo="Yesterday at 12:00PM" content="Amazing work" avatar={faker.image.avatar()}  />
      </ApprovalCard>
    </div>
  );
};
 
ReactDOM.render(<App />, document.querySelector('#root'))