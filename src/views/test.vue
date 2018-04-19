<template>
  <el-tab-pane name="first" >
                    <span slot="label" ><i class="el-icon-tickets"></i>文章</span>
                    <p>文章</p>
                    <List :lists="lists"></List>
                </el-tab-pane>
                <el-tab-pane label="配置管理" name="second" >
                    <span slot="label"><i class="el-icon-tickets"></i>动态</span>
                    <p>动态</p>
                    <List :lists="lists"></List>
                </el-tab-pane>
                <el-tab-pane label="角色管理" name="third" >
                    <span slot="label"><i class="el-icon-tickets"></i>最新评论</span>
                    <p>最新评论</p>
                    <List :lists="lists"></List>
                </el-tab-pane>
                <el-tab-pane label="定时任务补偿" name="fourth"  >
                    <span slot="label"><i class="el-icon-tickets"></i>热门</span>
                    <p>热门</p>
                    <List :lists="lists"></List>
                </el-tab-pane>
</template>

<script>
export default {

}
</script>

<style>

</style>
