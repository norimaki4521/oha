/* ドロワーメニュー */
jQuery(".p-drawer-icon").on("click", function (e) {
  e.preventDefault();

  jQuery(`.p-drawer-icon`).toggleClass(`is-active`);
  jQuery(`.p-drawer-content`).toggleClass(`is-active`);

  return false;
});
// リンクがクリックされたら.p-drawer-contentを閉じる
jQuery(".p-drawer-content__item a").click(function () {
  jQuery(".p-drawer-content").removeClass("is-active");
  jQuery(".p-drawer-icon").removeClass("is-active");

  return false;
});

/* モーダルウィンドウ */
jQuery(`.js-close-button`).on(`click`, function (e) {
  e.preventDefault();
  var target = jQuery(this).data(`target`);
  jQuery(target).hide();
});

jQuery(`.js-open-button`).on(`click`, function (e) {
  e.preventDefault();
  var target = jQuery(this).data(`target`);
  jQuery(target).show();
});

/* アコーディオン */
jQuery(`.p-qa__box-q`).on(`click`, function () {
  //.p-qa__box-q の兄弟要素（次の要素）をslideToggleで出現させる
  jQuery(this).next().slideToggle();
  //.p-qa__box-iconに.is-openを付与する
  jQuery(this).children(`.p-qa__box-icon`).toggleClass(`is-open`);
  jQuery(this).children(`.p-qa__box-a`).toggleClass(`is-active`);
});

/* swiper */
const mySwiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* contact form */
$(function () {
  let $submit = $("#js-submit");
  $("#js-form input").on("change", function () {
    if (
      $('#js-form input[name="your-name"]').val() !== "" &&
      $('#js-form input[name="your-email"]').val() !== "" &&
      $('#js-form input[name="your-radio"]').val() !== "" &&
      $('#js-form textarea[name="your-massage"]').val() !== "" &&
      $('#js-form input[name="checkbox"]').val() !== ""
    ) {
      // 全て入力された時
      $submit.prop("disabled", false);
      $submit.addClass("-active");
    } else {
      // 全て入力されていない時
      $submit.prop("disabled", true);
      $submit.removeClass("-active");
    }
  });
});

/* ページトップ */
jQuery(".drawer-icon").on("click", function () {
  jQuery(".drawer").toggleClass("m_checked");
});

jQuery(window).on("scroll", function ($) {
  if (100 < jQuery(this).scrollTop()) {
    jQuery("#js-to-top-button").show();
  } else {
    jQuery("#js-to-top-button").hide();
  }
});

/* SmoothScroll */
jQuery('a[href^="#"]').click(function () {
  var header = jQuery("#header").height(); // #headerの高さ分引いた位置から表示
  var speed = 300;
  var id = jQuery(this).attr("href");
  var target = jQuery("#" == id ? "html" : id);
  var position = jQuery(target).offset().top - header;
  if (0 > position) {
    position = 0;
  }
  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    speed
  );
  return false;
});
