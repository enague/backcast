var VideoPlayerView = Backbone.View.extend({
  el:'#app' ,
  initialize: function() {
    this.VideoPlayerView = new VideoPlayerView();
    this.render();
  },

  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');
    return this.$el;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
