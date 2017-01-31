function GetNextItem(it){
  tmp = it + 1;
  url = apiurl + "event/list/" + tmp;
  //return console.log(url);
  //return url;
}

function GetPrevItem(it){
  if (it > 1) {
    tmp = it - 1;
  }
  url = apiurl + "event/list/" + tmp;
  //return console.log(url);
  //return url;
}
