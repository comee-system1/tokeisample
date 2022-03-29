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
			<div class="tile-header">グリッド</div>
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
			<wj-flex-grid
				:isReadOnly="true"
				:headersVisibility="'Column'"
				:selectionMode="'ListBox'"
				:itemsSource="data"
			>
				<wj-flex-grid-column :binding="'id'" :header="'ID'" :width="50"></wj-flex-grid-column>
				<wj-flex-grid-column :binding="'date'" :header="'日付'" :width="'*'" :format="'Y'"></wj-flex-grid-column>
				<wj-flex-grid-column :binding="'sales'" :header="'売上'" :format="'c'" :width="80"></wj-flex-grid-column>
				<wj-flex-grid-column :binding="'expenses'" :header="'費用'" :format="'c'" :width="80"></wj-flex-grid-column>
				<wj-flex-grid-column :binding="'profit'" :header="'利益'" :format="'c'" :width="80"></wj-flex-grid-column>
			</wj-flex-grid>
		</div>
	</div>
</template>

<script>
import '@grapecity/wijmo.vue2.grid';

import DataService from '../services/data.service';

export default {
	name: 'Grid',
	data: () => ({ data: DataService.getData() }),
};
</script>