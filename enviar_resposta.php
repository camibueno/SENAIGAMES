<?php
    #Inicia conexão com banco de dados
    include ("conexao.php");

    #Recebe informações do formulário
    $nome = $_POST['txtName'];
    $email = $_POST['txtEmail'];
    $telefone = $_POST['textTel'];
    $comentario = $_POST['comment'];

    #Realiza o inserção de dados no banco de dados
    $sql = "INSERT INTO fale_conosco(nome_fcn, email_fnc, telefone_fnc, comentario_fnc)
            VALUES ('$nome', '$email', '$telefone', '$comentario')";

    #Confere se foi realizado corretamente
    if (mysqli_query($mysqli, $sql)) {
        echo "Comentário enviado para nossa equipe com sucesso!"
    } else {
        echo "houve um erro";
    }   
?>