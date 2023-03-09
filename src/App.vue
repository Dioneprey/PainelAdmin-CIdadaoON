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
  --border-color: #e2e2e2;
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
body::-webkit-scrollbar {
  display: none;
}
.container {
  padding: 0 min(2vw, 30px);
  height: 100%;
  width: 100%;
}
button {
	cursor: pointer;
	appearance: none;
  height: 100%;
	border: none;
	outline: none;
	background: none;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
.app {
	display: flex;
  height: 100vh;
  overflow: hidden;
}
main {
		flex: 1 1 0;
	}
@media (max-width: 768px) {
main {
	padding-left: 4rem;
}
}
</style>
