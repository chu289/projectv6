<template>
	<div class="home">
		<div class="wrap">
			<div class="header">
				<!-- <div class="header__menu">
          <img src="@/assets/menu.png" alt="" />
        </div> -->
				<div class="header__title">
					<h3>醫療好評網</h3>
				</div>
				<Popup
					class="searchDialog"
					:showDialog="showSearchDialog"
					:cancel="cancel"
				>
					<div class="content">
						<i class="searchIcon" @click="search"
							><img src="@/assets/search.png" alt=""
						/></i>
						<custom-select
							class="regionSelect"
							:class="[
								regionShow
									? 'regionSelect__optionShow optionShow'
									: 'regionSelect__optionHide optionHide',
							]"
							:optionShow="ROotionShow"
							:optionList="regionList"
							:selectedValue="regionValue"
							:selectedOption="regionSelected"
							:placeholder="regionPlaceholder"
						>
							<i class="icon"
								><img src="@/assets/Group 20.svg" alt=""
							/></i>
						</custom-select>
						<custom-select
							class="hospitalSelect"
							:class="[
								hospitalShow
									? 'hospitalSelect__optionShow optionShow'
									: 'hospitalSelect__optionHide optionHide',
							]"
							:optionShow="HOotionShow"
							:optionList="hospitalList"
							:selectedValue="hospitalValue"
							:selectedOption="hospitalSelected"
							:placeholder="hospitalPlaceholder"
						>
							<i class="icon"
								><img src="@/assets/Group 21.svg" alt=""
							/></i>
						</custom-select>
						<custom-select
							class="doctorSelect"
							:class="[
								doctorShow
									? 'doctorSelect__optionShow optionShow'
									: 'doctorSelect__optionHide optionHide',
							]"
							:optionShow="DOotionShow"
							:optionList="doctorList"
							:selectedValue="doctorValue"
							:selectedOption="doctorSelected"
							:placeholder="doctorPlaceholder"
						>
							<i class="icon"
								><img src="@/assets/Group 21.svg" alt=""
							/></i>
						</custom-select>
						<h3 class="rateText">評分</h3>
						<form class="range__input">
							<input
								type="number"
								class="min"
								:value="minValue"
								@change="minCValue"
								oninput="if(value<0)value=0;if(value>100)value=100"
							/>
							<div class="line"></div>
							<input
								type="number"
								class="max"
								:value="maxValue"
								@change="maxCValue"
								oninput="if(value<0)value=0;if(value>100)value=100"
							/>
							<h4>請輸入0-100</h4>
						</form>
					</div>
				</Popup>
				<div class="header__search" @click="search__box">
					<div class="sub1">O</div>
					<div class="sub1__line"></div>
					<div class="sub2">PEN</div>
				</div>
				<a class="scroll__btn" href="#subtitle">
					<img src="@/assets/nextPage.png" alt="" />
				</a>
				<div class="header__subtitle" id="subtitle">
					<h3>醫療好評網</h3>
					<h4>
						給您的安心有保障的醫療評價資訊，
						<br />簡單明瞭、方便操作 。
					</h4>
				</div>
			</div>
		</div>
		<div class="content1">
			<div class="content1__title">
				<h3>你有這些困擾嗎?</h3>
			</div>
			<div class="content1__range range1">
				<div class="content1__box">
					<div class="content1_background">
						<img src="@/assets/Union.svg" alt="" />
					</div>
					<div class="content1__box__img">
						<img src="@/assets/thunder.png" alt="" />
					</div>
					<h3>臨時找醫院，<br />妳怕雷嗎?</h3>
				</div>
				<div class="content1__box">
					<div class="content1_background">
						<img src="@/assets/Union.svg" alt="" />
					</div>
					<div class="content1__box__img">
						<img src="@/assets/talk.png" alt="" />
					</div>
					<h3>道聽塗說是不是你<br />求醫的唯一參考?</h3>
				</div>
			</div>
			<div class="content1__range range2">
				<div class="content1__box">
					<div class="content1_background">
						<img src="@/assets/Union.svg" alt="" />
					</div>
					<div class="content1__box__img">
						<img src="@/assets/time.png" alt="" />
					</div>
					<h3>怕花太多時間尋找<br />妳心中的良醫嗎?</h3>
				</div>
				<div class="content1__box">
					<div class="content1_background">
						<img src="@/assets/Union.svg" alt="" />
					</div>
					<div class="content1__box__img">
						<img src="@/assets/layout.png" alt="" />
					</div>
					<h3>版面太雜，使用<br />起來霧煞煞嗎？</h3>
				</div>
			</div>
			<div class="content1__subbox">
				<div class="content1__subbox_background">
					<img src="@/assets/Rectangle 23.svg" alt="" />
				</div>
				<div class="content1__subbox__img">
					<img src="@/assets/trust.png" alt="" />
				</div>
				<h3>
					面對意外，<br />你需要的是快速精準的醫療資訊，<br />
					而不是片面之詞的傳言，<br />讓我們為你找到值得信賴的醫療機構。
				</h3>
			</div>
		</div>
		<div class="content2">
			<img
				class="content2__background"
				src="@/assets/solotion.svg"
				alt=""
			/>
			<h2>不用擔心，<br />我們就是你的避雷針。</h2>
			<div class="content2__box box1">
				<img src="@/assets/Rectangle 28.svg" alt="" />
				<h3>找醫生</h3>
			</div>
			<div class="content2__box box2">
				<img src="@/assets/Rectangle 28.svg" alt="" />
				<h3>找科別</h3>
			</div>
			<div class="content2__box box3">
				<img src="@/assets/Rectangle 28.svg" alt="" />
				<h3>找醫療機構</h3>
			</div>
			<div class="content2__box box4">
				<img src="@/assets/Rectangle 28.svg" alt="" />
				<h3>找疾病</h3>
			</div>
		</div>
		<div class="content3">
			<div class="content3__boxflex">
				<div class="content3__box box1">
					<div class="title">各種方式搜尋醫療機構</div>
					<div class="sub">
						<h3>
							依照科別和疾病搜尋，<br />選擇最適合您的醫療機構。
						</h3>
					</div>
				</div>
				<div class="content3__box box2">
					<div class="title">民眾評分機制</div>
					<div class="sub">
						<h3>
							以連續性評分數據，精準性提高，<br />讓你輕鬆找到最適合的良醫。
						</h3>
					</div>
				</div>
				<div class="content3__box box3">
					<div class="title">評論機制，雙向溝通</div>
					<div class="sub">
						<h3>
							透過民眾留言方式，<br />醫師幫助您解決心中的困惑。
						</h3>
					</div>
				</div>
				<div class="content3__box box4">
					<div class="title">統整醫療院所數據</div>
					<div class="sub">
						<h3>
							數據呈現他們的用心良苦，<br />用醫療資訊技術讓你從專業看見醫院的效率。
						</h3>
					</div>
				</div>
				<div class="content3__box box5">
					<div class="title">版面經過設計思考</div>
					<div class="sub">
						<h3>
							有設計邏輯的介面讓你全方位，<br />快速，精準的選擇。
						</h3>
					</div>
				</div>
			</div>
			<div class="content3__decoration">
				<div class="content3__title">
					<h3>服務項目</h3>
				</div>
			</div>
			<div class="content3__subbox">
				<div class="content3__subbox__img top">
					<img src="@/assets/upperQuotation.svg" alt="" />
				</div>
				<h3 class="one">
					醫療好評網提供您一目瞭然的資訊呈現，採用獨家搜尋引擎，
				</h3>
				<h3 class="two">
					結合Big Data的跨時代科技，助你精準找到最佳良醫。
				</h3>
				<div class="content3__subbox__img bottom">
					<img src="@/assets/lowerQuotation.svg" alt="" />
				</div>
			</div>
		</div>
		<div class="content4">
			<div class="content4__header">
				<img src="@/assets/chatIcon.svg" alt="" />
				<h3>來自各地的支持</h3>
			</div>
			<div class="content4__main">
				<div class="message__area">
					<div
						class="message"
						v-for="message in messages"
						:key="message.id"
					>
						<img src="@/assets/chatUnion.svg" alt="" />
						<h3>{{ message.content }}</h3>
					</div>
				</div>
			</div>
			<div class="content4__input">
				<input
					type="text"
					placeholder="留言區"
					v-model="messageInput"
					maxlength="80"
				/>
				<button @click="sendMessage">發&emsp;送</button>
			</div>
		</div>
		<div class="footer">
			<div class="sub1">
				<h3>網站地圖</h3>
				<ul>
					<li>
						粉絲專頁<span>
							&nbsp; &nbsp; &nbsp;醫療好評網@Facebook</span
						>
					</li>
					<li>
						客服專線<span>
							&nbsp; &nbsp; &nbsp;(02) &nbsp;2905-2000</span
						>
					</li>
					<li>工作團隊</li>
				</ul>
			</div>
			<div class="sub2">
				<div class="sub2__flex">
					<h3 class="copy">©&thinsp; 2021&thinsp; 醫療好評網</h3>
					<h3 class="private">隱私政策</h3>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Popup from "@/components/Popup/index.vue";
import CustomSelect from "@/components/Select/index.vue";
import { mapState, mapActions } from "vuex";

export default {
	data() {
		return {
			showSearchDialog: false,
			regionShow: false,
			hospitalShow: false,
			doctorShow: false,
			regionValue: "",
			hospitalValue: "",
			doctorValue: "",
			minValue: 0,
			maxValue: 100,
			// selectedValue: "",
			regionList: [
				"全區",
				"台北市",
				"新北市",
				"基隆市",
				"桃園市",
				"新竹市",
				"新竹縣",
				"苗栗縣",
				"台中市",
				"彰化縣",
				"南投縣",
				"雲林縣",
				"嘉義縣",
				"嘉義市",
				"台南市",
				"高雄市",
				"屏東縣",
				"宜蘭縣",
				"花蓮縣",
				"台東縣",
				"澎湖縣",
				"連江縣",
				"金門縣",
			],
			hospitalList: [
				"選擇醫院",
				"全區",
				"台北市",
				"新北市",
				"基隆市",
				"桃園市",
				"新竹市",
				"新竹縣",
				"苗栗縣",
				"台中市",
				"彰化縣",
				"南投縣",
				"雲林縣",
				"嘉義縣",
				"嘉義市",
				"台南市",
				"高雄市",
				"屏東縣",
				"宜蘭縣",
				"花蓮縣",
				"台東縣",
				"澎湖縣",
				"連江縣",
				"金門縣",
			],
			doctorList: [
				"選擇科別",
				"全區",
				"台北市",
				"新北市",
				"基隆市",
				"桃園市",
				"新竹市",
				"新竹縣",
				"苗栗縣",
				"台中市",
				"彰化縣",
				"南投縣",
				"雲林縣",
				"嘉義縣",
				"嘉義市",
				"台南市",
				"高雄市",
				"屏東縣",
				"宜蘭縣",
				"花蓮縣",
				"台東縣",
				"澎湖縣",
				"連江縣",
				"金門縣",
			],
			regionPlaceholder: "全區",
			hospitalPlaceholder: "選擇醫院",
			doctorPlaceholder: "選擇科別",
			parmData: "",
			messageInput: "",

		};
	},
	components: {
		Popup,
		CustomSelect,
	},
	mounted() {
		this.messagesInit();
		//this.passLocation();
	},
	computed: {
		...mapState(["messages"]),
	},
	methods: {
		...mapActions([
			"searchAll",
			"searchRegion",
			"searchHospital",
			"searchDoctor",
			"searchRate",
			"searchRegion_Hospital",
			"searchRegion_Doctor",
			"searchRegion_Doctor_Rate",
			"searchRegion_Rate",
			"searchRegion_Hosptial_Doctor_Rate",
			"messagesInit",
			"messageSend",
			"passLocation",
			"query"
		]),
		search__box() {
			this.showSearchDialog = true;
		},
		cancel() {
			this.showSearchDialog = false;
			this.regionShow = false;
			this.hospitalShow = false;
			this.doctorShow = false;
		},
		// search(event) {
		// 	this.searchType(event.target.value);
		// 	this.$router.push("/search");
		// 	this.showSearchDialog = false;
		// },
		regionSelected(value) {
			if (value === "全區") {
				this.regionPlaceholder = "全區";
				this.regionValue = "";
			} else {
				this.regionPlaceholder = "";
				this.regionValue = value;
			}
			// this.regionValue = value;
			// this.regionPlaceholder = ""
			this.regionShow = false;
			// this.selectedValue = value;
			// this.regionShow = false;
			// this.placeholderTxt = "";
			// if (value === "科別") {
			// 	this.parmData = "doctor";
			// } else {
			// 	this.parmData = "hospital";
			// }

			// this.searchType(this.parmData);
			// this.$router.push("/search");
			// this.showSearchDialog = false;
		},
		hospitalSelected(value) {
			if (value === "選擇醫院") {
				this.hospitalPlaceholder = "選擇醫院";
				this.hospitalValue = null;
			} else {
				this.hospitalPlaceholder = "";
				this.hospitalValue = value;
			}
			this.hospitalShow = false;
		},
		doctorSelected(value) {
			if (value === "選擇科別") {
				this.doctorPlaceholder = "選擇科別";
				this.doctorValue = null;
			} else {
				this.doctorPlaceholder = "";
				this.doctorValue = value;
			}
			this.doctorShow = false;
		},
		ROotionShow() {
			this.regionShow = this.regionShow ? false : true;
			this.hospitalShow = false;
			this.doctorShow = false;
		},
		HOotionShow() {
			this.hospitalShow = this.hospitalShow ? false : true;
			this.regionShow = false;
			this.doctorShow = false;
		},
		DOotionShow() {
			this.doctorShow = this.doctorShow ? false : true;
			this.regionShow = false;
			this.hospitalShow = false;
		},
		sendMessage(e) {
			e.preventDefault();
			this.messageSend(this.messageInput);
			this.messageInput = "";
		},
		/*search() {
			if (this.regionValue === "") {
				this.regionValue = null;
			}
			if (this.hospitalValue === "") {
				this.hospitalValue = null;
			}
			if (this.doctorValue === "") {
				this.doctorValue = null;
			}

			if (
				this.regionValue === null &&
				this.hospitalValue === null &&
				this.doctorValue === null &&
				this.minValue === 0 &&
				this.maxValue === 100
			) {
				this.searchAll()
				console.log("All");
			}else if (
				this.hospitalValue === null &&
				this.doctorValue === null &&
				this.minValue === 0 &&
				this.maxValue === 100
			) {
				this.searchRegion(this.regionValue)
				console.log("只搜尋地區無特定評分");
			}else if (
				this.regionValue === null &&
				this.doctorValue === null &&
				this.minValue === 0 &&
				this.maxValue === 100
			) {
				this.searchHospital(this.hospitalValue)
				console.log("只搜尋醫院無特定評分");
			}else if (
				this.regionValue === null &&
				this.hospitalValue === null &&
				this.minValue === 0 &&
				this.maxValue === 100
			) {
				this.searchDoctor(this.doctorValue)
				console.log("只搜尋科別無特定評分");
			}else if (
				this.regionValue === null &&
				this.hospitalValue === null &&
				this.doctorValue === null
			){
				const zipData = [this.minValue, this.maxValue]
				this.searchRate(zipData)
				console.log("只搜尋評分");
			}
			else if (
				this.doctorValue === null &&
				this.minValue === 0 &&
				this.maxValue === 100
			) {
				const zipData = [this.regionValue, this.hospitalValue]
				this.searchRegion_Hospital(zipData)
				console.log("搜尋指定地區的醫院無特定評分");
			}else if (
				this.hospitalValue === null &&
				this.minValue === 0 &&
				this.maxValue === 100
			) {
				const zipData = [this.regionValue, this.doctorValue]
				this.searchRegion_Doctor(zipData)
				console.log("搜尋指定地區的醫生無特定評分");
			}else if (this.hospitalValue === null)
			{
				const zipData = [this.regionValue, this.doctorValue, this.minValue, this.maxValue]
				this.searchRegion_Doctor_Rate(zipData)
				console.log("搜尋指定地區的醫生特定評分");
			}
			else if (
				this.hospitalValue === null &&
				this.doctorValue === null
			){
				const zipData = [this.regionValue, this.minValue, this.maxValue]
				this.searchRegion_Rate(zipData)
				console.log("搜尋特定區域的特定評分");
			}else{
				const zipData = [this.regionValue, this.hospitalValue, this.doctorValue,this.minValue,this.maxValue]
				this.searchRegion_Hosptial_Doctor_Rate(zipData)
				console.log("搜尋特定地區特定醫院特定科別特定評分");
			}
			// console.log(
			// 	"minValue: ",
			// 	this.minValue,
			// 	"maxValue: ",
			// 	this.maxValue,
			// 	"regionValue: ",
			// 	this.regionValue,
			// 	"hospitalValue: ",
			// 	this.hospitalValue,
			// 	"doctorValue: ",
			// 	this.doctorValue
			// );
			this.$router.push('/search')
			// this.$router.push("/result");
		},*/
		search() {
			this.query({
				"regionValue":this.regionValue,
				"hospitalValue":this.hospitalValue,
				"doctorValue":this.doctorValue,
				"minValue":this.minValue,
				"maxValue":this.maxValue});
				this.$router.push('/result')
		},

		minCValue(){
			this.minValue = event.target.value
		},
		maxCValue(){
			this.maxValue = event.target.value
		}
	},
};
</script>

<style type="text/css" src="@/assets/style.css"></style>
