var MessageApp = MessageApp || {};

//debugger
MessageApp.setEventListeners = function() {
  //var $btnSendMessage = $("#btnSendMessage");
  //debugger
  //$btnSendMessage.on('click', MessageApp.sendMessage)
  $form = $(".messageForm");
  $form.on('submit', MessageApp.sendMessage)
  //debugger
}


MessageApp.sendMessage = function(e) {
  console.log(e);
  e.stopPropagation();
  e.preventDefault();
  var form = {};
  // this can be better
  // see phils example
  form.title = this.elements['title'].value;
  form.body = this.elements['message'].value;

  debugger
  MessageApp.ajax({
    method: "post",
    url: "/messages",
    data: { message: form}
  });
  this.reset();
}


MessageApp.ajax = function ajax(opt) {

  var xhr = new XMLHttpRequest();
  var data;
  xhr.open(opt.method, opt.url, opt.async);

  if (opt.data && opt.method === "post") {
    xhr.setRequestHeader('Content-Type', 'application/json');
    data = JSON.stringify(opt.data);
  }
  debugger
  xhr.send(data);

  return JSON.parse(xhr.response);
}
