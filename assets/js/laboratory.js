
$(document).ready(function() {

    let total = 0;

    $('.laboratory__page').each(function(indexInArray, valueOfElement) {
        let questionBlock = indexInArray + 1
        $(this).attr('data-p', questionBlock);
        total = total + 1;
        $('.laboratory__step_total').text(total);
    });

    let lineStep = 100 / total;
    let line;
    let pageNumber = 1;
    lineWidth();

    $('.laboratory__arrow_next').click(function() {

        $('.laboratory__arrow_prew').css('display', 'flex');

        if (pageNumber < total) {
            pageNumber++;
            changeActivePage();
            playLottie();
            lineWidth();
            changeButtonNext();
        }
    });

    $('.laboratory__arrow_prew').click(function() {
        if (pageNumber > 2) {
            pageNumber--;

            changeActivePage();
            changeButtonNext();


        } else if (pageNumber == 2) {
            pageNumber--;
            changeActivePage();
            $('.laboratory__arrow_prew').hide();
        }
        playLottie();
        lineWidth()
    });

    function changeActivePage() {
        $('.laboratory__page.active').hide();
        $('.laboratory__page.active').removeClass('active');
        $('.laboratory__page[data-p=' + pageNumber + ']').fadeIn('slow')
        $('.laboratory__page[data-p=' + pageNumber + ']').addClass('active');
    }


    function lineWidth() {
        $('.laboratory__step_current').text(pageNumber);
        line = lineStep * (pageNumber);
        line = 'calc(' + line + '% )';
        $('.laboratory__line_bg').css('width', line)
    }

    function playLottie() {
        let id = $('.laboratory__page[data-p=' + pageNumber + ']').find('.preview').attr('id');
        // console.log(id);
        lottie.stop();
        setTimeout(() => {
            lottie.play(id);
        }, 500);
    }

    function changeButtonNext() {
        if (pageNumber == total) {
            $('.laboratory__arrow_next').removeClass('active');
        } else {
            $('.laboratory__arrow_next').addClass('active')
        }
    }


});
