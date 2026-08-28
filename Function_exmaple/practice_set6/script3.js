
let arr1 = [1 , 2, 3, 4, 5];

arr1.forEach(function(value){
    console.log("Square: "+value * value)
})

// Now using arrow way

arr1.forEach((value)=>{
        console.log("With Arror Square: "+value * value)

})