<script setup lang="ts">
import { ref } from "vue";
import { PureTableBar } from "@/components/RePureTableBar";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import Delete from "@iconify-icons/ep/delete";
import EditPen from "@iconify-icons/ep/edit-pen";
import Search from "@iconify-icons/ep/search";
import Refresh from "@iconify-icons/ep/refresh";
import AddFill from "@iconify-icons/ri/add-circle-line";
import { ElFormItem } from "element-plus";
import { useColumns } from "./utils/columns";
import { useHook } from "./utils/hook";
import More from "@iconify-icons/ep/more-filled";

defineOptions({
  name: "stockPerception"
});

const formRef = ref();
const {
  handleDelete,
  handleSizeChange,
  handleCurrentChange,
  handleSelectionChange,
  searchConfigs,
  resetSearch,
  onSearch,
  dataList,
  pagination,
  loading,
  openForm
} = useHook();
const { columns } = useColumns();
</script>

<template>
  <div class="main">
    <el-form
      ref="formRef"
      :inline="true"
      class="search-form bg-bg_color w-[99/100] pl-8 pt-[12px]"
    >
      <el-form-item
        v-for="item in searchConfigs"
        :key="item.field"
        :label="item.label"
        :prop="item.field"
      >
        <el-input v-model="item.value" clearable class="!w-[200px]" />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          :icon="useRenderIcon(Search)"
          :loading="loading"
          @click="onSearch"
        >
          搜索
        </el-button>
        <el-button :icon="useRenderIcon(Refresh)" @click="resetSearch">
          重置
        </el-button>
      </el-form-item>
    </el-form>
    <PureTableBar title="数据列表" :columns="columns" @refresh="onSearch">
      <template #buttons>
        <el-button type="primary" :icon="useRenderIcon(AddFill)" @click="openForm('修改')">
          新增
        </el-button>
      </template>
      <template v-slot="{ size, dynamicColumns }">
        <pure-table
          border
          align-whole="center"
          showOverflowTooltip
          table-layout="auto"
          :loading="loading"
          :size="size"
          adaptive
          :data="dataList"
          :columns="dynamicColumns"
          :pagination="pagination"
          :paginationSmall="size === 'small'"
          :header-cell-style="{
            background: 'var(--el-table-row-hover-bg-color)',
            color: 'var(--el-text-color-primary)'
          }"
          @selection-change="handleSelectionChange"
          @page-size-change="handleSizeChange"
          @page-current-change="handleCurrentChange"
        >
          <template #operation="{ row }">
            <el-dropdown>
              <el-button
                class="ml-3 mt-[2px]"
                link
                type="primary"
                :size="size"
                :icon="useRenderIcon(More)"
              />
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>
                    <el-button
                      class="reset-margin"
                      link
                      type="primary"
                      :size="size"
                      :icon="useRenderIcon(EditPen)"
                      @click="openForm('修改', row)"
                    >
                      修改
                    </el-button>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <el-popconfirm
                      :title="`是否确认删除这条数据`"
                      @confirm="handleDelete(row)"
                    >
                      <template #reference>
                        <el-button
                          class="reset-margin"
                          link
                          type="primary"
                          :size="size"
                          :icon="useRenderIcon(Delete)"
                        >
                          删除
                        </el-button>
                      </template>
                    </el-popconfirm>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </template>
        </pure-table>
      </template>
    </PureTableBar>
  </div>
</template>

<style scoped lang="scss">
:deep(.el-dropdown-menu__item i) {
  margin: 0;
}

.search-form {
  :deep(.el-form-item) {
    margin-bottom: 12px;
  }
}
</style>
