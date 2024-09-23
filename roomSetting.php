<?php
require $_SERVER["DOCUMENT_ROOT"] . '/shop/head.php';
$query = "  SELECT 
                id
                ,stream_id
                ,GameType
                ,sRoomNumber
                ,nBettingTime       bettingTime
                ,nWinnerShowTime
                ,active
                ,sDealerID
                ,nPlayingUser
            FROM baccarat.tb_baccarat_room_list ";
$stmt = $PDO->prepare($query);
$stmt->execute();
$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

?>
</head>

<body>
    <div class="container-scroller" style="position: relative; z-index: 2">
        <?php require $_SERVER["DOCUMENT_ROOT"] . '/shop/header.php'; ?>

        <div class="container-fluid page-body-wrapper">
            <?php require $_SERVER["DOCUMENT_ROOT"] . '/shop/nav.php'; ?>

            <div class="main-panel">
                <form name="frm" id="frm" action="Baccarat_roomsetting.php" method="post">
                    <div class="row">
                        <div class="col-lg-12 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <h6 class="card-title font-weight-bold">SOLAIRE 【바카라 룸세팅】</h6>
                                    <p class="card-description"></p>
                                    <p></p>
                                    <div class="table-responsive pt-3">
                                        <table class="table table-dark table-striped table-sm table-bordered table align-middle" id="dataTable" style="border: 1px solid #cccccc">
                                            <thead class="thead-light">
                                                <tr height="40" class="text-center font-weight-bolder">
                                                    <th><small><b>RoomID</b></small></th>
                                                    <!-- <th><small><b>StreamID</b></small></th> -->
                                                    <th colspan="2"><small><b>RoomNumber</b></small></th>
                                                    <th><small><b>Game Type</b></small></th>
                                                    <th><small><b>Betting Limit</b></small></th>
                                                    <th><small><b>BettingTime</b></small></th>
                                                    <th><small><b>Winer Show Time</b></small></th>
                                                    <!-- <th><small><b>Insurance Time</b></small></th> -->
                                                    <!-- <th><small><b>Active</b></small></th> -->
                                                    <th><small><b>Dealer</b></small></th>
                                                    <th><small><b>Live User</b></small></th>
                                                </tr>
                                            </thead>

                                            <tbody id="lists">
                                                <?php if (count($rows) == 0) { ?>
                                                    <tr>
                                                        <td colspan="12" height="100" align="center" style="vertical-align:middle">내역이 없습니다.</td>
                                                    </tr>
                                                <?php } else { ?>
                                                    <?php
                                                    foreach ($rows as $row) {
                                                        $id                 = $row["id"];
                                                        $stream_id          = $row["stream_id"];
                                                        $GameType           = $row["GameType"];
                                                        $sRoomNumber        = $row["sRoomNumber"];

                                                        $bettingTime        = $row["bettingTime"];
                                                        $nWinnerShowTime    = $row["nWinnerShowTime"];
                                                        $active             = $row["active"];
                                                        $sDealerID          = $row["sDealerID"];
                                                        $nPlayingUser       = $row["nPlayingUser"];
                                                    ?>
                                                        <tr height="40">
                                                            <td class="text-center"><?= $id ?></td>
                                                            <!-- <td class="text-center"><input type="number" class="form-control form-control-sm" type="text" value="<?= $stream_id ?>" readonly></td> -->
                                                            <td class="text-center">
                                                                <input type="text" id="sRoomNumber_<?= $id ?>" value="<?= $sRoomNumber ?>" class="form-control form-control-sm">
                                                            </td>
                                                            <td class="text-center">
                                                                <button onclick="roomSetup(<?= $id ?>,'sRoomNumber')" class="btn btn-info btn-sm">Edit</button>
                                                            </td>
                                                            <td class="text-center">
                                                                <select id="GameType_<?= $id ?>" onchange="roomSetup('<?= $id ?>','GameType');" class="form-control form-control-sm">
                                                                    <option value='Speed' <?php if ($GameType == "Speed") echo "selected"; ?>>Speed</option>";
                                                                    <option value='Insurance' <?php if ($GameType == "Insurance") echo "selected"; ?>>Insurance</option>";
                                                                </select>
                                                            </td>
                                                            <td class="text-center">
                                                                <button class="btn btn-info btn-sm" type="button" onclick="openBetSetModal(<?= $id ?>,'<?= $sRoomNumber ?>')">setting</button>
                                                            </td>
                                                            <td class="text-center">
                                                                <select id="bettingTime_<?= $id ?>" onchange="roomSetup('<?= $id ?>','bettingTime');" class="form-control form-control-sm">
                                                                    <?php
                                                                    for ($i = 0; $i <= 100; $i++) {
                                                                        if ($i == $bettingTime) {
                                                                            echo "<option value='$i' selected>$i</option>";
                                                                        } else {
                                                                            echo "<option value='$i'>$i</option>";
                                                                        }
                                                                    }
                                                                    ?>
                                                                </select>
                                                            </td>
                                                            <td class="text-center">
                                                                <select id="nWinnerShowTime_<?= $id ?>" onchange="roomSetup('<?= $id ?>','nWinnerShowTime');" class="form-control form-control-sm">
                                                                    <?php
                                                                    for ($i = 0; $i <= 100; $i++) {
                                                                        if ($i == $nWinnerShowTime) {
                                                                            echo "<option value='$i' selected>$i</option>";
                                                                        } else {
                                                                            echo "<option value='$i'>$i</option>";
                                                                        }
                                                                    }
                                                                    ?>
                                                                </select>
                                                            </td>

                                                            <!-- <td class="text-center">
                                                              <select id="active_<?= $id ?>" onchange="roomSetup('<?= $id ?>','active');" class="form-control form-control-sm">
                                                                <option value="0" <?= ($active == 0) ? "selected" : "" ?>>off</option>
                                                                <option value="1" <?= ($active == 1) ? "selected" : "" ?>>on</option>
                                                              </select>
                                                            </td> -->
                                                            <td class="text-center"><?= $sDealerID ?></td>
                                                            <td class="text-center"><?= $nPlayingUser ?></td>
                                                        </tr>
                                                    <?php } ?>
                                                <?php } ?>
                                            </tbody>
                                        </table>
                                        <br />
                                        <div class="d-flex justify-content-center">
                                            <nav>
                                                <ul class="pagination"></ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

                <?php require $_SERVER["DOCUMENT_ROOT"] . '/shop/footer.php'; ?>

            </div>
        </div>
    </div>
    <div class="modal fade" id="bet-set-modal" tabindex="-1" role="dialog" aria-labelledby="bet-set-modal-room-id" aria-hidden="true" data-backdrop="static" data-keyboard="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content" style="width:950px;">
                <div class="modal-header">
                    <h4 class="modal-title" data-langnum="23" id="bet-set-modal-room-id"></h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="color:#fff"><span aria-hidden="true">×</span></button>

                </div>
                <div id="bet-set-modal-body" class="modal-body">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Currency</th>
                                <th>Min</th>
                                <th>Min Tie</th>
                                <th>Min Pair</th>
                                <th>Max</th>
                                <th>Max Tie</th>
                                <th>Max Pair</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php $option_start = 10; ?>
                            <tr>
                                <td>USD</td>
                                <td name="min"><input type="number" class="form-control form-control-sm" style="width:80px;" /></td>
                                <td name="minTie"><input type="number" class="form-control form-control-sm" style="width:80px;" /></td>
                                <td name="minPair"><input type="number" class="form-control form-control-sm" style="width:80px;" /></td>
                                <td name="max"><input type="number" class="form-control form-control-sm" style="width:80px;" /></td>
                                <td name="maxTie"><input type="number" class="form-control form-control-sm" style="width:80px;" /></td>
                                <td name="maxPair"><input type="number" class="form-control form-control-sm" style="width:80px;" /></td>
                                <td><button type="button" class="btn btn-primary btn-sm" onclick="changeBetSet(<?= $id ?>, 'USD', this)">Save</button></td>
                            </tr>
                            <?php $option_start = 10000; ?>
                            <tr>
                                <td>KRW</td>
                                <td name="min"><input type="number" class="form-control form-control-sm" style="width:80px;" /></td>
                                <td name="minTie"><input type="number" class="form-control form-control-sm" style="width:80px;" /></td>
                                <td name="minPair"><input type="number" class="form-control form-control-sm" style="width:80px;" /></td>
                                <td name="max"><input type="number" class="form-control form-control-sm" style="width:80px;" /></td>
                                <td name="maxTie"><input type="number" class="form-control form-control-sm" style="width:80px;" /></td>
                                <td name="maxPair"><input type="number" class="form-control form-control-sm" style="width:80px;" /></td>
                                <td><button type="button" class="btn btn-primary btn-sm" onclick="changeBetSet(<?= $id ?>, 'USD', this)">Save</button></td>
                            </tr>
                            <?php $option_start = 10; ?>
                            <tr>
                                <td>CNY</td>
                                <td name="min"><input type="number" class="form-control form-control-sm" style="width:80px;" /></td>
                                <td name="minTie"><input type="number" class="form-control form-control-sm" style="width:80px;" /></td>
                                <td name="minPair"><input type="number" class="form-control form-control-sm" style="width:80px;" /></td>
                                <td name="max"><input type="number" class="form-control form-control-sm" style="width:80px;" /></td>
                                <td name="maxTie"><input type="number" class="form-control form-control-sm" style="width:80px;" /></td>
                                <td name="maxPair"><input type="number" class="form-control form-control-sm" style="width:80px;" /></td>
                                <td><button type="button" class="btn btn-primary btn-sm" onclick="changeBetSet(<?= $id ?>, 'USD', this)">Save</button></td>
                            </tr>
                            <?php $option_start = 1000; ?>
                            <tr>
                                <td>JPY</td>
                                <td name="min"><input type="number" class="form-control form-control-sm" style="width:80px;" /></td>
                                <td name="minTie"><input type="number" class="form-control form-control-sm" style="width:80px;" /></td>
                                <td name="minPair"><input type="number" class="form-control form-control-sm" style="width:80px;" /></td>
                                <td name="max"><input type="number" class="form-control form-control-sm" style="width:80px;" /></td>
                                <td name="maxTie"><input type="number" class="form-control form-control-sm" style="width:80px;" /></td>
                                <td name="maxPair"><input type="number" class="form-control form-control-sm" style="width:80px;" /></td>
                                <td><button type="button" class="btn btn-primary btn-sm" onclick="changeBetSet(<?= $id ?>, 'USD', this)">Save</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    <?php require $_SERVER["DOCUMENT_ROOT"] . '/shop/js.php'; ?>

    <script type="text/javascript" language="JavaScript">
        function roomSetup(id, gubun) {
            var value = $("#" + gubun + "_" + id).val();

            if (gubun == "small_bet") {
                tmpValue = $("#max_bet_" + id).val();

                if (parseInt(tmpValue) < parseInt(value)) {
                    alert("Please enter less than Max Bet");
                    location.reload();
                    return;
                }
            }
            if (gubun == "max_bet") {
                tmpValue = $("#small_bet_" + id).val();

                if (parseInt(tmpValue) > parseInt(value)) {
                    alert("Please enter larger than Min Bet");
                    location.reload();
                    return;
                }
            }
            if (gubun == "nKRW_MinBet") {
                tmpValue = $("#nKRW_MaxBet_" + id).val();
                if (parseInt(tmpValue) < parseInt(value)) {
                    alert("Please enter less than KRW Max Bet");
                    location.reload();
                    return;
                }
            }
            if (gubun == "nKRW_MaxBet") {
                tmpValue = $("#nKRW_MinBet_" + id).val();
                if (parseInt(tmpValue) > parseInt(value)) {
                    alert("Please enter larger than KRW Min Bet");
                    location.reload();
                    return;
                }
            }
            if (gubun == "nCNY_MinBet") {
                tmpValue = $("#nCNY_MaxBet_" + id).val();
                if (parseInt(tmpValue) < parseInt(value)) {
                    alert("Please enter less than CNY Max Bet");
                    location.reload();
                    return;
                }
            }
            if (gubun == "nCNY_MaxBet") {
                tmpValue = $("#nCNY_MinBet_" + id).val();
                if (parseInt(tmpValue) > parseInt(value)) {
                    alert("Please enter larger than CNY Min Bet");
                    location.reload();
                    return;
                }
            }
            //console.log(id,gubun,value);
            //return;
            $.ajax({
                url: 'ajax_Baccaratroomsetup.php',
                type: 'POST',
                data: {
                    id: id,
                    gubun: gubun,
                    value: value,
                },
                dataType: 'text',
                beforeSend: function(jqXHR) {

                },
                success: function(jqXHR) {
                    if (jqXHR == "success") {
                        alert("적용되었습니다.");
                        location.reload();
                    } else {
                        //location.reload();
                        console.log(jqXHR);
                    }
                },
                error: function(jqXHR) {},
                complete: function(jqXHR) {}
            });
        }
        let currentBetSet = [];

        function openBetSetModal(id, roomNumber) {
            $.ajax({
                url: 'ajax_Baccarat_roomsetting_getBetInfo.php',
                type: 'POST',
                data: {
                    id: id
                },
                dataType: 'json',
                beforeSend: function(jqXHR) {
                    //$('#loading_modal').modal('show');
                },
                success: function(jqXHR) {
                    if (!jqXHR.result) {
                        alert('No data');
                        //$('#loading_modal').modal('hide');
                        return;
                    }

                    const data = jqXHR.data;
                    currentBetSet = data;
                    $('#bet-set-modal-room-id').text(roomNumber);
                    $('#bet-set-modal-body tbody tr').each(function(index) {
                        $(this).find('td').eq(0).text(data[index].currency);
                        $(this).find('td').eq(1).find('input').val(data[index].min);
                        $(this).find('td').eq(2).find('input').val(data[index].minTie);
                        $(this).find('td').eq(3).find('input').val(data[index].minPair);
                        $(this).find('td').eq(4).find('input').val(data[index].max);
                        $(this).find('td').eq(5).find('input').val(data[index].maxTie);
                        $(this).find('td').eq(6).find('input').val(data[index].maxPair);
                    });

                    //$('#loading_modal').modal('hide');
                    $('#bet-set-modal').modal('show');
                },
                error: function(jqXHR) {
                    //$('#loading_modal').modal('hide');
                },
                complete: function(jqXHR) {}
            });
        }

        function resetSelectBox() {
            $('#bet-set-modal-body select').each(function(index) {
                $(this).val(currentBetSet[$(this).closest('tr').index()][$(this).closest('td').attr('name')]);
            });
        }

        function resetInputBox() {
            $('#bet-set-modal-body input').each(function(index) {
                $(this).val(currentBetSet[$(this).closest('tr').index()][$(this).closest('td').attr('name')]);
            });
        }

        function changeBetSet(seq, type, el) {
            if (!confirm('Do you want to change it?')) {
                resetInputBox();
                return;
            }

            const postData = {
                seq: currentBetSet[$(el).closest('tr').index()].seq,
                values: {
                    min: 0,
                    minTie: 0,
                    minPair: 0,
                    max: 0,
                    maxTie: 0,
                    maxPair: 0
                }
            };

            $(el).closest('tr').find('input').each(function(index) {
                postData.values[$(this).closest('td').attr('name')] = $(this).val();
            });

            $.ajax({
                url: 'ajax_Baccarat_roomsetting_changeBetSet.php',
                type: 'POST',
                data: postData,
                dataType: 'json',
                beforeSend: function(jqXHR) {},
                success: function(jqXHR) {
                    if (!jqXHR.result) {
                        if (jqXHR.msg == "playing game") {
                            alert('update failed');
                            //alert('It will not change while the game is running.');
                        } else {
                            alert('update failed');
                        }
                        // resetSelectBox();
                        resetInputBox();
                        //$('#loading_modal').modal('hide');
                        return;
                    }

                    alert('has been modified.');

                    const existValueIndex = currentBetSet.findIndex((item) => item.seq == seq);
                    if (existValueIndex == -1) location.reload();
                    currentBetSet[existValueIndex][type] = value;

                    //$('#loading_modal').modal('hide');
                },
                error: function(jqXHR) {
                    resetSelectBox();
                    //$('#loading_modal').modal('hide');
                },
                complete: function(jqXHR) {}
            });
        }

        $(document).on('change', '#bet-set-modal-body select', function(e) {
            const seq = currentBetSet[$(this).closest('tr').index()].seq;
            const type = $(this).closest('td').attr('name');
            const value = $(this).val();

            //$('#loading_modal').modal('show');
            changeBetSet(seq, type, value);
        });
    </script>
</body>

</html>

<?php
$stmt = null;
$PDO = null;
exit;
?>