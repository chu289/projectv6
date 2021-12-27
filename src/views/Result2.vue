<template>
  <div class="result">
    <div class="result__header">
      <button></button>
      <!-- <img src="@/assets/searchW.png" alt=""> -->
      <input type="text" />
      <h3>醫療好評網</h3>
    </div>
    <div class="result__topTenList">
      <!-- <img src="@/assets/左.png" alt="" id="leftMove">
				<img src="@/assets/Group56.png" alt="" id="photo">
				<img src="@/assets/Group56.png" alt="" id="photo">
				<img src="@/assets/Group56.png" alt="" id="photo">
				<img src="@/assets/Group56.png" alt="" id="photo">
				<img src="@/assets/Group56.png" alt="" id="photo">
				<img src="@/assets/右.png" alt="" id="rightMove"> -->
    </div>
    <div class="result__flex">
      <div class="filter__flex">
        <div class="filter__num">結果數:</div>
        <div class="filter__distance__switch"></div>
        <input type="text" class="filter__distance__input" />
        <div class="filter__distance">
          距離<br /><br />
          <span>&emsp; &emsp; &emsp; &emsp; 公里數</span>
        </div>
        <div class="filter__area">選擇地區</div>
        <div class="filter__select">
          <h3>全區</h3>
          <h3>台北市</h3>
          <h3>新北市</h3>
          <h3>基隆市</h3>
          <h3>桃園市</h3>
          <h3>新竹市</h3>
          <h3>新竹縣</h3>
          <h3>苗栗縣</h3>
          <h3>台中市</h3>
          <h3>彰化縣</h3>
          <h3>南投縣</h3>
          <h3>雲林縣</h3>
          <h3>嘉義縣</h3>
          <h3>嘉義市</h3>
          <h3>台南市</h3>
          <h3>高雄市</h3>
          <h3>屏東縣</h3>
          <h3>宜蘭縣</h3>
          <h3>花蓮縣</h3>
          <h3>台東縣</h3>
          <h3>澎湖縣</h3>
          <h3>連江縣</h3>
          <h3>金門縣</h3>
        </div>
        <div class="filter_score">
          評分範圍<br />
          <span>0-100</span>
        </div>
      </div>
      <div class="result__hospital">
        <div class="hospitalInfoBox">
          <div class="hospitalInfo1">
            <div class="info__top"></div>
            <div class="info__background">
              <!-- <img src="@/assets/1684.png" alt=""> -->
              <div class="info__text">
                天主教輔仁大學附設醫院<br />
                <span class="sub1">地址</span><br />
                <span class="sub2">243新北市泰山區貴子路69號</span>
              </div>
              <div class="info__detail">詳細資訊</div>
              <div class="info__score"></div>
            </div>
          </div>
          <div class="hospitalInfo2">
            <div class="info__top"></div>
            <div class="info__background">
              <!-- <img src="@/assets/1684.png" alt=""> -->
              <div class="info__text">
                天主教輔仁大學附設醫院<br />
                <span class="sub1">地址</span><br />
                <span class="sub2">243新北市泰山區貴子路69號</span>
              </div>
              <div class="info__detail">詳細資訊</div>
              <div class="info__score"></div>
            </div>
          </div>
          <div class="hospitalInfo3">
            <div class="info__top"></div>
            <div class="info__background">
              <!-- <img src="@/assets/1684.png" alt=""> -->
              <div class="info__text">
                天主教輔仁大學附設醫院<br />
                <span class="sub1">地址</span><br />
                <span class="sub2">243新北市泰山區貴子路69號</span>
              </div>
              <div class="info__detail">詳細資訊</div>
              <div class="info__score"></div>
            </div>
          </div>
        </div>
        <div class="hospital__button">
          <!-- <img src="@/assets/左.png" alt="" class="leftMove"> -->
          <div class="hospital__page">1&nbsp;/&nbsp;10</div>
          <!-- <img src="@/assets/右.png" alt="" class="rightMove"> -->
        </div>
      </div>

      <div class="googleMap"></div>
    </div>
  </div>
</template>
<style>
.result {
  position: absolute;
  width: 1280px;
  height: 720px;
  background-color: #f3f0f0;
  top: 7119px; /* test */
}
.result .result__header {
  width: 1280px;
  height: 48px;
  display: flex;
  background-color: #00d1b2;
}
.result__header button {
  margin-left: 28px;
  width: 50px;
  height: 48px;
  /* background: url("./searchW.png") no-repeat center; */
  background-size: 100%;
  border: none;
}
.result__header input {
  margin-left: 10px;
  margin-top: 7px;
  width: 262px;
  height: 33px;
  opacity: 0.8;
  border-width: 0px;
  border-radius: 50px;
  /* font: ; */
}
.result__header h3 {
  margin-left: 180px;
  font-family: Noto Sans SC;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  color: #ffffff;
  line-height: 144%;
}
.result .result__topTenList {
  margin-top: 11px;
  margin-left: 25px;
  width: 1232px;
  height: 136px;
  display: flex;
  background-color: #ffffff;
}
.result__topTenList #leftMove {
  margin-left: 4px;
  margin-top: 48px;
  margin-right: 16px;
  width: 40px;
  height: 40px;
}
.result__topTenList #rightMove {
  margin-left: 8px;
  margin-top: 48px;
  margin-right: 4px;
  width: 40px;
  height: 40px;
}
.result__topTenList #photo {
  margin-bottom: 3px;
  margin-right: 12px;
  width: 212px;
}
.result .result__flex {
  display: flex;
}
.result .filter__flex {
  width: 143px;
  height: 503px;
  margin-left: 25px;
  margin-top: 11px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
}
.filter__flex .filter__num {
  margin-top: 12px;
  width: 142px;
  height: 24px;
  font-family: Noto Sans SC;
  font-style: normal;
  font-size: 12px;
  color: #000000;
  text-align: center;
  line-height: 144%;
  letter-spacing: 0.08em;
}
.filter__flex .filter__distance {
  margin-top: 8px;
  width: 142px;
  height: 59px;
  font-family: Noto Sans SC;
  font-style: normal;
  font-size: 12px;
  font-weight: bold;
  color: #000000;
  text-align: center;
  line-height: 144%;
  letter-spacing: 0.08em;
}
.filter__flex .filter__distance__switch {
  position: absolute;
  top: 252px;
  left: 57px;
  width: 16px;
  height: 16px;
  text-align: center;
  border-radius: 20px;
  border-color: #00d1b2;
  border-width: 1px;
  border-style: solid;
}
.filter__flex .filter__distance__input {
  position: absolute;
  width: 64px;
  height: 20px;
  background-color: #00d1b2;
  border-radius: 20px;
  border-width: 0px;
  top: 279px;
  left: 44px;
  text-align: center;
}
.filter__distance span {
  font-weight: normal;
}
.filter__flex .filter__area {
  margin-top: 2px;
  width: 142px;
  height: 25px;
  font-family: Noto Sans SC;
  font-style: normal;
  font-size: 12px;
  font-weight: bold;
  color: #000000;
  text-align: center;
  line-height: 144%;
  letter-spacing: 0.08em;
}
.filter__flex .filter__select {
  margin-left: 20px;
  margin-right: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 98px;
  height: 294px;
  font-family: Noto Sans SC;
  font-style: normal;
  font-size: 12px;
  color: #000000;
  line-height: 144%;
  letter-spacing: 0.08em;
}
.filter__select h3 {
  font-weight: normal;
}
.filter__flex .filter_score {
  margin-top: 13px;
  width: 143px;
  height: 56px;
  font-family: Noto Sans SC;
  font-style: normal;
  font-size: 12px;
  font-weight: bold;
  color: #000000;
  text-align: center;
  line-height: 144%;
  letter-spacing: 0.08em;
}
.filter_score span {
  color: #00d1b2;
}
.result .result__hospital {
  display: flex;
  flex-direction: column;
}
.result .hospitalInfoBox {
  margin-top: 33px;
  margin-left: 19px;
  width: 560px;
  height: 400px;
  display: flex;
  justify-content: space-between;
}
.hospitalInfoBox .hospitalInfo1 {
  margin-right: 16px;
  display: flex;
  flex-direction: column;
  width: 176px;
  height: 400px;
}
.hospitalInfoBox .hospitalInfo2 {
  margin-right: 16px;
  display: flex;
  flex-direction: column;
  width: 176px;
  height: 400px;
}
.hospitalInfoBox .hospitalInfo3 {
  display: flex;
  flex-direction: column;
  width: 176px;
  height: 400px;
}
.hospitalInfoBox .info__top {
  width: 176px;
  height: 25px;
  background-color: #00d1b2;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
}
.hospitalInfoBox .info__background {
  background-color: #ffffff;
  height: 375px;
}
.hospitalInfoBox img {
  width: 176px;
  height: 112px;
}
.hospitalInfoBox .info__text {
  margin-top: 8px;
  margin-left: 15px;
  width: 150px;
  height: 104px;
  font-family: Noto Sans SC;
  font-style: normal;
  font-size: 16px;
  font-weight: bold;
  color: #000000;
  text-align: center;
  line-height: 144%;
  letter-spacing: 0.18em;
}
.info__text .sub1 {
  font-size: 12px;
  font-weight: 600;
}
.info__text .sub2 {
  font-size: 8px;
  font-weight: 400;
  letter-spacing: 0em;
}
.hospitalInfoBox .info__detail {
  margin-top: 2px;
  margin-left: 44px;
  width: 88px;
  height: 16px;
  font-family: Noto Sans SC;
  font-style: normal;
  font-size: 12px;
  font-weight: 600;
  color: #000000;
  text-align: center;
  line-height: 144%;
  letter-spacing: 0.18em;
  border-radius: 5px;
  border-color: #00d1b2;
  border-style: solid;
}
.result__hospital .hospital__button {
  margin-left: 159px;
  margin-top: 21px;
  width: 280px;
  height: 56px;
  border-radius: 50px;
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
}
.hospital__button .leftMove {
  margin-left: 20px;
  margin-top: 8px;
  width: 40px;
  height: 40px;
}
.hospital__button .rightMove {
  margin-right: 20px;
  margin-top: 8px;
  width: 40px;
  height: 40px;
}
.hospital__button .hospital__page {
  font-family: Noto Sans SC;
  font-style: normal;
  font-size: 24px;
  font-weight: bold;
  color: #000000;
  text-align: center;
  line-height: 56px;
  letter-spacing: 0.18em;
}
</style>
