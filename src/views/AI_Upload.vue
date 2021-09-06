<template>
  <div>
    <div class="UploadPic">
      <div class="ImgWrapper">
        <img src="../assets/testdog.png" alt="" />
        <img src="../assets/testcat.png" alt="" />
        <img src="../assets/testdg01.png" alt="" />
      </div>
      <div class="UploadWrapper">
        <div class="TextWrapper">
          <h2>在线删除图片背景</h2>
          <h3>更简单，更准确。</h3>
        </div>
        <div class="Upload">
          <input
            type="file"
            name="file"
            accept="image/*"
            @change="handleSuccess"
            ref="avatarInput"
          />
          <div class="finish">
            <el-button
              type="primary"
              @click="UploadPicture()"
              style="margin-top: 10px"
              >生成并查看</el-button
            >
          </div>
        </div>
      </div>
    </div>
    <div class="Introduction-Wrapper">
      <div class="Introduction">
        <h1>
          上传图片快速抠图
        </h1>
        <p>
          AI自动识别需要保留的主体并去除背景。
        </p>
        <img src="../assets/test.png" alt="" />
      </div>
      <div class="Introduction">
        <h1>
          自动识别图片元素
        </h1>
        <p>
          支持更多图片元素识别，新手小白都能用。
        </p>
        <img src="../assets/test.png" alt="" />
      </div>
      <div class="Introduction">
        <h1>
          发丝细节处理
        </h1>
        <p>
          不用再为抠出的人像发型太“假”而烦恼。
        </p>
        <img src="../assets/test.png" alt="" />
      </div>
      <div class="Introduction">
        <h1>
          人像场景制作
        </h1>
        <p>
          丰富层次，给设计更多可能性。
        </p>
        <img src="../assets/test.png" alt="" />
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // picurl: "",//图片url
    };
  },
  created: {},
  methods: {
    // 上传图片到后端 复制粘贴的 我还没看
    handleSuccess(e) {
      const file = e.target.files[0];
      // 限制上传图片类型
      if (!/\.(jpg|jpeg|png|JPG|PNG)$/.test(e.target.value)) {
        this.$message({
          message: "图片类型要求：jpeg、jpg、png",
          type: "error",
        });
        return false;
      }
      // 图片大小不超过1M
      if (file.size / (1024 * 1024) > 1) {
        this.$message({
          message: "图片大小不超过1M",
          type: "error",
        });
        return false;
      }
      // 文件转化base64格式，用于页面预览（或调用接口上传图片，获取图片地址，再赋值
      var reader = new FileReader();
      reader.onload = (data) => {
        this.img_url = data.target.result; // 图片赋值
      };
      reader.readAsDataURL(file);
      e.target.value = ""; // ！！！重要 input上传图片，可以连续上传同一张图片
    },

    UploadPicture() {
      this.$router.push({ path: "/AI_Display" });
    },
    // 从服务器获取图片 下午用的这个 成功了
    // https://blog.csdn.net/qq_34814495/article/details/110001931?utm_source=app&app_version=4.14.1+
    getPic() {
      let that = this;

      this.$axios({
        method: "get",
        url: "http://127.0.0.1:5000/getPic",
        responseType: "arraybuffer", // 最为关键
      }).then(function(response) {
        that.picurl =
          "data:image/jpeg;base64," + that.arrayBufferToBase64(response.data);
      });
    },
    // ArrayBuffer转为base64字符串
    arrayBufferToBase64(buffer) {
      //第一步，将ArrayBuffer转为二进制字符串
      var binary = "";
      var bytes = new Uint8Array(buffer);
      var len = bytes.byteLength;
      for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      //将二进制字符串转为base64字符串
      return window.btoa(binary);
    },
  },
};
</script>

<style>
.UploadPic {
  display: flex;
  box-sizing: border-box;
  padding: 1% 1% 1% 1%;
  height: 500px;
  /* border: solid; */
  background-color: #92c8e0;
}
.ImgWrapper {
  flex: 1.7;
  align-self: flex-end;
  white-space: nowrap;
}
.ImgWrapper img {
  width: 300px;
  margin-right: 5px;
  /* height: 300px; */
}
.UploadWrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.TextWrapper {
  flex: 6;
}
.UploadWrapper h2 {
  font-size: 55px;
  color: #ffffff;
}
.UploadWrapper h3 {
  font-size: 32px;
  color: #ffffff;
}
.Upload {
  flex: 2;
}
.Upload input {
  border: 1px solid rgba(34, 36, 38, 0.15);
}
.Introduction-Wrapper {
  display: flex;
  box-sizing: border-box;
  padding: 1% 1% 0 1%;
  justify-content: space-between;
}
.Introduction {
  width: 23%;
  height: 250px;
  box-sizing: border-box;
  padding: 0 1% 1% 1%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.Introduction p {
  color: #636c78;
  font-size: 14px;
}
.Introduction img {
  width: 160px;
  height: 120px;
}
</style>
