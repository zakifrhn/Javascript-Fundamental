let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    hobby: "Reading",
    address: 
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    }

    //name, email, hobby ada di dalam objek, bukan di dalam array, 
    //strett, city ada di dlm objek dalam objek
const  dataCopy =  {...data}
dataCopy.name = 'Zaki Farhan'
dataCopy.email = 'farhan08432@gmail.com'
dataCopy.hobby = 'Badminton'
console.log(`name: ${dataCopy.name}, my email: ${dataCopy.email}, and my hobby: ${dataCopy.hobby} `) // hasil: name: Zaki Farhan, my email: farhan08432@gmail.com, and my hobby: Badminton 
const {address} = data
const {street, city} = address;
console.log(`${street}, ${city}`)
    