<template>
  <div class="app">
    <SidebarComp />
    <router-view />
  </div>
</template>

<script setup>
import SidebarComp from './components/SidebarComp.vue'
</script>

<style Lang="scss">
:root {
	--primary: #4ade80;
	--grey: #64748b;
	--dark:#1c212d;
	--dark-alt: #2b3341;
	--light: #f8f8f9;
	--w-light: #ffffff;
	--sidebar-width: 300px;
}
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira sans', sans-serif;
}
body {
	background: var(--w-light);
}
.container {
  margin: 0 30px;
  height: 100%;
}
button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}

.app {
	display: flex;
}
main {
		flex: 1 1 0;
		@media (max-width: 768) {
			padding-left: 6rem;
		}
	}
</style>
