var n = 9;

for (x = 0; x < n; x++) {
  for (y = 0; y < n; y++) {
    if (n - x <= y + 1) {
      document.write(" * ");
    } else {
      document.write("&nbsp- ");
    }
  }
  document.write("<br>");
}
