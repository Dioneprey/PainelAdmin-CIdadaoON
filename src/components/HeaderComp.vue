<template>
  <header>
    <div class="container">
      <nav>
        <span>{{ title }}</span>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComp",
  props: {
    title: String
 }
}
</script>

<style Lang="scss">
header {
  background: var(--light);
  height: 90px;
  font-family: 'Fira Sans', sans-serif;
  font-weight: 400;
  display: flex;
}
header span {
  font-size: 1.8rem;
}
nav {
  height: 100%;
  display: flex;
  align-items: flex-end;
  padding-bottom: 20px;
  border-bottom: 1px solid #e2e2e2;
}
</style>
