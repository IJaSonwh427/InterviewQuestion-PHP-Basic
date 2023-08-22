$(document).ready(function() {
    $("#submitBtn").click(function() {
        var username = $("#username").val();

        if (username.trim() !== "") {
            $.ajax({
                url: "info.php",
                method: "POST",
                data: { username: username },
                success: function(data) {
                    if (data === "Verified") {
                        $("#message").html("<p class='success'>Verified</p>");
                    } else {
                        $("#message").html("<p class='error'>Error</p>");
                    }
                }
            });
        } else {
            $("#message").html("<p class='error'>Username cannot be empty</p>");
        }
    });
});
