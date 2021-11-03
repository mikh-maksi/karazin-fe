<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json; charset=utf-8');

class quiz
{
    public $title_arr = [ "Год основания Харьковского Университета!","День рождения!" ];
    public $question_arr = ["В каком году основан Харьковский университет?","Когда день рождения В.Н. Каразина?"];
    public $a1_arr = ["1804","09.02"];
    public $a2_arr = ["1805","10.02"];
    public $a3_arr = ["1933","02.09"];
    public $a4_arr = ["1993","09.10"];
    public $answer_arr = ["1804","10.02"];
    public $n_right_answer_arr = [1,2];
}

$quiz1 = new quiz();
$quiz1->comment = "Hello";

$quizes[]=$quiz1;
$quizes[]=$quiz1;
echo(json_encode($quizes));
?>
