class ComparisonAlgoObj {
  constructor(correct, transcript) {
    this.correct = correct;
    this.transcript = transcript;
  }

  compareAlgo() {
    let ma = {};
    let [p1, p2] = [0, 0];

    function convertArr(s) {
      let success = s.replace(/[.,/#!$%^&*;:{}=-_`~()?]/g, "");
      let finalString = success.replace(/\s{1,}/g, " ");
      let res = finalString.split(" ");
      console.log(res);

      return res;
    }
    let arr1 = convertArr(this.correct);
    let arr2 = convertArr(this.transcript);
    let marks = new Array(arr2.length + arr1.length);

    for (let i = 0; i < arr1.length; i++) {
      if (!(arr1[i] in ma)) {
        ma[arr1[i]] = 0;
      }
      ma[arr1[i]]++;
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
            arr2.splice(p2 + 1, 0, arr1[p1]);
            marks[p2 + 1] = 3;
            p1++;
            p2++;
          }
          marks[p2] = 2;
        } else {
          if (
            p2 + 1 === arr2.length ||
            (arr1[p1] !== arr2[p2 + 1] && !(arr2[p2 + 1] in ma))
          ) {
            arr2.splice(p2, 0, arr1[p1]);
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
      arr2.splice(p2, arr1[p1]);
      // marks = new Array(arr2.length);
      marks[p2++] = 3;
    }

    for (; p2 < arr2.length; p2++) {
      if (arr2[p2] in ma) {
        marks[p2] = 2;
      } else {
        marks[p2] = 1;
      }
    }

    let res ={};
    for(let i = 0; i < arr2.length; i++){
      res[arr2[i]] = marks[i];
    }
    console.log("Res: " + res);
    return res;
  }
}