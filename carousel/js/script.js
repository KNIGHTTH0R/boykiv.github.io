!function($) {
    $(function () {

        $('.go-up').on('click', function () {
            $.smoothScroll({
                scrollElement: $('body'),
                scrollTarget: 'body'
            });
        });

        $('.menu-btn').on('click', function () {
            $('.main-nav ul').toggleClass('active');
        });

        var mainNav = document.getElementsByClassName('main-nav')[0];
        var logo = document.getElementsByClassName('logo-svg')[0];
        var logoSymbol = document.querySelectorAll('.logo-svg .symbol');
        var logoSmallSign = document.querySelectorAll('.logo-svg .minor-text');
        var menuBtn = document.getElementsByClassName('menu-btn')[0];
        var logoBlock = document.getElementsByClassName('logo')[0];

        function scrollFunction() {
            topOffset = window.pageYOffset ? window.pageYOffset : document.body.scrollTop;
            var menuHeight = 80 - topOffset;
            if (menuHeight >= 30) {
                mainNav.style.height = menuHeight + 'px';
                mainNav.style.lineHeight = menuHeight + 'px';
                logo.style.marginTop = -10 + topOffset * 0.02 + 'px';
                mainNav.className = "main-nav";
                menuBtn.style.height = menuHeight + 'px';
                logoBlock.style.height = menuHeight + 'px';
            } else {
                mainNav.style.height = '40px';
                mainNav.style.lineHeight = '30px';
                mainNav.className = "main-nav small";
                logo.style.marginTop = -10 + 50 * 0.02 + 'px';
                menuBtn.style.height = '30px';
                logoBlock.style.height = '30px';
            }
        }

        window.onscroll = scrollFunction;

        var topOffset = window.pageYOffset ? window.pageYOffset : document.body.scrollTop;

        $('.form-menu li:first-child').on('click', function () {
            $('.form-menu > li').removeClass('active');
            $('.form-menu li:first-child').addClass('active');

            $('.company-name').slideUp(200);
            $('.budget').slideUp(200);

            $('#content').attr('placeholder', 'Leave your message*');
            $(".contact-form input, .contact-form textarea").removeClass('invalid');
        });

        $('.form-menu li:last-child').on('click', function () {
            $('.form-menu > li').removeClass('active');
            $('.form-menu li:last-child').addClass('active');

            $('.company-name').slideDown(200);
            $('.budget').slideDown(200);

            $('#content').attr('placeholder', 'Describe your project*');
            $(".contact-form input, .contact-form textarea").removeClass('invalid');
        });

        var actualHeight = $('.testimonials li:nth-child(1)').height();
        resizeTestimonial(1);
        setTimeout(function () {
            var actualHeight = $('.testimonials li:nth-child(1)').height();
            resizeTestimonial(1);
        }, 500);

        $('.customers li').on('click', function () {
            resizeTestimonial(this.id);
        });

        function resizeTestimonial(n) {
            actualHeight = $('.testimonials li:nth-child(' + n + ')').height();
            if (actualHeight > 160) {
                $('.testimonials').height(actualHeight);
            } else {
                $('.testimonials').height(160);
            }
        }

        if ($('body').hasClass('home-page')) {
            $(window).on('resize', function () {
                resizeTestimonial($('.customers .active').attr('id'));
            });
        }


// FORM SENDING

        $('.pay-type').on('click', function () {
            if ($('#fixed').attr("checked")) {
                $('.fixed').slideDown(200);
                $('.rate').slideUp(200);
                $('.pay-label').css('width', '40px');
                $('.budget-range').css('width', '170px');
            } else {
                $('.fixed').slideUp(200);
                $('.rate').slideDown(200);
                $('.pay-label').css('width', '74px');
                $('.budget-range').css('width', '136px');
            }
        });

        var $form = $('#form'),
            file,
            $fileContainer = $('.file-container'),
            $fileCancel = $('.file-cancel');

        if ($form.length) {
            $fileCancel.on("click", function () {
                $fileContainer.hide();
                file = null;
            });

            $form.fileupload({
                url: '/sendmail',
                dataType : 'json',
                dropZone: null,
                autoUpload: false,
                singleFileUploads: false,
                maxNumberOfFiles: 1,
                maxFileSize: 10 * 1024 * 1024, // 10 MiB
                change: function (e, data) {
                    file = data.files[0];

                    if (!validateFiles(file)) {
                        $fileCancel.click();
                        return false;
                    }

                    if (!$fileContainer.is(':visible')) {
                        $fileContainer.show();
                    }
                    $('.file-name').text(file.name);

                    data.files.length = 0;
                },
                progressall: function (e, data) {
                    console.log( parseInt(data.loaded / data.total * 100, 10) );
                }
            });

            $form.on('submit', function (e) {
                if (!validateContact()) {
                    return false;
                }

                var formData = serializeData($form);

                compileData(formData);
                fieldsetToggle($form.find('fieldset')) && fieldsetToggle(true);

                if (file) {
                    $form.fileupload('send', { files: [file], formData: formData })
                        .success(function () {
                            onUploadSuccess.call(this.form[0]);
                        })
                        .error(onUploadError);
                } else {
                    $.ajax({
                        url: "/sendmail",
                        data: JSON.stringify(formData),
                        type: "POST",
                        contentType: 'application/json',
                        context: $form[0],
                        success: onUploadSuccess,
                        error: onUploadError
                    });
                }

                return false;
            });
        }


        function onUploadSuccess() {
            swal("Your email has been sent", "We will answer you in 24 hours", "success");
            this.reset();
            $fileCancel.click();
            fieldsetToggle(false);
        }

        function onUploadError(xhr, textStatus, errorThrown) {
            swal("Something went wrong", "We are working on this", "error");
            fieldsetToggle(false);
        }

        function validateFiles(file) {
            var options = $form.data('blueimpFileupload').options;

            if (file.size > options.maxFileSize) {
                swal("File is too big", "Maximum file size: 10MiB. Please, choose the smaller file or archive the current", "error");
                return false;
            }

            return true;
        }

        function fieldsetToggle($fieldset) {
            fieldsetToggle = function(toogle) {
                $fieldset.prop('disabled', toogle);
            };

            return fieldsetToggle;
        }

        function serializeData($form) {
            var serializedData = $form.serializeArray(),
                data = {};

            for (var i = 0, l = serializedData.length; i < l; i += 1) {
                data[serializedData[i].name] = serializedData[i].value;
            }

            return data;
        }

        function compileData(data) {
            var title = "A message from the site";

            if ($('.budget').is(':visible')) {
                var budget = parseFloat(data['budget-range']);

                title = "A project from the site";

                if (budget) {
                    //noinspection JSValidateTypes
                    budget += data.budget === 'fixed' ? ' $' : ' $/hour';
                }
            }

            data.subject = title;
            data.content = '';
            data.content += 'Name: ' + data.name + '\r\n';
            data.content += 'Message: ' + data.message + '\r\n';
            data.content += budget ? 'Budget: ' + budget : '';

            return data;
        }

        function nameValidation() {
            var $name = $("#name");

            if (!$name.val()) {
                $name.addClass('invalid');
                return false;
            }

            $name.removeClass('invalid');

            return true;
        }

        function emailValidation() {
            var $email = $("#email");

            if (!$email.val()) {
                $email.addClass('invalid');
                return false;
            }
            if (!$email.val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
                $email.addClass('invalid');
                return false;
            }

            $email.removeClass('invalid');

            return true;
        }

        function contentValidation() {
            var $content = $("#content");

            if (!$content.val()) {
                $content.addClass('invalid');
                return false;
            }

            $content.removeClass('invalid');

            return true;
        }

        function budgetValidation() {
            var $budget = $('.budget-range');

            if ($('.budget').is(':visible')) {
                if (!$budget.val() || $budget.val() <= 0) {
                    $budget.addClass('invalid');
                    return false;
                }
            }

            $budget.removeClass('invalid');

            return true;
        }

        function validateContact() {
            var valid = true;
            $(".contact-form input, .contact-form textarea").removeClass('invalid');
            $(".info").html('');

            if (!nameValidation()) {
                valid = false;
            }

            if (!emailValidation()) {
                valid = false;
            }

            if (!contentValidation()) {
                valid = false;
            }

            if (!budgetValidation()) {
                valid = false;
            }


            $('#name.invalid').on('input', function () {
                nameValidation();
            });

            $('#email.invalid').on('input', function () {
                emailValidation();
            });

            $('#content.invalid').on('input', function () {
                contentValidation();
            });

            $('.budget-range.invalid').on('input', function () {
                budgetValidation();
            });

            return valid;
        }
    });
}(jQuery);
