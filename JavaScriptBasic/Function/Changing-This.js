const tagList = {
  title: "a",
  tags: ["a", "b", "c"],
  showTitleAndTag() {
    const self = this; // Assign this to self
    this.tags.forEach(function (tag) {
      console.log(self.title, tag);
    });
  },

  useArrowFnToShow() {
    this.tags.forEach(tag=> {
      console.log(this.title, tag);
    });
  },
};

function playVideo(a, b) {
  console.log(this);
}

playVideo.call({ name: "Jack" }, 1, 2); // { name: 'Jack' }
playVideo.apply({ name: "Jack" }, [1, 2]);
//Bindind the function to this new Obj.

// The difference between call() and apply() is the way to past the parameters.
// call() past the parameters directly,
// apply() use an array to pass it.

playVideo.bind({ name: "Jack" })(); // { name: 'Jack' }
// The function will not be not called after bind(),
// It return a new function which's 'this' bind to the new Obj.

tagList.useArrowFnToShow();
// a a
// a b
// a c
// The arrow function will bind 'this' to it's Obj automatically