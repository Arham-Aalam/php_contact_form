function _(id){ return document.getElementById(id); }
function submitForm(){
	_("form-submit").disabled = true;
	_("formStatus").innerHTML = 'please wait ...';
	var formdata = new FormData();
	formdata.append( "n", _("name").value );
	formdata.append( "e", _("email").value );
	formdata.append( "m", _("message").value );
	var ajax = new XMLHttpRequest();
	ajax.open( "POST", "mail.php" );
	ajax.onreadystatechange = function() {
		if(ajax.readyState == 4 && ajax.status == 200) {
			if(ajax.responseText == "success"){
				_("contactForm").innerHTML = '<h2>Thanks '+_("n").value+', your message has been sent.</h2>';
			} else {
				_("formStatus").innerHTML = ajax.responseText;
				_("form-submit").disabled = false;
			}
		}
	}
	ajax.send( formdata );
}

function submitSubForm(){
  _("subBtn").disabled = true;
  _("subStatus").innerHTML = 'please wait ...';
  var formdata = new FormData();
  formdata.append( "e", _("subEmail").value );
  var ajax = new XMLHttpRequest();
  ajax.open( "POST", "subMail.php" );
  ajax.onreadystatechange = function() {
    if(ajax.readyState == 4 && ajax.status == 200) {
      if(ajax.responseText == "success"){
        _("subsForm").innerHTML = '<h2>Thanks!, Subscribed Successfully.</h2>';
      } else {
        _("subStatus").innerHTML = ajax.responseText;
        _("subBtn").disabled = false;
      }
    }
  }
  ajax.send( formdata );
}
