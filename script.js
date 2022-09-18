class Cars {
  constructor(brand, model, mileage, price, image) {
    this.brand = brand;
    this.model = model;
    this.mileage = mileage;
    this.price = price;
    this.image = image;
    this.createTextAndImage = function () {
      const box = document.createElement("div");
      box.className = "box";
      box.addEventListener("click", () =>
        alert("The price is: " + this.price + " EUR")
      );
      const image = document.createElement("img");
      image.src = this.image;
      const text = document.createElement("div");
      text.textContent = this.brand + " " + this.model;
      box.append(image, text);
      document.querySelector("div.mainContainer").append(box);
    };
  }
}
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  let brand = document.getElementById("carBrand").value;
  let model = document.getElementById("carModel").value;
  let mileage = document.getElementById("carMileage").value;
  let price = document.getElementById("carPrice").value;
  let image = document.getElementById("carImage").value;
  const car = new Cars(brand, model, mileage, price, image);
  car.createTextAndImage();
});
