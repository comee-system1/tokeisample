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
			<div class="tile-header">ブレットグラフ</div>
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
			<div style="width: 100%; padding: 0 1rem; overflow: hidden;">
				<table class="table">
					<tr v-for="item in data.items" :key="item.id">
						<td>{{ item.date | format('Y') }}</td>
						<td>
							<svg width="16" height="16" viewBox="0 0 24 24" fill="orange" v-if="item.profit <= 400">
								<path d="M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16" />
							</svg>
						</td>
						<td>
							<wj-bullet-graph
								:hasShadow="false"
								:value="item.profit"
								:min="0"
								:bad="400"
								:target="600"
								:good="600"
								:max="1000"
							></wj-bullet-graph>
						</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
import * as wjcCore from '@grapecity/wijmo';
import '@grapecity/wijmo.vue2.gauge';
import DataService from '../services/data.service';

export default {
	name: 'BulletGraph',
	data: () => ({ data: DataService.getData() }),
	filters: {
		format: (value, format) => wjcCore.Globalize.format(value, format),
	},
};
</script>