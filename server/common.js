// Publishing the posts form client subscription
Meteor.publish("posts", function() {
  return Posts.find();
});

// Publishing the profile images form client subscription
Meteor.publish("ProfileImages", function() {
  return ProfileImages.find();
});

// Publishing the user images form client subscription
Meteor.publish("UserImages", function() {
  return UserImages.find();
});
