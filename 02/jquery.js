const coffeeMenu = [
  { name: "아메리카노", price: 2500, isRemained: false },
  { name: "라떼", price: 3500, isRemained: false },
  { name: "바닐라라떼", price: 3000, isRemained: true },
];

$(() => {
  coffeeMenu.map(({ name, price, isRemained }) => {
    $(".coffeeList").append(
      `
			<div class='container'>
				<div>${name}</div>
				<div>${price}</div>
				<div>재고: 
					<span class=${isRemained ? "blue" : "red"}>
					${isRemained ? "있음" : "없음"}
					</span>
				</div>
			</div>
			`
    );
  });
});
