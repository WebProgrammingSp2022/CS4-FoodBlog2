function createClicked(){
          $.ajax({
            url: "/create",
            type: "POST",
            data: {name:$("#name").val(),
                  ingredients:$("#ingredients").val(),
                  instructions:$("#instructions").val(),
                  allergies: AllergyCheckbox(),
                  diet: DietCheckbox()

                  },

            success: function(data){
                if (data.error)
                  alert("bad");
                else
                {
                  alert("good");
                }
              } ,
            dataType: "json"
          });
  return false;
}
/*function readClicked(){
          $.ajax({
            url: "/read",
            type: "GET",
            data: {name:$("#name").val()},
            success: function(data){
                if (data.error)
                  alert("bad");
                else {
                  $("#name").val(data.name);
                }
              } ,
            dataType: "json"
          });
  return false;
}

function updateClicked(){
          $.ajax({
            url: "/update",
            type: "PUT",
            data: {name:$("#name").val(),
                  ingredients:$("#ingredients").val(),
                  instructions:$("#instructions").val(),
                  allergies:$("#allergies").prop("checked"),
                  diet:$("#diet").prop("checked")
            },
            success: function(data){
                if (data.error)
                  alert("bad");
                else
                  alert("good");
              } ,
            dataType: "json"
          });
  return false;
}
/*function deleteClicked(){

    let trimIdentifier = $("#identifier").val().trim();
    if (trimIdentifier == "") {
      alert("bad");
      return false;
    }

    $.ajax({
      url: "/delete/" + $("#identifier").val(),
      type: "DELETE",
      success: function(data) {
        if (data.error)
          alert("bad");
        else
          alert("good");
      } ,
      dataType: "json"
    });
    return false;
}
*/
function DietCheckbox(){
  let dietChecked;
  var passDiet = [];
                  $.each($("input[name='diets']:checked"), function(){
                    passDiet.push($(this).val());
                  });
  dietChecked= passDiet.join(", ");
  console.log(passDiet);
  return(passDiet);
}

function AllergyCheckbox(){
  var passAllergy = [];
                  $.each($("input[name='allergies']:checked"), function(){
                    passAllergy.push($(this).val());
                  });
  console.log(passAllergy);
  return(passAllergy);
}


$(document).ready(function(){

  $("#createButton").click(createClicked);
//  $("#readButton").click(readClicked);
//  $("#updateButton").click(updateClicked);
//  $("#deleteButton").click(deleteClicked);

});
