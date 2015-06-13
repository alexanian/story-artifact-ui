var data=require('./mock.js')


var m={};
m.getOverview=function(){

  return data.objectsList;
};

m.getObject=function(objectId){

  return data.objects[objectId]||"no story"
};

m.getStory=function(storyId){
  return data.stories[storyId]||"no story"
};

module.exports=m;