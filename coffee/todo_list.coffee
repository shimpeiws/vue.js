$ ->
  viewModel = new Vue({
    el : '#todoapp'
    data : {
      title : 'todos'
      forms : {
        inputTitle : ''
      }
      todos : []
      showLists : true
    }
    methods : {
      entered : (event)->
        self = this
        $data = self.$data
        $forms = $data.forms
        $todos = $data.todos
        $showLists = $data.showLists
        $showLists = false if $showLists
        console.log($forms.inputTitle)
        console.log($showLists)
        $todos = $todos.push({
          done: false
          content: $forms.inputTitle
        })
        $forms.inputTitle = ''
        return
    }
  })
  return