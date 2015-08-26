// Profile Images Collection
ProfileImages = new FS.Collection('ProfileImages', {
  stores: [new FS.Store.GridFS('ProfileImages')]
});

// User Images Collection
UserImages = new Mongo.Collection("UserImages");

// Posts Collection
Posts = new Mongo.Collection("posts");

// Posts schema
Posts.attachSchema(new SimpleSchema({
  body : {
    type: String,
    max: 600
  },
  userId: {
    type: String,
    autoValue: function() {
      return Meteor.userId();
    }
  },
  username: {
    type: String,
    autoValue: function() {
      return Meteor.users.findOne({_id: this.userId}).username;
    }
  },
  createdAt: {
    type: Date,
    autoValue: function() {
      return new Date();
    }
  }
}));
