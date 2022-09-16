function loginyes(){
    user_name = document.getElementById("username").value;
    localStorage.setItem("user_name",user_name);
    window.location = "trendicator_room.html";
 }