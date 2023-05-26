<?php

    #print_r($_REQUEST); #Verifica as informaçõe que foram enviadas no formulário.

    #Vai conferir se o botão foi usado no site, se foi ultilizado ele vai para outra página
    
    if (isset($_POST['submit']) && !empty($_POST['senha'])){

        include ("conexao.php");
        $usuario = $_POST['usuariotxt'];
        $senha = $_POST['senha'];

        $sql = "SELECT * FROM cadastro WHERE usuario_cadastro = '$usuario' AND senha_cadastro = '$senha'";

        $result = $mysqli->query($sql);

        if (mysqli_num_rows ($result) < 1){
            header('Location: login.html');
   
        }
        else header('Location: senaigames.html');
    }

    else {
        header('Location: login.html');
    }
        
?>
