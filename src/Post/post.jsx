import React from "react";
import { FiHeart } from 'react-icons/fi';
import { FaRegComment, FaRegPaperPlane, FaRegBookmark } from 'react-icons/fa';

const Post = () => {
  return (
    <div>
      {/* Post 1 */}
      <div className="postWrapper">
        <div className="postHeader">
          <img
            className="postinforimg"
            src="https://i.pinimg.com/236x/e1/64/ff/e164ff11754d2f89a9a3c01b4b4a0f6e.jpg"
            alt="img"
          />
          <div className="postinforusername">Angel</div>
          <div className="timinginfor">. 36 min</div>
        </div>

        <div className="postimg">
          <img
            className="postimage"
            src="https://i.pinimg.com/736x/e5/02/62/e502624d40c8022be544c0fb814dd989.jpg"
            alt=""
          />
        </div>

        <div className="IconBlock">
          <div className="lefticon">
            <FiHeart style={{ fontSize: '25px' }} />
            <FaRegComment style={{ fontSize: '24px', marginLeft: '10px' }} />
            <FaRegPaperPlane style={{ fontSize: '24px', marginLeft: '10px' }} />
          </div>
          <FaRegBookmark style={{ fontSize: '24px' }} />
        </div>

        <div className="likeSection">
          <div className="imagesLike">
            <img
              className="likeimg"
              src="https://i.pinimg.com/564x/9a/4b/8b/9a4b8b6d4369ef5e5bbc9bc3451de664.jpg"
              alt=""
            />
            <img
              className="likeimg2"
              src="https://i.pinimg.com/736x/33/eb/36/33eb36fcf1e0887b8e9b86ef6002706e.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="noOfLikes">112,456 Likes</div>

        <div className="postAbout">
          <div className="postAboutName">Angel</div>
          <div className="infocomment">What a day to be alive...!</div>
        </div>

        <div className="noofComments">View All 446 Comments</div>
        <div className="AddComment">Add a comment...</div>
      </div>

      {/* Post 2 */}
      <div className="postWrapper">
        <div className="postHeader">
          <img
            className="postinforimg"
            src="https://i.pinimg.com/236x/e1/64/ff/e164ff11754d2f89a9a3c01b4b4a0f6e.jpg"
            alt="img"
          />
          <div className="postinforusername">Angel</div>
          <div className="timinginfor">. 36 min</div>
        </div>

        <div className="postimg">
          <img
            className="postimage"
            src="https://wallpapers.com/images/hd/pinterest-pictures-kyz3uk1fnnci3l6r.jpg"
            alt=""
          />
        </div>

        <div className="IconBlock">
          <div className="lefticon">
            <FiHeart style={{ fontSize: '25px' }} />
            <FaRegComment style={{ fontSize: '24px', marginLeft: '10px' }} />
            <FaRegPaperPlane style={{ fontSize: '24px', marginLeft: '10px' }} />
          </div>
          <FaRegBookmark style={{ fontSize: '24px' }} />
        </div>

        <div className="likeSection">
          <div className="imagesLike">
            <img
              className="likeimg"
              src="https://i.pinimg.com/564x/9a/4b/8b/9a4b8b6d4369ef5e5bbc9bc3451de664.jpg"
              alt=""
            />
            <img
              className="likeimg2"
              src="https://i.pinimg.com/736x/33/eb/36/33eb36fcf1e0887b8e9b86ef6002706e.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="noOfLikes">112,456 Likes</div>

        <div className="postAbout">
          <div className="postAboutName">Angel</div>
          <div className="infocomment">What a day to be alive...!</div>
        </div>

        <div className="noofComments">View All 446 Comments</div>
        <div className="AddComment">Add a comment...</div>
      </div>

      {/* Post 3 */}
      <div className="postWrapper">
        <div className="postHeader">
          <img
            className="postinforimg"
            src="https://i.pinimg.com/236x/e1/64/ff/e164ff11754d2f89a9a3c01b4b4a0f6e.jpg"
            alt="img"
          />
          <div className="postinforusername">Angel</div>
          <div className="timinginfor">. 36 min</div>
        </div>

        <div className="postimg">
          <img
            className="postimage"
            src="https://i.pinimg.com/736x/33/eb/36/33eb36fcf1e0887b8e9b86ef6002706e.jpg"
            alt=""
          />
        </div>

        <div className="IconBlock">
          <div className="lefticon">
            <FiHeart style={{ fontSize: '25px' }} />
            <FaRegComment style={{ fontSize: '24px', marginLeft: '10px' }} />
            <FaRegPaperPlane style={{ fontSize: '24px', marginLeft: '10px' }} />
          </div>
          <FaRegBookmark style={{ fontSize: '24px' }} />
        </div>

        <div className="likeSection">
          <div className="imagesLike">
            <img
              className="likeimg"
              src="https://i.pinimg.com/564x/9a/4b/8b/9a4b8b6d4369ef5e5bbc9bc3451de664.jpg"
              alt=""
            />
            <img
              className="likeimg2"
              src="https://i.pinimg.com/736x/33/eb/36/33eb36fcf1e0887b8e9b86ef6002706e.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="noOfLikes">112,456 Likes</div>

        <div className="postAbout">
          <div className="postAboutName">Angel</div>
          <div className="infocomment">What a day to be alive...!</div>
        </div>

        <div className="noofComments">View All 446 Comments</div>
        <div className="AddComment">Add a comment...</div>
      </div>
    </div>
  );
};

export default Post;
