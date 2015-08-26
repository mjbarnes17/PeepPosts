// Subscription to all posts for server
Meteor.subscribe("posts");

// Subscription to all profile images for server
Meteor.subscribe("ProfileImages");

// Subscription to all user images for server
Meteor.subscribe("UserImages");

Meteor.startup(function () {
    AccountsEntry.config({
      homeRoute: '/',                    // mandatory - path to redirect to after sign-out
      dashboardRoute: '/',                // mandatory - path to redirect to after successful sign-in
      passwordSignupFields: 'USERNAME_AND_EMAIL'
  });

  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
  });
});

// Global Template function for Pofile image
Template.registerHelper('getProfileImage', function(userId) {
  // Sets imgUrl to the matched userId image found in DB
  var imgUrl = UserImages.findOne({userId: userId}).image;
  // returns the found image
  return imgUrl;
});
