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
}
//*****breaks compile*****
// else {
//   alert("Meteor is not Client :(");
// }
