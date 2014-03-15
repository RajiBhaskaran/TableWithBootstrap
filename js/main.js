window.Router = Backbone.Router.extend({
  initialize: function () {
    var jokeResults = new JokeCollection();
    jokeResults.listJokes(function (data) {
      this.headerView = new HeaderView(data);
      $('.header').html(this.headerView.render().el);
    });
  }
});

templateLoader.load(["HeaderView", "JokeItemView", "JokeTableView"],
  function () {
    app = new Router();
    Backbone.History.prototype.start();
  });