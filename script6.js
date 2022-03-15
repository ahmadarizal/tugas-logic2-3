var n = 9;

for (x = 0; x < n; x++) {
  for (y = 0; y < n; y++) {
    if (x < y) {
      document.write(" - ");
    } else if (x < n - y - 1) {
      document.write(" - ");
    } else {
      document.write("*");
    }
  }
  document.write("<br>");
}
