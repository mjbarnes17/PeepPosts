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
    type: String
  },
  username: {
    type: String
  },
  createdAt: {
    type: Date
  }
}));
