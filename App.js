(function appIIFE(){
  let $container = $.find(".app-container")[0];
  
  let model = new Model();
  let view = new View(model);
  let controller = new Controller(model, view);
  $container.append(view.$);
})();