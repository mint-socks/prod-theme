$(document).ready(function() {
    preventLink();
    productViewer();
    loadFirstProduct();
    loadCartPreview();
    loadBlogView();
    hideBlogView();

  });

function preventLink() {
  $('a.small-product').click(function(event) {
      event.preventDefault();
  })
}


function productViewer() {
  $('a.small-product').click(function(event) {
    prodId = this.href.slice(-9)
    hideProduct(prodId);
    showProduct(prodId);
    selectedProduct(prodId);
  })
}

function showProduct(prodId) {
  $('#'+prodId).show("slow");
  $('#'+prodId).addClass('product-visible');
}

function hideProduct(prodId) {
  hiddenEl = $('.product-visible')
  hiddenEl.hide("slow");
  hiddenEl.removeClass('product-visible')
}

function loadFirstProduct() {
  $('a.small-product')[0].click()
}

function selectedProduct(prodId) {
  removeSelectedProduct()
  $('#prev-'+prodId).addClass('visible-prev')
}

function removeSelectedProduct() {
  $('.visible-prev').removeClass('visible-prev')
}

function loadCartPreview() {
  $('#show-cart').hover(function() {
    $('#cart-prev').show()
  }, function() {
    $('#cart-prev').hide()
  })
}

function loadBlogView(){
  $('a.blog-link').click(function(event){
    event.preventDefault();
    showBlog();

  })
}
function showBlog(){
  $('#blog').addClass('show-blog')
}

function hideBlogView(){
  $('.blog-nav').click(function(){
    $('#blog').removeClass('show-blog')
  })
}

