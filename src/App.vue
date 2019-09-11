<template>
  <div id="app">
    <div class="todo-app">
      <todo-stats/>

      <div class="todo-app__main">
        <todo-header/>
        <toodo-list/>
      </div>

      <div class="todo-app__footer">
        <todo-footer/>
      </div>

      <todo-progress/>
    </div>
  </div>
</template>

<script>
import ToodoList from "./components/ToodoList";
import TodoHeader from "./components/TodoHeader";
import TodoFooter from "./components/TodoFooter";
import TodoProgress from "./components/TodoProgress";
import TodoStats from "./components/TodoStats";

export default {
  name: 'app',
  components: {
    TodoStats,
    TodoProgress,
    TodoFooter,
    TodoHeader,
    ToodoList
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

button {
  cursor: pointer;
}

.todo-app {
  padding: 40px;
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  position: relative;
  justify-content: space-between;
  font-family: Arial, sans-serif;
  font-size: 14px;
  &__main {
    width: 350px;
    padding: 0 20px;
    height: 100%;
    overflow: auto;
  }
  &__footer {
    background-color: #fff;
    position: absolute;
    max-width: 350px;
    width: 100%;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
