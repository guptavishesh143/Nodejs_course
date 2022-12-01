const userRoles = {
    "default": ['teamPerformance', 'taskTab', 'insights', 'abc'],
    "Admin-IN": ['teamPerformance', 'taskTab', 'insights','areas'],
    'Store- Executive' : ['No role found']
  };
  
  
  const roles = ['default', 'Admin-IN' , 'Store- Executive'];
  
  
  let newArr = []
  roles.map((ele)=> {
      newArr = [...newArr,...userRoles[ele]]
  })
  
  // console.log(new Set(newArr))
  
  const roleData = new Set(newArr)
  
  module.exports = roleData;