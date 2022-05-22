
postButton.onclick = function(e) {
  e.preventDefault();
    
  fetch("https://httpbin.org/post",{
      method: 'POST',
      body: new FormData(form),
      headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      })
      .then(response => response.json())
      .then(user => {
          console.log(user);
      })
      .catch(error => console.log(error));
  }



  function check() {

    let cat_name1 = document.getElementById("cat_name").value;
    let name1 = document.getElementById("name").value;
    let breed1 = document.getElementById("breed").value;
    let food1 = document.getElementById("food").value;
    let preferences1 = document.getElementById("preferences").value;
    
    document.getElementById("errorMessage").innerHTML = '';
    document.getElementById("sucsessMessage").innerHTML = '';
    
    if(cat_name1 === '' || name1 === '' || breed1 === '' || food1 === '' || preferences1 === '') 
    {document.getElementById("errorMessage").innerHTML += "не все поля заполнены, исправьте ошибку";}
    else {document.getElementById('sucsessMessage').innerHTML += "Добро пожаловать на сайт, " + name1 + " !";}
    
    
    
    class Cat {
        constructor(cat_name, name, breed, food, preferences) {
          this.cat_name = cat_name; 
          this.name = name;
          this.breed = breed;
          this.food = food;
          this.preferences = preferences;
        }
      
        
      }
    
    let cat1 = new Cat(cat_name1, name1, breed1, food1, preferences1);
    
    console.log(cat1);
    }