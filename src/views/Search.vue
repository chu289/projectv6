<template>
	<div id="search">
		搜尋結果: {{searchResult}}
		<!-- <Pagination 
            :initItems="items"
            :initCountOfPage="countOfPage"
            :initCurrentPage="currentPage"
        />
		{{this.rc__init}} -->
		<!-- I'M:{{this.HOSPITAL__INIT}}
        <br>
        <br>
        <br>
        <br>
        <br> -->
		<!-- {{this.HOSPITAL__INIT}}     -->
	</div>
</template>

<script>
// import Pagination from "@/components/Pagination/index.vue";
import { mapActions, mapState } from "vuex";

export default {
	components: {
		// Pagination,
	},
	data() {
		return {
			items: [
				{
					id: 1,
					index: 1,
					name: "test1",
				},
				{
					id: 2,
					index: 2,
					name: "test2",
				},
				{
					id: 3,
					index: 3,
					name: "test3",
				},
				{
					id: 4,
					index: 4,
					name: "test4",
				},
				{
					id: 5,
					index: 5,
					name: "test5",
				},
				{
					id: 6,
					index: 6,
					name: "test6",
				},
				{
					id: 7,
					index: 7,
					name: "test7",
				},
				{
					id: 8,
					index: 8,
					name: "test8",
				},
				{
					id: 9,
					index: 9,
					name: "test9",
				},
			],
			countOfPage: 3,
			currentPage: 1,
		};
	},
	mounted() {
		// this.rateChartGet()
		// this.map()
		// this.TTT()
	},
	computed: {
		// ...mapState(['rcData']),
		// ...mapGetters(['rc__init']),
		...mapState(['searchResult']),
		// ...mapGetters(['HOSPITAL__INIT'])
	},
	methods: {
		...mapActions(['rateChartGet'])
		// map(){
		// }
	},
};
</script>
