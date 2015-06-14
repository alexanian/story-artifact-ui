
function query(url,data){
  var temp=Promise.defer()
  $.ajax({
    type:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    url:url,
    data:JSON.stringify(data),
    success:function(data){temp.resolve(data)}
  });
  return temp.promise
};


function geturl(){
  return location.hash.slice(1)
}