import React, { useState } from 'react';

function App() {
  // State to store the post
  const [post, setPost] = useState('');
  // State to control the edit mode and store the edited post
  const [isEditing, setIsEditing] = useState(false);
  const [editedPost, setEditedPost] = useState('');

  const handleCreatePost = (event) => {
    event.preventDefault();
    // Create post and exit edit mode
    setPost(editedPost);
    setIsEditing(false);
    setEditedPost('');
  };

  const handleEditClick = () => {
    setEditedPost(post);
    setIsEditing(true);
  };

  const handleEditChange = (event) => {
    setEditedPost(event.target.value);
  };

  const handleSaveClick = () => {
    setPost(editedPost);
    setIsEditing(false);
  };

  return (
    <div>
      {/* Form for creating a new post */}
      {!isEditing && !post && (
        <form onSubmit={handleCreatePost}>
          <input
            type="text"
            placeholder="Create a post"
            value={editedPost}
            onChange={handleEditChange}
          />
          <button type="submit">Create Post</button>
        </form>
      )}

      {/* Display post and edit option */}
      {post && !isEditing && (
        <div>
          <p>Post: {post}</p>
          <button onClick={handleEditClick}>Edit Post</button>
        </div>
      )}

      {/* Editing form */}
      {isEditing && (
        <div>
          <input
            type="text"
            value={editedPost}
            onChange={handleEditChange}
          />
          <button onClick={handleSaveClick}>Save Changes</button>
        </div>
      )}
    </div>
  );
}

export default App;

