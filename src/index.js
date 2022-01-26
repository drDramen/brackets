module.exports = function check(str, bracketsConfig) {
  if (str.length % 2) return false;

  const pairs = bracketsConfig.reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
  let stack = [];
  let string = str.split('');

  for (let i = 0; i < string.length; i++) {
    if (
      string[i] in pairs &&
      (string[i] != pairs[string[i]] || (string[i] != string[i + 1] && i != string.length - 1)) &&
      pairs[stack[stack.length - 1]] != string[i]
    ) {
      stack.push(string[i]);
    } else if (pairs[stack[stack.length - 1]] == string[i]) {
      stack.pop();
    } else if (string[i] == string[i + 1]) {
      i++;
      continue;
    }
  }

  return !stack.length;
}
