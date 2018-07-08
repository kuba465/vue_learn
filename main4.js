Vue.component('task', {
    template: '<li><slot></slot></li>'
});

Vue.component('task-list', {
    template: '<ul><task v-for="task in tasks" :key="task.task">{{task.task}}</task></ul>',
    data() {
        return {
            tasks: [
                {task: 'Go to the store', completed: true},
                {task: 'Go to the work', completed: false},
                {task: 'Go to the shop', completed: true},
                {task: 'Go to the house', completed: false}
            ]
        }
    }
});

new Vue({
    el: '#root',

});