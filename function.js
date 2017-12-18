$(function (){
 var operation = "c";
 var selected_index = -1;
 var list = localStorage.getItem("list");
 list = JSON.parse(list);
 if(list === null)
     list = [];
   
   function Create(){
   var person = JSON.stringify({
   Nome: $("#txtNome").val(),
   Sobrenome: $("#txtSobrenome").val(),
   Telefone: $("#txtTelefone").val(),
   Email: $("#txtEmail").val()   
   });
       
       
    list.push(person);
    localStorage.setItem("list", JSON.stringify(list));
    alert("Dados armazenados com sucesso");
    return true;
   }
   
   function Edit(){
   list[selected_index] = JSON.stringify({
         Nome: $("#txtNome").val(),
         Sobrenome: $("#txtSobrenome").val(),
         Telefone: $("#txtTelefone").val(),
         Email: $("#txtEmail").val()                   
         )}; 
         
       localStorage.setItem("list", JSON.stringify(list));
       alert("Dados editados com sucesso!");
       return true;
   }
    function List(){
     $("list").html("");
     $("list").html(
        "<thead>" +
        "<tr>"+
        "<th>Nome</th>"+
        "<th>Sobrenome</th>"+
        "<th>Telefone</th>"+
        "<th>Email</th>"+
        "</tr>"+
        "</thead>" +
        "<tbody>" +
        "</tbody>"
     );
     for(var i in list){
       var per = JSON.parse(list[i]);
       $("#list tbody").append("tr"+
       "<td>" + per.Nome + "</td>" +     
       "<td>" + per.Sobrenome + "</td>" +  
       "<td>" + per.Telefone + "</td>" +  
       "<td>" + per.Email + "</td>" +
       "<td><input type='submit' alt='edit' value='Editar" + i + "'class='btnEdit'> '<input type ='submit' alt='deletar' value='Excluir"+i+"'class='btnDelete' </td>"+
       "</tr>"
       );
        }
     }
       $("#form1").bind("submit", function () {
    if (operation === "c")
        return Create();
    else
        return Edit();
});
        List();
        
        
        
    $(".btnEdit").bind("click", function () {
    operation = "E";
    selected_index = parseInt($(this).attr("alt").replace("Edit", ""));
    var per = JSON.parse(list[selected_index]); 
    $("#txtNome").val(per.Nome);
    $("#txtSobrenome").val(per.Sobrenome);
    $("#txtTelefone").val(per.Telefone);
    $("#txtEmail").val(per.Email);
    $("#txtID").attr("readonly", "readonly");
    $("#txtName").focus();
  });

  $(".btnDelete").bind("click", function () {
    selected_index = parseInt($(this).attr("alt").replace("Delete", "")); 
    Delete(); 
    List(); 
  });
});
        
        
        
});
