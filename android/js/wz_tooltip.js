function Tip() {
    tt_Tip(arguments, null)
}

function TagToTip() {
    if (TagsToTip) {
        var e = tt_GetElt(arguments[0]);
        if (e) tt_Tip(arguments, e)
    }
}

function tt_Extension() {
    tt_ExtCmdEnum();
    tt_aExt[tt_aExt.length] = this;
    return this
}

function tt_SetTipPos(e, t) {
    var n = tt_aElt[0].style;
    tt_x = e;
    tt_y = t;
    n.left = e + "px";
    n.top = t + "px";
    if (tt_ie56) {
        var r = tt_aElt[tt_aElt.length - 1];
        if (r) {
            r.style.left = n.left;
            r.style.top = n.top
        }
    }
}

function tt_Hide() {
    if (tt_db && tt_iState) {
        if (tt_iState & 2) {
            tt_aElt[0].style.visibility = "hidden";
            tt_ExtCallFncs(0, "Hide")
        }
        tt_tShow.EndTimer();
        tt_tHide.EndTimer();
        tt_tDurt.EndTimer();
        tt_tFade.EndTimer();
        if (!tt_op && !tt_ie) {
            tt_tWaitMov.EndTimer();
            tt_bWait = false
        }
        if (tt_aV[CLICKCLOSE]) tt_RemEvtFnc(document, "mouseup", tt_HideInit);
        tt_AddRemOutFnc(false);
        tt_ExtCallFncs(0, "Kill");
        if (tt_t2t && !tt_aV[COPYCONTENT]) {
            tt_t2t.style.display = "none";
            tt_MovDomNode(tt_t2t, tt_aElt[6], tt_t2tDad)
        }
        tt_iState = 0;
        tt_over = null;
        tt_ResetMainDiv();
        if (tt_aElt[tt_aElt.length - 1]) tt_aElt[tt_aElt.length - 1].style.display = "none"
    }
}

function tt_GetElt(e) {
    return document.getElementById ? document.getElementById(e) : document.all ? document.all[e] : null
}

function tt_GetDivW(e) {
    return e ? e.offsetWidth || e.style.pixelWidth || 0 : 0
}

function tt_GetDivH(e) {
    return e ? e.offsetHeight || e.style.pixelHeight || 0 : 0
}

function tt_GetScrollX() {
    return window.pageXOffset || (tt_db ? tt_db.scrollLeft || 0 : 0)
}

function tt_GetScrollY() {
    return window.pageYOffset || (tt_db ? tt_db.scrollTop || 0 : 0)
}

function tt_GetClientW() {
    return document.body && typeof document.body.clientWidth != tt_u ? document.body.clientWidth : typeof window.innerWidth != tt_u ? window.innerWidth : tt_db ? tt_db.clientWidth || 0 : 0
}

function tt_GetClientH() {
    return document.body && typeof document.body.clientHeight != tt_u ? document.body.clientHeight : typeof window.innerHeight != tt_u ? window.innerHeight : tt_db ? tt_db.clientHeight || 0 : 0
}

function tt_GetEvtX(e) {
    return e ? typeof e.pageX != tt_u ? e.pageX : e.clientX + tt_scrlX : 0
}

function tt_GetEvtY(e) {
    return e ? typeof e.pageY != tt_u ? e.pageY : e.clientY + tt_scrlY : 0
}

function tt_AddEvtFnc(e, t, n) {
    if (e) {
        if (e.addEventListener) e.addEventListener(t, n, false);
        else e.attachEvent("on" + t, n)
    }
}

function tt_RemEvtFnc(e, t, n) {
    if (e) {
        if (e.removeEventListener) e.removeEventListener(t, n, false);
        else e.detachEvent("on" + t, n)
    }
}

function tt_Init() {
    tt_MkCmdEnum();
    if (!tt_Browser() || !tt_MkMainDiv()) return;
    tt_IsW3cBox();
    tt_OpaSupport();
    tt_AddEvtFnc(document, "mousemove", tt_Move);
    if (TagsToTip || tt_Debug) tt_SetOnloadFnc();
    tt_AddEvtFnc(window, "scroll", function() {
        tt_scrlX = tt_GetScrollX();
        tt_scrlY = tt_GetScrollY();
        if (tt_iState && !(tt_aV[STICKY] && tt_iState & 2)) tt_HideInit()
    });
    tt_AddEvtFnc(window, "unload", tt_Hide);
    tt_Hide()
}

function tt_MkCmdEnum() {
    var n = 0;
    for (var i in config) eval("window." + i.toString().toUpperCase() + " = " + n++);
    tt_aV.length = n
}

function tt_Browser() {
    var n, nv, n6, w3c;
    n = navigator.userAgent.toLowerCase(), nv = navigator.appVersion;
    tt_op = document.defaultView && typeof eval("w" + "indow" + "." + "o" + "p" + "er" + "a") != tt_u;
    tt_ie = n.indexOf("msie") != -1 && document.all && !tt_op;
    if (tt_ie) {
        var ieOld = !document.compatMode || document.compatMode == "BackCompat";
        tt_db = !ieOld ? document.documentElement : document.body || null;
        if (tt_db) tt_ie56 = parseFloat(nv.substring(nv.indexOf("MSIE") + 5)) >= 5.5 && typeof document.body.style.maxHeight == tt_u
    } else {
        tt_db = document.documentElement || document.body || (document.getElementsByTagName ? document.getElementsByTagName("body")[0] : null);
        if (!tt_op) {
            n6 = document.defaultView && typeof document.defaultView.getComputedStyle != tt_u;
            w3c = !n6 && document.getElementById
        }
    }
    tt_body = document.getElementsByTagName ? document.getElementsByTagName("body")[0] : document.body || null;
    if (tt_ie || n6 || tt_op || w3c) {
        if (tt_body && tt_db) {
            if (document.attachEvent || document.addEventListener) return true
        } else tt_Err("wz_tooltip.js must be included INSIDE the body section," + " immediately after the opening <body> tag.")
    }
    tt_db = null;
    return false
}

function tt_MkMainDiv() {
    if (tt_body.insertAdjacentHTML) tt_body.insertAdjacentHTML("afterBegin", tt_MkMainDivHtm());
    else if (typeof tt_body.innerHTML != tt_u && document.createElement && tt_body.appendChild) tt_body.appendChild(tt_MkMainDivDom());
    if (window.tt_GetMainDivRefs && tt_GetMainDivRefs()) return true;
    tt_db = null;
    return false
}

function tt_MkMainDivHtm() {
    return '<div id="WzTtDiV"></div>' + (tt_ie56 ? '<iframe id="WzTtIfRm" src="javascript:false" scrolling="no" frameborder="0" style="filter:Alpha(opacity=0);position:absolute;top:0px;left:0px;display:none;"></iframe>' : "")
}

function tt_MkMainDivDom() {
    var e = document.createElement("div");
    if (e) e.id = "WzTtDiV";
    return e
}

function tt_GetMainDivRefs() {
    tt_aElt[0] = tt_GetElt("WzTtDiV");
    if (tt_ie56 && tt_aElt[0]) {
        tt_aElt[tt_aElt.length - 1] = tt_GetElt("WzTtIfRm");
        if (!tt_aElt[tt_aElt.length - 1]) tt_aElt[0] = null
    }
    if (tt_aElt[0]) {
        var e = tt_aElt[0].style;
        e.visibility = "hidden";
        e.position = "absolute";
        e.overflow = "hidden";
        return true
    }
    return false
}

function tt_ResetMainDiv() {
    var e = window.screen && screen.width ? screen.width : 1e4;
    tt_SetTipPos(-e, 0);
    tt_aElt[0].innerHTML = "";
    tt_aElt[0].style.width = e - 1 + "px"
}

function tt_IsW3cBox() {
    var e = tt_aElt[0].style;
    e.padding = "10px";
    e.width = "40px";
    tt_bBoxOld = tt_GetDivW(tt_aElt[0]) == 40;
    e.padding = "0px";
    tt_ResetMainDiv()
}

function tt_OpaSupport() {
    var e = tt_body.style;
    tt_flagOpa = typeof e.filter != tt_u ? 1 : typeof e.KhtmlOpacity != tt_u ? 2 : typeof e.KHTMLOpacity != tt_u ? 3 : typeof e.MozOpacity != tt_u ? 4 : typeof e.opacity != tt_u ? 5 : 0
}

function tt_SetOnloadFnc() {
    tt_AddEvtFnc(document, "DOMContentLoaded", tt_HideSrcTags);
    tt_AddEvtFnc(window, "load", tt_HideSrcTags);
    if (tt_body.attachEvent) tt_body.attachEvent("onreadystatechange", function() {
        if (tt_body.readyState == "complete") tt_HideSrcTags()
    });
    if (/WebKit|KHTML/i.test(navigator.userAgent)) {
        var e = setInterval(function() {
            if (/loaded|complete/.test(document.readyState)) {
                clearInterval(e);
                tt_HideSrcTags()
            }
        }, 10)
    }
}

function tt_HideSrcTags() {
    if (!window.tt_HideSrcTags || window.tt_HideSrcTags.done) return;
    window.tt_HideSrcTags.done = true;
    if (!tt_HideSrcTagsRecurs(tt_body)) tt_Err("To enable the capability to convert HTML elements to tooltips," + " you must set TagsToTip in the global tooltip configuration" + " to true.")
}

function tt_HideSrcTagsRecurs(e) {
    var t, n, r;
    t = e.childNodes || e.children || null;
    for (var i = t ? t.length : 0; i; ) {
        --i;
        if (!tt_HideSrcTagsRecurs(t[i])) return false;
        n = t[i].getAttribute ? t[i].getAttribute("onmouseover") : typeof t[i].onmouseover == "function" ? t[i].onmouseover : null;
        if (n) {
            r = n.toString().match(/TagToTip\s*\(\s*'[^'.]+'\s*[\),]/);
            if (r && r.length) {
                if (!tt_HideSrcTag(r[0])) return false
            }
        }
    }
    return true
}

function tt_HideSrcTag(e) {
    var t, n;
    t = e.replace(/.+'([^'.]+)'.+/, "$1");
    n = tt_GetElt(t);
    if (n) {
        if (tt_Debug && !TagsToTip) return false;
        else n.style.display = "none"
    } else tt_Err("Invalid ID\n'" + t + "'\npassed to TagToTip()." + " There exists no HTML element with that ID.");
    return true
}

function tt_Tip(e, t) {
    if (!tt_db) return;
    if (tt_iState) tt_Hide();
    if (!tt_Enabled) return;
    tt_t2t = t;
    if (!tt_ReadCmds(e)) return;
    tt_iState = 1 | 4;
    tt_AdaptConfig1();
    tt_MkTipContent(e);
    tt_MkTipSubDivs();
    tt_FormatTip();
    tt_bJmpVert = false;
    tt_maxPosX = tt_GetClientW() + tt_scrlX - tt_w - 1;
    tt_maxPosY = tt_GetClientH() + tt_scrlY - tt_h - 1;
    tt_AdaptConfig2();
    tt_Move();
    tt_ShowInit()
}

function tt_ReadCmds(e) {
    var t;
    t = 0;
    for (var n in config) tt_aV[t++] = config[n];
    if (e.length & 1) {
        for (t = e.length - 1; t > 0; t -= 2) tt_aV[e[t - 1]] = e[t];
        return true
    }
    tt_Err("Incorrect call of Tip() or TagToTip().\n" + "Each command must be followed by a value.");
    return false
}

function tt_AdaptConfig1() {
    tt_ExtCallFncs(0, "LoadConfig");
    if (!tt_aV[TITLEBGCOLOR].length) tt_aV[TITLEBGCOLOR] = tt_aV[BORDERCOLOR];
    if (!tt_aV[TITLEFONTCOLOR].length) tt_aV[TITLEFONTCOLOR] = tt_aV[BGCOLOR];
    if (!tt_aV[TITLEFONTFACE].length) tt_aV[TITLEFONTFACE] = tt_aV[FONTFACE];
    if (!tt_aV[TITLEFONTSIZE].length) tt_aV[TITLEFONTSIZE] = tt_aV[FONTSIZE];
    if (tt_aV[CLOSEBTN]) {
        if (!tt_aV[CLOSEBTNCOLORS]) tt_aV[CLOSEBTNCOLORS] = new Array("", "", "", "");
        for (var e = 4; e; ) {
            --e;
            if (!tt_aV[CLOSEBTNCOLORS][e].length) tt_aV[CLOSEBTNCOLORS][e] = e & 1 ? tt_aV[TITLEFONTCOLOR] : tt_aV[TITLEBGCOLOR]
        }
        if (!tt_aV[TITLE].length) tt_aV[TITLE] = " "
    }
    if (tt_aV[OPACITY] == 100 && typeof tt_aElt[0].style.MozOpacity != tt_u && !Array.every) tt_aV[OPACITY] = 99;
    if (tt_aV[FADEIN] && tt_flagOpa && tt_aV[DELAY] > 100) tt_aV[DELAY] = Math.max(tt_aV[DELAY] - tt_aV[FADEIN], 100)
}

function tt_AdaptConfig2() {
    if (tt_aV[CENTERMOUSE]) tt_aV[OFFSETX] -= tt_w - (tt_aV[SHADOW] ? tt_aV[SHADOWWIDTH] : 0) >> 1
}

function tt_MkTipContent(e) {
    if (tt_t2t) {
        if (tt_aV[COPYCONTENT]) tt_sContent = tt_t2t.innerHTML;
        else tt_sContent = ""
    } else tt_sContent = e[0];
    tt_ExtCallFncs(0, "CreateContentString")
}

function tt_MkTipSubDivs() {
    var e = "position:relative;margin:0px;padding:0px;border-width:0px;left:0px;top:0px;line-height:normal;width:auto;",
        t = ' cellspacing=0 cellpadding=0 border=0 style="' + e + '"><tbody style="' + e + '"><tr><td ';
    tt_aElt[0].innerHTML = "" + (tt_aV[TITLE].length ? '<div id="WzTiTl" style="position:relative;z-index:1;">' + '<table id="WzTiTlTb"' + t + 'id="WzTiTlI" style="' + e + '">' + tt_aV[TITLE] + "</td>" + (tt_aV[CLOSEBTN] ? '<td align="right" style="' + e + 'text-align:right;">' + '<span id="WzClOsE" style="padding-left:2px;padding-right:2px;' + "cursor:" + (tt_ie ? "hand" : "pointer") + ';" onmouseover="tt_OnCloseBtnOver(1)" onmouseout="tt_OnCloseBtnOver(0)" onclick="tt_HideInit()">' + tt_aV[CLOSEBTNTEXT] + "</span></td>" : "") + "</tr></tbody></table></div>" : "") + '<div id="WzBoDy" style="position:relative;z-index:0;">' + "<table" + t + 'id="WzBoDyI" style="' + e + '">' + tt_sContent + "</td></tr></tbody></table></div>" + (tt_aV[SHADOW] ? '<div id="WzTtShDwR" style="position:absolute;overflow:hidden;"></div>' + '<div id="WzTtShDwB" style="position:relative;overflow:hidden;"></div>' : "");
    tt_GetSubDivRefs();
    if (tt_t2t && !tt_aV[COPYCONTENT]) {
        tt_t2tDad = tt_t2t.parentNode || tt_t2t.parentElement || tt_t2t.offsetParent || null;
        if (tt_t2tDad) {
            tt_MovDomNode(tt_t2t, tt_t2tDad, tt_aElt[6]);
            tt_t2t.style.display = "block"
        }
    }
    tt_ExtCallFncs(0, "SubDivsCreated")
}

function tt_GetSubDivRefs() {
    var e = new Array("WzTiTl", "WzTiTlTb", "WzTiTlI", "WzClOsE", "WzBoDy", "WzBoDyI", "WzTtShDwB", "WzTtShDwR");
    for (var t = e.length; t; --t) tt_aElt[t] = tt_GetElt(e[t - 1])
}

function tt_FormatTip() {
    var e, t, n, r;
    if (tt_aV[TITLE].length) {
        e = tt_aElt[1].style;
        e.background = tt_aV[TITLEBGCOLOR];
        e.paddingTop = (tt_aV[CLOSEBTN] ? 2 : 0) + "px";
        e.paddingBottom = "1px";
        e.paddingLeft = e.paddingRight = tt_aV[PADDING] + "px";
        e = tt_aElt[3].style;
        e.color = tt_aV[TITLEFONTCOLOR];
        e.fontFamily = tt_aV[TITLEFONTFACE];
        e.fontSize = tt_aV[TITLEFONTSIZE];
        e.fontWeight = "bold";
        e.textAlign = tt_aV[TITLEALIGN];
        if (tt_aElt[4]) {
            e.paddingRight = (tt_aV[PADDING] << 1) + "px";
            e = tt_aElt[4].style;
            e.background = tt_aV[CLOSEBTNCOLORS][0];
            e.color = tt_aV[CLOSEBTNCOLORS][1];
            e.fontFamily = tt_aV[TITLEFONTFACE];
            e.fontSize = tt_aV[TITLEFONTSIZE];
            e.fontWeight = "bold"
        }
        if (tt_aV[WIDTH] > 0) tt_w = tt_aV[WIDTH] + (tt_aV[PADDING] + tt_aV[BORDERWIDTH] << 1);
        else {
            tt_w = tt_GetDivW(tt_aElt[3]) + tt_GetDivW(tt_aElt[4]);
            if (tt_aElt[4]) tt_w += tt_aV[PADDING]
        }
        n = -tt_aV[BORDERWIDTH]
    } else {
        tt_w = 0;
        n = 0
    }
    e = tt_aElt[5].style;
    e.top = n + "px";
    if (tt_aV[BORDERWIDTH]) {
        e.borderColor = tt_aV[BORDERCOLOR];
        e.borderStyle = tt_aV[BORDERSTYLE];
        e.borderWidth = tt_aV[BORDERWIDTH] + "px"
    }
    if (tt_aV[BGCOLOR].length) e.background = tt_aV[BGCOLOR];
    if (tt_aV[BGIMG].length) e.backgroundImage = "url(" + tt_aV[BGIMG] + ")";
    e.padding = tt_aV[PADDING] + "px";
    e.textAlign = tt_aV[TEXTALIGN];
    e = tt_aElt[6].style;
    e.color = tt_aV[FONTCOLOR];
    e.fontFamily = tt_aV[FONTFACE];
    e.fontSize = tt_aV[FONTSIZE];
    e.fontWeight = tt_aV[FONTWEIGHT];
    e.background = "";
    e.textAlign = tt_aV[TEXTALIGN];
    if (tt_aV[WIDTH] > 0) t = tt_aV[WIDTH] + (tt_aV[PADDING] + tt_aV[BORDERWIDTH] << 1);
    else t = tt_GetDivW(tt_aElt[6]) + (tt_aV[PADDING] + tt_aV[BORDERWIDTH] << 1);
    if (t > tt_w) {
        tt_w = t
    }
    if (tt_w < 10) {
        tt_w = mainWidth
    }
    if (tt_aV[SHADOW]) {
        tt_w += tt_aV[SHADOWWIDTH];
        r = Math.floor(tt_aV[SHADOWWIDTH] * 4 / 3);
        e = tt_aElt[7].style;
        e.top = n + "px";
        e.left = r + "px";
        e.width = tt_w - r - tt_aV[SHADOWWIDTH] + "px";
        e.height = tt_aV[SHADOWWIDTH] + "px";
        e.background = tt_aV[SHADOWCOLOR];
        e = tt_aElt[8].style;
        e.top = r + "px";
        e.left = tt_w - tt_aV[SHADOWWIDTH] + "px";
        e.width = tt_aV[SHADOWWIDTH] + "px";
        e.background = tt_aV[SHADOWCOLOR]
    } else r = 0;
    tt_SetTipOpa(tt_aV[FADEIN] ? 0 : tt_aV[OPACITY]);
    tt_FixSize(n, r)
}

function tt_FixSize(e, t) {
    var n, r, i;
    tt_aElt[0].style.width = tt_w + "px";
    tt_aElt[0].style.pixelWidth = tt_w;
    r = tt_w - (tt_aV[SHADOW] ? tt_aV[SHADOWWIDTH] : 0);
    n = r;
    if (!tt_bBoxOld) n -= tt_aV[PADDING] + tt_aV[BORDERWIDTH] << 1;
    tt_aElt[5].style.width = n + "px";
    if (tt_aElt[1]) {
        n = r - (tt_aV[PADDING] << 1);
        if (!tt_bBoxOld) r = n;
        tt_aElt[1].style.width = r + "px";
        tt_aElt[2].style.width = n + "px"
    }
    tt_h = tt_GetDivH(tt_aElt[0]) + e;
    if (tt_aElt[8]) tt_aElt[8].style.height = tt_h - t + "px";
    i = tt_aElt.length - 1;
    if (tt_aElt[i]) {
        tt_aElt[i].style.width = tt_w + "px";
        tt_aElt[i].style.height = tt_h + "px"
    }
}

function tt_DeAlt(e) {
    var t;
    if (e.alt) e.alt = "";
    if (e.title) e.title = "";
    t = e.childNodes || e.children || null;
    if (t) {
        for (var n = t.length; n; ) tt_DeAlt(t[--n])
    }
}

function tt_OpDeHref(e) {
    if (!tt_op) return;
    if (tt_elDeHref) tt_OpReHref();
    while (e) {
        if (e.hasAttribute("href")) {
            e.t_href = e.getAttribute("href");
            e.t_stats = window.status;
            e.removeAttribute("href");
            e.style.cursor = "hand";
            tt_AddEvtFnc(e, "mousedown", tt_OpReHref);
            window.status = e.t_href;
            tt_elDeHref = e;
            break
        }
        e = e.parentElement
    }
}

function tt_ShowInit() {
    tt_tShow.Timer("tt_Show()", tt_aV[DELAY], true);
    if (tt_aV[CLICKCLOSE]) tt_AddEvtFnc(document, "mouseup", tt_HideInit)
}

function tt_OverInit(e) {
    tt_over = e.target || e.srcElement;
    tt_DeAlt(tt_over);
    tt_OpDeHref(tt_over);
    tt_AddRemOutFnc(true)
}

function tt_Show() {
    var e = tt_aElt[0].style;
    e.zIndex = "999999";
    if (tt_aV[STICKY] || !tt_aV[FOLLOWMOUSE]) tt_iState &= ~4;
    if (tt_aV[DURATION] > 0) tt_tDurt.Timer("tt_HideInit()", tt_aV[DURATION], true);
    tt_ExtCallFncs(0, "Show");
    e.visibility = "visible";
    tt_iState |= 2;
    if (tt_aV[FADEIN]) tt_Fade(0, 0, tt_aV[OPACITY], Math.round(tt_aV[FADEIN] / tt_aV[FADEINTERVAL]));
    tt_ShowIfrm()
}

function tt_ShowIfrm() {
    if (tt_ie56) {
        var e = tt_aElt[tt_aElt.length - 1];
        if (e) {
            var t = e.style;
            t.zIndex = tt_aElt[0].style.zIndex - 1;
            t.display = "block"
        }
    }
}

function tt_Move(e) {
    e = window.event || e;
    if (e) {
        tt_musX = tt_GetEvtX(e);
        tt_musY = tt_GetEvtY(e)
    }
    if (tt_iState) {
        if (!tt_over && e) tt_OverInit(e);
        if (tt_iState & 4) {
            if (!tt_op && !tt_ie) {
                if (tt_bWait) return;
                tt_bWait = true;
                tt_tWaitMov.Timer("tt_bWait = false;", 1, true)
            }
            if (tt_aV[FIX]) {
                tt_iState &= ~4;
                tt_SetTipPos(tt_aV[FIX][0], tt_aV[FIX][1])
            } else if (!tt_ExtCallFncs(e, "MoveBefore")) tt_SetTipPos(tt_PosX(), tt_PosY());
            tt_ExtCallFncs([tt_musX, tt_musY], "MoveAfter")
        }
    }
}

function tt_PosX() {
    var e;
    e = tt_musX;
    if (tt_aV[LEFT]) e -= tt_w + tt_aV[OFFSETX] - (tt_aV[SHADOW] ? tt_aV[SHADOWWIDTH] : 0);
    else e += tt_aV[OFFSETX];
    if (e > tt_maxPosX) e = tt_maxPosX;
    return e < tt_scrlX ? tt_scrlX : e
}

function tt_PosY() {
    var e;
    if (tt_aV[ABOVE] && (!tt_bJmpVert || tt_CalcPosYAbove() >= tt_scrlY + 16)) e = tt_DoPosYAbove();
    else if (!tt_aV[ABOVE] && tt_bJmpVert && tt_CalcPosYBelow() > tt_maxPosY - 16) e = tt_DoPosYAbove();
    else e = tt_DoPosYBelow();
    if (e > tt_maxPosY) e = tt_DoPosYAbove();
    if (e < tt_scrlY) e = tt_DoPosYBelow();
    return e
}

function tt_DoPosYBelow() {
    tt_bJmpVert = tt_aV[ABOVE];
    return tt_CalcPosYBelow()
}

function tt_DoPosYAbove() {
    tt_bJmpVert = !tt_aV[ABOVE];
    return tt_CalcPosYAbove()
}

function tt_CalcPosYBelow() {
    return tt_musY + tt_aV[OFFSETY]
}

function tt_CalcPosYAbove() {
    var e = tt_aV[OFFSETY] - (tt_aV[SHADOW] ? tt_aV[SHADOWWIDTH] : 0);
    if (tt_aV[OFFSETY] > 0 && e <= 0) e = 1;
    return tt_musY - tt_h - e
}

function tt_OnOut() {
    tt_AddRemOutFnc(false);
    if (!(tt_aV[STICKY] && tt_iState & 2)) tt_HideInit()
}

function tt_HideInit() {
    tt_ExtCallFncs(0, "HideInit");
    tt_iState &= ~4;
    if (tt_flagOpa && tt_aV[FADEOUT]) {
        tt_tFade.EndTimer();
        if (tt_opa) {
            var e = Math.round(tt_aV[FADEOUT] / (tt_aV[FADEINTERVAL] * (tt_aV[OPACITY] / tt_opa)));
            tt_Fade(tt_opa, tt_opa, 0, e);
            return
        }
    }
    tt_tHide.Timer("tt_Hide();", 1, false)
}

function tt_OpReHref() {
    if (tt_elDeHref) {
        tt_elDeHref.setAttribute("href", tt_elDeHref.t_href);
        tt_RemEvtFnc(tt_elDeHref, "mousedown", tt_OpReHref);
        window.status = tt_elDeHref.t_stats;
        tt_elDeHref = null
    }
}

function tt_Fade(e, t, n, r) {
    if (r) {
        t += Math.round((n - t) / r);
        if (n > e ? t >= n : t <= n) t = n;
        else tt_tFade.Timer("tt_Fade(" + e + "," + t + "," + n + "," + (r - 1) + ")", tt_aV[FADEINTERVAL], true)
    }
    t ? tt_SetTipOpa(t) : tt_Hide()
}

function tt_SetTipOpa(e) {
    tt_SetOpa(tt_aElt[5].style, e);
    if (tt_aElt[1]) tt_SetOpa(tt_aElt[1].style, e);
    if (tt_aV[SHADOW]) {
        e = Math.round(e * .8);
        tt_SetOpa(tt_aElt[7].style, e);
        tt_SetOpa(tt_aElt[8].style, e)
    }
}

function tt_OnCloseBtnOver(e) {
    var t = tt_aElt[4].style;
    e <<= 1;
    t.background = tt_aV[CLOSEBTNCOLORS][e];
    t.color = tt_aV[CLOSEBTNCOLORS][e + 1]
}

function tt_Int(e) {
    var t;
    return isNaN(t = parseInt(e)) ? 0 : t
}

function tt_AddRemOutFnc(e) {
    var t = e ? tt_AddEvtFnc : tt_RemEvtFnc;
    if (e != tt_AddRemOutFnc.bOn) {
        t(tt_over, "mouseout", tt_OnOut);
        tt_AddRemOutFnc.bOn = e;
        if (!e) tt_OpReHref()
    }
}

function tt_SetOpa(e, t) {
    tt_opa = t;
    if (tt_flagOpa == 1) {
        if (t < 100) {
            var n = e.visibility != "hidden";
            e.zoom = "100%";
            if (!n) e.visibility = "visible";
            e.filter = "alpha(opacity=" + t + ")";
            if (!n) e.visibility = "hidden"
        } else e.filter = ""
    } else {
        t /= 100;
        switch (tt_flagOpa) {
            case 2:
                e.KhtmlOpacity = t;
                break;
            case 3:
                e.KHTMLOpacity = t;
                break;
            case 4:
                e.MozOpacity = t;
                break;
            case 5:
                e.opacity = t;
                break
        }
    }
}

function tt_MovDomNode(e, t, n) {
    if (t) t.removeChild(e);
    if (n) n.appendChild(e)
}

function tt_Err(e) {
    if (tt_Debug) alert("Tooltip Script Error Message:\n\n" + e)
}

function tt_ExtCmdEnum() {
    var s;
    for (var i in config) {
        s = "window." + i.toString().toUpperCase();
        if (eval("typeof(" + s + ") == tt_u")) {
            eval(s + " = " + tt_aV.length);
            tt_aV[tt_aV.length] = null
        }
    }
}

function tt_ExtCallFncs(e, t) {
    var n = false;
    for (var r = tt_aExt.length; r; ) {
        --r;
        var i = tt_aExt[r]["On" + t];
        if (i && i(e)) n = true
    }
    return n
}
var config = new Object;
var tt_Debug = false;
var tt_Enabled = true;
var TagsToTip = true;
config.Above = false;
config.BgColor = "#fff";
config.BgImg = "";
config.BorderColor = "#e7e7e7";
config.BorderStyle = "solid";
config.BorderWidth = 1;
config.CenterMouse = false;
config.ClickClose = true;
config.CloseBtn = false;
config.CloseBtnColors = ["#fff", "#000", "#f2b370", "#000"];
config.CloseBtnText = " X ";
config.CopyContent = true;
config.Delay = 50;
config.Duration = 0;
config.FadeIn = 50;
config.FadeOut = 50;
config.FadeInterval = 50;
config.Fix = null;
config.FollowMouse = false;
config.FontColor = "#333333";
config.FontFace = "arial,sans-serif";
config.FontSize = "8pt";
config.FontWeight = "normal";
config.Left = false;
config.OffsetX = 14;
config.OffsetY = 10;
config.Opacity = 100;
config.Padding = 0;
config.Shadow = true;
config.ShadowColor = "#ddd";
config.ShadowWidth = 0;
config.Sticky = false;
config.TextAlign = "left";
config.Title = "";
config.TitleAlign = "left";
config.TitleBgColor = "";
config.TitleFontColor = "#ffffff";
config.TitleFontFace = "";
config.TitleFontSize = "";
config.Width = 0;
var tt_aElt = new Array(10),
    tt_aV = new Array,
    tt_sContent, tt_scrlX = 0,
    tt_scrlY = 0,
    tt_musX, tt_musY, tt_over, tt_x, tt_y, tt_w, tt_h;
var tt_aExt = new Array,
    tt_db, tt_op, tt_ie, tt_ie56, tt_bBoxOld, tt_body, tt_flagOpa, tt_maxPosX, tt_maxPosY, tt_iState = 0,
    tt_opa, tt_bJmpVert, tt_t2t, tt_t2tDad, tt_elDeHref, tt_tShow = new Number(0),
    tt_tHide = new Number(0),
    tt_tDurt = new Number(0),
    tt_tFade = new Number(0),
    tt_tWaitMov = new Number(0),
    tt_bWait = false,
    tt_u = "undefined";
tt_AddRemOutFnc.bOn = false;
Number.prototype.Timer = function(e, t, n) {
    if (!this.value || n) this.value = window.setTimeout(e, t)
};
Number.prototype.EndTimer = function() {
    if (this.value) {
        window.clearTimeout(this.value);
        this.value = 0
    }
};
tt_Init()