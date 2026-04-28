import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Sound preference store with localStorage persistence
function createSoundStore() {
	const { subscribe, set, update } = writable<boolean>(true);
	
	return {
		subscribe,
		set: (value: boolean) => {
			set(value);
			if (browser) {
				localStorage.setItem('haki-sound-enabled', String(value));
			}
		},
		initialize: () => {
			if (browser) {
				const stored = localStorage.getItem('haki-sound-enabled');
				if (stored !== null) {
					set(stored === 'true');
				}
			}
		}
	};
}

export const soundEnabled = createSoundStore();

// Conversation state
export const conversationState = writable({
	currentStep: 'first-next',
	chatContent: '',
	currentSpeaker: ''
});
