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
        <CommentDetail author={faker.name.firstName()} timeAgo="Today at 11:30AM" content="Thanks for your help" avatar={faker.image.avatar()} /> {/* child */}
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author={faker.name.firstName()} timeAgo="Today at 1:30PM" content="Great Work" avatar={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author={faker.name.firstName()} timeAgo="Yesterday at 12:00PM" content="Amazing work" avatar={faker.image.avatar()}  />
      </ApprovalCard>
    </div>
  );
};
 
ReactDOM.render(<App />, document.querySelector('#root'))