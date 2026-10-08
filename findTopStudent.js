function findTopStudent(data) {
  if (!Array.isArray(data) || data.length === 0) return null;

  let top = data[0];
  for (const student of data) {
    if (student.score > top.score) top = student;
  }
  return top.name;
}

module.exports = { findTopStudent };