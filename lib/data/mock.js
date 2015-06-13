function makeStory(location,status,time,text){
  return {
    location:location,
    status:status,
    time:time,
    text:text
  }
}

function makeObject(positiveStoryCount,negativeStoryCount,location,stories){
  return{
    pos:positiveStoryCount,
    neg:negativeStoryCount,
    location:location,
    stories:stories
  }
}


var data={};


data.overview={};
data.objects={};
data.stories={};

data.objects[1]=makeObject(1,2,"here",[1,2,3,4,5])
data.objects[2]=makeObject(11,2,"here",[1,2,3,4,5])
data.objects[3]=makeObject(1111,2,"here",[1,2,3,4,5])
data.objects[4]=makeObject(111111,2,"here",[1,2,3,4,5])
data.objects[5]=makeObject(1,22222,"here",[1,2,3,4,5])


data.objectsList=[1,2,3,4,5];



data.stories[1]=makeStory("somewhere1","POS","time","this is a story of some sort1");
data.stories[2]=makeStory("somewhere2","POS","time","this is a story of some sort2");
data.stories[3]=makeStory("somewhere3","POS","time","this is a story of some sort3");
data.stories[4]=makeStory("somewhere4","POS","time","this is a story of some sort4");
data.stories[5]=makeStory("somewhere5","POS","time","this is a story of some sort5");








module.exports=data;



