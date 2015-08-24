// Configuring the layout template
Router.configure({
  layoutTempalte: 'layout'
});

Fouter.map(function() {
  // Posts routes
  this.route('posts', {
    path: '/',
    template: 'posts'
  });
});
