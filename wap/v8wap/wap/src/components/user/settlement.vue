<template>
  <div class="home">
    <Header :left="left" :right="right" :text="text"/>
    <div class="main">
      <ul class="settlement">
        <li class="settlement_li wx">
          <div><img src="../../assets/images/huosdk_tg_wx.png" alt=""> </div>
          <div>
            <h4>微信</h4>
            <p>户名：王思聪</p>
            <p>账号：123123213</p>
          </div>
          <div>
            <button @click="wxModify(1)">修改</button>
          </div>
        </li>
        <li class="settlement_li zfb">
          <div> <img src="../../assets/images/huosdk_tg_zfb.png" alt=""></div>
          <div>
            <h4>支付宝</h4>
            <p>户名：</p>
            <p>账号：</p>
          </div>
          <div>
            <button @click="zfbModify(1)">添加</button>
          </div>
        </li>
        <li class="settlement_li yhk">
          <div> <img src="../../assets/images/huosdk_tg_yl.png" alt=""></div>
          <div>
            <h4>银行卡</h4>
            <p>户名：</p>
            <p>账号：</p>
            <p>银行名称：</p>
            <p>支行名称：</p>
          </div>
          <div>
            <button @click="yhkModify(1)">添加</button>
          </div>
        </li>
      </ul>
    </div>
    <div class="addSettle" v-if="wx === 1">
      <div class="addSettleBox">
          <h4 class="addSettleBox_h4">添加结算信息</h4>
          <div class="addSettleBox_div userName disable"><span>用&nbsp;&nbsp;户&nbsp;&nbsp;名：</span><input class="disable" type="text" value="王思聪" disabled="disabled"></div>
          <div class="addSettleBox_div openWay disable"><span>开户方式：</span><input class="disable" type="text" disabled="disabled" value="微信"></div>
          <div class="addSettleBox_div"><span>户&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</span><input type="text"></div>
          <div class="addSettleBox_div"><span>账&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：</span><input type="text"></div>
          <div class="yorn">
            <h4 @click="wxModify(0)">取消</h4>
            <h4 @click="wxModify(0)">确定</h4>
          </div>
      </div>
    </div>
    <div class="addSettle" v-if="zfb === 1">
      <div class="addSettleBox">
          <h4 class="addSettleBox_h4">添加结算信息</h4>
          <div class="addSettleBox_div userName disable"><span>用&nbsp;&nbsp;户&nbsp;&nbsp;名：</span><input class="disable" type="text" value="王思聪" disabled="disabled"></div>
          <div class="addSettleBox_div openWay disable"><span>开户方式：</span><input class="disable" type="text" disabled="disabled" value="支付宝"></div>
          <div class="addSettleBox_div"><span>户&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</span><input type="text"></div>
          <div class="addSettleBox_div"><span>账&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：</span><input type="text"></div>
          <div class="yorn">
            <h4 @click="zfbModify(0)">取消</h4>
            <h4 @click="zfbModify(0)">确定</h4>
          </div>
      </div>
    </div>
    <div class="addSettle" v-if="yhk === 1">
      <div class="addSettleBox">
          <h4 class="addSettleBox_h4">添加结算信息</h4>
          <div class="addSettleBox_div userName disable"><span>用&nbsp;&nbsp;户&nbsp;&nbsp;名：</span><input class="disable" type="text" value="王思聪" disabled="disabled"></div>
          <div class="addSettleBox_div openWay disable"><span>开户方式：</span><input class="disable" type="text" disabled="disabled" value="银行卡"></div>
          <div class="addSettleBox_div">
            <span >开户银行：</span>
            <select name="" id="">
              <option value="建设银行">建设银行</option>
              <option value="兴业银行">兴业银行</option>
              <option value="平安银行">平安银行</option>
              <option value="招商银行">招商银行</option>
            </select>
          </div>
          <div class="addSettleBox_div"><span>开户支行：</span><input type="text"></div>
          <div class="addSettleBox_div"><span>户&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</span><input type="text"></div>
          <div class="addSettleBox_div"><span>账&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：</span><input type="text"></div>
          <div class="yorn">
            <h4 @click="yhkModify(0)">取消</h4>
            <h4 @click="yhkModify(0)">确定</h4>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import header from '../public/header.vue'
export default {
  components: {
    'Header': header

  },
  computed: {

  },
  watch: {

  },
  data () {
    return {
      left: 1,
      right: 0,
      text: '结算列表',
      wx: 0,
      zfb: 0,
      yhk: 0
    }
  },
  created () {
  },
  methods: {
    wxModify (num) {
      this.wx = num
    },
    zfbModify (num) {
      this.zfb = num
    },
    yhkModify (num) {
      this.yhk = num
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  background-color: #f5f6ff;
}
.main{
  .settlement{
    .settlement_li{
      padding: 0.32rem 0;
      background-color: #fff;
      display: flex;
      border-bottom: 1px solid #E3E3E3;
      div:nth-child(1){
        width: 1.4rem;
        padding-top: 0.2rem;
        img{
          width: 0.8rem;
          height: 0.8rem;
          border-radius: 50%;
          display: block;
          margin: 0 auto;
        }
      }
      div:nth-child(2){
        flex: 1;
        h4{
          font-size: 0.32rem;
          color: #333;
        }
        p{
          font-size: 0.24rem;
          color: #666;
          padding-top: 0.2rem;
        }
      }
      div:nth-child(3){
        width: 1.7rem;
        button{
          color: #fff;
          width: 1.1rem;
          height: 0.6rem;
          margin: 0.3rem auto;
          border: none;
          outline: none;
          background-color: #409FFF;
          font-size: 0.26rem;
          border-radius: 0.1rem;
        }
      }

    }
  }
}
.wx button{
  background-color: #67C23A !important;
}
.addSettle{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);

}
.addSettleBox{
  width: 5.8rem;
  position: absolute;
  left: 50%;
  margin-left: -2.9rem;
  top: 50%;
  transform: translateY(-50%);
  background-color: #fff;
  border-radius: 0.07rem;
  &_h4{
    font-size: 0.3rem;
    text-align: center;
    line-height: 1rem;
  }
  &_div{
    width: 5.2rem;
    height: 0.75rem;
    line-height: 0.75rem;
    font-size: 0.26rem;
    margin: 0 auto;
    border: 1px solid #EEEEEE;
    margin-top: 0.15rem;
    border-radius: 0.05rem;
    background-color: #F9F9F9;
    display: flex;
    padding-left: 0.22rem;
    color: #111;
    span{
      width: 30%;
    }
    input{
      height: 100%;
      width: 70%;
      background-color: #F9F9F9;
    }
    select{
      height: 100%;
      width: 70%;
      background-color: #F9F9F9;
      border: none;
      outline: none;
    }
  }
  .disable{
    background-color: #F5F5F9;
  }
}
.userName,.openWay{
  color: #999;
  input{
    color: #999;
    background-color: #F9F9F9;
  }
}
.yorn{
  display: flex;
  margin-top: 0.25rem;
  height: 1rem;
  h4{
    flex: 1;
    color: #777;
    text-align: center;
    font-size: 0.28rem;
    line-height: 1rem;
  }
  h4:nth-child(1){
    border-top:1px solid #EEEEEE;
    border-right:1px solid #EEEEEE;
  }
  h4:nth-child(2){
    border-top:1px solid #EEEEEE;
    color: #409FFF;
  }
}
.xialaBox{
  width: 0.85rem;
  height: 100%;
  position: relative;
  .xiala{
    display: block;
    width: 0.26rem;
    height: 0.16rem;
    background: url('../../assets/images/huosdk_tg_down_002.png') no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -0.13rem;
    margin-top: -0.08rem;
  }
}

</style>
