var data=require('./mock.js')
var _=require('lodash');

var m={};
m.getOverview=function(){

  return data.overview;


};

m.getObject=function(objectId){
  return data.objects[objectId]
};

m.getStory=function(storyId){
  return data.stories[storyId]
};

module.exports=m;