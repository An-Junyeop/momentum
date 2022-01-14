const USERNAME = "name";
const LIST = "todoList";

class Store {
    constructor(localStorage) {

        this.localStorage = localStorage;
        if(this.localStorage.getItem(USERNAME) === "" && this.localStorage.getItem(USERNAME) === null){
            this.localStorage.setItem(USERNAME, "");
        }

        if(this.localStorage.getItem(USERNAME) === "" && this.localStorage.getItem(USERNAME) === null) {
            this.localStorage.setItem(LIST, JSON.stringify([]));
        }

        console.log(this.localStorage);
    }

    // localStorage에 name 값 저장하기
    setStorageName(name) {
        this.localStorage.setItem(USERNAME, name.trim());
    }

    // localStorage에서 name 데이터 가져오기
    getStorageName() {
        if (this.localStorage.getItem(USERNAME) === null ||
            this.localStorage.getItem(USERNAME) === undefined ||
            this.localStorage.getItem(USERNAME) === '') {
            return '';
        } else {
            return this.localStorage.getItem(USERNAME);
        }
    }

    // localStorage에서 todoList 중 마지막 ID 값 +1 가져오기
    getTodoListNextID() {
        const list = JSON.parse(this.localStorage.getItem(LIST));

        if (list !== null) {
            let max = 0;
            list.map(item => max = max < item.id ? item.id : max);
            return ++max;
        } else {
            return 1;
        }
    }

    /* To do 아이템 추가 */
   addTodoItem(item) {
       const todoList = JSON.parse(this.localStorage.getItem(LIST));
       todoList.push(item);

       this.localStorage.setItem(LIST, JSON?.stringify(todoList));
    }
    /* To do 아이템 리스트 가져오기 */
    getTodoList() {
        return JSON.parse(this.localStorage.getItem(LIST));
    }

    /* To do 아이템 업데이트 */
    updateTodoList(id) {
        const todoList = JSON.parse(this.localStorage.getItem(LIST))
            .map(item =>
                item.id === id ? {...item, done: !item.done} : item
            );

        this.localStorage.setItem(LIST, JSON.stringify(todoList));
    }

    /* To do 아이템 삭제 */
    removeTodoItem(id) {
        const todoList = JSON.parse(this.localStorage.getItem(LIST))
            .filter(item => item.id !== id);

        this.localStorage.setItem(LIST, JSON.stringify(todoList));
    }
}

const store = new Store(window.localStorage);
export default store;