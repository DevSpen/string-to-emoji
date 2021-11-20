function emojify(text) {
  var result = text
  .replace(/a/gi, "🇦")
  .replace(/a/gi, "🇿")
  return result
}

export { emojify }