(function() {
  $(function() {
    var viewModel;
    viewModel = new Vue({
      el: '#todoapp',
      data: {
        title: 'todos',
        forms: {
          inputTitle: ''
        },
        todos: [
          {
            done: false,
            content: 'Learn JavaScript'
          }
        ]
      },
      methods: {
        entered: function(event) {
          var $data, $forms, $todos, self;
          self = this;
          $data = self.$data;
          $forms = $data.forms;
          $todos = $data.todos;
          console.log($forms.inputTitle);
          $todos = $todos.push({
            done: false,
            content: $forms.inputTitle
          });
          $forms.inputTitle = '';
        }
      }
    });
  });

}).call(this);
