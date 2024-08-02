let arr = [1,2,3,4,5]
arr= arr.map((n)=>n*3)
console.log(arr)

let users=[
  {firstName : 'Susan', lastName : 'Steward'},
  {firstName : 'Daniel', lastName : 'Longbottom'},
  {firstName : 'Jacob', lastName : 'Black'},
];
let userFullnames = users.map((i)=>{
  return `${i.firstName} ${i.lastName}`
})
console.log(userFullnames)