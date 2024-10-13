
class Landing {
  database = {}
  // database={
  //     'milan@gmail.com':{name:'milan',email:'milan@gmail.com',password:'1234'}
  // }we are storing data in this way so that we can check if the data is included using the email
  registerUser() {
    if (localStorage.getItem('userData') != null) {
      //they wil retrieve storedto the key userdata  
      this.getData()
    }
    let firstName = username.value;//to get the value from that id
    let email = emailId.value;
    let password = pswd.value;
    if (firstName !== '' && email !== '' && password !== '') {
      if (email in this.database) {
        //in used to check if the key exist
        alert(`${email} already exist`)
      }

      else {
        this.database[email] = {
          name: firstName,
          email: email,
          password: password
        }
        // to save data
        this.saveData();
        alert('Registration successful')
        //to navigate to html page
        window.location = 'login.html'
      }
    }
    else {
      alert('Please enter a valid value')
    }
  }
  getData() {
    this.database = JSON.parse(localStorage.getItem('userData'))
    //this will take the data from the local storage convert it to object and store it to the database
  }
  saveData() {
    localStorage.setItem('userData', JSON.stringify(this.database))
  }
  login() {
    let logEmail = userEmail.value;
    let logPass = userPswd.value;
    this.getData();
    //to compare with inputs

    if (logEmail == '' || logPass == '') {
      alert('Please enter valid value')
    }

    else {

      
      //checking if account exists
      if (logEmail in this.database) {
        

        if (this.database[logEmail].password === logPass) 
          {
          
          localStorage.setItem('userName',this.database[logEmail].name);
          window.location="home.html"
        }
        else {
          alert('Incorrect Password')
        }


      }
      else {
        alert(`${logEmail} not found`)
      }
    }
  }
}
const obj = new Landing();