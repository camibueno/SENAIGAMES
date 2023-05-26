<?php
    #Informações básicas do banco de dados
    $hostname = "localhost";
    $bda = "senaigames";
    $usuario = "root";
    $senha = "";

    #Inicia a conexão
    $mysqli = new mysqli($hostname, $usuario, $senha, $bda);

        #Informa se houve algum erro
        if($mysqli -> connect_errno) {
            echo "Falha ao conectar: (" . $mysqli ->connect_errno .") " . $mysqli -> connect_error;
        }   else
        echo "Conectado!";

?>