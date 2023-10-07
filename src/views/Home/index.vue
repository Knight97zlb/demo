<template>
    <div id="module">
      <el-container>
        
        <!--左侧导航栏---->
          <Nav />        
        <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
        </el-container>
      </el-container>
    </div>
  </template>

<script setup>
import Nav from './nav.vue'    // 引入左侧导航栏
</script>