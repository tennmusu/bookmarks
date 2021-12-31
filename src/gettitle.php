<?php
require_once("./phpQuery-onefile.php");
$data = filter_input(INPUT_POST, 'url'); 
$word = rtrim($data);
# 取得したいwebサイトを読み込む
$html = file_get_contents($word);

# DOM取得
$doc = phpQuery::newDocument($html);
echo $doc["title"]->text();
exit;
?>