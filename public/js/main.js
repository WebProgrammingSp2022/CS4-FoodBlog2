function readClicked(){
          $.ajax({
            url: "/read",
            type: "GET",
            data: {},
            success: function(data){
                if (data.error)
                  alert("bad");
                else {
                    let pa = document.createElement("pa");
                    let p = document.getElementById("parag");
                  if(p)
                  {
                  for(let i=0;i<data.val.length;i++)
                  {
                    console.log(data.val[i].name);
                      pa.innerHTML += "<br /> Name:" + data.val[i].name + "<br />"+  "Ingredients:" + data.val[i].ingredients;
                      pa.innerHTML += "<br /> Instructions:" + data.val[i].instructions;
                      pa.innerHTML += "<br /> Allergies:" + data.val[i].allergies;
                      pa.innerHTML += "<br /> Diets:" + data.val[i].diet;
                  }
                  p.appendChild(pa);
                  }
                  else
                    console.log(p)

                }
              } ,
            dataType: "json"
          });
  return false;
}

$(document).ready(function(){
 readClicked();
});
