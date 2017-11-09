let local = {}

function editHelper(e){
console.log('edit method lib helper has been fired');
  if(e.target.name === 'name')        { local.name=e.target.value; }
  if(e.target.name === 'user')        { local.user=e.target.value; }
  if(e.target.name === 'itemstatus')  { local.itemstatus=e.target.value; }
  if(e.target.name === 'description') { local.description=e.target.value; }
  if(e.target.name === 'price')       { local.price=e.target.value; }
  if(e.target.name === 'category')    { local.category=e.target.value; }
  if(e.target.name === 'condition')   { local.condition=e.target.value; }
  if(e.target.name === 'manfucturer') { local.manfucturer=e.target.value; }
  if(e.target.name === 'model')       { local.model=e.target.value; }
  if(e.target.name === 'dimensions')  { local.dimensions=e.target.value; }
  if(e.target.name === 'notes')       { local.notes=e.target.value; }
  console.log(local)
  return local

}

export default editHelper;

