function rot13(str) {
  const letters = {};
  let i = 65,
    j = 65 + 13;

  while (i < 65 + 13) {
    letters[String.fromCharCode(i++)] = String.fromCharCode(j++);
  }

  j = 65;
  while (i < 65 + 26) {
    letters[String.fromCharCode(i++)] = String.fromCharCode(j++);
  }

  let ans = "";

  for (let s of str) {
    if (s.charCodeAt(s) >= 65 && s.charCodeAt(s) <= 90) {
      ans += letters[s];
    } else ans += s;
  }

  console.log(ans);

  return ans;
}

rot13("SERR PBQR PNZC");
