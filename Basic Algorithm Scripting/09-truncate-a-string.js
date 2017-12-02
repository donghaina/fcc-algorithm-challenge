function truncate(str, num) {
  if(num<=3){
    return str.substr(0,num) + "...";
  }else{
    if(str.length>num){
      return str.substr(0,num-3) + "...";
    }else{
      return str;
    }
  }
}

truncate("A-tisket a-tasket A green and yellow basket", 11);

