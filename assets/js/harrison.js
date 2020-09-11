// Contact Us function
document.getElementById("sendMessageButton").onclick = function sendMessage() {
  console.log('sendMessage');

  var name = document.getElementById("sendMessageName").value;
  // console.log('name = ' + name);

  var email = document.getElementById("sendMessageEmail").value;
  // console.log('email = ' + email);
  
  var body = document.getElementById("sendMessageBody").value;
  // console.log('body = ' + body);

  subject = 'Github Pages | From: ' + name;
  body = body + ' ' + 'Please respond to ' + email;

  window.open('mailto:harrison.welch@gmail.com?subject=' + subject + '&body=' + body);
}
