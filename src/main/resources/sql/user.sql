CREATE TABLE `user` (
`id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
`mobile` varchar(32) NULL DEFAULT NULL COMMENT '登录名，使用电话号码作为登录名',
`password` varchar(64) NULL DEFAULT NULL COMMENT '登录密码',
`sex` varchar(32) NULL DEFAULT NULL COMMENT '性别',
`birthdate` datetime(0) NULL DEFAULT NULL COMMENT '出生日期',
`address` varchar(250) NULL DEFAULT NULL COMMENT '详细地址',
`email` varchar(32) NULL DEFAULT NULL COMMENT '邮箱',
`state` varchar(32) NULL DEFAULT NULL COMMENT '-1:表示删除 ，1：正常状态',
`create_time` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
`update_time` datetime(0) NULL DEFAULT NULL COMMENT '修改时间',
PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 COMMENT = '用户表' ROW_FORMAT = Dynamic;
