function calculateTriangleArea() {
  /* Triangle base  */
  const triangleBaseInput = document.getElementById("triangle_base");
  const triangleBaseText = triangleBaseInput.value;
  const base = parseFloat(triangleBaseText);
  //   console.log(typeof base);

  /* Triangle height  */
  const triangleHeightInput = document.getElementById("triangle_height");
  const triangleHeightText = triangleHeightInput.value;
  const height = parseFloat(triangleHeightText);
  //   console.log(height);

  const area = 0.5 * base * height;
  //   console.log("area of the triangle is : ", area);
  const triangleAreSpan = document.getElementById("triangle_area");
  triangleAreSpan.innerText = area;
}
/* Rectangle */
function calculateRectangleArea() {
  /* Rectangle width */
  const rectangleWidthInput = document.getElementById("rectangle_width");
  const rectangleWidhtText = rectangleWidthInput.value;
  let width = parseFloat(rectangleWidhtText);
  // console.log("width is :", width);

  /* Rectangle Length */
  const rectangleLengthInput = document.getElementById("rectangle_length");
  const rectangleLenghtText = rectangleLengthInput.value;
  let length = parseFloat(rectangleLenghtText);
  // console.log("length : ", length);

  const area = width * length;
  //   console.log("area of the triangle is : ", area);
  const rectangleSpan = document.getElementById("rectangle_area");
  rectangleSpan.innerText = area;
}
