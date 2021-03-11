/**  Sidebar   **/
(function ($) {
  'use strict'
  var $sidebar = $('.control-sidebar')
  var $container = $('<div />', {
    class: 'p-3 control-sidebar-content'
  })
  $sidebar.append($container)
  $container.append(
    '<h5>Important Links</h5><hr class="mb-2"/><div class="p-4 mb-3 rounded"><a href="http://www.utkaluniversity.nic.in/" class="fst-italic text-justify" target="_blank">1. Utkal University</a><br/><a href="https://sme.odisha.gov.in/" class="fst-italic text-justify" target="_blank">2. SME</a><br/><a href="https://www.bput.ac.in//" class="fst-italic text-justify" target="_blank">3. BPUT University </a><br/><a href="https://odishatv.in/" class="fst-italic text-justify" target="_blank">4. Odisha News </a></div>'
  )
})(jQuery)


/**  Typed JS   **/
$(function(){

  $("#typed").typed({
    strings: ["Education is not preparation for life; education is life itself.", 
              "The foundation of every state is the education of its youth.",
              "Education's purpose is to replace an empty mind with an open one.",
              "Education is the movement from darkness to light.", 
              "Successful career starts with good education.",
              "Balanga College : An institute you can trust."],
              
    typeSpeed: 70,
    loop: false
  });

});


/**  INITIALIZE AOS   **/
AOS.init();
