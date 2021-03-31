var BoardContainer = {
  template:  /*html*/`
    <div class="h-full p-2 grid grid-cols-4 gap-5">
      <div class="bg-blue-100 p-2">
        <h3 class="font-bold">Todo</h3>
        <draggable class="flex flex-col space-y-2 px-2" :list="list1" group="people" @change="log">
          <div
            class="bg-white shadow-lg p-2"
            v-for="(element, index) in list1"
            :key="element.name"
          >
            {{ element.name }}
          </div>
        </draggable>
      </div>
      <div class="bg-blue-100 p-2">
        <h3 class="font-bold">On hold</h3>
        <draggable class="flex flex-col space-y-2 px-2" :list="list1" group="people" @change="log">
          <div
            class="bg-white shadow-lg p-2"
            v-for="(element, index) in list1"
            :key="element.name"
          >
            {{ element.name }}
          </div>
        </draggable>
      </div>
      <div class="bg-blue-100 p-2">
        <h3 class="font-bold">In progress</h3>
        <draggable class="flex flex-col space-y-2 px-2" :list="list1" group="people" @change="log">
          <div
            class="bg-white shadow-lg p-2"
            v-for="(element, index) in list1"
            :key="element.name"
          >
            {{ element.name }}
          </div>
        </draggable>
      </div>
      <div class="bg-blue-100 p-2">
      <h3 class="font-bold">Done</h3>
        <draggable class="flex flex-col space-y-2 px-2" :list="list2" group="people" @change="log">
          <div
            class="bg-white shadow-lg p-2"
            v-for="(element, index) in list2"
            :key="element.name"
          >
            {{ element.name }}
          </div>
        </draggable>
      </div>
    </div>
  `,
  data() {
    return {
      list1: [
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 }
      ],
      list2: [
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 },
        { name: "Eren", id: 8 },
        { name: "Mikasa", id: 9 },
        { name: "Armin", id: 10 },
        { name: "Levi", id: 11 }
      ]
    };
  },
  methods: {
    add: function() {
      this.list.push({ name: "Juan" });
    },
    replace: function() {
      this.list = [{ name: "Edgard" }];
    },
    clone: function(el) {
      return {
        name: el.name + " cloned"
      };
    },
    log: function(evt) {
      window.console.log(evt);
    }
  }
}

var app = new Vue({
  el: '#app',
  components: {
    BoardContainer
  },
  template:  /*html*/`
    <section class="w-full h-full overflow-auto">
      <BoardContainer />
    </section>
  `
})

