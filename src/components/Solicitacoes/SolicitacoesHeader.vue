<template>
  <header>
    <div class="container">
      <div class="pagination-div">
        <p>Mostrando 1-{{pagination}} de {{ array.length  }}</p>
          <div class="flex"></div>
          <p>Resultados por página:
          <select v-model="pagination" @change="select" name="page">
            <option value="5">5</option>
            <option value="10">10</option>
          </select></p>
        <span id="one" class="material-icons">keyboard_arrow_down</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      pagination: 5
    }
  },
  props: {
    array: Array,
 },
 methods: {
  select() {
    this.$emit('select', this.pagination)
  }
 }
}
</script>

<style lang="scss" scoped>
.pagination-div {
  height: 80px;
  user-select: none;
  width: 100%;
  display: flex;
  color: var(--grey);
  align-items: center;
}
.pagination-div {
  display: flex;
  align-items: center;
  position: relative;
}
.pagination-div select {
  outline: none;
  background-color: #transparant;
  padding: 5px 0px 5px 10px;
  width: max(3vw, 30px);
  border: 1px solid var(--border-color);
  border-radius: 10px;
}
.pagination-div select::placeholder {
  color: #4e4e4e;
}
.pagination-div #one{
  font-weight: bolder;
  color: #4e4e4e;
  position: absolute;
  right: 0px;
  font-size: 25px;
}
.flex {
  flex: 1 1 0;
}
</style>
