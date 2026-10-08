function filterFailed(data, passScore = 60) {
  if (!Array.isArray(data)) return [];

  return data
    .filter((student) => student.score < passScore)
    .map((student) => student.name);
}

module.exports = { filterFailed };