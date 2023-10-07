<template>
    <!--左侧导航栏-->
    <el-aside width="200px">
        <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        >
            <el-menu-item index="1">
                <el-icon><icon-menu /></el-icon>
                <span>首页</span>
            </el-menu-item>

            <el-menu-item index="2">
                <el-icon><icon-menu /></el-icon>
                <span>管理</span>
            </el-menu-item>
        </el-menu> 
    </el-aside>
</template>

<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

</script>
  