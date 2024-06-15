class Coder {

    secondLang!: string

    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = 'Typescript'
    ) { 
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    public getAge(){
        return `Hello, I.m ${this.age}`
    }
}

const Dave = new Coder('Dave', 'Rock', 42)

console.log(Dave.getAge())



class WebDev extends Coder {
    public computer: string;

    constructor(
        computer: string,
        public name: string,
        public music: string,
        public age: number,
    ) {
        super(name, music, age);
        this.computer = computer;
    }

    public getLang() {
        return `I write ${this.lang}`;
    }
}

const Sara = new WebDev('Mac', 'Sara', 'Lofi', 25);
console.log(Sara.getLang());
console.log(Sara.age)

// classes, visibilitiy modifiers