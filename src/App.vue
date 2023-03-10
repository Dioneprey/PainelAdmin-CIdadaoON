<template>
  <div class="app">
    <SidebarComp />
    <router-view />
  </div>
</template>

<script setup>
import SidebarComp from './components/Sidebar/SidebarComp.vue'
</script>

<style Lang="scss">
:root {
	--primary: #4ade80;
	--grey: #8e8f92;
  --blue: #3751ff;
	--dark:#1c212d;
	--dark-alt: #2b3341;
	--light: #f8f8f9;
	--w-light: #ffffff;
	--sidebar-width: 300px;
  --border-color: #e2e2e2;
  --padding: 0 min(3.5vw, 30px);;
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
  padding: var(--padding);
  height: 100%;
  width: 100%;
}
button {
	cursor: pointer;
	appearance: none;
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
}

main {
		flex: 1 1 0;
}
.div-border {
  height: 25px;
  width: 1px;
  margin: 0 20px;
  background: var(--border-color);
}

</style>
