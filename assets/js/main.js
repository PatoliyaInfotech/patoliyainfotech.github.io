'use strict';

(function($){
  const vendor = function() {
    /* ===== Affix Sidebar ===== */
    /* Ref: http://getbootstrap.com/javascript/#affix-examples */

    $('#doc-menu').affix({
      offset: {
        top: ($('#header').outerHeight(true) + $('#doc-header').outerHeight(true)) + 45,
        bottom: ($('#footer').outerHeight(true) + $('#promo-block').outerHeight(true)) + 75
      }
    });

    /* Hack related to: https://github.com/twbs/bootstrap/issues/10236 */
    $(window).on('load resize', function() {
      $(window).trigger('scroll');
    });

    /* Activate scrollspy menu */
    $('body').scrollspy({target: '#doc-nav', offset: 100});

    /* Smooth scrolling */
    $('a.scrollto').on('click', function(e){
      //store hash
      var target = this.hash;
      e.preventDefault();
      $('body').scrollTo(target, 800, {offset: 0, 'axis':'y'});

    });


    /* ======= jQuery Responsive equal heights plugin ======= */
    /* Ref: https://github.com/liabru/jquery-match-height */

    $('#cards-wrapper .item-inner').matchHeight();
    $('#showcase .card').matchHeight();

    /* Bootstrap lightbox */
    /* Ref: http://ashleydw.github.io/lightbox/ */

    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(e) {
      e.preventDefault();
      $(this).ekkoLightbox();
    });
  }
  const onClickHandler = function(e) {
    e.preventDefault();

    const targetElement = e.target.classList.contains('fa-copy') ? e.target.parentNode : e.target;
    const isValidCopyEvent = targetElement.classList.contains('icon-item-copy');

    if(!isValidCopyEvent && targetElement.classList.contains('icon-item')) {
      const previewWrap = document.createElement('div');
      const svgElem = targetElement.querySelector('svg').cloneNode(true);
      previewWrap.className = 'doc-preview-icon';
      previewWrap.appendChild(svgElem);
      document.body.appendChild(previewWrap);
      document.querySelector('.doc-preview-icon').addEventListener('click', function() {
        document.body.removeChild(previewWrap);
      })
    }
    if (!isValidCopyEvent) return;

    const targetChildren = targetElement.classList.contains('icon-item') ? targetElement.children : targetElement.parentNode.children;

    const children = Array.from(targetChildren);
    const currentElement = children.reduce(function (accum, obj){
      return obj.classList.contains('highlighter-rouge') && obj
    }, {});
    const tempInput = document.createElement('input');
    tempInput.value = currentElement.innerText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    swal("Copied", {
      icon: 'success',
      buttons: false,
      timer: 1000
    });
    document.body.removeChild(tempInput);
  }


  document.addEventListener('DOMContentLoaded', function () {
    vendor();
    document
      .querySelector('.icon-main-wrapper')
      .addEventListener('click', onClickHandler, true);
  })
})(jQuery)