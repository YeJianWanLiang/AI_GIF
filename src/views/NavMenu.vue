<template>
  <div>
    <div class="menuWrapper">
      <el-menu
        class="navMenu"
        mode="horizontal"
        @select="handleSelect"
        :default-active="defaultActive"
        :unique-opened="true"
        background-color="#92C8E0"
        text-color="#FFFFFF"
        active-text-color="#F5BC49"
        router
      >
        <div style="display: flex; margin: auto">
          <el-menu-item index="/AI_Upload">AI抠图</el-menu-item>
          <el-menu-item index="/GIF_Upload">GIF生成</el-menu-item>
        </div>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultActive: "",
    };
  },
  methods: {
    handleSelect(index) {
      console.log(index);
      this.defaultActive = index;
      this.$router.push({
        name: index,
      });
    },
  },
};
</script>

<style>
.menuWrapper {
  box-sizing: border-box;
}
.navMenu {
  display: flex;
}
</style>
