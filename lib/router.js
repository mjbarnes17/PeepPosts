// Configuring the layout template
Router.configure({
  layoutTempalte: 'layout'
});

Router.map(function() {
  // Posts route
  this.route('posts', {
    path: '/',
    template: 'posts'
  });
});
