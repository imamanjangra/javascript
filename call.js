let setuser_name = function(username){
    this.username = username;
}

let data = function(username , id , email){
    setuser_name.call(this , username);
    this.id = id;
    this.email  = email;

}

let info = new data("Aman" , "12" , "Aman@email.com");
console.log(info)