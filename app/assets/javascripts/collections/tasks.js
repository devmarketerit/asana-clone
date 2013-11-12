Breath.Collections.Tasks = Backbone.Collection.extend({
  model:  Breath.Models.Task,
  url:    '/api/tasks',
  comparator: function(task){
    var due = task.get('due') || "999999999999999999999999999999999"
    if (this.sortByDueDate){
      return [task.get('completed'),  due]
    } else{
      return [task.get('completed'), task.get('starred') * -1, task.get('order'),  due]
    }
  },

  searchTasks: function(term){
    var searchTerm = new RegExp(".*" + term + ".*", 'i');
    var filtered = this.filter(function(model){
      if (model.get('description')){
        return model.get('name').match(searchTerm) || 
               model.get('description').match(searchTerm);
      } else { return model.get('name').match(searchTerm) }
    });
    return new Breath.Collections.Tasks(filtered);
  }
})
