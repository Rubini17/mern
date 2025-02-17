array= [1,2,3,4,5,6];
obj1= {
    "name":"jakkk",
    "age":18,
    "class":"cse-c",
    "sub":["eng","math","sci"]
}
//FOR IN
/*
for(i in array)
{
    console.log(array[i]);
}
*/
//FOR OF
/*
for(i of array)
    {
        console.log(i);
    }
*/
//FOR IN FOR OBJECT
/*
for(i in obj1)
    {
        console.log(i);
    }
*/
//FOR OF FOR OBJECT  //error
/*
for(i of obj1)
 {
     console.log(obj1[i]);
        }
     */
for({key, values} of Object.entries(obj1))
{
    console.log(key, values);
}