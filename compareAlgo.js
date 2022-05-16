class ComparisonAlgoObj {
  constructor(correct, transcript) {
    this.correct = correct;
    this.transcript = transcript;
  }

  compareAlgo() {
    let ma = {};
    let [p1, p2] = [0, 0];

    function convertArr(s) {
      let sucess = s.replace(/[.,/#!$%^&*;:{}=-_`~()?]/g, "");
      let finalString = sucess.replace(/\s{2,}/g, " ");
      let res = finalString.split(" ");
      console.log(res);

      return res;
    }
    let arr1 = convertArr(this.correct);
    let arr2 = convertArr(this.transcript);
    let marks = new Array(arr2.length + arr1.length);

    for (let i = 0; i < arr1.length; i++) {
      if (!(arr2[i] in ma)) {
        ma[arr2[i]] = 0;
      }
      ma[arr2[i]]++;
    }

    while (p1 < arr1.length && p2 < arr2.length) {
      if (arr1[p1] === arr2[p2]) {
        p1++;
        p2++;
      } else {
        if (arr2[p2] in ma) {
          if (
            p2 + 1 === arr2.length ||
            (arr1[p1] !== arr2[p2 + 1] && !(arr2[p2 + 1] in ma))
          ) {
            // add before
            arr2[p2 + 1] = arr1[p1];
            // marks = new Array(arr2.length);
            marks[p2] = 2; // (unlike below, always mark orange even if just one out of place)
            marks[p2 + 1] = 3; // missing
            p1++;
            p2++; // OMAR case on paper
          } else {
            // do not add before
            marks[p2] = 2;
          }
        } else {
          if (
            p2 + 1 === arr2.length ||
            (arr1[p1] !== arr2[p2 + 1] && !(arr2[p2 + 1] in ma))
          ) {
            // add before
            arr2[p2] = arr1[p1];
            //  marks = new Array(arr2.length);
            marks[p2] = 3; // missing
            marks[p2 + 1] = 1; // (do not mark orange if just one out of place)
            p1++; // must move forward
          } else {
            // do not add before
            marks[p2] = 1;
          }
        }
        p2++;
      }
    }

    for (; p1 < arr1.length; p1++) {
      arr2[p2] = arr1[p1];
      // marks = new Array(arr2.length);
      marks[p2++] = 3;
    }

    for (; p2 < arr2.length; p2++) {
      if (arr[p2] in ma) {
        marks[p2] = 2;
      } else {
        marks[p2] = 1;
      }
    }
    console.log("Marks: " + marks.slice(0, p2));
    return marks.slice(0, p2);
  }
}
