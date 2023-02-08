import { writable } from 'svelte/store';

function toggle(initState: boolean) {
    let { subscribe, update } = writable<boolean>(initState);
    const toggle = () => update((s: boolean) => !s)
    return { subscribe, toggle }
}

export const createToggle = (state: boolean) => toggle(state);
