<script type="text/javascript">
	

	function setCookie(cname,cvalue,exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            var expires = "expires=" + d.toGMTString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        return true;
    } else {
       return false;
    }
}
  
function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

if(!getCookie('pixel_ga_transactionpesonalizados')){  

    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };

    function b64DecodeUnicode(str) {
        // Going backwards: from bytestream, to percent-encoding, to original string.
        return decodeURIComponent(atob(str).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }

    var transaction = getUrlParameter('transaction');
    var firstOrderFunnelInfo = getUrlParameter('firstOrderFunnelInfo');
    var aprovada = getUrlParameter('aprovada');

    if(transaction != undefined){ //Se Existe GET transaction
      
    }else if(firstOrderFunnelInfo != undefined){ //Se Existe GET firstOrderFunnelInfo
      
      var decripy = b64DecodeUnicode(firstOrderFunnelInfo);
      var arrayDecripy = JSON.parse(decripy);

      transaction = arrayDecripy.previousTransaction;

      if(transaction == undefined){
          transaction = new Date();
      }
      
    }else if(aprovada == 'DPSIM'){

      transaction = new Date();

    }

    if(aprovada == 'DPSIM'){

      window.dataLayer = window.dataLayer || [];

        window.dataLayer.push({
          event:"transactionpesonalizados",
          'transactionId': transaction,
           'transactionAffiliation': 'X10856104O',
           'transactionTotal': 207.84,
           'transactionProducts': [{
               'sku': '317284',
               'name': 'Power Abs',
               'category': 'Queima Diária',
               'price': 207.84,
               'quantity': 1
           }]

        });

         window.dataLayer.push({'revenue': 207.84});

        setCookie("pixel_ga_transactionpesonalizados", transaction, 30);
    }

}
</script>