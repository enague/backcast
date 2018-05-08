var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.render();
  },


  render: function() {
   
     console.log(this.$el)
    this.$el.html(this.template())
   
    return this.$el;
  },

  template: templateURL('src/templates/app.html')

});
