                     // product gallery js\
           var $carousel1 = $('.nws-pdp-template-oneImagePhoto').slick({
               slidesToShow: 1,
               slidesToScroll: 1,
               arrows: false,
               dots: false,
               fade: true,
               asNavFor: '.nws-pdp-template-oneImageThumb'
           });
           var $carousel2 = $('.nws-pdp-template-oneImageThumb').slick({
               swipeToSlide: true,
               arrows: false,
               slidesToShow: 5,
               slidesToScroll: 1,
               asNavFor: '.nws-pdp-template-oneImagePhoto',
               dots: false,
               infinite: false,
               centerMode: false,
               focusOnSelect: true,
               vertical: false,
               verticalSwiping: false,
               responsive: [
               {
                 breakpoint: 1200,
                 settings: {
                   slidesToShow: 3,
                 }
               },
                      {
                 breakpoint: 768,
                 settings: {
                   vertical: false,
                   slidesToShow: 3,
                   verticalSwiping: false,
                   swipeToSlide: true,
                   arrows: true,
                   variableWidth: true,
                   draggable: true,
                   swipe: true,
                   infinite: true,
                 }
               }
             ]
           });


$(document).ready(function() {
  // Open drawer when button is clicked
  $('#nwsOpenDrawer').click(function() {
    $('.nwsDrawer').addClass('open');
    $('#overlay').addClass('active');
  });

  // Close drawer when close button is clicked
  $('#nwsCloseDrawer').click(function() {
    closeDrawer();
  });

  // Handle tab switching
  $('.nwsTab').click(function() {
    // Remove active class from all tabs and tab contents
    $('.nwsTab').removeClass('active');
    $('.nwsTab-content').removeClass('active');

    // Add active class to the clicked tab
    $(this).addClass('active');

    // Show corresponding tab content
    var tabId = $(this).attr('id').replace('Tab', 'Content');
    $('#' + tabId).addClass('active');
  });

  // Close drawer when clicked outside the drawer
  $(document).on('click', function(event) {
    if (!$(event.target).closest('.nwsDrawer').length &&
        !$(event.target).is('#nwsOpenDrawer')) {
      closeDrawer();
    }
  });

  // Function to close drawer
  function closeDrawer() {
    $('.nwsDrawer').removeClass('open');
    $('#overlay').removeClass('active');
  }

  // Open the default tab on page load
  $('#nwsAddonsTab').click();
});

$('.nws-color-close').click(function () {
    $('.nws-option-color').removeClass('show');
})
$(document).ready(function(){

  // Open the color drawer
  $("#open-color-drawer").click(function(){
    $("#color-drawer").css({"right": "0"});
    $(".nws-overlay").show();
  });

  // Close the color drawer
  $("#close-color-drawer").click(function(){
    $("#color-drawer").css("right", "-900px");
    $(".nws-overlay").hide();
  });

  // Handle color option selection
  $(".nws-variant-selection input[type='radio']").change(function(){
    var selectedOptions = []; // Array to store selected options
    $(".nws-variant-selection input[type='radio']:checked").each(function() {
      selectedOptions.push($(this).val().toLowerCase()); // Push the selected option value to the array
    });
    var dd = selectedOptions.join(''); // Concatenate selected options
    var id = $('input[name="'+dd+'"]').val(); // Get the corresponding variant ID
    $('input.product-variant-id').val(id); // Set the variant ID in the hidden input field

    // Display selected color in the drawer button
    var selectedColor = $(this).val();
    $("#selected-color").text(selectedColor);

  });

  // Close the color drawer when clicking outside of it (on the overlay)
  $(".nws-overlay").click(function(){
    $("#color-drawer").css("right", "-900px");
    $(".nws-overlay").hide();
  });
});

$('div#nws-size label').first().addClass('active-lvl');
$('div#nws-size label').on('click', function () {
    $('div#nws-size label').not(this).removeClass('active-lvl');
    $(this).addClass('active-lvl');
})
$('div#nws-color label').first().addClass('active-lvl');
$('div#nws-color label').on('click', function () {
    $('div#nws-color label').not(this).removeClass('active-lvl');
    $(this).addClass('active-lvl');
})

$('div#nws-color label').on('click',function () {
    var txt = $(this).text();
    $('.nws-drawer-button').text(txt);
})

// For Modifiers tab
$('#nwsModifiersContent .nws-drawer-item').on('click', function () {
    var clonedItem = $(this).clone();

    // Add active class to the clicked item
    $(this).addClass('active');

    // Check if item with the same data-product-id already exists in bundle wrapper
    if ($('.nws-bundle-wrapper').find('[data-product-id="' + clonedItem.data('product-id') + '"]').length === 0) {
        // If not already in bundle wrapper, add it
        $('.nws-bundle-wrapper').append(clonedItem);
    }

    // Add click event handler for removal
    $(clonedItem).on('click', function () {
        $(this).remove();
        // Remove active class from the corresponding item in the drawer when removed from bundle wrapper
        $('#nwsModifiersContent .nws-drawer-item[data-product-id="' + clonedItem.data('product-id') + '"]').removeClass('active');
    });
});

// For Add-Ons tab
$('#nwsAddonsContent .nws-drawer-item').on('click', function () {
    var clonedItem = $(this).clone();

    // Add active class to the clicked item
    $(this).addClass('active');

    // Check if item with the same data-product-id already exists in bundle wrapper
    if ($('.nws-bundle-wrapper').find('[data-product-id="' + clonedItem.data('product-id') + '"]').length === 0) {
        // If not already in bundle wrapper, add it
        $('.nws-bundle-wrapper').append(clonedItem);
    }

    // Add click event handler for removal
    $(clonedItem).on('click', function () {
        $(this).remove();
        // Remove active class from the corresponding item in the drawer when removed from bundle wrapper
        $('#nwsAddonsContent .nws-drawer-item[data-product-id="' + clonedItem.data('product-id') + '"]').removeClass('active');
    });
});
