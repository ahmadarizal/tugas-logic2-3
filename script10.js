var n = 9;

for (x = 0; x < n; x++) {
  for (y = 0; y < n; y++) {
    if (x == y) {
      document.write(x * 2 + 1);
    } else if (y < x) {
      document.write("A");
    } else {
      document.write("&nbsp- ");
    }
  }
  document.write("<br>");
}
