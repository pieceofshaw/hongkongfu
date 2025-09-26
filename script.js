// highlight active nav by data-page attribute
(function(){
  var page = document.body.getAttribute('data-page') || '';
  document.querySelectorAll('.nav a').forEach(function(a){
    if(a.dataset.page === page){ a.classList.add('active'); }
  });
})();
