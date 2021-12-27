<script>
  import DoughnutChart from "@/components/DoughnutChart/index.vue";

export default {
	props: ["initItems", "initCountOfPage", "initCurrentPage"],
    components: {
      DoughnutChart,
    },
	computed: {
		pageStart: function () {
			return (this.initCurrentPage - 1) * this.initCountOfPage;
		},
		totalPages: function () {
			return Math.ceil(this.initItems.length / this.initCountOfPage);
		},
	},
	methods: {
		prev() {
			this.initCurrentPage === 1
				? (this.initCurrentPage = 1)
				: (this.initCurrentPage -= 1);
		},
		next() {
			this.initCurrentPage === this.totalPages
				? (this.initCurrentPage = this.totalPages)
				: (this.initCurrentPage += 1);
		},
	},
};
</script>
<template src="./template.html"></template>
<style src="./style.css"></style>
