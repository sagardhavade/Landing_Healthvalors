



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
    //   window.location.href="https://triohims.com/assets/pages/ThankYou.html"; 
    //  location.href="https://triohims.com/ThankYou.html";
    })
 
}


// function lead1(){
//     var form = document.getElementById('form1')
//     form.addEventListener('submit',function(e){
//         e.preventDefault()

//         var name=document.getElementById('name1').value
//         var email=document.getElementById('email1').value
//         var phone=document.getElementById('phone1').value

//         var requirement=document.getElementById('requirement1').value



//         const params ={
//             name:name,
//                 email:email,
//                 phone:phone,
//                 requirement:requirement,
//                 address:'NULL'
             
//         }

//           let url = `https://sales.triocorporation.in/api/Leads/Website?user=Website&pass=WebsiteAPI&name=${params.name}&phone=${params.phone}&email=${params.email}&address=${params.address}&requirement=${params.requirement}`
//           fetch(url,{

//               mode: 'no-cors',
//                 method:'POST',
        
//       })
    
//         .then((response) => {
   
//         if (!response.ok) {
//             throw new Error("HTTP status " + response.status);
//         }
      
//         return response.text();
//     })
//     .then((message) => {
//         // *** Use the text
//         alert(message);
//     })
//     .catch((error) => {

//     });
//     // form.reset()
//     window.location.href="https://triohims.com/assets/pages/ThankYou.html"; 
//     })
    
// }



// function _0x16fd(_0xc5501a,_0x430780){var _0x39aaf8=_0x39aa();return _0x16fd=function(_0x16fd1f,_0x497a60){_0x16fd1f=_0x16fd1f-0x129;var _0x361985=_0x39aaf8[_0x16fd1f];return _0x361985;},_0x16fd(_0xc5501a,_0x430780);}function _0x39aa(){var _0x5a41b6=['13315vjbaQy','138138ryBZHo','name','status','NULL','141198dKFiUx','404ubyVCa','&address=','https://sales.triocorporation.in/api/Leads/Website?user=Website&pass=WebsiteAPI&name=','reset','11170qYVwKf','&email=','18lYhFeT','form1','then','711592lwlHsN','email1','1539CJTmaI','6501bWmYGr','POST','submit','value','email','HTTP\x20status\x20','phone1','requirement1','&requirement=','phone','requirement','14Gnjjax','preventDefault','301740zvzwqp','no-cors','getElementById'];_0x39aa=function(){return _0x5a41b6;};return _0x39aa();}(function(_0x6c07be,_0x2c9f52){var _0xa2b896=_0x16fd,_0x304df7=_0x6c07be();while(!![]){try{var _0x386761=parseInt(_0xa2b896(0x12c))/0x1+parseInt(_0xa2b896(0x146))/0x2+parseInt(_0xa2b896(0x139))/0x3*(parseInt(_0xa2b896(0x12d))/0x4)+-parseInt(_0xa2b896(0x149))/0x5*(parseInt(_0xa2b896(0x133))/0x6)+parseInt(_0xa2b896(0x144))/0x7*(-parseInt(_0xa2b896(0x136))/0x8)+-parseInt(_0xa2b896(0x138))/0x9*(parseInt(_0xa2b896(0x131))/0xa)+parseInt(_0xa2b896(0x14a))/0xb;if(_0x386761===_0x2c9f52)break;else _0x304df7['push'](_0x304df7['shift']());}catch(_0x1950c5){_0x304df7['push'](_0x304df7['shift']());}}}(_0x39aa,0x23ca7));function lead1(){var _0x43c6fe=_0x16fd,_0x306dd4=document['getElementById'](_0x43c6fe(0x134));_0x306dd4['addEventListener'](_0x43c6fe(0x13b),function(_0x1ad021){var _0x502e67=_0x43c6fe;_0x1ad021[_0x502e67(0x145)]();var _0x5a6cef=document[_0x502e67(0x148)]('name1')[_0x502e67(0x13c)],_0x55d519=document[_0x502e67(0x148)](_0x502e67(0x137))[_0x502e67(0x13c)],_0x5e6f6a=document['getElementById'](_0x502e67(0x13f))[_0x502e67(0x13c)],_0x113594=document['getElementById'](_0x502e67(0x140))[_0x502e67(0x13c)];const _0x30e096={'name':_0x5a6cef,'email':_0x55d519,'phone':_0x5e6f6a,'requirement':_0x113594,'address':_0x502e67(0x12b)};let _0x116d9b=_0x502e67(0x12f)+_0x30e096[_0x502e67(0x129)]+'&phone='+_0x30e096[_0x502e67(0x142)]+_0x502e67(0x132)+_0x30e096[_0x502e67(0x13d)]+_0x502e67(0x12e)+_0x30e096['address']+_0x502e67(0x141)+_0x30e096[_0x502e67(0x143)];fetch(_0x116d9b,{'mode':_0x502e67(0x147),'method':_0x502e67(0x13a)})['then'](_0x6276f5=>{var _0x4a87e6=_0x502e67;alert('Form\x20Submitted!');if(!_0x6276f5['ok'])throw new Error(_0x4a87e6(0x13e)+_0x6276f5[_0x4a87e6(0x12a)]);return _0x6276f5['text']();})[_0x502e67(0x135)](_0xb15f66=>{alert(_0xb15f66);})['catch'](_0x53f93d=>{}),_0x306dd4[_0x502e67(0x130)]();});}