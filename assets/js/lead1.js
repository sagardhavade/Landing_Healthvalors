



function lead1(){
    var form = document.getElementById('form1')
    form.addEventListener('submit',function(e){
        e.preventDefault()

        // var user=document.getElementById('user').value
        // var pass=document.getElementById('pass').value
        var name=document.getElementById('name1').value
        var email=document.getElementById('email1').value
        var phone=document.getElementById('phone1').value
       // var address=document.getElementById('address').value
        var requirement=document.getElementById('requirement1').value



        const params ={
            name:name,
                email:email,
                phone:phone,
             //   address:address,
                requirement:requirement,
                // name:'sss',
                // email:'e@gmail.com',
                // phone:'1234567896',
                address:'NULL'
                // requirement:'requirement'
        }

        // fetch("https://jsonplaceholder.typicode.com/posts",{
            let url = `https://sales.triocorporation.in/api/Leads/Website?user=Website&pass=WebsiteAPI&name=${params.name}&phone=${params.phone}&email=${params.email}&address=${params.address}&requirement=${params.requirement}`
           fetch(url,{
//fetch("https://sales.triocorporation.in/api/Leads/Website?user=Website&pass=WebsiteAPI&name=name&phone=phone&email=email&address=address&requirement=requirement",{
              mode: 'no-cors',
                method:'POST',
              // body: JSON.stringify(data),
           // body:JSON.stringify({
            //     // user:user,
            //     // pass:pass,
            //     name:name,
            //     email:email,
            //     phone:phone,
            //     address:address,
            //     requirement:requirement
            // }),
            // headers:{
            //     "Content-type": "application/json; charset=UTF-8"
            // }
       })
        // .then(function(response){
        //     return response.json()
        // })
        // .then(function(data){
        //     console.log(data)
        // })
        
        .then((response) => {
        // *** Check for HTTP failure
        if (!response.ok) {
            throw new Error("HTTP status " + response.status);
        }
        // *** Read the text of the response
        return response.text();
    })
    .then((message) => {
        // *** Use the text
        alert(message);
    })
    .catch((error) => {
        /* ...*** handle/report error, since this code doesn't return the promise chain...*/
    });
    form.reset() 
    })
    
}