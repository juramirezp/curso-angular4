<?php

require_once 'vendor/autoload.php';

$app = new \Slim\Slim();

$app->get("/ccc", function() use($app){
    echo "Hola munto";
});

$app->run();