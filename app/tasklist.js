/**
 * Created by matthew on 10/9/2016.
 */
Tasks = new Mongo.Collection('tasks');

if (Meteor.isClient) {
  // alert("Meteor is Client");
  Template.tasks.helpers({
    tasks: function(){
      return Tasks.find({}, {sort: {createdAt: -1}});
    }
  });
    

  Template.tasks.events({
    "submit .add-task": function(event){
      let name = event.target.name.value;
      console.log(name);

      return false;
    }
  });
}
//*****breaks compile*****
// else {
//   alert("Meteor is not Client :(");
// }
