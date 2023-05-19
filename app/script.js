document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Perform login validation or submit the form to the server
    console.log('Username:', username);
    console.log('Password:', password);
});
