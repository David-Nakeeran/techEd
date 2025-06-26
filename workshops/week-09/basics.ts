// Data types
//inline
const myName: string = "Manny";
const myAge: number = 89;
const isSunny: boolean = true;

const FavThings: string[] = ["pizza", "nature", "purple"];
const otherThings: Array<string> = ["pizza", "nature", "purple"];
const anotherArray: (string | number | boolean)[] = ["flowers", 65, false];

let myJob = {
  company: "tech Ed",
  location: "Norwich",
};

// how to declare types separetly
// keyword -> type
import { myJobType } from "./types.js";
const myOtherJob: myJobType = {
  company: "Tech Ed",
  location: "Norwich",
};

// types in functions
function add(a: number, b: number) {
  return a + b;
}

// union types
// custom types we create ourselves
type treeType = {
  treeVariant?: "fir" | "maple" | "cherry" | "oak";
  evergreen?: boolean;
  age?: number;
  imgUrl?: string | null;
};

const gardenTree: treeType = {
  treeVariant: "oak",
  evergreen: false,
  age: 70,
  imgUrl: null,
};

// array of objects type
const myTrees: treeType[] = [
  {
    treeVariant: "oak",
    evergreen: false,
    age: 70,
    imgUrl: null,
  },
  {
    treeVariant: "maple",
    evergreen: false,
    age: 50,
    imgUrl: null,
  },
  {
    treeVariant: "cherry",
    evergreen: false,
    age: 20,
    imgUrl: null,
  },
];
