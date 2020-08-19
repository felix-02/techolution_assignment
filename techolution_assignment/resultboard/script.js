let data = [
  {
    name: "rajiv",
    marks: {
      Maths: "18",
      English: "21",
      Science: "45",
    },
    rollNumber: "KV2017-5A2",
  },
  {
    name: "abhishek",
    marks: {
      Maths: "43",
      English: "30",
      Science: "37",
    },
    rollNumber: "KV2017-5A1",
  },
  {
    name: "zoya",
    marks: {
      Maths: "42",
      English: "31",
      Science: "50",
    },
    rollNumber: "KV2017-5A3",
  },
];

let mx;
let scores = [];
let isToppr = false;

data.forEach((stu) => {
  let marksMath = Number(stu.marks.Maths);
  let marksEnglish = Number(stu.marks.English);
  let marksScience = Number(stu.marks.Science);
  let total = marksMath + marksEnglish + marksScience;
  scores.push(total);
});

function maxNumber(arr) {
  mx = Math.max(...arr);
  return mx;
}
maxNumber(scores);

data
  .sort((a, b) => {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;
  })
  .forEach((record) => {
    let el = document.createElement("tr");
    let marksMath = Number(record.marks.Maths);
    let marksEnglish = Number(record.marks.English);
    let marksScience = Number(record.marks.Science);
    let status = "";
    let total = marksMath + marksEnglish + marksScience;

    if (marksMath < 20 || marksEnglish < 20 || marksScience < 20) {
      status = "fail";
      el.classList.add("failed");
    } else {
      if (mx === total) {
        isToppr = true;
        el.classList.add("topper");
      } else {
        isToppr = false;
      }
      status = isToppr ? "topper" : "pass";
    }

    el.innerHTML = `<td>${record.name}</td>
                    <td> ${record.rollNumber}</td>
                    <td>${total}</td>
                    <td>${status} </td>
                   `;
    document.querySelector("#tabloid tbody").appendChild(el);
  });
