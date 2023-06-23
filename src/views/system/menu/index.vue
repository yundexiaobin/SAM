<script setup lang="tsx">
import { ref, watch } from "vue";
import { useMenu } from "./hook";
import { ElTree } from "element-plus";
import { addDialog } from "@/components/ReDialog/index";
import editForm from "@/views/system/menu/editForm.vue";
import { SysMenuResponse } from "@/api-services/data-contracts";

defineOptions({
  name: "SystemMenu"
});
const treeSelectProps = {
  children: "children",
  label: "name",
  value: "id"
};
const { formData, dataList, handleNodeClick, onSubmit, onDelete } = useMenu();
const filterText = ref("");
const treeRef = ref<InstanceType<typeof ElTree>>();
watch(filterText, val => {
  treeRef.value!.filter(val);
});
const filterNode = (value, data) => {
  if (!value) return true;
  return data.name.includes(value);
};
const buttonText = ref("全部展開");
const buttonTextClick = () => {
  if (buttonText.value == "全部展開") {
    expandAll(true);
  } else {
    expandAll(false);
  }
};
const expandAll = bool => {
  if (bool === true) {
    buttonText.value = "全部收起";
  } else {
    buttonText.value = "全部展開";
  }
  const nodes = treeRef.value.store.nodesMap;
  for (const i in nodes) {
    nodes[i].expanded = bool;
  }
};

function createOrUpdateMenu(newData?: SysMenuResponse) {
  onSubmit(newData);
  expandAll(true);
}

function onBeforeSureClick() {
  const newData = ref<SysMenuResponse>({
    isHide: false,
    isIframe: false,
    status: 1,
    order: 1
  });
  addDialog({
    width: "50%",
    title: "添加菜单",
    props: {
      form: newData,
      data: dataList
    },
    contentRenderer: () => editForm,
    beforeSure: done => {
      createOrUpdateMenu(newData.value);
      done();
    }
  });
}
</script>

<template>
  <div class="main">
    <div class="w-[30%] float-left">
      <el-row>
        <el-button type="primary" @click="onBeforeSureClick"
          >添加菜單</el-button
        >
        <el-button type="success" @click="buttonTextClick"
          >{{ buttonText }}
        </el-button>
      </el-row>
      <el-input placeholder="输入关键字进行过滤" v-model="filterText" />
      <el-tree
        ref="treeRef"
        :data="dataList"
        :props="treeSelectProps"
        @node-click="handleNodeClick"
        :filter-node-method="filterNode"
      />
    </div>
    <div class="float-left w-[50%] ml-5">
      <edit-form :form="formData" :data="dataList" />
      <el-row class="mb-4">
        <el-button
          type="primary"
          @click="createOrUpdateMenu(formData)"
          class="mb-4"
          >提交
        </el-button>
        <el-button type="danger" @click="onDelete(formData.id)" class="mb-4"
          >删除
        </el-button>
      </el-row>
    </div>
  </div>
</template>

<style scoped lang="scss">
:deep(.el-dropdown-menu__item i) {
  margin: 0;
}
</style>
