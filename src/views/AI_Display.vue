<template>
  <div>
    <div class="aiPage">
      <div class="uploadPic">
        <h1 style="text-align: center;">
          上传图片
        </h1>

        <el-button type="primary">下载</el-button>
      </div>

      <div class="showPic">
        <h1 style="text-align: center;">
          处理结果
        </h1>
        <p>
          放处理好的图片
        </p>
        <img :src="picurl" alt="beachball" />
      </div>
    </div>

    <div class="returnGuide">
      <el-button type="primary" @click="returnToUpload()"
        >返回上传界面</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "AI",
  data() {
    return {
      picurl:'',
    };
  },
  computed: {},
  methods: {
    returnToUpload() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style>
.aiPage {
  display: flex;
}
.uploadPic {
  box-sizing: border-box;
  padding-left: 1%;
  margin: 1% 0.5% 0 1%;
  width: 50%;
  height: 550px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  flex-direction: column;
}
.upLoad {
  text-align: center;
}
.buttonWrapper {
  box-sizing: border-box;
  text-align: center;
  position: relative;
  top: 165px;
}
.showPic {
  box-sizing: border-box;
  padding-left: 1%;
  margin: 1% 1% 0 0.5%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  height: 550px;
  width: 50%;
}
.returnGuide {
  display: flex;
  box-sizing: border-box;
  padding-top: 1%;
  justify-content: center;
}
</style>
