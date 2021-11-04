// src/stores/content.js
import { writable } from 'svelte/store'

// Get the value out of storage on load.
const stored = localStorage.content
const storedanzahldose = localStorage.anzahldose
// or localStorage.getItem('content')

// Set the stored value or a sane default.
export const content = writable(stored || 'Hello, World!')
export const anzahldose = writable(storedanzahldose || '0')



// Anytime the store changes, update the local storage value.
content.subscribe((value) => localStorage.content = value)
// or localStorage.setItem('content', value)
