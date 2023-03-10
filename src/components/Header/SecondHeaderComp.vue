<template>
  <header>
    <div class="container">
      <nav>
        <div class="search">
          <span class="material-icons">search</span>
          <input type="text" placeholder="Digite Nome/CPF">
        </div>
        <div class="div-border"></div>
        <div class="filter-input">
          <span id="one" class="material-icons">calendar_today</span>
          <input type="text" placeholder="Intervalo de data">
          <span id="two" class="material-icons">keyboard_arrow_down</span>
        </div>
        <div class="filter-input">
          <span id="one" class="material-icons">checklist</span>
          <input type="text" disabled placeholder="Status">
          <span id="two" class="material-icons">keyboard_arrow_down</span>
        </div>
        <div class="filter-input">
          <span id="one" class="material-icons">home_work</span>
          <input type="text" placeholder="Secretaria">
          <span id="two" class="material-icons">keyboard_arrow_down</span>
        </div>
        <div class="div-border"></div>
        <div class="flex"></div>
        <div id="export-one" class="filter-input">
          <span id="one" class="material-icons">print</span>
          <input type="text" disabled placeholder="Imprimir">
        </div>
        <div id="export" class="filter-input">
          <span id="two" class="material-icons">keyboard_arrow_down</span>
          <input style="margin: 0;" type="text" disabled placeholder="Exportar">
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "SecondHeaderComp",
  props: {
    title: String
 }
}
</script>

<style Lang="scss" scoped>
header {
  background: var(--light);
  height: 80px;
  display: flex;
  user-select: none;
}
nav {
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
}
.search {
  display: flex;
  align-items: center;
}
.search input {
  background-color: #fff;
  padding: 10px 45px;
  width: max(25vw, 250px);
  border: 1px solid var(--border-color);
  border-radius: 10px;
}
input {
  box-shadow: 0 0 6px var(--border-color);
}
input:focus {
  outline: none;
}
.search input {
  background-color: #fff;
  padding: 10px 45px;
  width: max(20vw, 200px);
  border: 1px solid var(--border-color);
  border-radius: 10px;
}
.search input::placeholder {
  color: #b5bebd;
}
.search span {
  color: var(--primary);
  position: absolute;
  padding-left: 10px;
  font-size: 30px;
}
.filter-input {
  display: flex;
  align-items: center;
}
.filter-input input {

  background-color: #fff;
  padding: 10px 0px 10px 45px;
  width: max(11vw, 210px);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  margin-right: 20px;
}
.filter-input input::placeholder {
  color: #4e4e4e;
}
.filter-input #one{
  color: #4e4e4e;
  position: absolute;
  padding-left: 10px;
  font-size: 25px;
}
.filter-input #two{
  color: #4e4e4e;
  position: absolute;
  padding-left: 180px;
  font-size: 25px;
}
#export-one #one {
  font-size: 18px;
}
#export-one input,
#export input {
  cursor: pointer;
}
#export-one input {
  padding: 10px 0px 10px 35px;
  width: max(4vw, 110px);
}
#export input {
  padding: 10px 0px 10px 10px;
  width: max(4vw, 100px);
}
#export #one {
  font-size: 18px;
}
#export #two {
  padding-left: 72px;
  cursor: pointer;
}
.flex {
  flex: 1 1 0;
}
</style>
