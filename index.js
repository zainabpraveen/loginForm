const form = document.getElementById('form');
      const username = document.getElementById('username');
      const email = document.getElementById('email');
      const phone = document.getElementById('phone');
      const password = document.getElementById('password');
      const cpassword = document.getElementById('cpassword');

      //add event

      form.addEventListener('submit', (event)=>{
        event.preventDefault();
        validate();
      })


      const sendData = (sRate,count,usernameVal)=>{
          if(sRate===count){
            alert('registration successfull');
            swal("Welcome! " + usernameVal,"Registration Successful", "success");
            location.href = `demo.html?username=${usernameVal}`
          }
      }

      //for final data validation
      const successMsg = (usernameVal)=>{
        let formCon = document.getElementsByClassName('form-control');

        var count = formCon.length-1;

        for(var i=0;i<formCon.length;i++){
          if(formCon[i].className==="form-control success"){
            var sRate = 0 + i;
            console.log(sRate);
            sendData(sRate,count,usernameVal);
          }else{
            return false;
          }
          
        }
      } 




      //more email validate
      const isEmail = (emailVal)=>{
            var atSymbol = emailVal.indexOf("@");
            if(atSymbol < 1) return false;
            var dot = emailVal.lastIndexOf('.');
            if(dot <= atSymbol + 2)return false;
            if(dot===email.length-1) return false;
            return true;
      }
      // define the validate function

      const validate = ()=>{

      const usernameVal = username.value.trim();
      const emailVal = email.value.trim();
      const phoneVal = phone.value.trim();
      const passwordVal = password.value.trim();
      const cpasswordVal = cpassword.value.trim();


      //validate username
      if(usernameVal===""){
        setErrorMsg(username, 'username cannot be blank');
      }else if(usernameVal.length<=2){
        setErrorMsg(username, 'username min 3 char');
      }else{
        setSuccessMsg(username);
      }
     
      //validate email

      if(emailVal===""){
        setErrorMsg(email, 'email cannot be blank');
      }else if(!isEmail(emailVal)){
        setErrorMsg(email, 'Not a valid Email');
      }else{
        setSuccessMsg(email);
      }


      //validate phone
      if(phoneVal===""){
        setErrorMsg(phone, 'phone number cannot be blank');
      }else if(phoneVal.length!=10){
        setErrorMsg(phone, 'Not a valid phone number');
      }else{
        setSuccessMsg(phone);
      }


     //validate password
     if(passwordVal===""){
      setErrorMsg(password, 'password cannot be balank');
    }else if(passwordVal.length<=5){
      setErrorMsg(password, 'Minimum 6 char');
    }else{
      setSuccessMsg(password);
    }

    //validate confirm password
    if(cpasswordVal===""){
      setErrorMsg(cpassword, 'confirm password cannot be balank');
    }else if(cpasswordVal!==passwordVal){
      setErrorMsg(cpassword, 'password are not matching');
    }else{
      setSuccessMsg(cpassword);
    } 
    
    successMsg(usernameVal);

      }

  //error messsage function 
      function setErrorMsg( input, errormsgs){
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = "form-control error";
        small.innerText = errormsgs;
      }

      //success message function

      function  setSuccessMsg(input){
        const formControl = input.parentElement;
        formControl.className = "form-control success"
        
      }
