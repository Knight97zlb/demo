<script setup>

</script>

<template>
    <div class="login">
        <p class="login-title">数字化监督系统</p>
        <div class="login-content">
            <div class="login-main">
                <div class="login-panel">
                    <el-form
                    ref="ruleFormRef"
                    :model="temp"
                    status-icon
                    :rules="rules"
                    label-width="80px"
                    class="demo-ruleForm"
                    >
                        <el-form-item label="用户名" prop="user">
                            <el-input v-model="temp.user" />
                        </el-form-item>
                        <el-form-item label="密码" prop="password">
                            <el-input type="password" v-model="temp.password" autocomplete="off"/>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="warning" plain @click="login(ruleFormRef)"
                            >登录</el-button
                        >
                        </el-form-item>
                    </el-form> 
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, reactive} from 'vue'
import {useRouter} from "vue-router";     // 引入路由
import axios from '../utils/request'
const router = useRouter();     // 创建路由对象
const temp = reactive({
    user: 'Limbo',
    password: 'ad981011'
})
const rules =reactive({
    user: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
    ]
})
const ruleFormRef = ref();      // 创建dom引用，获取表单对象
function login(ruleFormRef) {   // 登录
    ruleFormRef.validate(
        async valid=>{
            if(valid){
                let res=await axios.post(`get_login`,temp);   // 发送请求
                console.log(res);
                let {code,msg}=res.data;
                if(code==200){
                    router.push('/home')    // 跳转到首页
                }else{
                    alert(msg)
                }
            }else{
                console.log('error submit!!')
                return false
            }
        }
    )
}
</script>