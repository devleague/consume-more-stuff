function filterUserStatus(arr,query){
  const data = arr.filter((elem) => {
  return elem.userstatus === query;  
});
  return data;
}


export default filterUserStatus;