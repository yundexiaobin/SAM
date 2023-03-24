<script setup lang="ts">
import { message } from "@/utils/message";
const handleEdit = () => {
  message(
    `您编辑了第 ${props.index + 1} 行，数据为：${JSON.stringify(props.row)}`,
    {
      type: "success"
    }
  );
};

const props = defineProps({
  /** 打字速度，以每一步之间的毫秒数为单位，默认`200` */
  index: {
    type: Number,
    default: 0
  },
  row: {
    default: null
  },

  Id: {
    type: Number,
    default: 0
  },

  AccountId: {
    type: Number,
    default: null
  }
});

defineOptions({
  name: "Basic"
});
</script>

<template>
  <el-dropdown trigger="click">
    <span class="el-dropdown-link navbar-bg-hover select-none">
      <p>操作</p>
    </span>
    <template #dropdown>
      <el-dropdown-menu class="translation">
        <el-dropdown-item @click="handleEdit()"> 启动 </el-dropdown-item>
        <el-dropdown-item @click="handleEdit()"> 停止 </el-dropdown-item>
        <el-dropdown-item @click="handleEdit()"> 设置名称 </el-dropdown-item>
        <el-dropdown-item @click="handleEdit()"> 设置账号 </el-dropdown-item>
        <el-dropdown-item @click="handleEdit()"> 订阅 </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<style scoped></style>
