function run (){
    $(addMechanic);
    $(checkMechanic);
    $(deleteMechanic);
}


//function shopping-list (){
// all click functions work
//This function listens to add item button then creates a new li with the same format
// 
function addMechanic (){
    $('#js-shopping-list-form button').click(function(event){
        event.preventDefault();
        let additem = $('#shopping-list-entry').val();      
        $('.shopping-list').append(
            '<li>' +
            '<span class="shopping-item">' + 
            additem +
            '</span>' +
            '<div class="shopping-item-controls">' +
          '<button class="shopping-item-toggle">' +
            '<span class="button-label">check</span>' +
          '</button>' +
          '<button class="shopping-item-delete">' +
            '<span class="button-label">delete</span>' +
          '</button>' +
            '</div>' +
            '</li>');
    }
)};

//This function listens to the check button and changes the attribute to have a line through the text
//  when shopping-item-toggle is pressed this function adds  shopping-item__checked class to span class
// This Works
function checkMechanic (){
    $('.shopping-item-toggle').click(function(event) {
        console.log('check');
        $(this).closest('li').find(".shopping-item").toggleClass('shopping-item__checked');
    }    
)};
//This function removes this list item entierly 
// when shopping-item-delete is pressed
// This Works
function deleteMechanic (){
    $('.shopping-item-delete').click(function(event) {
        $(this).closest('li').remove();
        
    }
)};













$(run);