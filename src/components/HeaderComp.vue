<template>
  <header>
    <div class="container">
      <nav>a</nav>
    </div>

  </header>
</template>

<script>
export default {
  name: "HeaderComp",
}
</script>

<style>
header {
  background-color: #f8f8f9;
  height: 70px;
}
.container {
  margin: 0 30px;
  height: 100%;
}
nav {
  height: 100%;
  display: flex;
  align-items: flex-end;
  padding-bottom: 15px;
  border-bottom: 1px solid #e2e2e2;
}
</style>
