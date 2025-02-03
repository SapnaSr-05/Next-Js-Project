// import React from 'react';
// import './Blogs.css'; // Import the CSS file for styling

function Blogs() {
  return (
    <div className="blogsContainer">
      <h1 className="title">Recent Blogs</h1>
      <div className="framesContainer">
        <div className="frame">
          <img src="./Img/blog-1.jpg" alt="" />
          <p>The Biggest Trends in Technology<br/> We've Seen This Year</p>
        </div>
        <div className="frame">
          <img src="./Img/blog-2.jpg" alt="" />
          <p>Why We Love Technology (And You<br/> Should, Too!)</p>
        </div>
        <div className="frame">
          <img src="./Img/blog-3.jpg" alt="" />
          <p>The 17 Most Misunderstood Facts<br/> About Technology</p>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
