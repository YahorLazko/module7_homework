function objProp (obj) {
  for (let key in obj) {  
      if (obj.hasOwnProperty(key)) {      
          console.log(key, obj[key]);
      }   
  }      
};

/*
let user = {
  name: "John",
  age: 30
};
*/
objProp(user);