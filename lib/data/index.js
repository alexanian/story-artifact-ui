var data=require('./mock.js')
var _=require('lodash');

var m={};
m.getOverview=function(){

  return data.overview;


};

m.getObject=function(objectId){

  return data.objects[objectId]||"no story"
};

m.getStory=function(storyId){
  return data.stories[storyId]||"no story"
};

module.exports=m;