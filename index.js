// Import stylesheets
import './style.css';
// let objs = {
//   extra:{data:""},
//   name:{age:""},
//   country:{state:{city:""}},
//   salary:"",
// }
// Write Javascript code!
let form = document.getElementById('extra');
let obj = {};
for (let child of form.children) {
  let name = child.name;
  let nameArr = name.split('.');
  for (let i = 0; i < nameArr.length; i++) {
    if (i !== nameArr.length - 1 || nameArr.length === 1) {
      // console.log("here",nameArr[i+1])
      Object.defineProperty(obj, nameArr[i], {
        value: {},
      });
      if (i + 1 !== nameArr.length - 1 && nameArr[i + 1] !== undefined) {
        Object.defineProperty(obj[nameArr[i]], nameArr[i + 1], {
          value: {},
        });
      }
    } else {
      // console.log("here ==>",nameArr[i], nameArr[i - 1])
      Object.defineProperty(obj[nameArr[i - 1]], nameArr[i], {
        value: '',
      });
    }
  }
}
console.log(obj);
