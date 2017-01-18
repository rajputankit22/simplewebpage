var objArray = [];
$(document).ready(function()
                       {
                              $('#add').click(function(){objectStore();});
                             $('#reset').click(function(){reset();});

                       });

function objectStore()
 {
//alert($("#name").val());
var formObject = { };
formObject.uname =  $("#name").val();
formObject.ureg = $("#reg").val();
formObject.uadd = $("#roll").val();
formObject.uroll = $("#address").val();
formObject.uemail = $("#email").val();
formObject.uclg = $("#clg").val();
formObject.cnt = $("#country").val();
formObject.stt = $("#state").val();


 objArray.push(formObject);
  //console.log(objArray);
  var txt = " ";
  var x;
  for (x in objArray)
    {

       var variable;
      for (variable in objArray[x]) {
        txt = txt + objArray[x][variable] + " ";
      }
      txt = txt + "<br>" + " ";
      $('#demo').html(txt);

    }
}
/*-- reset all values --*/
function reset() {
$("#name").val(null);
$("#reg").val(null);
$("#roll").val(null);
$("#address").val(null);
$("#email").val(null);
$("#clg").val(null);
$("#country").val(null);
$("#state").val(null);
}
