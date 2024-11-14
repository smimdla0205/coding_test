function solution(id_list, report, k) {
  let report_user = {};
  let reportNumber = {};
  let report_list = [];
  let uniqueReport = [...new Set(report)];
  let reports = [];
  let result = Array(id_list.length).fill(0);
  for (let i = 0; i < uniqueReport.length; i++) {
    reports[i] = uniqueReport[i].split(" ");
  }

  for (let j = 0; j < reports.length; j++) {
    if (reportNumber[reports[j][1]]) {
      reportNumber[reports[j][1]] += 1;
    } else {
      reportNumber[reports[j][1]] = 1;
    }
    if (report_user[reports[j][0]]) {
      report_user[reports[j][0]].push(reports[j][1]);
    } else {
      report_user[reports[j][0]] = [];
      report_user[reports[j][0]].push(reports[j][1]);
    }
  }
  for (key in reportNumber) {
    if (reportNumber[key] >= k) {
      report_list.push(key);
    }
  }
  for (let a = 0; a < id_list.length; a++) {
    if (report_user[id_list[a]]) {
      for (let b = 0; b < report_user[id_list[a]].length; b++) {
        if (report_list.length === 0) {
          result = Array(id_list.length).fill(0);
        }
        for (let c = 0; c < report_list.length; c++) {
          if (report_user[id_list[a]][b] === report_list[c]) {
            result[a] += 1;
          }
        }
      }
    } else {
      result[a] = 0;
    }
  }

  return result;
}
console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);

console.log(solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3));
function mapsChange(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const visited = Array.from(Array(n), () => Array.from(Array(m), () => Array(2).fill(false)));
  return visited;
}
