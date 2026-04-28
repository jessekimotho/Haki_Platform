<script lang="ts">
	import LessonButton from './LessonButton.svelte';

	export let onWhatRightsClick: () => void;
	export let onProtectRightsClick: () => void;
	export let onViolateClick: () => void;
	export let onComplaintClick: () => void;
</script>

<!-- Left/Right navigation for lessons -->
<div class="preva previs">
	<img class="previmg" src="/prev.png" alt="Previous" />
</div>
<div class="nexa nexis">
	<img class="neximg" src="/next.png" alt="Next" />
</div>

<!-- Menu options for lessons -->
<div style="display: flex; gap: 20px; justify-content: center; align-items: center; flex-wrap: wrap; padding: 20px;">
	<LessonButton 
		src="/what.png" 
		alt="What Are Rights" 
		onClick={onWhatRightsClick} 
	/>
	<LessonButton 
		src="/protect.png" 
		alt="Protect Rights" 
		onClick={onProtectRightsClick} 
	/>
	<LessonButton 
		src="/violate.png" 
		alt="Violations" 
		onClick={onViolateClick} 
	/>
	<LessonButton 
		src="/complaint.png" 
		alt="Complaint" 
		onClick={onComplaintClick} 
	/>
	<LessonButton 
		src="/report.png" 
		alt="Report" 
		onClick={() => {}} 
		isLink={true} 
		href="tel:116"
	/>
</div>
