var VideoListView = Backbone.View.extend({
  
  el:'#app',
 initialize: function() {
    this.videoListView = new VideoListView();
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(this.render, this);
    
    
    return this.$el;
  },

  template: templateURL('src/templates/videoList.html')

});
