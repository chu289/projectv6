<template>
	<div class="result">
		<div class="result__header">
			<button></button>
			<input type="text" />
			<h3>醫療好評網</h3>
		</div>
		<div class="result__topTenList">
			<div
				class="box"
				v-for="item in topTen.slice(topTenStart, topTenStart + 5)"
				:key="item.index"
			>
				<img :src="item.img" alt="" />
				<div class="box__text">
					<h3>{{ item.name }}</h3>
				</div>
			</div>
			<img src="@/assets/leftButton.png" id="leftMove" @click="TopPrev" />
			<img
				src="@/assets/rightButton.png"
				id="rightMove"
				@click="TopNext"
			/>
		</div>
		<div class="result__flex">
			<div class="filter__flex">
				<div class="filter__num">結果數:{{ resultNumber }}</div>
				<div
					class="filter__distance__box"
					:class="[isCheckRadio ? 'radio__check' : 'radio']"
				>
					<div class="switch" @click="checkRadio"></div>
					<input
						type="number"
						class="distance__input"
						@change="distanceC"
						oninput="if(value<0)value=0"
					/>
					<div class="filter__distance">
						距離<br /><br />
						<span>&emsp; &emsp; &emsp; &emsp; 公里數</span>
					</div>
				</div>
				<div class="filter__area">選擇地區</div>
				<ul class="filter__select">
					<li v-for="(county, index) in countys" :key="county.index">
						<a
							class="filter__county"
							:class="{ active: county.isActive }"
							@click="countySelect(county, index)"
							>{{ county.name }}</a
						>
					</li>
				</ul>
				<div class="filter_score">
					評分範圍<br />
					<span>0-100</span>
					<form class="range__input">
						<input
							type="text"
							class="min"
							:value="minValue"
							@change="minCValue"
							oninput="if(value<0)value=0;if(value>100)value=100"
						/>
						<div class="line"></div>
						<input
							type="text"
							class="max"
							:value="maxValue"
							@change="maxCValue"
							oninput="if(value<0)value=0;if(value>100)value=100"
						/>
					</form>
				</div>
			</div>
			<div class="result__hospital">
				<Pagination
					:initItems="SEARCH__RESULT__INIT"
					:initCountOfPage="countOfPage"
					:initCurrentPage="currentPage"
				/>
			</div>

			<div class="googleMap"></div>
		</div>
	</div>
</template>

<script>
import Pagination from "@/components/Pagination/index.vue";
import { mapActions, mapGetters } from "vuex";

export default {
	components: {
		Pagination,
	},
	data() {
		return {
			isCheckRadio: false,
			isCounty: false,
			isActive: "全部",
			items: [
				{
					id: 1,
					img: "https://freefoodphotos.com/imagelibrary/snacks/slides/crisps.jpg",
					name: "天主教輔仁大學附設醫院1",
					address: "243新北市泰山區貴子路69號",
					url: "",
					rate: [15, 95],
				},
				{
					id: 2,
					img: "https://freefoodphotos.com/imagelibrary/snacks/slides/crisps.jpg",
					name: "天主教輔仁大學附設醫院2",
					address:
						"243新北市泰山區貴子路69號德國慕尼黑科技大學醫學研",
					url: "",
					rate: [80, 20],
				},
				{
					id: 3,
					img: "https://freefoodphotos.com/imagelibrary/snacks/slides/crisps.jpg",
					name: "天主教輔仁大學附設醫院3",
					address: "243新北市泰山區貴子路69號",
					url: "",
					rate: [80, 20],
				},
				{
					id: 4,
					img: "https://freefoodphotos.com/imagelibrary/snacks/slides/crisps.jpg",
					name: "天主教輔仁大學附設醫院4",
					address: "243新北市泰山區貴子路69號",
					url: "",
					rate: [80, 20],
				},
				{
					id: 5,
					img: "https://freefoodphotos.com/imagelibrary/snacks/slides/crisps.jpg",
					name: "天主教輔仁大學附設醫院5",
					address: "243新北市泰山區貴子路69號",
					url: "",
					rate: [80, 20],
				},
				{
					id: 6,
					img: "https://freefoodphotos.com/imagelibrary/snacks/slides/crisps.jpg",
					name: "天主教輔仁大學附設醫院6",
					address: "243新北市泰山區貴子路69號",
					url: "",
					rate: [80, 20],
				},
				{
					id: 7,
					img: "https://freefoodphotos.com/imagelibrary/snacks/slides/crisps.jpg",
					name: "天主教輔仁大學附設醫院7",
					address: "243新北市泰山區貴子路69號",
					url: "",
					rate: [80, 20],
				},
				{
					id: 8,
					img: "https://freefoodphotos.com/imagelibrary/snacks/slides/crisps.jpg",
					name: "天主教輔仁大學附設醫院8",
					address: "243新北市泰山區貴子路69號",
					url: "",
					rate: [80, 20],
				},
				{
					id: 9,
					img: "https://freefoodphotos.com/imagelibrary/snacks/slides/crisps.jpg",
					name: "天主教輔仁大學附設醫院9",
					address: "243新北市泰山區貴子路69號",
					url: "",
					rate: [80, 20],
				},
			],
			countOfPage: 3,
			currentPage: 1,
			topTenCurrent: 1,
			topTen: [
				{
					id: 1,
					img: "https://freefoodphotos.com/imagelibrary/dairy/slides/fruit_yoghurt.jpg",
					name: "111",
				},
				{
					id: 2,
					img: "https://freefoodphotos.com/imagelibrary/dairy/slides/fruit_yoghurt.jpg",
					name: "111",
				},
				{
					id: 3,
					img: "https://freefoodphotos.com/imagelibrary/dairy/slides/fruit_yoghurt.jpg",
					name: "111",
				},
				{
					id: 4,
					img: "https://freefoodphotos.com/imagelibrary/dairy/slides/fruit_yoghurt.jpg",
					name: "111",
				},
				{
					id: 5,
					img: "https://freefoodphotos.com/imagelibrary/dairy/slides/fruit_yoghurt.jpg",
					name: "111",
				},
				{
					id: 6,
					img: "https://freefoodphotos.com/imagelibrary/bread/slides/buttered_rolls.jpg",
					name: "222",
				},
				{
					id: 7,
					img: "https://freefoodphotos.com/imagelibrary/bread/slides/buttered_rolls.jpg",
					name: "222",
				},
				{
					id: 8,
					img: "https://freefoodphotos.com/imagelibrary/bread/slides/buttered_rolls.jpg",
					name: "222",
				},
				{
					id: 9,
					img: "https://freefoodphotos.com/imagelibrary/bread/slides/buttered_rolls.jpg",
					name: "222",
				},
				{
					id: 10,
					img: "https://freefoodphotos.com/imagelibrary/bread/slides/buttered_rolls.jpg",
					name: "222",
				},
			],
			// resultNumber: 0,
			countys: [
				{
					id: 1,
					name: "全區",
					isActive: true,
				},
				{
					id: 2,
					name: "台北市",
					isActive: false,
				},
				{
					id: 3,
					name: "新北市",
					isActive: false,
				},
				{
					id: 4,
					name: "基隆市",
					isActive: false,
				},
				{
					id: 5,
					name: "桃園市",
					isActive: false,
				},
				{
					id: 6,
					name: "新竹市",
					isActive: false,
				},
				{
					id: 7,
					name: "新竹縣",
					isActive: false,
				},
				{
					id: 8,
					name: "苗栗縣",
					isActive: false,
				},
				{
					id: 9,
					name: "台中市",
					isActive: false,
				},
				{
					id: 10,
					name: "彰化縣",
					isActive: false,
				},
				{
					id: 11,
					name: "南投縣",
					isActive: false,
				},
				{
					id: 12,
					name: "雲林縣",
					isActive: false,
				},
				{
					id: 13,
					name: "嘉義縣",
					isActive: false,
				},
				{
					id: 14,
					name: "嘉義市",
					isActive: false,
				},
				{
					id: 15,
					name: "台南市",
					isActive: false,
				},
				{
					id: 16,
					name: "高雄市",
					isActive: false,
				},
				{
					id: 17,
					name: "屏東縣",
					isActive: false,
				},
				{
					id: 18,
					name: "宜蘭縣",
					isActive: false,
				},
				{
					id: 19,
					name: "花蓮縣",
					isActive: false,
				},
				{
					id: 20,
					name: "台東縣",
					isActive: false,
				},
				{
					id: 21,
					name: "澎湖縣",
					isActive: false,
				},
				{
					id: 22,
					name: "連江縣",
					isActive: false,
				},
				{
					id: 23,
					name: "金門縣",
					isActive: false,
				},
			],
			minValue: 0,
			maxValue: 100,
		};
	},
	mounted(){
		// this.rateChartGet()
		// this.items = this.rc__init()
		console.log();
		// this.resultNumber = 
	},
	computed: {
		...mapGetters(["SEARCH__RESULT__INIT"]),
		topTenStart: function () {
			return (this.topTenCurrent - 1) * 5;
		},
		computedBackground: function () {
			return this.Background;
		},
		resultNumber: function() {
			return this.SEARCH__RESULT__INIT.length
		}
	},
	methods: {
		...mapActions(["searchRegion", "searchAll", "searchRegion_Rate", "searchDistance","rateChartGet"]),
		TopPrev() {
			this.topTenCurrent === 1
				? (this.topTenCurrent = 1)
				: (this.topTenCurrent -= 1);
		},
		TopNext() {
			this.topTenCurrent === 2
				? (this.topTenCurrent = 2)
				: (this.topTenCurrent += 1);
		},
		checkRadio() {
			this.isCheckRadio = this.isCheckRadio ? false : true;
		},
		countySelect(county, index) {
			for (var i = 0; i < this.countys.length; i++) {
				this.countys[i].isActive = false;
				this.countys[index].isActive = true;
			}
			if (
				county.name === "全區" &&
				this.minValue === 0 &&
				this.maxValue === 100
			) {
				console.log("ALL");
				this.searchAll();
			} else if (this.minValue === 0 && this.maxValue === 100) {
				this.searchRegion(county.name);
				console.log("搜尋指定區域無特定評分");
			} else {
				const zipData = [county.name, this.minValue, this.maxValue];
				this.searchRegion_Rate(zipData);
				console.log("搜尋指定區域特定評分");
			}
		},
		minCValue() {
			this.minValue = event.target.value;
		},
		maxCValue() {
			this.maxValue = event.target.value;
		},
		distanceC() {
			this.searchDistance(event.target.value)
		},
	},
};
</script>
<style src="@/assets/searchstyle.css"></style>
