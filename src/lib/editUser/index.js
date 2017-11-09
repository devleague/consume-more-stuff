let local = {}

function editHelper(e){
  

  if(e.target.name === 'username'){ local.username=e.target.value; }
  if(e.target.name === 'password'){ local.password=e.target.value; }
  if(e.target.name === 'email')   { local.email=e.target.value; }
  if(local.email) {
    local.userstatus='active'}
  else{local.userstatus='inactive'}

  return local

}


export default editHelper;