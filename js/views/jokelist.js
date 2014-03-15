window.JokeTableView = Backbone.View.extend({
  tagName: 'table',
  className: 'table table-striped table-bordered',
  render: function () {
    $(this.el).empty();
    $(this.el).html(this.template());
    _.each(this.model.models, function (joke) {
      $(this.el).append(new JokeItemView({model: joke}).render().el);
    }, this);
    return this;
  }
});
window.JokeItemView = Backbone.View.extend({
  tagName: "tr",
  className: "row",
  render: function () {
    $(this.el).html(this.template(this.model.toJSON()));
    return this;
  }
});