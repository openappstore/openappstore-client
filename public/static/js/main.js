$(function() {
  
  $('button.install').click(function() {
    
    var self = this;
    var app = $(this).parent().data('app');
    
    $(this).text('Installing...');
    
    $.getJSON('/install/' + app, function(data) {
      var responseText = data.success === true ? 'Installed': 'Install failed';
      $(self).text(responseText);
    });
    
  });
});