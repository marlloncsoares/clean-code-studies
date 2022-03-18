// Exemplo Ruim
function copyChars(a1, a2) {
  for (let i = 0; i < a1.length; i++) {
    a2[i] = a1[i];
  }
}

// Exemplo bom
function copyChars(source, destination) {
  for (let i = 0; i < source.length; i++) {
    destination[i] = source[i];
  }
  return destination;
}
