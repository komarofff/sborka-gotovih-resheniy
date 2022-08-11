<?php
$data = file_get_contents('php://input');
parse_str($data);

$out['name'] = $name;// $_POST['name']
$out['password'] = $password;// $_POST['password']
$out['dannie']=[
    'first'=>"11111",
    '2first'=>"221",
    '3first'=>"331111",
    '4first'=>"441111",
    '5first'=>"551111",
    
];
echo json_encode($out);
