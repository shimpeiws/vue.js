(function() {
  $(function() {
    var demo;
    demo = new Vue({
      el: '#demo',
      data: {
        title: 'todos',
        todos: [
          {
            done: true,
            content: 'Learn JavaScript'
          }, {
            done: false,
            content: 'Learn vue.js'
          }
        ]
      }
    });
  });

}).call(this);
