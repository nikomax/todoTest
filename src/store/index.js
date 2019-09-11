import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        todoList: [],
        sortBy: 'all'
    },

    getters: {
        TODO_LIST: state => {
            return state.todoList;
        },
        SORT_TYPE: state => {
            return state.sortBy;
        }
    },

    mutations: {
        SET_TODO_LIST: (state, todoList) => {
            state.todoList = todoList;
        },
        REMOVE_TODO: (state, id) => {
            state.todoList = state.todoList.filter(item => item.id !== id );
        },
        ADD_TODO: (state, todo) => {
            state.todoList.push(todo);
        },
        TOGGLE_STATUS: (state, id) => {
            state.todoList.map(item => {
                if (item.id === id) {
                    return item.completed = !item.completed
                }
            });
        },
        COMPLETE_ALL: (state) => {
            state.todoList.map(item => item.completed = true);
        },
        CLEAR_COMPLETED: (state) => {
            state.todoList = state.todoList.filter(item => !item.completed);
        },
        SET_FILTER: (state, sortBy) => {
            state.sortBy = sortBy;
        },
        UPDATE_ITEM: (state, {id, newValue}) => {
            state.todoList.map(item => {
                if (item.id === id) {
                    return item.text = newValue
                }
            });
        },
    }

});

export default store;
