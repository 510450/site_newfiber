<?php
if(empty($_POST['nome']) || empty($_POST['assunto']) || empty($_POST['mensagem']) ||!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
  http_response_code(500);
  exit();
}

$nome = strip_tags(htmlspecialchars($_POST['nome']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$whatsapp = strip_tags(htmlspecialchars($_POST['whatsapp']));
$assunto = strip_tags(htmlspecialchars($_POST['assunto']));
$mensagem = strip_tags(htmlspecialchars($_POST['mensagem']));

$to = "info@example.com"; // Change this email to your //
$subject = "$assunto:  $nome";

$body = "
  <html>
    <head>
      <title>Nova Mensagem de Contato</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          font-size: 14px;
          color: #333;
        }
       .container {
          width: 80%;
          margin: 40px auto;
          padding: 20px;
          background-color: #f9f9f9;
          border: 1px solid #ddd;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
       .header {
          background-color: #333;
          color: #fff;
          padding: 10px;
          text-align: center;
        }
       .header h2 {
          margin: 0;
        }
       .content {
          padding: 20px;
        }
       .content ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
       .content ul li {
          padding: 10px;
          border-bottom: 1px solid #ddd;
        }
       .content ul li:last-child {
          border-bottom: none;
        }
      </style>
    </head>
    <body>
      <div class='container'>
        <div class='header'>
          <h2>Nova Mensagem de Contato</h2>
        </div>
        <div class='content'>
          <p> Você recebeu uma nova mensagem de contato do seu site.</p>
          <ul>
            <li><strong>Nome:</strong> $nome</li>
            <li><strong>E-mail:</strong> $email</li>
            <li><strong>WhatsApp:</strong> $whatsapp</li>
            <li><strong>Assunto:</strong> $assunto</li>
            <li><strong>Mensagem:</strong> $mensagem</li>
          </ul>
        </div>
      </div>
    </body>
  </html>
";

$headers = "MIME-Version: 1.0\r\n";
$headers.= "Content-Type: text/html; charset=UTF-8\r\n";
$headers.= "From: $email\r\n";
$headers.= "Reply-To: $email\r\n";

if(!mail($to, $subject, $body, $headers))
  http_response_code(500);