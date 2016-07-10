var viewModel = kendo.observable({
  productsSource: dataSource,
  selectedProduct: null,
  checkThisForm: function() {

  }
});

kendo.bind($("#productEditForm"), viewModel);