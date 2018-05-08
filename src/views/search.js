var SearchView = Backbone.View.extend({
  
  el: '#app',

  initialize: function() {
    this.searchView = new SearchView();
    this.render();
  },


  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/search.html')

});
