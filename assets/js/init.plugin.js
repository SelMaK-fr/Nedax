        //Tagsinput
    function onAddTag(tag) {
      alert("Added a tag: " + tag);
    }
    function onRemoveTag(tag) {
      alert("Removed a tag: " + tag);
    }

    function onChangeTag(input,tag) {
      alert("Changed a tag: " + tag);
    }

    $(function() {

        $('.tagsinput').tagsInput({
           'defaultText':'Add tags (separated by a comma)',
           'placeholderColor' : '#666666'
        });

    });
        // END Tagsinput

// MENU
(function($){
   
  $('#header--icon').click(function(e){
     e.preventDefault();
     $('body').toggleClass('width--sidebar');
  });
  
  $('#site--cache').click(function(e){
      $('body').removeClass('with--sidebar');
  });
  
  /***/
  
  
})(jQuery);
        
// Modal
const buttons = document.querySelectorAll(`button[data-modal-trigger]`);

for(let button of buttons) {
	modalEvent(button);
}

function modalEvent(button) {
	button.addEventListener('click', () => {
		const trigger = button.getAttribute('data-modal-trigger');
		const modal = document.querySelector(`[data-modal=${trigger}]`);
		const contentWrapper = modal.querySelector('.content-wrapper');
		const close = modal.querySelector('.close');

		close.addEventListener('click', () => modal.classList.remove('open'));
		modal.addEventListener('click', () => modal.classList.remove('open'));
		contentWrapper.addEventListener('click', (e) => e.stopPropagation());

		modal.classList.toggle('open');
	});
}