var _=require('lodash');
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

function makeLocation(location, mapCoordinateX, mapCoordinateY) {
  return{
    location:location,
    x:mapCoordinateX,
    y:mapCoordinateY
  }
}


var data={};


data.overview={};
data.staticLocations={};
data.objects={};
data.stories={};

data.staticLocations["Waiting Room 1"]=makeLocation("Waiting Room 1", 0.4, 0.5)
data.staticLocations["Waiting Room 3"]=makeLocation("Waiting Room 3", 0.6, 0.7)
data.staticLocations["Conference Hall"]=makeLocation("Conference Hall", 0.10, 0.2)
data.staticLocations["Operation Hall"]=makeLocation("Operation Hall", 0.3, 0.10)

data.objects[0]=makeObject(1,2,"Waiting Room 1",[0,1,2,3,4]);
data.objects[1]=makeObject(11,2,"Waiting Room 3",[0,1,2,3,4]);
data.objects[2]=makeObject(1111,2,"Conference Hall",[0,1,2,3,4]);
data.objects[3]=makeObject(111111,2,"Operation Hall",[0,1,2,3,4]);
data.objects[4]=makeObject(1,22222,"Operation Hall",[0,1,2,3,4]);


data.stories[0]=makeStory("Waiting Room 3","POS","time","this is a story of some sort1");
data.stories[1]=makeStory("Waiting Room 3","POS","time","this is a story of some sort2");
data.stories[2]=makeStory("Waiting Room 3","NEG","time","this is a story of some sort3");
data.stories[3]=makeStory("Waiting Room 3","NEG","time","this is a story of some sort4");
data.stories[4]=makeStory("Waiting Room 3","POS","time","this is a story of some sort5");


//Overview contains all objects and static locations
data.overview=[];

_.forEach(data.objects,function(obj){
  var temp= _.cloneDeep(obj);
  temp.x=data.staticLocations[temp.location].x;
  temp.y=data.staticLocations[temp.location].y;

  data.overview.push(temp);
});

module.exports=data;



