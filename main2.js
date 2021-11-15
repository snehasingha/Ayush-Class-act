function login(){
    
    window.location.assign("main.html");
    localStorage.setItem("Player 1", document.getElementById("name1").value);
    localStorage.setItem("Player 2", document.getElementById("name2").value);
    localStorage.setItem("Subject", document.getElementById("subjectdrop").value);
    localStorage.setItem("Score 1", 0);
    localStorage.setItem("Score 2", 0);
      
}