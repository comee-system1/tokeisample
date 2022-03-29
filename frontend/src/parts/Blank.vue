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
			<div class="tile-header">空白のタイル</div>
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
			<div class="blank-tile">空白のタイルです。</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Blank',
};
</script>