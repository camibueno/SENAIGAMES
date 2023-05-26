<?php
    #Inicia conexão com banco de dados
    include ("conexao.php");

    #Recebe informações do formulário
    $usuario = $_POST['usuario'];
    $senha = $_POST['senha'];
    $conf_senha = $_POST['conf_senha'];
    $email = $_POST['email'];
    $telefone = $_POST['tel'];

    #Confere se as senhas são iguais
    if ($senha <> $conf_senha){
        echo "As senhas não coincidem.";
    } else 
        echo "Cadastro realizado.";

    #Realiza o cadastro no sistema
    $sql = "INSERT INTO user(usuario_user, senha_user, email_user, telefone_user)
            VALUES ('$usuario', '$senha', '$email', '$telefone')";

    #Verifica se tudo ocorreu certo
    if (mysqli_query($mysqli, $sql)) {
        #Envia para página de login após o cadastro realizado.
        header('Location:login.html');
    } else {
        echo "houve um erro";
    }   
?>