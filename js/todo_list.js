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
        todos: [],
        showLists: true
      },
      methods: {
        entered: function(event) {
          var $data, $forms, $showLists, $todos, self;
          self = this;
          $data = self.$data;
          $forms = $data.forms;
          $todos = $data.todos;
          $showLists = $data.showLists;
          if ($showLists) {
            $showLists = false;
          }
          console.log($forms.inputTitle);
          console.log($showLists);
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
