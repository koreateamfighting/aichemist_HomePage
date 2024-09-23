<?php
session_start();
$admin_userCode = isset($_SESSION['admin_userCode']) ? $_SESSION['admin_userCode'] : '';

if ($admin_userCode == "") {
    echo "login required";
    exit;
}

$seq        = isset($_POST["seq"])          ? $_POST["seq"]         : "";
/**
 * 객체를 전달 받을것. 각 객체에는 숫자를 담고 있다.
 * min       : 최소 베팅금액
 * minTie    : 타이 베팅 최소금액
 * minPair   : 페어 베팅 최소금액
 * max       : 최대 베팅금액
 * maxTie    : 타이 베팅 최대금액
 * maxPair   : 페어 베팅 최대금액
 */
$newValues  = isset($_POST["values"])    ? $_POST["values"]   : [];

$allowTypes = [
    "min"       => "min",
    "minTie"    => "min_tie",
    "minPair"   => "min_pair",
    "max"       => "max",
    "maxTie"    => "max_tie",
    "maxPair"   => "max_pair"
];

if (
    $seq == "" ||
    !is_numeric($seq) ||
    !is_array($newValues) ||
    count($allowTypes) != count($newValues) ||
    array_keys($allowTypes) != array_keys($newValues) ||
    !is_numeric($newValues["min"]) ||
    !is_numeric($newValues["minTie"]) ||
    !is_numeric($newValues["minPair"]) ||
    !is_numeric($newValues["max"]) ||
    !is_numeric($newValues["maxTie"]) ||
    !is_numeric($newValues["maxPair"])
) {
    echo json_encode(["result" => false, "msg" => "wrong approach"]);
    exit;
}

require $_SERVER["DOCUMENT_ROOT"] . '/inc/dbconfig.php';

$query = "  SELECT room_seq, currency
            from baccarat.tb_baccarat_limit_list l JOIN baccarat.tb_baccarat_room_list r
            ON l.room_seq = r.id
            WHERE seq = ? ";
$stmt = $PDO->prepare($query);
$stmt->bindValue(1, $seq, PDO::PARAM_INT);
$stmt->execute();
$row = $stmt->fetch(PDO::FETCH_ASSOC);

if ($row) {
    $query = "  UPDATE baccarat.tb_baccarat_limit_list 
                SET 
                    min         = ?,
                    min_tie     = ?,
                    min_pair    = ?,
                    max         = ?,
                    max_tie     = ?,
                    max_pair    = ?
                WHERE seq = ? ";
    $stmt = $PDO->prepare($query);
    $stmt->bindValue(1, $newValues["min"],      PDO::PARAM_INT);
    $stmt->bindValue(2, $newValues["minTie"],   PDO::PARAM_INT);
    $stmt->bindValue(3, $newValues["minPair"],  PDO::PARAM_INT);
    $stmt->bindValue(4, $newValues["max"],      PDO::PARAM_INT);
    $stmt->bindValue(5, $newValues["maxTie"],   PDO::PARAM_INT);
    $stmt->bindValue(6, $newValues["maxPair"],  PDO::PARAM_INT);
    $stmt->bindValue(7, $seq,                   PDO::PARAM_INT);
    $stmt->execute();

    if ($stmt->rowCount() == 0) {
        //errorHandler(true, "update failed");
        echo json_encode(["result" => false, "msg" => "update failed"]);
    } else {
        require $_SERVER["DOCUMENT_ROOT"] . '/inc/baccarat_game_api.php';

        $types_int = [
            "min"       => $newValues["min"],
            "minTie"    => $newValues["minTie"],
            "minPair"   => $newValues["minPair"],
            "max"       => $newValues["max"],
            "maxTie"    => $newValues["maxTie"],
            "maxPair"   => $newValues["maxPair"]
        ];

        // $roomNo,$min,$tieMin,$pairMin,$max,$tieMax,$pairMax
        setRoomSettingBetLimit($row["room_seq"], $types_int["min"], $types_int["minTie"], $types_int["minPair"], $types_int["max"], $types_int["maxTie"], $types_int["maxPair"], $row["currency"]);
        echo json_encode(["result" => true]);
    }
} else {
    //errorHandler(true, "playing game");
    echo json_encode(["result" => false, "msg" => "playing game"]);
}

$stmt = null;
$PDO = null;

exit;
