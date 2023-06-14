<?php
include 'inc/inc.seo.php';
?>

</head>

<body>
    <?php
    include 'inc/inc.header.php';
    ?>

    <div class="banner_inner d-flex align-items-center">
        <div class="container-fluid pt-5 pb-5">
            <div class="banner_content d-md-flex justify-content-between align-items-center">
                <div class="mb-3 mb-md-0">
                    <h1>TESTE MENU VOLTA</h1>
                </div>
                <div class="page_link">
                    <a href="./" title="">Home</a> |
                    <a class="btn-wt">TESTE MENU VOLTA</a>
                </div>
            </div>
        </div>
    </div>


    <div class="container-fluid pt-5 pb-5">
        <div class="row">
            <div class="col-md-7 m-auto">
                <form>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label for="nome">Nome:</label>
                            <input type="text" class="form-control" id="nome" placeholder="Digite seu nome">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="telefone">Número de Telefone:</label>
                            <input type="tel" class="form-control" id="telefone" placeholder="Digite seu número de telefone">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="email">Email:</label>
                            <input type="email" class="form-control" id="email" placeholder="Digite seu email">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="assunto">Assunto:</label>
                            <input type="text" class="form-control" id="assunto" placeholder="Digite o assunto">
                        </div>
                        <div class="form-group">
                            <label for="mensagem">Mensagem:</label>
                            <textarea class="form-control" id="mensagem" rows="5" placeholder="Digite sua mensagem"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Enviar</button>
                    </div>
                </form>




            </div>
            <div class="col-md-5 m-auto">

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.6326439664067!2d-46.330822725065616!3d-23.47371190837724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce7c85d440edef%3A0xa609a75daa616187!2sItaqu%C3%A1%20Park%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1686700049025!5m2!1spt-BR!2sbr" width="100%" height="400px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>
        </div>
    </div>


    <?php
    include 'inc/inc.contato.php';
    include 'inc/inc.footer.php';
    include 'inc/inc.js.php';
    ?>


</body>

</html>