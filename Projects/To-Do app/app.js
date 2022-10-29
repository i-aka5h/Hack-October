var listItemID = 1;
$("#addTodo").on("click", function () {
    var newTodo = $("#newTodo").val();
    if (newTodo === "") {
        alert("to do cannot be empty");
    } else {
        $("#todoList").append(
            '<li id="li' +
            listItemID +
            '"><p class="todotext">' +
            newTodo +
            "</p> " +
            '<button data-id="li' +
            listItemID +
            '" class="removeTodo" href="#/"><i class="fa fa-minus"></i></button> ' +
            '<button data-id="li' +
            listItemID +
            '" class="doneTodo" href="#/"><i class="fa fa-check"></i></button>' +
            "</li>"
        );
        listItemID++;

        //clear input after adding todo
        $("#newTodo")
            .val("")
            .focus();
    }

    var todos = $("#todoList").html();
    localStorage.setItem("todos", todos);
    return false;
});


if (localStorage.getItem("todos")) {
    $("#todoList").html(localStorage.getItem("todos"));
}


$(document).on("click", ".removeTodo", function () {

    var removeItemId = "#" + $(this).attr("data-id");
    $(removeItemId).remove();


    var todos = $("#todoList").html();
    localStorage.setItem("todos", todos);
    return false;
});

$(document).on("click", ".doneTodo", function () {
    var completeItemId = "#" + $(this).attr("data-id") + " .todotext";
    $(completeItemId).toggleClass("lineThrough");
    $(this).toggleClass("doneTodoGrey");


    var todos = $("#todoList").html();
    localStorage.setItem("todos", todos);

});
