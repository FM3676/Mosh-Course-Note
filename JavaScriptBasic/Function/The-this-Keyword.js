// A method of an obj -> this: obj
// A regular function -> this: global(window, global)

const video = {
  title: "a",
  play() {
    console.log(this);
  },
};

video.play(); // { title: 'a', play: [Function: play] }

function playVideo() {
  console.log(this);
}

//playVideo();

/* 
  <ref *1> Object [global] {
    global: [Circular *1],
    clearInterval: [Function: clearInterval],
    ...........
  } 
*/

function Video(title) {
  this.title = title;
  console.log(this);
}

const v = new Video("a"); //Video { title: 'a' }
//When we using a new operator, it will create a new Obj, and assign 'this' to a new {}

const tagList = {
  title: "a",
  tags: ["a", "b", "b"],
  showTitleAndTag() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    });
  },
  showThisAndTag() {
    this.tags.forEach(function (tag) {
      console.log(this, tag);
    });
  },
  bindTheThisAndShow() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    }, this);   // The second parameter is setting what the callback function's 'this' assign to.
  },            // So now we can use this.title.
};

tagList.showTitleAndTag();
// undefined a
// undefined b
// undefined b

//This.title is undefined, but the method is in the Obj, why ?

tagList.showThisAndTag();
// Object{...} a
// Object{...} b
// Object{...} c

// The 'this' is in a callback function, which is a regular function, it's not a method.


tagList.bindTheThisAndShow();