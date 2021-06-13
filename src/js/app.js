var Board = {
  template:  /*html*/`
    <div class="h-full p-2 grid grid-cols-4 gap-5">

      <div class="bg-blue-100 p-2">
        <div class="flex justify-between text-gray-600 mb-3">
          <h3 class="font-bold">Todo</h3>
          <span @click="openAddModal('todo')"
            class="text-xs cursor-pointer hover:underline">
            + Add
          </span>
        </div>
        <draggable class="flex flex-col px-2 h-full" :list="list1" group="tasks" animation="200"
          @change="setItems" empty-insert-threshold="20" direction="vertical">
          <div
            class="card bg-white shadow-lg p-2 my-2 flex flex-col cursor-move"
            :class="{
              'border-l-4 border-red-300': element.taskColor == 'red',
              'border-l-4 border-yellow-300': element.taskColor == 'yellow',
              'border-l-4 border-green-300': element.taskColor == 'green',
              'border-l-4 border-blue-300': element.taskColor == 'blue',
            }"
            v-for="(element, index) in list1"
            :key="element.id"
          >
            <span>{{ element.text }}</span>

            <span class="controls flex justify-between mt-2 text-gray-600 opacity-0 transition duration-300">
              <div class="flex" title="Copy">
                <svg xmlns="http://www.w3.org/2000/svg" @click="doCopy(element.text, element.id)"
                  class="icon icon-tabler icon-tabler-copy cursor-pointer rounded-full hover:bg-blue-300 hover:text-white" 
                  width="17" height="17" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <rect x="8" y="8" width="12" height="12" rx="2" />
                  <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
                </svg>
                <span class="text-xs ml-2" :id="'copy-' + element.id" style="visibility: hidden;">Copied!</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" @click="removeAt(index, 1)"
                class="icon icon-tabler icon-tabler-trash cursor-pointer rounded-full hover:bg-red-300 hover:text-white"
                 width="17" height="17" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="10" y1="11" x2="10" y2="17" />
                <line x1="14" y1="11" x2="14" y2="17" />
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
              </svg>
            </span>
          </div>
        </draggable>
      </div>

      <div class="bg-blue-100 p-2">
        <div class="flex justify-between text-gray-600 mb-3">
          <h3 class="font-bold">On hold</h3>
          <span @click="openAddModal('onhold')"
            class="text-xs cursor-pointer hover:underline">
            + Add
          </span>
        </div>
        <draggable class="flex flex-col px-2 h-full" :list="list2" group="tasks" animation="200"
          @change="setItems" empty-insert-threshold="20" direction="vertical">
          <div
            class="card bg-white shadow-lg p-2 my-2 flex flex-col cursor-move"
            :class="{
              'border-l-4 border-red-300': element.taskColor == 'red',
              'border-l-4 border-yellow-300': element.taskColor == 'yellow',
              'border-l-4 border-green-300': element.taskColor == 'green',
              'border-l-4 border-blue-300': element.taskColor == 'blue',
            }"
            v-for="(element, index) in list2"
            :key="element.id"
          >
            <span>{{ element.text }}</span>

            <span class="controls flex justify-between mt-2 text-gray-600 opacity-0 transition duration-300">
              <div class="flex" title="Copy">
                <svg xmlns="http://www.w3.org/2000/svg" @click="doCopy(element.text, element.id)"
                  class="icon icon-tabler icon-tabler-copy cursor-pointer rounded-full hover:bg-blue-300 hover:text-white" 
                  width="17" height="17" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <rect x="8" y="8" width="12" height="12" rx="2" />
                  <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
                </svg>
                <span class="text-xs ml-2" :id="'copy-' + element.id" style="visibility: hidden;">Copied!</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" @click="removeAt(index, 2)"
                class="icon icon-tabler icon-tabler-trash cursor-pointer rounded-full hover:bg-red-300 hover:text-white" 
                  width="17" height="17" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="10" y1="11" x2="10" y2="17" />
                <line x1="14" y1="11" x2="14" y2="17" />
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
              </svg>
            </span>
          </div>
        </draggable>
      </div>

      <div class="bg-blue-100 p-2">
        <div class="flex justify-between text-gray-600 mb-3">
          <h3 class="font-bold">In progress</h3>
          <span @click="openAddModal('inprogress')"
            class="text-xs cursor-pointer hover:underline">
            + Add
          </span>
        </div>
        <draggable class="flex flex-col px-2 h-full" :list="list3" group="tasks" animation="200"
          @change="setItems" empty-insert-threshold="20" direction="vertical">
          <div
            class="card bg-white shadow-lg p-2 my-2 flex flex-col cursor-move"
            :class="{
              'border-l-4 border-red-300': element.taskColor == 'red',
              'border-l-4 border-yellow-300': element.taskColor == 'yellow',
              'border-l-4 border-green-300': element.taskColor == 'green',
              'border-l-4 border-blue-300': element.taskColor == 'blue',
            }"
            v-for="(element, index) in list3"
            :key="element.id"
          >
            <span>{{ element.text }}</span>

            <span class="controls flex justify-between mt-2 text-gray-600 opacity-0 transition duration-300">
              <div class="flex" title="Copy">
                <svg xmlns="http://www.w3.org/2000/svg" @click="doCopy(element.text, element.id)"
                  class="icon icon-tabler icon-tabler-copy cursor-pointer rounded-full hover:bg-blue-300 hover:text-white" 
                  width="17" height="17" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <rect x="8" y="8" width="12" height="12" rx="2" />
                  <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
                </svg>
                <span class="text-xs ml-2" :id="'copy-' + element.id" style="visibility: hidden;">Copied!</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" @click="removeAt(index, 3)"
                class="icon icon-tabler icon-tabler-trash cursor-pointer rounded-full hover:bg-red-300 hover:text-white"
                 width="17" height="17" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="10" y1="11" x2="10" y2="17" />
                <line x1="14" y1="11" x2="14" y2="17" />
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
              </svg>
            </span>
          </div>
        </draggable>
      </div>

      <div class="bg-blue-100 p-2">
        <div class="flex justify-between text-gray-600 mb-3">
          <h3 class="font-bold">Done</h3>
          <span @click="openAddModal('done')"
            class="text-xs cursor-pointer hover:underline">
            + Add
          </span>
        </div>
        <draggable class="flex flex-col px-2 h-full" :list="list4" group="tasks" animation="200"
          @change="setItems" empty-insert-threshold="20" direction="vertical">
          <div
            class="card bg-white shadow-lg p-2 my-2 flex flex-col cursor-move"
            :class="{
              'border-l-4 border-red-300': element.taskColor == 'red',
              'border-l-4 border-yellow-300': element.taskColor == 'yellow',
              'border-l-4 border-green-300': element.taskColor == 'green',
              'border-l-4 border-blue-300': element.taskColor == 'blue',
            }"
            v-for="(element, index) in list4"
            :key="element.id"
          >
            <span>{{ element.text }}</span>

            <span class="controls flex justify-between mt-2 text-gray-600 opacity-0 transition duration-300">
              <div class="flex" title="Copy">
                <svg xmlns="http://www.w3.org/2000/svg" @click="doCopy(element.text, element.id)"
                  class="icon icon-tabler icon-tabler-copy cursor-pointer rounded-full hover:bg-blue-300 hover:text-white" 
                  width="17" height="17" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <rect x="8" y="8" width="12" height="12" rx="2" />
                  <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
                </svg>
                <span class="text-xs ml-2" :id="'copy-' + element.id" style="visibility: hidden;">Copied!</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" @click="removeAt(index, 4)"
                class="icon icon-tabler icon-tabler-trash cursor-pointer rounded-full hover:bg-red-300 hover:text-white" 
                  width="17" height="17" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="10" y1="11" x2="10" y2="17" />
                <line x1="14" y1="11" x2="14" y2="17" />
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
              </svg>
            </span>
          </div>
        </draggable>
      </div>

      <dialog :open="openDialog" class="w-2/3 mt-10 border-2 border-gray-500 shadow-2xl rounded-lg">
        <div class="flex justify-end mb-2">
          <span @click="openDialog = false" 
            class="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-x" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <path d="M10 10l4 4m0 -4l-4 4" />
            </svg>
          </span>
        </div>
        <form @submit.prevent="add" class="space-y-4">
          <div class="flex flex-col">
            <label class="text-xs mb-2">Note/Task</label>
            <textarea v-model="text" class="bg-gray-100 px-3 py-1 rounded-lg" rows="4" required></textarea>
          </div>
          <div class="grid grid-cols-5 gap-5 w-full">
            <div class="col-span-2 flex flex-col w-full">
              <label class="text-xs mb-2">List</label>
              <select v-model="listSelected" class="bg-gray-100 px-3 py-1 rounded-lg" required>
                <option disabled value="">Please select one</option>
                <option value="todo">Todo</option>
                <option value="onhold">On hold</option>
                <option value="inprogress">In progress</option>
                <option value="done">Done</option>
              </select>
            </div>
            <div class="col-span-2 flex flex-col w-full">
              <label class="text-xs mb-2">Color</label>
              <select v-model="taskColor" class="bg-gray-100 px-3 py-1 rounded-lg">
                <option disabled value="">Please select one</option>
                <option value="red">Red</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="null">None</option>
              </select>
            </div>
            <div class="col-span-1 w-full flex items-center justify-center pr-2">
              <button type="submit"
                class="bg-blue-300 px-3 py-3 w-full uppercase text-xs text-white rounded-lg hover:bg-blue-400">
                add
              </button>
            </div>
          <div>
        </form>
      </dialog>

    </div>
  `,
  data() {
    return {
      openDialog: false,
      drag: false,
      listSelected: 'todo',
      text: null,
      id: null,
      taskColor: null,
      list1: [],
      list2: [],
      list3: [],
      list4: []
    };
  },
  created() {
    this.retrieveLists();
  },
  methods: {
    retrieveLists() {
      this.initializeList();
      this.list1 = JSON.parse(localStorage.getItem('todo'));
      this.list2 = JSON.parse(localStorage.getItem('onhold'));
      this.list3 = JSON.parse(localStorage.getItem('inprogress'));
      this.list4 = JSON.parse(localStorage.getItem('done'));
    },
    initializeList() {
      if(!localStorage.getItem('todo')) {
        localStorage.setItem('todo', "[]");
      } 
      if(!localStorage.getItem('onhold')) {
        localStorage.setItem('onhold', "[]");
      } 
      if(!localStorage.getItem('inprogress')) {
        localStorage.setItem('inprogress', "[]");
      } 
      if(!localStorage.getItem('done')) {
        localStorage.setItem('done', "[]");
      }
    },
    openAddModal(listType) {
      this.openDialog = true;
      this.listSelected = listType;
      this.id = uuidv1();
    },
    add() {
      if(this.listSelected == 'todo') {
        this.list1.unshift({ text: this.text, id: this.id, taskColor: this.taskColor });
      } else if (this.listSelected == 'onhold') {
        this.list2.unshift({ text: this.text, id: this.id, taskColor: this.taskColor });
      } else if (this.listSelected == 'inprogress') {
        this.list3.unshift({ text: this.text, id: this.id, taskColor: this.taskColor });
      } else if (this.listSelected == 'done') {
        this.list4.unshift({ text: this.text, id: this.id, taskColor: this.taskColor });
      }
      this.text = '';
      this.openDialog = false;
      this.taskColor = null;
      this.setItems();
    },
    removeAt(idx, listID) {
      if(listID == 1) {
        this.list1.splice(idx, 1);
      } else if(listID == 2) {
        this.list2.splice(idx, 1);
      } else if(listID == 3) {
        this.list3.splice(idx, 1);
      } else if(listID == 4) {
        this.list4.splice(idx, 1);
      }
      this.setItems();
    },
    doCopy(text, id) {
      let copiedMsg = document.querySelector(`#copy-${id}`);
      copiedMsg.style.visibility = "visible";
      this.$copyText(text)
        .then(() => {
          setTimeout(() => {
            copiedMsg.style.visibility = "hidden";
          }, 1000)
        });
    },
    setItems() {
      let store1 = JSON.stringify(this.list1);
      let store2 = JSON.stringify(this.list2);
      let store3 = JSON.stringify(this.list3);
      let store4 = JSON.stringify(this.list4);
      localStorage.setItem('todo', store1);
      localStorage.setItem('onhold', store2);
      localStorage.setItem('inprogress', store3);
      localStorage.setItem('done', store4);
    }
  }
}

var app = new Vue({
  el: '#app',
  components: {
    Board
  },
  template:  /*html*/`
    <section class="w-full h-full overflow-auto">
      <Board />
    </section>
  `
})

