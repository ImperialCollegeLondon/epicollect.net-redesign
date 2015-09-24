$(document).ready(function () {
//on create project pages

    $('form[name=createProject]').submit(function () {
        var projectName = $('input[name=projectName]').val();
        $.ajax({
            async: false,
            cache: false,
            type: 'POST',
            url: '/createProject.asp',
            data: {
                projectName: projectName
            },
            dataType: 'string',
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $('#error').text('Error: ' + errorThrown);
                $('form#create-project').addClass('has-error');
            },
            success: function (string) {
                if (string.indexOf('Error:') >= 0) {
                    $('#error').html(string);
                    $('form#create-project').addClass('has-error');
                }
                else {
                    $('form#create-project').removeClass('has-error');
                    window.top.location = '/project.html?name=' + projectName;
                }
            }
        });

        //don't actually submit the form
        return false;
    });
});
