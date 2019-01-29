let arr = [2,3,6,23,54,56,35,23,56,78,4,3,5,76,86,565,34,465]
let fArray = []

filterArray=(arr)=>{
for(let i = 0 ;i < arr.length; i++){
   if(arr[i] > 300){fArray.push(arr[i])}
 }
 return fArray
}
console.log(filterArray(arr))

let objArray = [{name: "john", employee: true, age: "27", weight: "234"},{name: "mike", employee: false, age: "55", weight: "184"},{name: "alex", employee: false, age: "22", weight: "192"}]

filterObj=(givenArray)=>{
  let newArr = []
    for(let i = 0; i < givenArray.length;i++){
      if(givenArray[i]["age"] > 24){ newArr.push(givenArray[i])}
    }
    return newArr
}
console.log(filterObj(objArray))
