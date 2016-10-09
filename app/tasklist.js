/**
 * Created by matthew on 10/9/2016.
 */
Tasks = new Mongo.Collection('tasks');

if (Meteor.isClient) {
  Template.tasks.helpers({
    tasks: function(){
      return tasks.find({}, {sort: {createdAt: -1}});
    }
  });
}
