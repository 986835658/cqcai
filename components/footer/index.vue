<template>
  <div class="footer">
    <div class="first">
      <dl>
        <div class="text-box">
          <dt>平台指南</dt>

          <p>常见问题</p>
        </div>
      </dl>
      <dl>
        <div class="text-box">
          <dt>下载</dt>

          <p>key驱动下载</p>
        </div>
      </dl>
      <dl>
        <div class="text-box">
          <dt>友情链接</dt>

          <p>重庆市财政局</p>

          <p>chrome谷歌浏览器(推荐使用)</p>
        </div>
      </dl>
      <dl>
        <div class="text-box flex">
          <dt>联系我们</dt>

          <p>023-63782227(工作日)</p>
          <p>18183107831(节假日)</p>
          <p>
            传真：
            023-68423735
          </p>
          <p>
            邮箱：
            gmsoft@gmsoft.com.cn
          </p>
          <p>
            采购人QQ群：
            155042709
          </p>
          <p>
            供应商QQ群：
            126299855
          </p>
        </div>
      </dl>
    </div>
    <div class="second">
      
      <p>平台监督管理：重庆市财政局 平台代理机构：重庆港澳大家软件产业有限公司</p>
      <div class="ga">
        <img src="//www.gec123.com/xygh/img/llxqsjv3.png" alt />
        <p>
          渝公网安备 50010302000466号&nbsp; &nbsp;&nbsp;&nbsp; 增值电信业务经营许可证：渝
          B2-20160069 &nbsp;&nbsp;&nbsp;&nbsp; 增值电信业务经营许可证：渝
          B2-20160069
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.footer {
  width: 100%;
  .first {
    width: 100%;
    height: 300px;
    background: rgb(248, 248, 248);
    display: flex;
    justify-content: center;
    dl {
      width: 10%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .text-box {
        height: 80%;
        width: 80%;
        border-right: 1px solid gray;
        text-align: center;
      }
      .flex {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
      }
    }
  }
  .second {
    width: 100%;
    height: 100px;
    background: rgb(172, 100, 40);
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .ga{
        display: flex;
    }
  }
}
</style>