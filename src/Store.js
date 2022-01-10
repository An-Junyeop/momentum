class Store {
    constructor(localStorage) {
        this.localStorage = localStorage
        console.log("local storage", this.localStorage);
    }

    // localStorage에 name 값 저장하기
    setStorageName(name) {
        if(name.trim() !== '') {
            this.localStorage.setItem("name", name.trim());
        }
    }
    // localStorage에서 name 데이터 가져오기
    getStorageName() {
        if (this.localStorage.getItem("name") === null ||
            this.localStorage.getItem("name") === undefined ||
            this.localStorage.getItem("name") === '') {
            return '';
        } else {
            return this.localStorage.getItem("name");
        }
    }
}

const store = new Store(window.localStorage);
export default store;