
it('should calculate the monthly rate correctly', function () {
  const values = {amount: 5000, years: 10, rate: 5.5 };
  expect(calculateMonthlyPayment(values)).toEqual('54.26');

});


it("should return a result with 2 decimal places", function() {
  const values = {amount: 1075, years: 5, rate: 2.3};
  expect(calculateMonthlyPayment(values)).toEqual('18.98');
});

it("should handle small loan amounts", function(){
  const values = {amount: 5, years: 10, rate: 5.5};
  expect(calculateMonthlyPayment(values)).toEqual('0.05');
});

it("should handle high interest rates", function(){
  const values = {amount: 1000, years: 10, rate: 95};
  expect(calculateMonthlyPayment(values)).toEqual('79.18');
})

