$(function () {
    var param = {startIndex: 0, pageSize: 3};//索引 0   每页条数 2  传参列表
    var $wrapper = $('div-table-container');
    var $table = $('#table-list');
    var ajaxUrl = "/user/queryAll";
    var _table = $table.dataTable($.extend(true, {}, CONSTANT.DATA_TABLES.DEFAULT_OPTION, {
        ajax: function (data, callback, settings) {
            // $wrapper.spinModal();
            param.startIndex = data.start;
            console.log(param.startIndex)
            console.log(param.pageSize)
            $.ajax({
                type: "POST",
                url: ajaxUrl,
                cache: false,
                data: param,//传入请求参数
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                dataType: "json",
                success: function (result) {
                    setTimeout(function () {
                        var returnData = {};
                        returnData.draw = data.draw + 1;
                        returnData.recordsTotal = result.total;
                        returnData.recordsFiltered = result.total;//每次翻页过滤数据条数
                        returnData.data = result.pageData;
                        callback(returnData);
                    }, 200);
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert("查询失败");
                    // $wrapper.spinModal(false);
                }
            });
        },
        ordering: false,
        pageLength: param.pageSize,// 每页条数 设置
        columns: [
            CONSTANT.DATA_TABLES.COLUMN.CHECKBOX,
            {
                className: "ellipsis",
                data: "id",
                width: "40px",
                render: CONSTANT.DATA_TABLES.RENDER.ELLIPSIS,
            },
            {
                className: "ellipsis",
                data: "mobile",
                width: "60px",
                render: CONSTANT.DATA_TABLES.RENDER.ELLIPSIS
            },
            {
                className: "ellipsis",
                data: "password",
                width: "100px",
                render: CONSTANT.DATA_TABLES.RENDER.ELLIPSIS

            },
            {
                className: "ellipsis",
                data: "sex",
                width: "100px",
                render: CONSTANT.DATA_TABLES.RENDER.ELLIPSIS
            },
            {
                className: "ellipsis",
                data: "birthdate",
                width: "60px",
                render: CONSTANT.DATA_TABLES.RENDER.ELLIPSIS
            },
            {
                className: "ellipsis",
                data: "address",
                width: "100px",
                render: CONSTANT.DATA_TABLES.RENDER.ELLIPSIS
            },
            {
                className: "ellipsis",
                data: "email",
                width: "100px",
                render: CONSTANT.DATA_TABLES.RENDER.ELLIPSIS
            },

            {
                className: "ellipsis",
                data: "state",
                width: "120px",
                render: function (data, type, row, meta) {
                    return data == 1 ? "正常状态" : "已删除";
                }
            },
            {
                className: "ellipsis",
                data: "create_time",
                width: "100px",
                render: CONSTANT.DATA_TABLES.RENDER.ELLIPSIS
            },
            {
                className: "ellipsis",
                data: "update_time",
                width: "100px",
                render: CONSTANT.DATA_TABLES.RENDER.ELLIPSIS
            },

            {
                className: "td-operation",
                data: null,
                defaultContent: "",
                width: "300px"
            },


        ],
        "createdRow": function (row, data, index) {
            if (data.role) {
                $(row).addClass("info");
            }
            var $btnDetail = $('<button type="button" class="btn btn-default btn-ssm btn-update">修改</button>');
            $('td', row).eq(11).append($btnDetail);

            var $btnDetailq = $('<button type="button"  class="btn btn-default btn-ssm btn-query">详情</button>');//定义按钮类型
            $('td', row).eq(11).append($btnDetailq);

            var $btnDetails = $('<button type="button"  class="btn btn-default btn-ssm btn-delete">刪除</button>');
            $('td', row).eq(11).append($btnDetails);

        },
        "drawCallback": function (settings) {
            $(":checkbox[name='cb-check-all']", $wrapper).prop('checked', false);
            $("tbody tr", $table).eq(0).click();
        }
    })).api();


    $table.on("change", ":checkbox", function () {//table中任何一个checkbox状态改变触发
        if ($(this).is("[name='cb-check-all']")) {// 如果是全选复选框
            $(":checkbox", $table).prop("checked", $(this).prop("checked"));//table下所有checkbox的prop属性跟全选复选框一致
        } else {                                                            //复选
            var checkbox = $("tbody :checkbox", $table);
            $(":checkbox[name='cb-check-all']", $table).prop('checked', checkbox.length == checkbox.filter(':checked').length);//全选中自动勾选全选
        }
    }).on('click', '.td-checkbox', function (event) {  //checkbox所在td内click触发选中
        !$(event.target).is(":checkbox") && $(":checkbox", this).trigger("click");

    }).on('click', ".btn-update", function () {   //修改事件绑定
        var item = _table.row($(this).closest('tr')).data();
        $('#id-update').val(item.id);
        $('#mobile-update').val(item.mobile);
        $('#password-update').val(item.password);
        $('#sex-update').val(item.sex);
        $('#birthdate-update').val(item.birthdate);
        $('#address-update').val(item.address);
        $('#email-update').val(item.email);
        $('#state-update').val(item.state);
        $('#create_time-update').val(item.create_time);
        $('#update_time-update').val(item.update_time);
        $('#myModal-update').modal('show');
    }).on('click', '.btn-delete', function () {     //删除事件绑定
        var item = _table.row($(this).closest('tr')).data();
        var flag = confirm("您确定要删除班级记录吗？");
        console.info(flag);
        var objP = {'id': item.id};
        if (flag) {
            $.ajax({
                type: 'post',
                url: '/user/deleteUser',
                cache: false,
                data: objP,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                dataType: "json",
                success: function (result) {
                    console.info(result);
                    if (result.success) {
                        _table.draw(false);
                    } else {
                        alert(result.message);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert("删除失败");
                }

            })
        }
    }).on('click', '.btn-query', function () {                          //详情事件绑定
        var item = _table.row($(this).closest('tr')).data();
        $('#id-query').val(item.id);
        $('#mobile-query').val(item.mobile);
        $('#password-query').val(item.password);
        $('#sex-query').val(item.sex);
        $('#birthdate-query').val(item.birthdate);
        $('#address-query').val(item.address);
        $('#email-query').val(item.email);
        $('#create_time-query').val(item.create_time);
        $('#update_time-query').val(item.update_time);
        if( item.state==1){
            $('#status-query').val("正常状态");
        }else{
            $('#status-query').val("已删除");
        }
        $('#myModal-query').modal('show');

    })


//班级信息增加提交

    $('#add-user-submit').on('click', function () {
        var objP = {};
        objP.mobile = $('#user-mobile').val().trim();
        objP.password = $('#user-password').val().trim();
        objP.sex = $('#user-sex').val().trim();
        objP.birthdate = $('#user-birthdate').val().trim();
        objP.address = $('#user-address').val().trim();
        objP.email = $('#user-email').val().trim();
        objP.create_time = $('#user-create_time').val().trim();
        objP.update_time = $('#user-update_time').val().trim();
        objP.state = $('#user-state').val().trim();
        console.info(objP);

        if (objP.mobile == "") {
            alert("用户名不能为空！！！");
            return;
        }

        $.ajax({
            type: 'post',
            url: '/user/addUser',
            cache: false,
            data: objP,
            dataType: 'json',
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            success: function (result) {
                console.info(result);
                if (result.success) {
                    _table.draw(false);
                    $('#myModal-add').modal('hide');
                    document.getElementById('add-user-form').reset();
                } else {
                    alert(result.message);
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("添加失败");
            }
        })
    })


//班级信息修改提交

    $('#update-user-submit').on('click', function () {
        var objP = {};
        objP.id = $('#id-update').val();
        objP.mobile = $('#mobile-update').val().trim();
        objP.password = $('#password-update').val().trim();
        objP.sex = $('#sex-update').val().trim();
        objP.birthdate = $('#birthdate-update').val().trim();
        objP.address = $('#address-update').val().trim();
        objP.email = $('#email-update').val().trim();
        objP.create_time = $('#create_time-update').val().trim();
        objP.update_time = $('#update_time-update').val().trim();
        objP.state = $('#state-update').val().trim();
        console.info(objP);

        if (objP.id == "" || objP.id < 0) {
            alert("无法修改，记录主键丢失");
            return;
        }
        if (objP.clazzCode == "") {
            alert("班级号不能为空！！！")
            return;
        }

        if (objP.clazzMajor == "") {
            alert("专业不能为空！！！");
            return;
        }

        $.ajax({
            type: 'post',
            url: '/user/updateUser',
            cache: false,
            data: objP,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            dataType: "json",
            success: function (result) {
                console.info(result);
                if (result.success) {
                    _table.draw(false);
                    $('#myModal-update').modal('hide');
                    document.getElementById('update-user-form').reset();
                } else {
                    alert(result.message);
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("修改失败");
            }

        })
    })

    //班级信息添加
    $('#btnAdd').on('click',function () {
        $('#myModal-add').modal('show');
    })

});