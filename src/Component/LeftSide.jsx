import React from 'react';
import './LeftSide.css';
import { FaPlusSquare } from 'react-icons/fa';
import { BsHouseDoor } from 'react-icons/bs'; // ❌ Not used
import { FaCompass, FaFacebookMessenger, FaFilm, FaHome, FaPaperPlane, FaSearch } from 'react-icons/fa';       // Font Awesome Home icon
import { FaRegHeart } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import profileImg from '../assests/profilepic.png';
import { FaCommentAlt } from 'react-icons/fa';
import { FaEllipsisH } from 'react-icons/fa';

const LeftSide = () => {
  return (
    <div className="leftsidePart">
      <div className="logoPart">
        <img className="logoImg"
          src="https://logos-world.net/wp-content/uploads/2020/05/Instagram-Logo-2016-present.png"
          alt="Instagram logo"
        />
      </div>
         <div className="navLinkPart">
      <div className="navLink">
        <FaHome className="navIcon" /> 
        <div className="navName">Home</div>
      </div>
        <div className="navLinkPart">
      <div className="navLink">
        <FaSearch className="navIcon" /> 
        <div className="navName">Search</div>
        </div>
        <div className="navLinkPart">
      <div className="navLink">
        <FaCompass className="navIcon" /> 
        <div className="navName">Explore</div>
        </div>
        </div>
        <div className="navLinkPart">
      <div className="navLink">
        <FaFilm className="navIcon" /> 
        <div className="navName">Reels</div>
        </div>
        <div className="navLinkPart">
      <div className="navLink">
        <FaPaperPlane className="navIcon" /> 
        <div className="navName">Messages</div>
        </div>
    </div>
    <div className="navLinkPart">
      <div className="navLink">
        < FaRegHeart className="navIcon" /> 
        <div className="navName">Notification</div>
      </div>
    </div>
      <div className="navLinkPart">
      <div className="navLink">
        <FaPlusSquare className="navIcon" />
        <div className="navName">Create</div>
      </div>
    </div>
       <div className="navLinkPart">
      <div className="navLink">
        <img className="profileImg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEn_XrZ77ZvvNuJ3JYWTfz2XZ-mRlGlSJ4Ew&s"
          alt="profileImg" />
        <div className="navName">Profile</div>
        </div>

        <div className="belowPart">
          <div className="navLink">
        <FaCommentAlt className="navIcon" />
        <div className="navName">Threads</div>
        </div>
        </div>
          <div className="navLink">
        <FaEllipsisH className="navIcon" />
        <div className="navName">More</div>
        </div>
    </div>
    </div>
    </div>
    </div>
    </div>
   
  
  );
};

export default LeftSide;
