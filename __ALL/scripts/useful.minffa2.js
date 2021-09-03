$(document).ready(function () {
  $("nav li ul").hide().removeClass("fallback");
  $("nav>ul>li>ul").each(function () {
    var offset = $(this).parent().position() * -1;
    var left = $(this).parent().width() / 2 - 170;
    if (left > offset.left) {
      left = offset.left;
    }
    $(this).css({ left: left + "px" });
  });
  var loggedIn = $.cookie("frontLoggedIn");
  $("nav>ul>li, #user_info, .filterBar>ul>li").hoverIntent(
    function () {
      if (deviceBracket == "desktop") {
        if ($(this).attr("id") == "user_info") {
          if (loggedIn == 1) {
            $("#user_dropdown", this).slideDown(100);
          }
        } else {
          $("ul", this).slideDown(100);
        }
      }
    },
    function () {
      if ($(this).attr("id") == "user_info") {
        if (loggedIn == 1) {
          $("#user_dropdown", this).slideUp(100);
        }
      } else {
        $("ul", this).slideUp(100);
      }
    }
  );
  $(".cheat_sheet_row").hoverIntent(
    function () {
      $(".extrainfo", this).slideDown(100);
    },
    function () {
      $(".extrainfo", this).slideUp(100);
    }
  );
  jQuery.expr[":"].icontains = function (a, i, m) {
    var elText = jQuery(a).text();
    elText = elText.replace(/\&#173;/g, "");
    elText = elText.replace(/­/g, "");
    elText = elText.replace(/<(?:.|\n)*?>/gm, "");
    elText = elText.toUpperCase();
    return elText.indexOf(m[3].toUpperCase()) >= 0;
  };
  $(".edit_menu_show").hover(
    function () {
      $(this).addClass("edit_menu_show_on");
      $(".edit_menu_button", this).addClass("edit_menu_button_on");
      $(".edit_menu", this).show();
    },
    function () {
      $(this).removeClass("edit_menu_show_on");
      $(".edit_menu_button", this).removeClass("edit_menu_button_on");
      $(".edit_menu", this).hide();
    }
  );
  $("p.forminfo").hover(
    function () {
      $("span", this).show();
    },
    function () {
      $("span", this).hide();
    }
  );
  $("#cheat_sheet_tags").tagsInput({ delimiter: " " });
  $("#list_tags").tagsInput({ delimiter: " " });
  $("#block_tags").tagsInput({ delimiter: " " });
  $(".thumb").fancybox({ titleShow: false, autoScale: true });
  $(".inline").fancybox({
    titleShow: false,
    width: 300,
    autoDimensions: false,
  });
  $(".download_popup").fancybox({ titleShow: false, autoDimensions: true });
  var hash = window.location.hash.substring(1);
  if (!hash && $("#message_wrapper").length) {
    $("html, body").animate(
      { scrollTop: $("#message_wrapper").offset().top },
      500
    );
  }
  $(".faq li").each(function () {
    var faq = $(this);
    var question = faq.find("h3");
    var answer = faq.find("p");
    var state = false;
    faq.click(function () {
      state = faq.hasClass("active");
      $(".faq li").removeClass("active");
      $(".faq li p").slideUp();
      if (!state) {
        faq.addClass("active");
        answer.slideDown();
      }
    });
  });
  $("select.chzn").chosen({
    search_contains: true,
    disable_search_threshold: 10,
    width: "200px",
  });
  var searchEventFired = false;
  var searchTermTimeout;
  $("#cs_filter").keyup(function (e) {
    clearTimeout(searchTermTimeout);
    var filter = $(this).val();
    if (filter.length > 0) {
      $(".cheat_sheet_output_block tr").hide();
      $(".cheat_sheet_output_block tr")
        .find("td:icontains(" + filter + ")")
        .parent()
        .show();
      $(".cheat_sheet_output_wrapper h3:icontains(" + filter + ")")
        .parent()
        .find("tr")
        .show();
      $(".cheat_sheet_output_block .cheat_sheet_note").hide();
      $(
        ".cheat_sheet_output_block .cheat_sheet_note:icontains(" + filter + ")"
      ).show();
      if (!searchEventFired) {
        ga(
          "send",
          "event",
          "Cheat Sheets",
          "Cheat Sheet Searched",
          cheatSheetName
        );
        if (bTracking) {
          ga(
            "userTracker.send",
            "event",
            "Cheat Sheets",
            "Cheat Sheet Searched",
            cheatSheetName
          );
        }
        searchEventFired = true;
      }
      searchTermTimeout = setTimeout(function () {
        ga(
          "send",
          "event",
          "Cheat Sheets",
          "Cheat Sheet Search Term (" + cheatSheetName + ")",
          filter
        );
        if (bTracking) {
          ga(
            "userTracker.send",
            "event",
            "Cheatography Cheat Sheets",
            "Cheat Sheet Search Term (" + cheatSheetName + ")",
            filter
          );
        }
      }, 500);
    } else {
      $(".cheat_sheet_output_block tr").show();
      $(".cheat_sheet_output_block .cheat_sheet_note").show();
    }
    $(".cheat_sheet_output_block").each(function (index, element) {
      var counter = 0;
      $(element)
        .find("tr")
        .not(":hidden")
        .each(function (inner_index, inner_element) {
          counter += 1;
          if (counter % 2 == 1) {
            $(inner_element).addClass("altrow");
          } else {
            $(inner_element).removeClass("altrow");
          }
        });
    });
  });
  $("#cs_filter").keypress(function (e) {
    if (e.which == 13) {
      return false;
    }
  });
  if ($("#cs_filter")) {
    $("#cs_filter").focus();
  }
  $(".content_popup").fancybox({
    type: "iframe",
    width: "90%",
    height: "90%",
    beforeShow: function () {
      var pageUrl = this.href;
      if (
        pageUrl.substring(0, 54) ==
        "http://www.cheatography.com/proxy.php?mode=native&url="
      ) {
        pageUrl = pageUrl.substring(54);
        pageUrl = urldecode(pageUrl);
      }
      if (pageUrl.substring(0, 27) == "/proxy.php?mode=native&url=") {
        pageUrl = pageUrl.substring(27);
        pageUrl = urldecode(pageUrl);
      }
      ga("send", "event", "Cheat Sheets", "Content Popup", pageUrl);
      if (bTracking) {
        ga(
          "userTracker.send",
          "event",
          "Cheatography Cheat Sheets",
          "Content Popup",
          pageUrl
        );
      }
    },
    titleShow: false,
  });
  if ($("#cs_menu_wrapper").length > 0) {
    var stickyNavTop = $("#cs_menu_wrapper").offset().top;
    var stickyNav = function () {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > stickyNavTop) {
        $("#cs_menu_wrapper").addClass("sticky");
      } else {
        $("#cs_menu_wrapper").removeClass("sticky");
      }
    };
    stickyNav();
    $(window).scroll(function () {
      stickyNav();
    });
  }
  processTags();
  $("input.tagoptions, input.langoptions, input.ratingoptions").click(
    function () {
      processTags();
    }
  );
  $("#filterTags").keyup(function () {
    var filter = $(this).val();
    if (filter.length > 0) {
      $("#filterTagsList li.filterableItem .tagname:icontains(" + filter + ")")
        .parent()
        .parent()
        .show();
      $("#filterTagsList li.filterableItem .tagname")
        .not(":icontains(" + filter + ")")
        .parent()
        .parent()
        .hide();
    } else {
      $("#filterTagsList li.filterableItem").show();
    }
  });
  $("#filterLangs").keyup(function () {
    var filter = $(this).val();
    if (filter.length > 0) {
      $("#filterLangsList li.filterableItem .tagname:icontains(" + filter + ")")
        .parent()
        .parent()
        .show();
      $("#filterLangsList li.filterableItem .tagname")
        .not(":icontains(" + filter + ")")
        .parent()
        .parent()
        .hide();
    } else {
      $("#filterLangsList li.filterableItem").show();
    }
  });
  $(".ratingStars").each(function () {
    var ratingParent = this;
    $(ratingParent)
      .children("i")
      .each(function (index) {
        if (loggedIn) {
          $(this).hover(
            function () {
              var ratingValue = index + 1;
              $(ratingParent).addClass("hasRating");
              for (var i = 1; i <= 5; i++) {
                if (i <= ratingValue) {
                  $(ratingParent)
                    .children("i")
                    .eq(i - 1)
                    .attr("class", "fa fa-star");
                } else {
                  $(ratingParent)
                    .children("i")
                    .eq(i - 1)
                    .attr("class", "fa fa-star-o");
                }
              }
            },
            function () {
              if (!hasUserRating) {
                $(ratingParent).removeClass("hasRating");
              }
              for (var i = 1; i <= 5; i++) {
                if (i <= defaultRating) {
                  $(ratingParent)
                    .children("i")
                    .eq(i - 1)
                    .attr("class", "fa fa-star");
                } else {
                  $(ratingParent)
                    .children("i")
                    .eq(i - 1)
                    .attr("class", "fa fa-star-o");
                }
              }
            }
          );
          $(this).click(function () {
            var ratingValue = index + 1;
            $.ajax({
              url:
                "/ajax.php?action=rate_cheat_sheet&rating=" +
                ratingValue +
                "&cheat_sheet_id=" +
                ratableCheatSheetId,
              success: function (response) {
                for (var i = 1; i <= 5; i++) {
                  if (i <= ratingValue) {
                    $(ratingParent)
                      .children("i")
                      .eq(i - 1)
                      .attr("class", "fa fa-star");
                  } else {
                    $(ratingParent)
                      .children("i")
                      .eq(i - 1)
                      .attr("class", "fa fa-star-o");
                  }
                }
                $(ratingParent).addClass("hasRating");
                if (!hasUserRating) {
                  if (ratingValue <= 2) {
                    alert(
                      "Thanks for rating this cheat sheet! Please consider leaving a comment for the author to let them know how they can improve their cheat sheet."
                    );
                  } else {
                    alert("Thanks for rating this cheat sheet!");
                  }
                }
                hasUserRating = true;
                defaultRating = ratingValue;
              },
            });
          });
          if (hasUserRating) {
            $(ratingParent).addClass("hasRating");
          }
        } else {
          $(this).click(function () {
            alert(
              "Please login or register to rate cheat sheets and organise your favourites!"
            );
          });
        }
        for (var i = 1; i <= 5; i++) {
          if (i <= defaultRating + 0.2) {
            $(ratingParent)
              .children("i")
              .eq(i - 1)
              .attr("class", "fa fa-star");
          } else {
            $(ratingParent)
              .children("i")
              .eq(i - 1)
              .attr("class", "fa fa-star-o");
          }
        }
        $("#ratingStarsCount").show();
        $("#ratingStarsCount a").html(ratingCount);
      });
  });
  if (deviceBracket == "desktop") {
    $(".footer_popup_inner").append(
      '<a href="#" class="imagelink footer_popup_close"><i class="fa fa-close"></i></a>'
    );
    $(".footer_popup_close").click(function () {
      $(".footer_popup").slideUp();
      return false;
    });
    setTimeout(function () {
      $(".footer_popup").slideDown();
    }, 5000);
    var menuPadding = $("#cs_menu .download_menu").outerHeight();
    if (menuPadding > 0) {
      $("#pagetitle ol.breadcrumbs").css("paddingTop", menuPadding);
    }
  }
});
function processTags() {
  var url = window.location.href;
  var originalUrl = url;
  url = url + "&";
  url = url.replace(/(.*)(\?|&)filter=[^&]+?(&)(.*)/gi, "$1$2$4", url);
  url = url.replace(/(.*)(\?|&)rating=[^&]+?(&)(.*)/gi, "$1$2$4", url);
  url = url.replace(/(.*)(\?|&)language=[^&]+?(&)(.*)/gi, "$1$2$4", url);
  url = url.substring(0, url.length - 1);
  if (url.indexOf("?") == -1) {
    url = url + "?1";
  }
  var reload = false;
  var activeTagCount = 0;
  var taglist = "";
  var tagshow = "";
  $("input.tagoptions:checked").each(function () {
    activeTagCount = activeTagCount + 1;
    if (taglist.length > 0) {
      taglist = taglist + ",";
      tagshow = tagshow + ", ";
    }
    taglist = taglist + $(this).val();
    tagshow = tagshow + $(this).parent().find(".tagname").html();
  });
  if (activeTagCount >= 1) {
    reload = true;
    url = url + "&filter=" + taglist.replace(", ", ",").toLowerCase();
  }
  var activeLangCount = 0;
  var langlist = "";
  var langshow = "";
  $("input.langoptions:checked").each(function () {
    activeLangCount = activeLangCount + 1;
    if (langlist.length > 0) {
      langlist = langlist + ",";
      langshow = langshow + ", ";
    }
    langlist = langlist + $(this).val();
    langshow = langshow + $(this).parent().find(".languagename").html();
    var isInDefault = defaultLanguages.indexOf($(this).val());
    if (isInDefault == -1) {
      reload = true;
    }
  });
  if (activeLangCount >= 1) {
    url = url + "&language=" + langlist.replace(", ", ",").toLowerCase();
  }
  var activeRatingCount = 0;
  var ratinglist = "";
  var ratingshow = "";
  $("input.ratingoptions:checked").each(function () {
    activeRatingCount = activeRatingCount + 1;
    if (ratinglist.length > 0) {
      ratinglist = ratinglist + ",";
      ratingshow = ratingshow + ", ";
    }
    ratinglist = ratinglist + $(this).val();
    ratingshow = ratingshow + $(this).parent().find(".ratingname").html();
  });
  if (activeRatingCount >= 1) {
    reload = true;
    url = url + "&rating=" + ratinglist.replace(", ", ",").toLowerCase();
  }
  if (taglist != "") {
    if (taglist.length > 18) {
    }
    $("#filtering").html(": " + tagshow);
  }
  if (langlist != "") {
    if (langlist.length > 18) {
    }
    $("#languagefilter").html(": " + langshow);
  }
  if (ratinglist != "") {
    if (ratinglist.length > 18) {
    }
    $("#ratingfilter").html(": " + ratingshow);
  }
  url = url.replace("?1&", "?");
  if (reload && url != originalUrl) {
    window.location.href = url;
  }
}
function processTagsOld() {
  var to_show = "";
  var to_show_lang = "";
  var to_show_rating = "";
  var taglist = "";
  var langlist = "";
  var ratinglist = "";
  var tagFilterFound = false;
  var langFilterFound = false;
  var ratingFilterFound = false;
  var filterFound = false;
  var selectedFavouriteTags = [];
  var selectedLanguages = [];
  var selectedRatings = [];
  var activeTagCount = 0;
  $("input.tagoptions:checked").each(function () {
    activeTagCount = activeTagCount + 1;
    filterFound = true;
    tagFilterFound = true;
    if (to_show.length > 0) {
      to_show = to_show + ",";
      taglist = taglist + ", ";
    }
    to_show = to_show + ".tag-" + $(this).val();
    taglist = taglist + $(this).parent().find(".tagname").html();
    $(this).parent().css("background-color", "#CCC");
    selectedFavouriteTags[selectedFavouriteTags.length] = $(this).val();
  });
  if (activeTagCount > 1) {
    taglist = activeTagCount + " tags";
  }
  var activeLangCount = 0;
  $("input.langoptions:checked").each(function () {
    activeLangCount = activeLangCount + 1;
    filterFound = true;
    langFilterFound = true;
    if (to_show_lang.length > 0) {
      to_show_lang = to_show_lang + ",";
      langlist = langlist + ", ";
    }
    to_show_lang = to_show_lang + ".lang-" + $(this).val();
    langlist = langlist + $(this).parent().find(".languagename").html();
    $(this).parent().css("background-color", "#CCC");
    selectedLanguages[selectedLanguages.length] = $(this).val();
  });
  if (activeLangCount > 1) {
    langlist = activeLangCount + " languages";
  }
  var activeRatingCount = 0;
  $("input.ratingoptions:checked").each(function () {
    activeRatingCount = activeRatingCount + 1;
    filterFound = true;
    ratingFilterFound = true;
    if (to_show_rating.length > 0) {
      to_show_rating = to_show_rating + ",";
      ratinglist = ratinglist + ", ";
    }
    to_show_rating = to_show_rating + ".rating-" + $(this).val();
    ratinglist = ratinglist + $(this).parent().find(".ratingname").html();
    $(this).parent().css("background-color", "#CCC");
    selectedRatings[selectedRatings.length] = $(this).val();
  });
  if (activeRatingCount > 1) {
    ratinglist = activeRatingCount + " ratings";
  }
  var saveCookie = true;
  for (var i = 0; i < selectedLanguages.length; i++) {
    var isInDefault = defaultLanguages.indexOf(selectedLanguages[i]);
    if (isInDefault == -1) {
      saveCookie = false;
    }
  }
  for (var i = 0; i < defaultLanguages.length; i++) {
    var thisExists = $("#langselect-" + defaultLanguages[i]);
    if (thisExists.length) {
      if (thisExists.prop("checked") != true) {
        saveCookie = false;
      }
    }
  }
  if (saveCookie) {
    $.cookie("selectedLanguages", selectedLanguages.join("-"));
  } else {
  }
  $.cookie(rememberTagCookieName + "Rating", selectedRatings.join("-"));
  $.cookie(rememberTagCookieName, selectedFavouriteTags.join("-"));
  $("input.tagoptions")
    .not(":checked")
    .each(function () {
      $(this).parent().css("background-color", "inherit");
    });
  $("input.langoptions")
    .not(":checked")
    .each(function () {
      $(this).parent().css("background-color", "inherit");
    });
  $("input.ratingoptions")
    .not(":checked")
    .each(function () {
      $(this).parent().css("background-color", "inherit");
    });
  if (!tagFilterFound) {
    $("#filtering").html("");
  }
  if (!langFilterFound) {
    $("#languagefilter").html("");
  }
  if (!ratingFilterFound) {
    $("#ratingfilter").html("");
  }
  if (!filterFound) {
    $("#content .cheat_sheet_row").removeClass("hiderow");
    $("#content .cheat_sheet_row").show("slow");
  } else {
    $("#content .cheat_sheet_row").removeClass("hiderow");
    if (to_show != "") {
      $("#content .cheat_sheet_row")
        .not(to_show)
        .addClass("hiderow")
        .hide("slow");
    }
    if (to_show_lang != "") {
      $("#content .cheat_sheet_row")
        .not(to_show_lang)
        .addClass("hiderow")
        .hide("slow");
    }
    if (to_show_rating != "") {
      $("#content .cheat_sheet_row")
        .not(to_show_rating)
        .addClass("hiderow")
        .hide("slow");
    }
    $("#content .cheat_sheet_row").not(".hiderow").show("slow");
    if (taglist != "") {
      if (taglist.length > 18) {
      }
      $("#filtering").html(": " + taglist);
    }
    if (langlist != "") {
      if (langlist.length > 18) {
      }
      $("#languagefilter").html(": " + langlist);
    }
    if (ratinglist != "") {
      if (ratinglist.length > 18) {
      }
      $("#ratingfilter").html(": " + ratinglist);
    }
  }
}
function urldecode(url) {
  return decodeURIComponent(url.replace(/\+/g, " "));
}
function trackDownload(downloadType, newLocation) {
  ga(
    "send",
    "event",
    "Cheat Sheets",
    "Download",
    cheatSheetName + " (" + downloadType + ")"
  );
  if (bTracking) {
    ga(
      "userTracker.send",
      "event",
      "Cheatography Cheat Sheets",
      "Download",
      cheatSheetName + " (" + downloadType + ")"
    );
  }
  $("#downloadContent").hide();
  $("#postDownloadContent").show();
  return false;
}
function trackDownloadPopup() {
  ga(
    "send",
    "event",
    "Cheat Sheets",
    "Download Popup",
    "Opened Download Popup for " + cheatSheetName
  );
  if (bTracking) {
    ga(
      "userTracker.send",
      "event",
      "Cheatography Cheat Sheets",
      "Download Popup",
      "Opened Download Popup for " + cheatSheetName
    );
  }
}
function trackRatingPopup() {
  ga(
    "send",
    "event",
    "Interaction",
    "Rating Popup",
    "Opened Rating Popup for " + cheatSheetName
  );
}
function setCsOrder() {
  var csOrder = {
    cheat_sheet_id: cheat_sheet_id,
    cs1: [],
    cs2: [],
    cs3: [],
    cs4: [],
  };
  $(".cheat_sheet_output_column_1 .cheat_sheet_output_wrapper").each(
    function () {
      var blockId = $(this).attr("id");
      blockId = blockId.substring(6);
      csOrder.cs1.push(blockId);
    }
  );
  $(".cheat_sheet_output_column_2 .cheat_sheet_output_wrapper").each(
    function () {
      var blockId = $(this).attr("id");
      blockId = blockId.substring(6);
      csOrder.cs2.push(blockId);
    }
  );
  $(".cheat_sheet_output_column_3 .cheat_sheet_output_wrapper").each(
    function () {
      var blockId = $(this).attr("id");
      blockId = blockId.substring(6);
      csOrder.cs3.push(blockId);
    }
  );
  $(".cheat_sheet_output_column_4 .cheat_sheet_output_wrapper").each(
    function () {
      var blockId = $(this).attr("id");
      blockId = blockId.substring(6);
      csOrder.cs4.push(blockId);
    }
  );
  $.post("/ajax.php?action=reorder_cheat_sheet", csOrder, function (data) {});
}
function setListOrder() {
  var listOrder = { list_id: list_id, items: [] };
  $("#sortableCheatSheets .cheat_sheet_row").each(function () {
    var csId = $(this).attr("id");
    csId = csId.substring(12);
    listOrder.items.push(csId);
  });
  $.post("/ajax.php?action=reorder_list", listOrder, function (data) {});
}
function edit_cheat_sheet() {
  $("#edit_cheat_sheet").toggle("slideDown");
}
function checkContrast(value, element) {
  var colour = value.replace("#", "");
  var rdec = parseInt(colour.substring(0, 2), 16);
  var gdec = parseInt(colour.substring(2, 4), 16);
  var bdec = parseInt(colour.substring(4, 6), 16);
  var contrast =
    1.05 /
    (0.05 +
      0.2126 * Math.pow(rdec / 255, 2.2) +
      0.7152 * Math.pow(gdec / 255, 2.2) +
      0.0722 * Math.pow(bdec / 255, 2.2));
  if (contrast < 1.5) {
    return false;
  } else {
    return true;
  }
}
