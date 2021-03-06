'use strict';

var numberOfItems = $('#blogpagination .blog-post').length; // Get total number of the items that should be paginated
var limitPerPage = 10; // Limit of items per each page
$('#blogpagination .blog-post:gt(' + (limitPerPage - 1) + ')').hide(); // Hide all items over page limits (e.g., 16th item, 17th item, etc.)
var totalPagesfloat = (numberOfItems / limitPerPage); // Get number of pages in float
var totalPages = Math.ceil(totalPagesfloat); //Get number of pages 
$(".pagination").append("<li class='page-item current-page active'><a class='page-link' href='#'>" + 1 + "</a></li>"); // Add first page marker

// Loop to insert page number for each sets of items equal to page limit (e.g., limit of 15 with 30 total items = insert 2 pages)
for (var i = 2; i <= totalPages; i++) {
  $(".pagination").append("<li class='page-item current-page'><a class='page-link' href='#'>" + i + "</a></li>"); // Insert page number into pagination tabs
  if(i!=totalPages-1){
    $(".pagination li.current-page").hide();//To hide all the other pages except the Previous and Next page links. If this if condition is removed, a separate link for every imdividual page will appear.
    
  }
}



// Add next button after all the page numbers  
$(".pagination").append("<li class='page-item' id='next-page'><a class='page-link' href='#' aria-label='Next'>" + "Next" + "</a></li>");




// Function that displays new items based on page number that was clicked
$(".pagination li.current-page").on("click", function() {
  // Check if page number that was clicked on is the current page that is being displayed
  if ($(this).hasClass('active')) {
    return false; // Return false (i.e., nothing to do, since user clicked on the page number that is already being displayed)
  } else {
    var currentPage = $(this).index(); // Get the current page number
    $(".pagination li").removeClass('active'); // Remove the 'active' class status from the page that is currently being displayed
    $(this).addClass('active'); // Add the 'active' class status to the page that was clicked on
    $("#blogpagination .blog-post").hide(); // Hide all items in loop, this case, all the list groups
    var grandTotal = limitPerPage * currentPage; // Get the total number of items up to the page number that was clicked on

    // Loop through total items, selecting a new set of items based on page number
    for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
      $("#blogpagination .blog-post:eq(" + i + ")").show(); // Show items from the new page that was selected
    }
  }

});

//To display the current page we are looking at
var currentPage = $(".pagination li.active").index();
$("#paginationlabel").html("<p class='text-muted font-italic mt-2' style='font-size:0.8rem;'>Page " + currentPage + " out of " + totalPages + "</p>");


// Function to navigate to the next page when users click on the next-page id (next page button)
$("#next-page").on("click", function() {
  var currentPage = $(".pagination li.active").index(); // Identify the current active page
  // Check to make sure that navigating to the next page will not exceed the total number of pages
  if (currentPage === totalPages) {
    return false; // Return false (i.e., cannot navigate any further, since it would exceed the maximum number of pages)
  } else {
    currentPage++; // Increment the page by one
    $(".pagination li").removeClass('active'); // Remove the 'active' class status from the current page
    $("#blogpagination .blog-post").hide(); // Hide all items in the pagination loop
    var grandTotal = limitPerPage * currentPage; // Get the total number of items up to the page that was selected

    // Loop through total items, selecting a new set of items based on page number
    for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
      $("#blogpagination .blog-post:eq(" + i + ")").show(); // Show items from the new page that was selected
    }

    $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass('active'); // Make new page number the 'active' page
    $("#paginationlabel").html("<p class='text-muted font-italic mt-2' style='font-size:0.8rem;'>Page " + currentPage + " out of " + totalPages + "</p>");// Change the current page indicator when the next button is pressed

  }
});

// Function to navigate to the previous page when users click on the previous-page id (previous page button)
$("#previous-page").on("click", function() {
  var currentPage = $(".pagination li.active").index(); // Identify the current active page
  // Check to make sure that users is not on page 1 and attempting to navigating to a previous page
  if (currentPage === 1) {
    return false; // Return false (i.e., cannot navigate to a previous page because the current page is page 1)
  } else {
    currentPage--; // Decrement page by one
    $(".pagination li").removeClass('active'); // Remove the 'activate' status class from the previous active page number
    $("#blogpagination .blog-post").hide(); // Hide all items in the pagination loop
    var grandTotal = limitPerPage * currentPage; // Get the total number of items up to the page that was selected

    // Loop through total items, selecting a new set of items based on page number
    for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
      $("#blogpagination .blog-post:eq(" + i + ")").show(); // Show items from the new page that was selected
    }

    $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass('active'); // Make new page number the 'active' page
    $("#paginationlabel").html("<p class='text-muted font-italic mt-2' style='font-size:0.8rem;'>Page " + currentPage + " out of " + totalPages + "</p>");// Change the current page indicator when the previous button is pressed
  }
});



