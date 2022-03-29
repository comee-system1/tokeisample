<template>
	<div
		class="tile"
		draggable="true"
		@dragstart="$emit('drag-start', $event)"
		@dragover="$emit('drag-over', $event)"
		@drop="$emit('drag-finish', $event)"
		@dragend="$emit('drag-end', $event)"
	>
		<!-- caption -->
		<div class="tile-container">
			<div class="tile-header">横棒グラフ</div>
			<div class="buttons">
				<div class="button" title="タイルを閉じる" @click="$emit('remove-tile')">
					<svg width="24" height="24" viewBox="0 0 24 24">
						<path
							d="M12.71,12l4.64-4.65a.49.49,0,1,0-.7-.7L12,11.29,7.35,6.65a.49.49,0,0,0-.7.7L11.29,12,6.65,16.65a.48.48,0,0,0,0,.7.48.48,0,0,0,.7,0L12,12.71l4.65,4.64a.48.48,0,0,0,.7,0,.48.48,0,0,0,0-.7Z"
						/>
					</svg>
				</div>
			</div>
		</div>
		<!-- content -->
		<div class="tile-content">
			<wj-flex-chart :chartType="'Bar'" :itemsSource="data" :bindingX="'date'" :palette="palette">
				<wj-flex-chart-axis :wjProperty="'axisY'" :format="'Y'"></wj-flex-chart-axis>
				<wj-flex-chart-series :name="'売上'" :binding="'sales'"></wj-flex-chart-series>
				<wj-flex-chart-series :name="'費用'" :binding="'expenses'"></wj-flex-chart-series>
				<wj-flex-chart-series :name="'利益'" :binding="'profit'" :chartType="'LineSymbols'"></wj-flex-chart-series>
			</wj-flex-chart>
		</div>
	</div>
</template>

<script>
import '@grapecity/wijmo.vue2.chart';
import DataService from '../services/data.service';

export default {
	name: 'BarChart',
	props: ['palette'],
	data: () => ({ data: DataService.getData() }),
};
</script>