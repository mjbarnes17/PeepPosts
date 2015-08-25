Template.profile.events({
  // Template profile on submit will grab the the element with the class edit-profile
  'submit .edit-profile': function(event) {
    // sets file to the #profileImage file in th first form field
    var file = $('#profileImage').get(0).files[0];

    // if file is present
    if (file) {
      // create
      fasFile = new FS.File(file);

      ProfileImages.insert(fasFile, function(err, result) {
        if (err) {
          // Throws an error if err is true
          throw new Meteor.Error(err);
        } else {
          // Sets imageLoc to the url of image location
          var imageLoc = '/cfs/files/ProfileImages/' + result._id;

          // Inserts the following properties into UserImages
          UserImages.insert({
            userId: Meteor.userId(),
            username: Meteor.user().username,
            image: imageLoc
          });

          // After insert go to home '/'
          Router.go('/');
        }
      });
    }

    return false;
  }
});
