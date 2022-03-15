var n = 9;

for (x = 0; x < n; x++) {
  for (y = 0; y < n; y++) {
    if (x == y) {
      document.write(y * 2);
    } else if (y < x) {
      document.write("A");
    } else {
      document.write("B");
    }
  }
  document.write("<br>");
}
