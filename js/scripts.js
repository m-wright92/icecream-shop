$(document).ready(function() {
  $("#form").submit(function (event){
    event.preventDefault();

  const inputs = $("#input-box").val().trim();
  const results = $("#results");
  let flavors = [];
  let flavors2 = [];
  flavors.push(inputs);

  console.log(flavors);

  flavors.forEach(function(flavor) {
    flavors2[].push(flavors);
    results.append("<li>" + flavor + "</li>");
  })


  });
});

// business logic
// let flavor = [];
