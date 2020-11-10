$(document).ready(function(){
    $("#search").on("click",function(){
        $.ajax({
            type:'GET',
            url:'superheroes.php',
            success:function(data){
                // const datt= JSON.parse(data);
                // $("#para").html(data);
                console.log(data);
                // alert(data);
            }

        });

    });

});


// $(document).ready(function(){
//     $("#search").on("click",function(){
//         $.get("superheroes.php", function(data,status){
//             $("#para").html(data);
//             alert("OK");
//         });

//     });

// });




// funtion superheroes(){
//     var butn = document.getElementById("search")[0];
//     butn.addEventListener("click",function(e){
//         e.preventDefault();
//         $.ajax({
//             url:"superheroes.php",
//             type:"GET",
//             success:function(){
//                 alert("OK");
//             },
//             error:function(){
//                 alert("Error");
//             }
//         })

//     });
// }

// window.onload = superheroes;
