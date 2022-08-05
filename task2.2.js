function searForAnObjProp (str ,obj) {
  for (let key in obj) {
      if (key==str) {
          console.log(`true`);
      }
    else{console.log('false');
        }
  }      
};

/*
let user = {
name: "John",
age: 30
};
*/

searForAnObjProp('age', user);