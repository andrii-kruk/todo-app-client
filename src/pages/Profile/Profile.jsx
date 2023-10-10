const Profile = () => {
  return (
    <section>
      <div class="user-profile">
        <h2>User Profile</h2>
        <div class="profile-info">
          <p>
            <strong>Email:</strong> user@example.com
          </p>
          <p>
            <strong>ID:</strong> 123456789
          </p>
          <p>
            <strong>Name:</strong> John Doe
          </p>
          <p>
            <strong>Nickname:</strong> johndoe123
          </p>
        </div>
        <div class="profile-actions">
          <button class="edit-profile-btn">Edit Profile</button>
          <button class="change-password-btn">Change Password</button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
