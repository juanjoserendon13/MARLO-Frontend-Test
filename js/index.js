$(document).ready(function () {

    console.log("ready!");
    /* This variables, simulate the dat fetched from the server */
    var users = [{
        id: 1,
        name: 'Juan José',
        last: 'Rendón',
        email: 'email@correo.com',
        userName: 'juan13',
    },
    {
        id: 2,
        name: 'Sebastian',
        last: 'Amariles',
        email: 'email@correo.com',
        userName: 'samariles',
    }];


    /* This method process the incoming data  */
    $.each(users, function (index, value) {
        console.log(value.name);
        // time += 200;


        var userCont = $("<div>", { "class": "userCont", "id": value.id });
        var indexUs = $("<div>", { "class": "indexUser" }).text(value.id);
        var dataUs = $("<div>", { "class": "dataUser" });
        var nameUs = $("<span>", { "class": "nameUser" }).text(value.name + " " + value.last);
        var inputsUs = $("<div>", { "class": "inputsUser", "id": "inputs_from_" + value.id });
        var inputsLef = $("<div>", { "class": "inputsLeft" });
        var input1 = $("<div>", { "class": "inputs" });
        var input2 = $("<div>", { "class": "inputs" });
        var input3 = $("<div>", { "class": "inputs" });
        var input4 = $("<div>", { "class": "inputs" });
        var input5 = $("<div>", { "class": "inputs" });
        var input6 = $("<div>", { "class": "inputs" });
        var first = $("<span>").text("First name:");
        var emailU = $("<span>").text("Email:");
        var inputPFirst = $("<input>", { "type": "text", "placeholder": value.name });
        var inputPEmail = $("<input>", { "type": "text", "placeholder": value.email });
        var roleT = $("<span>").text("User role(s):");
        var itemUl = $("<ul>", { "class": "roles" });
        var itemLi = $("<li>", { "class": "itemRole" });
        var inputCheck = $("<input>", { "type": "checkbox" });
        var roleOne = $("<span>", { "class": "textCheck" }).text("Administrador");
        var roleTwo = $("<span>", { "class": "textCheck" }).text("Member");
        var roleThree = $("<span>", { "class": "textCheck" }).text("Contributor");

        userCont.append(indexUs, dataUs, editBtn);
        dataUs.append(nameUs, inputsUs);
        inputsUs.append(inputsLef, inputsRig);
        inputsLef.append(input1, input2, input3);


        var inputsRig = $("<div>", { "class": "inputsRight" });
        var lastN = $("<span>").text("Last name:");
        var inputPLast = $("<input>", { "type": "text", "placeholder": value.last });
        var userN = $("<span>").text("User name:");
        var inputsUserN = $("<input>", { "type": "text", "placeholder": value.userName });
        var userAc = $("<span>").text("User active:");
        var itemUlAc = $("<ul>", { "class": "active" });
        var itemLiAc = $("<li>", { "class": "itemUser" });
        var inputRadio = $("<input>", { "type": "radio" });
        var txtRadioOne = $("<span>", { "class": "textRadio" }).text("Yes");
        var txtRadioTwo = $("<span>", { "class": "textRadio" }).text("No");
        var closeBtn = $("<button>", { "class": "closeBtn", "id": value.id });
        var iconClose = $("<i>", { "class": "far fa-edit iconClose" });
        var txtClose = $("<span>").text("Close");

        var editBtn = $("<button>", { "class": "editBtn", "id": "edit_" + value.id });
        var iconEdit = $("<i>", { "class": "far fa-edit iconEdit" });
        var txtEdit = $("<span>").text("Edit");

        var deleteBtn = $("<button>", { "class": "deleteBtn", "id": "delete_" + value.id });
        var iconEdit = $("<i>", { "class": "fas fa-times" });



        $(".globalCont").append(userCont);
    });

    /* Function that shows the information of the user */
    $(".editBtn").on("click", function (event) {
        var id = $(this).closest("div").attr("id");
        var inputs = $("#inputs_from_" + id);
        var editBtn = $("#edit_" + id);
        var deleteBtn = $("#delete_" + id);
        // var id = e.target.attr("id");
        console.log(id);

        inputs.css("display", "flex");
        editBtn.hide();
        deleteBtn.show();
    });

    /* Function that hide the information of the user */
    $(".closeBtn").on("click", function (event) {
        var id = $(this).attr("id");
        var inputs = $("#inputs_from_" + id);
        var editBtn = $("#edit_" + id);
        var deleteBtn = $("#delete_" + id);
        // var id = e.target.attr("id");
        console.log(id);

        inputs.css("display", "none");
        editBtn.show();
        deleteBtn.hide();
    });


});