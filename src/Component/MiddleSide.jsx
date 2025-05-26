import React from 'react';
import './MiddleSide.css';
import Post from '../Post/post'; // Adjust path if Post.js is in a different folder
import storyData from '../story.json';


const MiddleSide = () => {
  const stories = storyData.story;

  return (
 <div className="middleHomeside">
  <div className="storyBlock">
    {stories?.map((item, index) => (
      <div className="storyPartcircular" key={index}>
        <div className="image">
          <img className="statusImg" src={item.img} alt={item.name} />
        </div>
        <div className="profilename">{item.name}</div>
      </div>
    ))}
   </div>

      <div className="postSection">
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default MiddleSide;