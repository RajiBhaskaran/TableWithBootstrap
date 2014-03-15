window.Joke = Backbone.Model.extend({
  defaults: {
    id: 1,
    joke: '',
    categories: []
  }
});

window.JokeCollection = Backbone.Collection.extend({
  model: Joke,
  url: "http://api.icndb.com/jokes/random?limitTo=[nerdy]",
  listJokes: function (cb) {
    var self = this;
    for (var i = 0; i < 100; i++) {
      $.ajax({
        url: self.url,
        async: true,
        cache:false,
        dataType: "json",
        success: function (data) {
          self.models.push(new Joke(data.value));
          if (self.models.length == 100)
            cb(self);
        }
      });
    }
  }
});