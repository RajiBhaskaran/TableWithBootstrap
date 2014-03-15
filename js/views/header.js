window.HeaderView = Backbone.View.extend({
  initialize: function (results) {
    this.jokeResults = results;
  },
  render: function () {
    $(this.el).html(this.template());
    $(this.el).append(new JokeTableView({model: this.jokeResults}).render().el);
    this.$('table').dataTable({
      "iDisplayLength": 10,
      "aaSorting": [
        [0, 'asc'],
        [1, 'asc'],
        [2, 'asc']
      ],
      "bPaginate": true,
      "bSort": true,
      "bFilter": true
    });
    $('#loader').hide();
    return this;
  }
});