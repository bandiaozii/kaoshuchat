(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-2ba37102"],
  {
    "0227": function (t, e, s) {},
    "02d8": function (t, e, s) {},
    "02fd": function (t, e, s) {},
    "05f5": function (t, e, s) {
      "use strict";
      s("3917");
    },
    "0b69": function (t, e, s) {},
    "0fe0": function (t, e, s) {
      "use strict";
      s("8933");
    },
    2332: function (t, e, s) {
      "use strict";
      s("02d8");
    },
    "28de3": function (t, e, s) {
      "use strict";
      s("c083");
    },
    "2a0c": function (t, e, s) {},
    "361f": function (t, e, s) {
      "use strict";
      s("8d7f");
    },
    "37f9": function (t, e, s) {
      "use strict";
      s.r(e);
      var i = function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "div",
            { staticClass: "app-wrapper", class: "theme-" + t.theme },
            [
              s("sidebar", {
                staticClass: "sidebar-container",
                on: {
                  showlogin: t.showLogin,
                  changeGroupId: t.changeGroupId,
                  changePromptId: t.changePromptId,
                  changeRoleId: t.changeRoleId,
                  showUserInfo: t.showUserInfo,
                  showPay: t.showPay,
                },
              }),
              s(
                "div",
                { staticClass: "main-container" },
                [
                  s("Main", {
                    ref: "main",
                    on: {
                      showlogin: t.showLogin,
                      showUserInfo: t.showUserInfo,
                      showPay: t.showPay,
                    },
                  }),
                ],
                1
              ),
              s("login", {
                attrs: { qrcode: t.loginQrcode },
                on: { close: t.closeLogin },
              }),
              t.userinfoShow
                ? s("userinfo", {
                    on: {
                      close: t.closeUserInfo,
                      showlogin: t.showLogin,
                      showPay: t.showPay,
                    },
                  })
                : t._e(),
              t.payShow
                ? s("pay", {
                    attrs: { "pay-type": t.payType },
                    on: { close: t.closePay, showlogin: t.showLogin },
                  })
                : t._e(),
              s("float"),
            ],
            1
          );
        },
        o = [],
        a = s("4a60"),
        n = (s("c36d"), s("8747"), s("7a70"), s("6db49")),
        r = s("b775");
      function c(t) {
        return Object(r["a"])({
          url: "/login/getQrcode",
          method: "post",
          data: t,
        });
      }
      function l(t) {
        return Object(r["a"])({
          url: "/login/check",
          method: "post",
          data: t,
          hideLoading: !0,
        });
      }
      var u = s("5f87"),
        d = function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "div",
            { staticClass: "navbar" },
            [
              s("hamburger", {
                staticClass: "hamburger-container",
                attrs: {
                  id: "hamburger-container",
                  "is-active": t.sidebar.opened,
                },
                on: { toggleClick: t.toggleSideBar },
              }),
              s("div", { staticClass: "right-menu" }, [
                s(
                  "div",
                  {
                    staticClass: "avatar-container",
                    on: { click: t.showUserInfo },
                  },
                  [
                    s("div", { staticClass: "avatar-wrapper" }, [
                      s("img", {
                        staticClass: "user-avatar",
                        attrs: { src: t.avatar || "/static/img/no_avatar.png" },
                      }),
                      s("div", { staticClass: "user-name" }, [
                        t._v(t._s(t.nickname || "无昵称")),
                      ]),
                      s("i", { staticClass: "el-icon-caret-bottom" }),
                    ]),
                  ]
                ),
              ]),
            ],
            1
          );
        },
        p = [],
        h = function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "div",
            {
              staticStyle: { padding: "0 15px" },
              on: { click: t.toggleClick },
            },
            [
              s(
                "svg",
                {
                  staticClass: "hamburger",
                  class: { "is-active": t.isActive },
                  attrs: {
                    viewBox: "0 0 1024 1024",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "64",
                    height: "64",
                  },
                },
                [
                  s("path", {
                    attrs: {
                      d: "M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z",
                    },
                  }),
                ]
              ),
            ]
          );
        },
        g = [],
        m = {
          name: "Hamburger",
          props: { isActive: { type: Boolean, default: !1 } },
          methods: {
            toggleClick: function () {
              this.$emit("toggleClick");
            },
          },
        },
        f = m,
        v = (s("d49d"), s("3427")),
        w = Object(v["a"])(f, h, g, !1, null, "49e15297", null),
        b = w.exports,
        y = function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "div",
            [
              s(
                "el-dialog",
                {
                  attrs: {
                    "custom-class": "my-dialog",
                    title: "个人中心",
                    visible: !0,
                    width: "600px",
                    "close-on-click-modal": !0,
                    "before-close": t.closeUserInfo,
                  },
                },
                [
                  s(
                    "div",
                    { staticClass: "userinfo" },
                    [
                      s(
                        "el-form",
                        { ref: "form", attrs: { "label-width": "120px" } },
                        [
                          s(
                            "el-form-item",
                            { attrs: { label: "MID", prop: "num" } },
                            [s("span", [t._v(t._s(t.userinfo.user_id))])]
                          ),
                          s(
                            "el-form-item",
                            { attrs: { label: "头像", prop: "avatar" } },
                            [
                              s(
                                "el-upload",
                                {
                                  staticClass: "user-avatar",
                                  attrs: {
                                    action: "",
                                    "before-upload": t.uploadCheck,
                                    "http-request": t.uploadAvatar,
                                    "show-file-list": !1,
                                    multiple: !1,
                                  },
                                },
                                [
                                  s("img", {
                                    staticStyle: {
                                      height: "50px",
                                      width: "50px",
                                      float: "left",
                                    },
                                    attrs: {
                                      src:
                                        t.userinfo.avatar ||
                                        "/static/img/no_avatar.png",
                                    },
                                  }),
                                ]
                              ),
                            ],
                            1
                          ),
                          s(
                            "el-form-item",
                            { attrs: { label: "昵称", prop: "nickname" } },
                            [
                              s(
                                "el-input",
                                {
                                  staticStyle: { width: "220px" },
                                  attrs: { placeholder: "请输入昵称" },
                                  model: {
                                    value: t.userinfo.nickname,
                                    callback: function (e) {
                                      t.$set(t.userinfo, "nickname", e);
                                    },
                                    expression: "userinfo.nickname",
                                  },
                                },
                                [
                                  s(
                                    "el-button",
                                    {
                                      attrs: {
                                        slot: "append",
                                        type: "default",
                                      },
                                      on: { click: t.setUserNickname },
                                      slot: "append",
                                    },
                                    [t._v("保存")]
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          s("el-form-item", { attrs: { label: "VIP会员" } }, [
                            t.userinfo.vip_expire_time
                              ? s(
                                  "div",
                                  { staticClass: "balance" },
                                  [
                                    s("span", [
                                      t._v(
                                        t._s(t.userinfo.vip_expire_time) +
                                          " 到期"
                                      ),
                                    ]),
                                    s(
                                      "el-button",
                                      {
                                        attrs: { type: "text", size: "small" },
                                        on: {
                                          click: function (e) {
                                            return t.showPay("vip");
                                          },
                                        },
                                      },
                                      [t._v("续费")]
                                    ),
                                  ],
                                  1
                                )
                              : s(
                                  "div",
                                  { staticClass: "balance" },
                                  [
                                    s("span", [t._v("未开通")]),
                                    s(
                                      "el-button",
                                      {
                                        attrs: { type: "text", size: "small" },
                                        on: {
                                          click: function (e) {
                                            return t.showPay("vip");
                                          },
                                        },
                                      },
                                      [t._v("立即开通")]
                                    ),
                                  ],
                                  1
                                ),
                          ]),
                          s("el-form-item", { attrs: { label: "对话次数" } }, [
                            s(
                              "div",
                              { staticClass: "balance" },
                              [
                                s("span", [
                                  t._v(t._s(t.userinfo.balance) + " 次"),
                                ]),
                                s(
                                  "el-button",
                                  {
                                    attrs: { type: "text", size: "small" },
                                    on: {
                                      click: function (e) {
                                        return t.showPay("goods");
                                      },
                                    },
                                  },
                                  [t._v("充值")]
                                ),
                              ],
                              1
                            ),
                          ]),
                          s("el-form-item", { attrs: { label: "绘画次数" } }, [
                            s(
                              "div",
                              { staticClass: "balance" },
                              [
                                s("span", [
                                  t._v(t._s(t.userinfo.balance_draw) + " 张"),
                                ]),
                                s(
                                  "el-button",
                                  {
                                    attrs: { type: "text", size: "small" },
                                    on: {
                                      click: function (e) {
                                        return t.showPay("draw");
                                      },
                                    },
                                  },
                                  [t._v("充值")]
                                ),
                              ],
                              1
                            ),
                          ]),
                          t.hasModel4
                            ? s(
                                "el-form-item",
                                { attrs: { label: t.model4Name + "余额" } },
                                [
                                  s(
                                    "div",
                                    { staticClass: "balance" },
                                    [
                                      s("span", [
                                        t._v(
                                          t._s(t.userinfo.balance_gpt4) +
                                            " 万字"
                                        ),
                                      ]),
                                      s(
                                        "el-button",
                                        {
                                          attrs: {
                                            type: "text",
                                            size: "small",
                                          },
                                          on: {
                                            click: function (e) {
                                              return t.showPay("gpt4");
                                            },
                                          },
                                        },
                                        [t._v("充值")]
                                      ),
                                    ],
                                    1
                                  ),
                                ]
                              )
                            : t._e(),
                        ],
                        1
                      ),
                      s(
                        "div",
                        { staticClass: "logout" },
                        [
                          s(
                            "el-button",
                            {
                              attrs: { type: "danger", size: "small" },
                              on: { click: t.logout },
                            },
                            [t._v("退出登录")]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ]
              ),
            ],
            1
          );
        },
        C = [],
        _ = s("9a7f"),
        k = s("76f8"),
        A = (s("7b4c"), s("5f17"), s("8cde"), s("c24f"));
      function x(t) {
        return Object(r["a"])({
          url: "/upload/image",
          method: "post",
          data: t,
        });
      }
      var I = {
          name: "Userinfo",
          data: function () {
            return { userinfo: {} };
          },
          computed: Object(a["a"])(
            {},
            Object(n["b"])(["hasModel4", "model4Name"])
          ),
          created: function () {
            this.getUserInfo();
          },
          methods: {
            getUserInfo: function () {
              var t = this;
              Object(A["a"])().then(function (e) {
                t.userinfo = e.data;
              });
            },
            closeUserInfo: function () {
              this.$emit("close");
            },
            showPay: function (t) {
              this.$emit("showPay", t);
            },
            logout: function () {
              var t = this;
              return Object(k["a"])(
                Object(_["a"])().mark(function e() {
                  return Object(_["a"])().wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), t.$store.dispatch("user/logout");
                        case 2:
                          t.closeUserInfo(), window.location.reload();
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            uploadAvatar: function (t) {
              var e = this,
                s = new FormData();
              s.append("image", t.file),
                t.data && s.append("data", JSON.stringify(t.data)),
                x(s).then(function (t) {
                  t.data.path
                    ? Object(A["e"])({ avatar: t.data.path }).then(function () {
                        e.getUserInfo(), e.$message.success("修改成功");
                      })
                    : e.$message.error("上传失败");
                });
            },
            setUserNickname: function () {
              var t = this;
              Object(A["f"])({ nickname: this.userinfo.nickname }).then(
                function () {
                  t.$message.success("保存成功");
                }
              );
            },
            uploadCheck: function (t) {
              var e = "",
                s = t.name.split(".");
              if (
                (s.length > 1 && (e = s[s.length - 1].toLowerCase()),
                !["png", "jpg", "jpeg", "gif"].includes(e))
              )
                return this.$message.error("不支持的图片格式"), !1;
            },
          },
        },
        L = I,
        M =
          (s("6737e"),
          s("bb3f"),
          Object(v["a"])(L, y, C, !1, null, "978bdc34", null)),
        P = M.exports,
        O = s("c00a"),
        S = {
          components: { SvgIcon: O["a"], Hamburger: b, Userinfo: P },
          computed: Object(a["a"])(
            {},
            Object(n["b"])([
              "sidebar",
              "avatar",
              "nickname",
              "vip_expire_time",
              "balance",
              "device",
            ])
          ),
          mounted: function () {
            this.getSystemInfo(), this.getUserInfo();
          },
          methods: {
            toggleSideBar: function () {
              this.$store.dispatch("app/toggleSideBar");
            },
            getSystemInfo: function () {
              this.$store.dispatch("user/getSystemInfo");
            },
            showUserInfo: function () {
              this.$emit("showUserInfo");
            },
            getUserInfo: function () {
              var t = this;
              this.$store
                .dispatch("user/getInfo")
                .then(function (e) {
                  e.errno && t.$message({ message: e.message, type: "error" });
                })
                .catch(function (e) {
                  403 !== e.errno
                    ? t.$message.error("获取用户信息失败")
                    : t.$emit("showlogin");
                });
            },
          },
        },
        j = S,
        T = (s("62af"), Object(v["a"])(j, d, p, !1, null, "3d2b0168", null)),
        G = T.exports,
        E = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "div",
            [
              i("div", { staticClass: "module-list" }, [
                i(
                  "div",
                  { staticClass: "avatar", on: { click: t.showUserInfo } },
                  [
                    i("img", {
                      attrs: {
                        src: t.avatar || "/static/img/no_avatar.png",
                        title: t.nickname || "无昵称",
                      },
                    }),
                  ]
                ),
                i(
                  "div",
                  {
                    staticClass: "module-item",
                    class: { active: "chat" === t.module },
                    on: {
                      click: function (e) {
                        return t.switchModule("chat");
                      },
                    },
                  },
                  [
                    i("svg-icon", {
                      staticClass: "icon",
                      staticStyle: { "font-size": "26px" },
                      attrs: { "icon-class": "ic_mod_chat" },
                    }),
                    i("span", [t._v("对话")]),
                  ],
                  1
                ),
                i(
                  "div",
                  {
                    staticClass: "module-item",
                    class: { active: "write" === t.module },
                    on: {
                      click: function (e) {
                        return t.switchModule("write");
                      },
                    },
                  },
                  [
                    i("svg-icon", {
                      staticClass: "icon",
                      staticStyle: { "font-size": "28px" },
                      attrs: { "icon-class": "ic_mod_write" },
                    }),
                    i("span", [t._v("创作")]),
                  ],
                  1
                ),
                i(
                  "div",
                  {
                    staticClass: "module-item",
                    class: { active: "cosplay" === t.module },
                    on: {
                      click: function (e) {
                        return t.switchModule("cosplay");
                      },
                    },
                  },
                  [
                    i("svg-icon", {
                      staticClass: "icon",
                      staticStyle: { "font-size": "27px" },
                      attrs: { "icon-class": "ic_mod_cosplay" },
                    }),
                    i("span", [t._v("模拟")]),
                  ],
                  1
                ),
                i(
                  "div",
                  {
                    staticClass: "module-item",
                    class: { active: "draw" === t.module },
                    on: {
                      click: function (e) {
                        return t.switchModule("draw");
                      },
                    },
                  },
                  [
                    i("svg-icon", {
                      staticClass: "icon",
                      staticStyle: { "font-size": "23px" },
                      attrs: { "icon-class": "ic_mod_draw" },
                    }),
                    i("span", [t._v("绘画")]),
                  ],
                  1
                ),
                i("div", { staticClass: "menu-bottom" }, [
                  i(
                    "div",
                    {
                      staticClass: "module-item",
                      on: {
                        click: function (e) {
                          return t.toDoc("help");
                        },
                      },
                    },
                    [
                      i("svg-icon", {
                        staticClass: "icon",
                        staticStyle: { "font-size": "24px" },
                        attrs: { "icon-class": "ic_doc" },
                      }),
                      i("span", [t._v("教程")]),
                    ],
                    1
                  ),
                  "light" === t.theme
                    ? i(
                        "div",
                        {
                          staticClass: "module-item",
                          attrs: { title: "切换为夜间模式" },
                          on: {
                            click: function (e) {
                              return t.setTheme("dark");
                            },
                          },
                        },
                        [
                          i("svg-icon", {
                            staticClass: "icon",
                            staticStyle: { "font-size": "18px" },
                            attrs: { "icon-class": "ic_dark" },
                          }),
                        ],
                        1
                      )
                    : t._e(),
                  "dark" === t.theme
                    ? i(
                        "div",
                        {
                          staticClass: "module-item",
                          attrs: { title: "切换为日间模式" },
                          on: {
                            click: function (e) {
                              return t.setTheme("light");
                            },
                          },
                        },
                        [
                          i("svg-icon", {
                            staticClass: "icon",
                            staticStyle: { "font-size": "22px" },
                            attrs: { "icon-class": "ic_light" },
                          }),
                        ],
                        1
                      )
                    : t._e(),
                ]),
              ]),
              i("div", { staticClass: "sub-module" }, [
                "chat" === t.module
                  ? i("div", { staticClass: "module-chat" }, [
                      i("div", { staticClass: "module-header" }, [
                        i("div", { staticClass: "module-title" }, [
                          i(
                            "div",
                            {
                              staticClass: "btn-group-add",
                              on: {
                                click: function (e) {
                                  return t.editGroup(0);
                                },
                              },
                            },
                            [
                              i("i", { staticClass: "icon el-icon-plus" }),
                              i("span", [t._v("创建新会话")]),
                            ]
                          ),
                        ]),
                      ]),
                      i(
                        "div",
                        { staticClass: "module-body" },
                        [
                          i(
                            "el-scrollbar",
                            { attrs: { "wrap-class": "scrollbar-wrapper" } },
                            [
                              i(
                                "div",
                                { staticClass: "group-chat" },
                                t._l(t.groupList, function (e, s) {
                                  return i(
                                    "div",
                                    {
                                      staticClass: "group-item",
                                      class: {
                                        active: e.id === t.activeGroupId,
                                      },
                                    },
                                    [
                                      i(
                                        "div",
                                        {
                                          staticClass: "group-title",
                                          on: {
                                            click: function (s) {
                                              return t.changeGroup(e.id);
                                            },
                                          },
                                        },
                                        [
                                          i("i", {
                                            staticClass:
                                              "icon el-icon-chat-dot-square",
                                          }),
                                          i("span", [t._v(t._s(e.title))]),
                                        ]
                                      ),
                                      i(
                                        "el-dropdown",
                                        { attrs: { trigger: "click" } },
                                        [
                                          i(
                                            "span",
                                            { staticClass: "el-dropdown-link" },
                                            [
                                              i("i", {
                                                staticClass:
                                                  "btn-dropdown el-icon-more",
                                              }),
                                            ]
                                          ),
                                          i(
                                            "el-dropdown-menu",
                                            {
                                              attrs: { slot: "dropdown" },
                                              slot: "dropdown",
                                            },
                                            [
                                              i(
                                                "el-dropdown-item",
                                                {
                                                  nativeOn: {
                                                    click: function (s) {
                                                      return (
                                                        s.stopPropagation(),
                                                        t.editGroup(e.id)
                                                      );
                                                    },
                                                  },
                                                },
                                                [t._v("编辑")]
                                              ),
                                              i(
                                                "el-dropdown-item",
                                                {
                                                  staticClass: "text-danger",
                                                  nativeOn: {
                                                    click: function (s) {
                                                      return (
                                                        s.stopPropagation(),
                                                        t.delGroup(e.id)
                                                      );
                                                    },
                                                  },
                                                },
                                                [t._v("删除")]
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  );
                                }),
                                0
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                    ])
                  : t._e(),
                "write" === t.module
                  ? i("div", { staticClass: "module-write" }, [
                      i("div", { staticClass: "module-header" }, [
                        i(
                          "div",
                          { staticClass: "search" },
                          [
                            i("el-input", {
                              attrs: {
                                placeholder: "搜索模型",
                                "prefix-icon": "el-icon-search",
                                size: "large",
                                clearable: !0,
                                autocomplete: "",
                              },
                              model: {
                                value: t.searchKeyword,
                                callback: function (e) {
                                  t.searchKeyword = e;
                                },
                                expression: "searchKeyword",
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                      i(
                        "div",
                        { staticClass: "module-body" },
                        [
                          i(
                            "el-scrollbar",
                            { attrs: { "wrap-class": "scrollbar-wrapper" } },
                            t._l(t.writeTopicList, function (e) {
                              return i("div", { staticClass: "group-write" }, [
                                e.prompts && e.prompts.length > 0 && !e.hidden
                                  ? i("div", { staticClass: "topic-title" }, [
                                      i("span", [t._v(t._s(e.title))]),
                                    ])
                                  : t._e(),
                                e.prompts && e.prompts.length > 0 && !e.hidden
                                  ? i(
                                      "div",
                                      { staticClass: "prompt-list" },
                                      t._l(e.prompts, function (e) {
                                        return i(
                                          "div",
                                          {
                                            staticClass: "prompt-item",
                                            class: {
                                              active: t.activePromptId === e.id,
                                              hidden: e.hidden,
                                            },
                                            on: {
                                              click: function (s) {
                                                return t.changePrompt(e.id);
                                              },
                                            },
                                          },
                                          [
                                            i(
                                              "div",
                                              { staticClass: "prompt-title" },
                                              [t._v(t._s(e.title))]
                                            ),
                                            i(
                                              "div",
                                              { staticClass: "prompt-desc" },
                                              [t._v(t._s(e.desc))]
                                            ),
                                            i(
                                              "div",
                                              { staticClass: "prompt-ops" },
                                              [
                                                i(
                                                  "div",
                                                  {
                                                    staticClass: "op-item",
                                                    attrs: { title: "点击量" },
                                                  },
                                                  [
                                                    i("svg-icon", {
                                                      staticClass: "icon",
                                                      attrs: {
                                                        "icon-class": "ic_view",
                                                      },
                                                    }),
                                                    t._v(
                                                      " " + t._s(e.views) + " "
                                                    ),
                                                  ],
                                                  1
                                                ),
                                                i(
                                                  "div",
                                                  {
                                                    staticClass: "op-item",
                                                    attrs: { title: "使用量" },
                                                  },
                                                  [
                                                    i("svg-icon", {
                                                      staticClass: "icon",
                                                      attrs: {
                                                        "icon-class":
                                                          "ic_usage",
                                                      },
                                                    }),
                                                    t._v(
                                                      " " + t._s(e.usages) + " "
                                                    ),
                                                  ],
                                                  1
                                                ),
                                                i(
                                                  "div",
                                                  {
                                                    staticClass: "op-item",
                                                    attrs: { title: "收藏" },
                                                    on: {
                                                      click: function (s) {
                                                        return (
                                                          s.stopPropagation(),
                                                          t.doPromptVote(e.id)
                                                        );
                                                      },
                                                    },
                                                  },
                                                  [
                                                    1 === e.isVote
                                                      ? i("svg-icon", {
                                                          staticClass: "icon",
                                                          attrs: {
                                                            "icon-class":
                                                              "ic_vote_active",
                                                          },
                                                        })
                                                      : i("svg-icon", {
                                                          staticClass: "icon",
                                                          attrs: {
                                                            "icon-class":
                                                              "ic_vote",
                                                          },
                                                        }),
                                                  ],
                                                  1
                                                ),
                                              ]
                                            ),
                                          ]
                                        );
                                      }),
                                      0
                                    )
                                  : t._e(),
                              ]);
                            }),
                            0
                          ),
                        ],
                        1
                      ),
                    ])
                  : t._e(),
                "cosplay" === t.module
                  ? i("div", { staticClass: "module-cosplay" }, [
                      i("div", { staticClass: "module-header" }, [
                        i(
                          "div",
                          { staticClass: "search" },
                          [
                            i("el-input", {
                              attrs: {
                                placeholder: "搜索角色",
                                "prefix-icon": "el-icon-search",
                                size: "large",
                                clearable: !0,
                                autocomplete: "",
                              },
                              model: {
                                value: t.searchKeyword,
                                callback: function (e) {
                                  t.searchKeyword = e;
                                },
                                expression: "searchKeyword",
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                      i(
                        "div",
                        { staticClass: "module-body" },
                        [
                          i(
                            "el-scrollbar",
                            { attrs: { "wrap-class": "scrollbar-wrapper" } },
                            t._l(t.cosplayRoleList, function (e) {
                              return i(
                                "div",
                                { staticClass: "group-cosplay" },
                                [
                                  e.roles && e.roles.length > 0 && !e.hidden
                                    ? i("div", { staticClass: "type-title" }, [
                                        i("span", [t._v(t._s(e.title))]),
                                      ])
                                    : t._e(),
                                  e.roles && e.roles.length > 0 && !e.hidden
                                    ? i(
                                        "div",
                                        { staticClass: "role-list" },
                                        t._l(e.roles, function (e) {
                                          return i(
                                            "div",
                                            {
                                              staticClass: "role-item",
                                              class: {
                                                active: t.activeRoleId === e.id,
                                                hidden: e.hidden,
                                              },
                                              on: {
                                                click: function (s) {
                                                  return t.changeRole(e.id);
                                                },
                                              },
                                            },
                                            [
                                              i(
                                                "div",
                                                { staticClass: "thumb" },
                                                [
                                                  e.thumb
                                                    ? i("img", {
                                                        attrs: {
                                                          src: e.thumb,
                                                          alt: "",
                                                        },
                                                      })
                                                    : i("img", {
                                                        attrs: {
                                                          src: "/static/img/avatar_cosplay.png",
                                                          alt: "",
                                                        },
                                                      }),
                                                ]
                                              ),
                                              i("div", [
                                                i(
                                                  "div",
                                                  { staticClass: "role-title" },
                                                  [t._v(t._s(e.title))]
                                                ),
                                                i(
                                                  "div",
                                                  { staticClass: "role-ops" },
                                                  [
                                                    i(
                                                      "div",
                                                      {
                                                        staticClass: "op-item",
                                                        attrs: {
                                                          title: "点击量",
                                                        },
                                                      },
                                                      [
                                                        i("svg-icon", {
                                                          staticClass: "icon",
                                                          attrs: {
                                                            "icon-class":
                                                              "ic_view",
                                                          },
                                                        }),
                                                        t._v(
                                                          " " +
                                                            t._s(e.views) +
                                                            " "
                                                        ),
                                                      ],
                                                      1
                                                    ),
                                                    i(
                                                      "div",
                                                      {
                                                        staticClass: "op-item",
                                                        attrs: {
                                                          title: "使用量",
                                                        },
                                                      },
                                                      [
                                                        i("svg-icon", {
                                                          staticClass: "icon",
                                                          attrs: {
                                                            "icon-class":
                                                              "ic_usage",
                                                          },
                                                        }),
                                                        t._v(
                                                          " " +
                                                            t._s(e.usages) +
                                                            " "
                                                        ),
                                                      ],
                                                      1
                                                    ),
                                                  ]
                                                ),
                                              ]),
                                            ]
                                          );
                                        }),
                                        0
                                      )
                                    : t._e(),
                                ]
                              );
                            }),
                            0
                          ),
                        ],
                        1
                      ),
                    ])
                  : t._e(),
                i("div", { staticClass: "module-footer" }, [
                  i(
                    "div",
                    {
                      staticClass: "box-vip",
                      on: {
                        click: function (e) {
                          return t.showPay("vip");
                        },
                      },
                    },
                    [
                      i("img", {
                        staticClass: "icon",
                        attrs: { src: s("c6d4") },
                      }),
                      t.vip_expire_time
                        ? i("div", { staticClass: "title" }, [
                            t._v("已开通会员"),
                          ])
                        : i("div", { staticClass: "title" }, [
                            t._v("开通会员"),
                          ]),
                      t.vip_expire_time
                        ? i("div", { staticClass: "desc" }, [
                            t._v(t._s(t.vip_expire_time) + " 到期"),
                          ])
                        : i("div", { staticClass: "desc" }, [
                            t._v("高速通道 无限对话"),
                          ]),
                    ]
                  ),
                ]),
              ]),
              t.group
                ? i("group-edit", {
                    attrs: { group: t.group },
                    on: { close: t.closeGroupEdit, submit: t.saveGroup },
                  })
                : t._e(),
            ],
            1
          );
        },
        B = [];
      s("485a"), s("87cf"), s("5013"), s("38ac");
      function U(t) {
        return Object(r["a"])({
          url: "/group/getGroupList",
          method: "post",
          data: t,
        });
      }
      function R(t) {
        return Object(r["a"])({
          url: "/group/getGroup",
          method: "post",
          data: t,
        });
      }
      function q(t) {
        return Object(r["a"])({
          url: "/group/saveGroup",
          method: "post",
          data: t,
        });
      }
      function H(t) {
        return Object(r["a"])({
          url: "/group/delGroup",
          method: "post",
          data: t,
        });
      }
      function Y(t) {
        return Object(r["a"])({
          url: "/write/getAllPrompt",
          method: "post",
          data: t,
        });
      }
      function Q(t) {
        return Object(r["a"])({
          url: "/write/votePrompt",
          method: "post",
          data: t,
        });
      }
      function z(t) {
        return Object(r["a"])({
          url: "/write/getPrompt",
          method: "post",
          data: t,
        });
      }
      function V(t) {
        return Object(r["a"])({
          url: "/write/getHistoryMsg",
          method: "post",
          data: t,
        });
      }
      function X(t) {
        return Object(r["a"])({
          url: "/cosplay/getAllRoles",
          method: "post",
          data: t,
        });
      }
      function W(t) {
        return Object(r["a"])({
          url: "/cosplay/getRole",
          method: "post",
          data: t,
        });
      }
      function F(t) {
        return Object(r["a"])({
          url: "/cosplay/getHistoryMsg",
          method: "post",
          data: t,
        });
      }
      var D = function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return t.form
            ? s(
                "div",
                [
                  s(
                    "el-dialog",
                    {
                      attrs: {
                        "custom-class": "my-dialog",
                        title: t.group.id ? "编辑会话" : "创建新会话",
                        width: "440px",
                        visible: !0,
                        "close-on-click-modal": !1,
                        "append-to-body": !0,
                        "before-close": t.closeForm,
                      },
                    },
                    [
                      s(
                        "el-form",
                        {
                          ref: "form",
                          staticStyle: { padding: "20px 0" },
                          attrs: {
                            model: t.form,
                            rules: t.formRules,
                            "label-width": "100px",
                          },
                        },
                        [
                          s(
                            "el-form-item",
                            { attrs: { label: "会话标题", prop: "num" } },
                            [
                              s("el-input", {
                                staticStyle: { width: "240px" },
                                attrs: {
                                  placeholder: "自定义会话标题",
                                  size: "normal",
                                },
                                model: {
                                  value: t.form.title,
                                  callback: function (e) {
                                    t.$set(t.form, "title", e);
                                  },
                                  expression: "form.title",
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      s(
                        "span",
                        {
                          staticClass: "dialog-footer",
                          attrs: { slot: "footer" },
                          slot: "footer",
                        },
                        [
                          s(
                            "el-button",
                            {
                              attrs: {
                                type: "default",
                                icon: "el-icon-close",
                                size: "small",
                              },
                              on: { click: t.closeForm },
                            },
                            [t._v("取 消")]
                          ),
                          s(
                            "el-button",
                            {
                              attrs: {
                                type: "primary",
                                icon: "el-icon-check",
                                size: "small",
                              },
                              on: { click: t.doSubmit },
                            },
                            [t._v("提 交")]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              )
            : t._e();
        },
        $ = [],
        Z = {
          props: { group: { type: Object, default: null } },
          data: function () {
            return {
              form: null,
              formRules: {
                title: [{ required: !0, message: "此项必填", trigger: "blur" }],
              },
            };
          },
          created: function () {
            this.form = this.group;
          },
          methods: {
            closeForm: function () {
              this.$emit("close");
            },
            doSubmit: function () {
              var t = this;
              this.$refs.form.validate(function (e) {
                e
                  ? t.$emit("submit", t.form)
                  : t.$message.error("请填写必填项");
              });
            },
          },
        },
        J = Z,
        N = (s("ae13"), Object(v["a"])(J, D, $, !1, null, "0c31566b", null)),
        K = N.exports,
        tt = {
          components: { groupEdit: K },
          data: function () {
            return {
              page: 1,
              pagesize: 20,
              groupList: [],
              activeGroupId: 0,
              msgList: [],
              module: "chat",
              group: null,
              writeTopicList: [],
              writeVoteList: [],
              writeVoteHidden: !1,
              activePromptId: 0,
              cosplayRoleList: [],
              activeRoleId: 0,
              searchKeyword: "",
            };
          },
          computed: Object(a["a"])(
            Object(a["a"])(
              {},
              Object(n["b"])([
                "sidebar",
                "avatar",
                "nickname",
                "vip_expire_time",
                "balance",
                "theme",
              ])
            ),
            {},
            {
              isCollapse: function () {
                return !this.sidebar.opened;
              },
              showLogo: function () {
                return this.$store.state.settings.sidebarLogo;
              },
              routeName: function () {
                return this.$route.name ? this.$route.name : "chat";
              },
            }
          ),
          watch: {
            searchKeyword: function () {
              var t = this.searchKeyword;
              if ("write" === this.module) {
                var e = this.writeTopicList;
                e.forEach(function (s, i) {
                  if (s && s["prompts"] && s["prompts"].length > 0) {
                    var o = !0;
                    s["prompts"].forEach(function (e, i) {
                      var a = -1 === e.title.indexOf(t);
                      (s["prompts"][i].hidden = a), a || (o = !1);
                    }),
                      (s.hidden = o),
                      (e[i] = s);
                  }
                }),
                  (this.writeTopicList = e),
                  (this.writeVoteHidden = !!t);
              } else if ("cosplay" === this.module) {
                var s = this.cosplayRoleList;
                s.forEach(function (e, i) {
                  if (e && e["roles"] && e["roles"].length > 0) {
                    var o = !0;
                    e["roles"].forEach(function (s, i) {
                      var a = -1 === s.title.indexOf(t);
                      (e["roles"][i].hidden = a), a || (o = !1);
                    }),
                      (e.hidden = o),
                      (s[i] = e);
                  }
                }),
                  console.log("ss", s),
                  (this.cosplayRoleList = s);
              }
            },
          },
          mounted: function () {
            this.getUserInfo(), this.getSystemInfo(), this.getGroupList(!0);
          },
          methods: {
            switchModule: function (t) {
              if (this.module !== t) {
                if ("chat" === t)
                  this.activeGroupId &&
                    this.$emit("changeGroupId", this.activeGroupId);
                else if ("write" === t)
                  (this.writeTopicList && 0 !== this.writeTopicList.length) ||
                    ((this.activePromptId = 0), this.getAllPrompt()),
                    this.activePromptId &&
                      this.$emit("changePromptId", this.activePromptId);
                else if ("cosplay" === t)
                  (this.cosplayRoleList && 0 !== this.cosplayRoleList.length) ||
                    ((this.activeRoleId = 0), this.getAllRoles()),
                    this.activeRoleId &&
                      this.$emit("changeRoleId", this.activeRoleId);
                else if ("draw" === t)
                  return this.$message.warning("PC端绘画即将上线"), !1;
                (this.module = t), (this.searchKeyword = "");
              }
            },
            changeGroup: function (t) {
              (this.activeGroupId = t), this.$emit("changeGroupId", t);
            },
            getGroupList: function () {
              var t = this,
                e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
              U({ page: this.page, pagesize: this.pagesize })
                .then(function (s) {
                  e &&
                    s.data.list.length > 0 &&
                    ((t.groupList = []), t.changeGroup(s.data.list[0].id)),
                    (t.groupList = s.data.list),
                    (t.groupTotal = s.data.count);
                })
                .catch(function (e) {
                  403 === e.errno && t.$emit("showlogin");
                });
            },
            editGroup: function () {
              var t = this,
                e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0;
              e
                ? R({ id: e })
                    .then(function (e) {
                      t.group = e.data;
                    })
                    .catch(function (e) {
                      403 === e.errno && t.$emit("showlogin");
                    })
                : (this.group = { title: "新的会话" });
            },
            closeGroupEdit: function () {
              this.group = null;
            },
            saveGroup: function (t) {
              var e = this;
              q(t)
                .then(function (s) {
                  if (e.group.id) {
                    for (var i in e.groupList)
                      if (e.groupList[i].id === t.id) {
                        e.groupList[i].title = t.title;
                        break;
                      }
                  } else (e.page = 1), e.getGroupList(!0);
                  e.$forceUpdate(),
                    e.$message({
                      message: s.message,
                      type: "success",
                      duration: 1500,
                    }),
                    e.closeGroupEdit();
                })
                .catch(function (t) {
                  403 === t.errno && e.$emit("showlogin");
                });
            },
            delGroup: function (t) {
              var e = this;
              this.$confirm("删除后不可恢复，确认删除吗?", "提示", {
                confirmButtonText: "确定删除",
                cancelButtonText: "取消",
                type: "warning",
              }).then(function () {
                H({ id: t })
                  .then(function (s) {
                    for (var i in e.groupList)
                      if (e.groupList[i].id === t) {
                        e.groupList.splice(i, 1), e.$forceUpdate();
                        break;
                      }
                    e.getGroupList(),
                      e.$message({
                        message: s.message,
                        type: "success",
                        duration: 1500,
                      });
                  })
                  .catch(function (t) {
                    403 === t.errno && e.$emit("showlogin");
                  });
              });
            },
            getSystemInfo: function () {
              this.$store.dispatch("user/getSystemInfo");
            },
            showUserInfo: function () {
              this.$emit("showUserInfo");
            },
            getUserInfo: function () {
              var t = this;
              this.$store
                .dispatch("user/getInfo")
                .then(function (e) {
                  e.errno && t.$message({ message: e.message, type: "error" });
                })
                .catch(function (e) {
                  403 !== e.errno
                    ? t.$message.error("获取用户信息失败")
                    : t.$emit("showlogin");
                });
            },
            setTheme: function (t) {
              this.$store.dispatch("user/setTheme", t);
            },
            getAllPrompt: function () {
              var t = this;
              Y().then(function (e) {
                t.writeTopicList = e.data;
                var s = [];
                t.writeTopicList.forEach(function (t) {
                  t.prompts &&
                    t.prompts.length > 0 &&
                    t.prompts.forEach(function (t) {
                      t.isVote && s.push(t);
                    });
                }),
                  (t.writeVoteList = s);
              });
            },
            doPromptVote: function (t) {
              var e = this;
              Q({ prompt_id: t }).then(function (s) {
                e.$message.success(s.message);
                var i = e.writeTopicList;
                i.forEach(function (e, s) {
                  e &&
                    e["prompts"] &&
                    e["prompts"].length > 0 &&
                    (e["prompts"].forEach(function (s, i) {
                      s.id === t && (e["prompts"][i].isVote = s.isVote ? 0 : 1);
                    }),
                    (i[s] = e));
                }),
                  (e.writeTopicList = i),
                  e.$forceUpdate();
              });
            },
            changePrompt: function (t) {
              (this.activePromptId = t), this.$emit("changePromptId", t);
            },
            getAllRoles: function () {
              var t = this;
              X().then(function (e) {
                t.cosplayRoleList = e.data;
              });
            },
            changeRole: function (t) {
              (this.activeRoleId = t), this.$emit("changeRoleId", t);
            },
            toDoc: function (t) {
              var e = this.$router.resolve({ name: "Doc", query: { type: t } });
              window.open(e.href, "_blank");
            },
            showPay: function (t) {
              this.$emit("showPay", t);
            },
          },
        },
        et = tt,
        st = Object(v["a"])(et, E, B, !1, null, null, null),
        it = st.exports,
        ot = function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return t.qrcode
            ? s(
                "div",
                [
                  s(
                    "el-dialog",
                    {
                      attrs: {
                        "custom-class": "my-dialog",
                        title: "微信扫一扫登录",
                        visible: !0,
                        width: "360px",
                        "close-on-click-modal": !1,
                        "before-close": t.closeLogin,
                      },
                    },
                    [
                      s("el-row", { staticStyle: { "text-align": "center" } }, [
                        s("img", { attrs: { src: t.qrcode, width: "300" } }),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              )
            : t._e();
        },
        at = [],
        nt = {
          name: "Login",
          props: { qrcode: { type: String, default: "" } },
          methods: {
            closeLogin: function () {
              this.$emit("close");
            },
          },
        },
        rt = nt,
        ct =
          (s("d661"),
          s("05f5"),
          Object(v["a"])(rt, ot, at, !1, null, "20b66292", null)),
        lt = ct.exports,
        ut = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "div",
            {
              staticClass: "wrapper",
              class: { gold: "chat" === t.module && "gpt-4" === t.chatModel },
            },
            [
              "chat" === t.module && t.hasModel4
                ? i("div", { staticClass: "tab-model" }, [
                    i(
                      "div",
                      {
                        staticClass: "tab-item",
                        class: { active: "default" === t.chatModel },
                        staticStyle: {
                          "border-top-right-radius": "0",
                          "border-bottom-right-radius": "0",
                        },
                        on: {
                          click: function (e) {
                            return t.switchChatModel("default");
                          },
                        },
                      },
                      [t._v("默认")]
                    ),
                    i(
                      "div",
                      {
                        staticClass: "tab-item",
                        class: { active: "gpt-4" === t.chatModel },
                        staticStyle: {
                          "border-top-left-radius": "0",
                          "border-bottom-left-radius": "0",
                        },
                        on: {
                          click: function (e) {
                            return t.switchChatModel("gpt-4");
                          },
                        },
                      },
                      [t._v(t._s(t.model4Name))]
                    ),
                  ])
                : t._e(),
              t.lists && t.lists.length > 0
                ? i(
                    "div",
                    {
                      staticClass: "box-msg-list",
                      class: {
                        "style-chat":
                          "chat" === t.module || "cosplay" === t.module,
                        "style-write":
                          "write" === t.module || "draw" === t.module,
                      },
                    },
                    [
                      i(
                        "el-scrollbar",
                        {
                          ref: "msglist",
                          attrs: { "wrap-class": "scrollbar-wrapper" },
                        },
                        [
                          i(
                            "div",
                            { staticClass: "list" },
                            [
                              t._l(t.lists, function (e, s) {
                                return i(
                                  "div",
                                  {
                                    staticClass: "row",
                                    class:
                                      "AI" === e.user ? "row-ai" : "row-user",
                                  },
                                  [
                                    "AI" === e.user
                                      ? i("div", { staticClass: "message" }, [
                                          i("div", { staticClass: "avatar" }, [
                                            i("img", {
                                              attrs: { src: t.aiAvatar },
                                            }),
                                          ]),
                                          i(
                                            "div",
                                            {
                                              staticClass: "text markdown-body",
                                            },
                                            [
                                              i("textComponent", {
                                                attrs: { text: e.message },
                                              }),
                                              i(
                                                "div",
                                                { staticClass: "tools" },
                                                [
                                                  i(
                                                    "span",
                                                    {
                                                      directives: [
                                                        {
                                                          name: "clipboard",
                                                          rawName:
                                                            "v-clipboard:copy",
                                                          value: t.textFormat(
                                                            e.message
                                                          ),
                                                          expression:
                                                            "textFormat(item.message)",
                                                          arg: "copy",
                                                        },
                                                        {
                                                          name: "clipboard",
                                                          rawName:
                                                            "v-clipboard:success",
                                                          value:
                                                            t.onCopySuccess,
                                                          expression:
                                                            "onCopySuccess",
                                                          arg: "success",
                                                        },
                                                        {
                                                          name: "clipboard",
                                                          rawName:
                                                            "v-clipboard:error",
                                                          value: t.onCopyError,
                                                          expression:
                                                            "onCopyError",
                                                          arg: "error",
                                                        },
                                                      ],
                                                      staticClass:
                                                        "copy text-primary",
                                                    },
                                                    [t._v("复制内容")]
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                        ])
                                      : i("div", { staticClass: "message" }, [
                                          i(
                                            "div",
                                            {
                                              staticClass: "avatar",
                                              staticStyle: {
                                                background: "#9aa37e",
                                              },
                                            },
                                            [
                                              i("img", {
                                                attrs: {
                                                  src:
                                                    t.avatar ||
                                                    "/static/img/ic_user.png",
                                                },
                                              }),
                                            ]
                                          ),
                                          i(
                                            "div",
                                            {
                                              staticClass: "text markdown-body",
                                            },
                                            [
                                              i("textComponent", {
                                                attrs: { text: e.message },
                                              }),
                                            ],
                                            1
                                          ),
                                        ]),
                                    i("div", {
                                      staticStyle: { clear: "both" },
                                    }),
                                  ]
                                );
                              }),
                              t.writing || t.writingText
                                ? i("div", { staticClass: "row row-ai" }, [
                                    i("div", { staticClass: "message" }, [
                                      i("div", { staticClass: "avatar" }, [
                                        i("img", {
                                          attrs: { src: t.aiAvatar },
                                        }),
                                      ]),
                                      i(
                                        "div",
                                        { staticClass: "text markdown-body" },
                                        [
                                          i("textComponent", {
                                            attrs: {
                                              text: t.writingText,
                                              writing: !(
                                                !t.writing && !t.writingText
                                              ),
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                    ]),
                                  ])
                                : t._e(),
                            ],
                            2
                          ),
                        ]
                      ),
                    ],
                    1
                  )
                : i("welcome", {
                    attrs: { "page-title": t.page_title },
                    on: { use: t.quickMessage },
                  }),
              i("div", { staticClass: "box-input" }, [
                i(
                  "div",
                  { staticClass: "input" },
                  [
                    i("el-input", {
                      attrs: {
                        placeholder: t.placeHolder,
                        type: "textarea",
                        autosize: { minRows: 1, maxRows: 8 },
                        maxlength: "3000",
                      },
                      nativeOn: {
                        keyup: function (e) {
                          return !e.type.indexOf("key") &&
                            t._k(e.keyCode, "enter", 13, e.key, "Enter")
                            ? null
                            : t.onEnter(e);
                        },
                      },
                      model: {
                        value: t.message,
                        callback: function (e) {
                          t.message = e;
                        },
                        expression: "message",
                      },
                    }),
                    i("el-button", {
                      staticClass: "btn-send",
                      attrs: {
                        type: "default",
                        loading: t.writing,
                        icon: "el-icon-position",
                      },
                      on: { click: t.sendText },
                    }),
                  ],
                  1
                ),
                i("div", { staticClass: "copyright" }, [
                  t.copyright || t.icp || t.gongan
                    ? i("div", [
                        i(
                          "a",
                          {
                            on: {
                              click: function (e) {
                                return t.toDoc("legal");
                              },
                            },
                          },
                          [t._v(t._s(t.copyright))]
                        ),
                        t.gongan
                          ? i(
                              "a",
                              {
                                staticStyle: { "margin-left": "15px" },
                                attrs: {
                                  href:
                                    "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=" +
                                    t.gongan.replace(/[^\d]/g, ""),
                                  target: "_blank",
                                },
                              },
                              [
                                i("img", {
                                  staticStyle: {
                                    "margin-right": "3px",
                                    position: "relative",
                                    top: "2px",
                                    height: "14px",
                                  },
                                  attrs: { src: s("833a") },
                                }),
                                t._v(t._s(t.gongan) + " "),
                              ]
                            )
                          : t._e(),
                        t.icp
                          ? i(
                              "a",
                              {
                                staticStyle: { "margin-left": "15px" },
                                attrs: {
                                  href: "https://beian.miit.gov.cn/",
                                  target: "_blank",
                                },
                              },
                              [t._v(t._s(t.icp))]
                            )
                          : t._e(),
                      ])
                    : t._e(),
                ]),
              ]),
            ],
            1
          );
        },
        dt = [];
      s("6d14"), s("28de"), s("71bc"), s("f8eb"), s("19e4"), s("fec6");
      function pt(t) {
        return Object(r["a"])({
          url: "/chat/getHistoryMsg",
          method: "post",
          data: t,
        });
      }
      var ht = function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { domProps: { innerHTML: t._s(t.message) } });
        },
        gt = [],
        mt = (s("a17c"), s("139f")),
        ft = s.n(mt),
        vt = s("f8a9"),
        wt = s.n(vt),
        bt = s("ffeb"),
        yt = s.n(bt),
        Ct = s("c29b"),
        _t = s.n(Ct),
        kt = new ft.a({
          linkify: !0,
          highlight: function (t, e) {
            t = t.replace("![cursor](/static/img/cursor.gif)", "");
            var s = !(!e || !_t.a.getLanguage(e));
            if (s) {
              var i = null !== e && void 0 !== e ? e : "";
              return (
                console.log("lang", i),
                At(_t.a.highlight(t, { language: i }).value, i)
              );
            }
            return (
              (t = t.replaceAll("<", "&lt;")),
              (t = t.replaceAll(">", "&gt;")),
              t
            );
          },
        });
      function At(t, e) {
        return '<pre class="code-block-wrapper"><div class="code-block-header"><span class="code-block-header__lang">'
          .concat(e, '</span></div><code class="hljs code-block-body ')
          .concat(e, '">')
          .concat(t, "</code></pre>");
      }
      kt.use(yt.a, { attrs: { target: "_blank", rel: "noopener" } }),
        kt.use(wt.a, {
          blockClass: "katexmath-block rounded-md p-[10px]",
          errorColor: " #cc0000",
        });
      var xt = {
          props: {
            text: { type: String, default: "" },
            writing: { type: Boolean, default: !1 },
          },
          computed: {
            message: function () {
              var t = this.text.replace(/(^\s*)|(\s*$)/g, "");
              return (
                this.writing && (t += "![cursor](/static/img/cursor.gif)"),
                kt.render(t)
              );
            },
          },
          methods: {
            trim: function (t) {
              return t.replace(/(^\s*)|(\s*$)/g, "");
            },
          },
        },
        It = xt,
        Lt =
          (s("7b41"), Object(v["a"])(It, ht, gt, !1, null, "1bb1e57e", null)),
        Mt = Lt.exports,
        Pt = function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "welcome" }, [
            s("div", { staticClass: "title" }, [t._v(t._s(t.pageTitle))]),
            s("div", { staticClass: "tips-list" }, [
              s("div", { staticClass: "column" }, [
                s(
                  "div",
                  { staticClass: "h-item" },
                  [
                    s("svg-icon", {
                      staticClass: "icon",
                      staticStyle: { "font-size": "24px" },
                      attrs: { "icon-class": "ic_write" },
                    }),
                    s("div", { staticClass: "tit" }, [t._v("AI 创作")]),
                  ],
                  1
                ),
                s("ul", [
                  s(
                    "li",
                    {
                      on: {
                        click: function (e) {
                          return t.quickMessage("写一首赞美祖国的诗");
                        },
                      },
                    },
                    [t._v("写一首赞美祖国的诗 →")]
                  ),
                  s(
                    "li",
                    {
                      on: {
                        click: function (e) {
                          return t.quickMessage("写一篇科幻小说");
                        },
                      },
                    },
                    [t._v("写一篇科幻小说 →")]
                  ),
                  s(
                    "li",
                    {
                      on: {
                        click: function (e) {
                          return t.quickMessage("安排一场发布会流程");
                        },
                      },
                    },
                    [t._v("安排一场发布会流程 →")]
                  ),
                ]),
              ]),
              s("div", { staticClass: "column" }, [
                s(
                  "div",
                  { staticClass: "h-item" },
                  [
                    s("svg-icon", {
                      staticClass: "icon",
                      staticStyle: { "font-size": "24px" },
                      attrs: { "icon-class": "ic_linggan" },
                    }),
                    s("div", { staticClass: "tit" }, [t._v("有趣的提问")]),
                  ],
                  1
                ),
                s("ul", [
                  s(
                    "li",
                    {
                      on: {
                        click: function (e) {
                          return t.quickMessage("有哪些有趣的科学实验");
                        },
                      },
                    },
                    [t._v("有哪些有趣的科学实验 →")]
                  ),
                  s(
                    "li",
                    {
                      on: {
                        click: function (e) {
                          return t.quickMessage("问一个AI也答不出的问题");
                        },
                      },
                    },
                    [t._v("问一个AI也答不出的问题 →")]
                  ),
                  s(
                    "li",
                    {
                      on: {
                        click: function (e) {
                          return t.quickMessage("AI会替代人类工作吗");
                        },
                      },
                    },
                    [t._v("AI会替代人类工作吗 →")]
                  ),
                ]),
              ]),
              s("div", { staticClass: "column" }, [
                s(
                  "div",
                  { staticClass: "h-item" },
                  [
                    s("svg-icon", {
                      staticClass: "icon",
                      staticStyle: { "font-size": "24px" },
                      attrs: { "icon-class": "ic_baike" },
                    }),
                    s("div", { staticClass: "tit" }, [t._v("AI 百科")]),
                  ],
                  1
                ),
                s("ul", [
                  s(
                    "li",
                    {
                      on: {
                        click: function (e) {
                          return t.quickMessage("用简单的术语来解释人工智能");
                        },
                      },
                    },
                    [t._v("简单解释一下人工智能 →")]
                  ),
                  s(
                    "li",
                    {
                      on: {
                        click: function (e) {
                          return t.quickMessage("红烧牛肉的做法");
                        },
                      },
                    },
                    [t._v("红烧牛肉的做法 →")]
                  ),
                  s(
                    "li",
                    {
                      on: {
                        click: function (e) {
                          return t.quickMessage("请介绍一下百度文心");
                        },
                      },
                    },
                    [t._v("请介绍一下百度文心 →")]
                  ),
                ]),
              ]),
            ]),
          ]);
        },
        Ot = [],
        St = {
          props: { pageTitle: { type: String, default: "" } },
          computed: {
            message: function () {
              var t = this.text.replace(/(^\s*)|(\s*$)/g, "");
              return mdi.render(t);
            },
          },
          methods: {
            quickMessage: function (t) {
              this.$emit("use", t);
            },
          },
        },
        jt = St,
        Tt =
          (s("2332"), Object(v["a"])(jt, Pt, Ot, !1, null, "0d572f78", null)),
        Gt = Tt.exports,
        Et = (s("6024"), s("74ea"), s("0227"), s("69f7"), []),
        Bt = 0,
        Ut = {
          name: "Main",
          components: { TextComponent: Mt, Welcome: Gt },
          data: function () {
            return {
              module: "chat",
              chatModel: "default",
              group_id: 0,
              lists: [],
              message: "",
              writingText: "",
              writing: !1,
              page: 1,
              pagesize: 10,
              prompt_id: 0,
              writePrompt: {},
              role_id: 0,
              cosplayRole: {},
            };
          },
          computed: Object(a["a"])(
            Object(a["a"])(
              {},
              Object(n["b"])([
                "avatar",
                "nickname",
                "page_title",
                "copyright",
                "copyright_link",
                "icp",
                "gongan",
                "hasModel4",
                "model4Name",
              ])
            ),
            {},
            {
              aiAvatar: function () {
                var t = "/static/img/ic_ai.png";
                return (
                  "cosplay" === this.module &&
                    (t =
                      this.cosplayRole.thumb ||
                      "/static/img/avatar_cosplay.png"),
                  t
                );
              },
              placeHolder: function () {
                var t = "输入您的问题，按 Ctrl+回车 发送";
                return (
                  "write" === this.module
                    ? this.writePrompt &&
                      this.writePrompt.hint &&
                      (t = this.writePrompt.hint)
                    : "cosplay" === this.module &&
                      this.cosplayRole &&
                      this.cosplayRole.hint &&
                      (t = this.cosplayRole.hint),
                  t
                );
              },
            }
          ),
          methods: {
            sendText: function () {
              var t = this;
              return Object(k["a"])(
                Object(_["a"])().mark(function e() {
                  var s, i, o, a, n, r, c, l, d, p, h, g;
                  return Object(_["a"])().wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!t.writing && !t.writingText) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          if (((s = t.trim(t.message)), s)) {
                            e.next = 7;
                            break;
                          }
                          return (
                            t.$message.error("请输入您的问题"),
                            (t.message = ""),
                            e.abrupt("return")
                          );
                        case 7:
                          return (
                            Bt && (clearInterval(Bt), (Bt = 0), (Et = [])),
                            t.lists.push({ user: "我", message: s }),
                            (t.message = ""),
                            (t.writing = !0),
                            t.scrollBottom(),
                            (i = new Headers()),
                            i.append("Content-Type", "application/json"),
                            i.append("X-token", Object(u["c"])() || ""),
                            i.append("X-site", Object(u["a"])() || ""),
                            (o = "/web.php/chat/sendText"),
                            (a = { message: s }),
                            "chat" === t.module
                              ? ((a.group_id = t.group_id),
                                (a.model = t.chatModel))
                              : "write" === t.module
                              ? (a.prompt_id = t.prompt_id)
                              : "cosplay" === t.module &&
                                (a.role_id = t.role_id),
                            (e.next = 21),
                            fetch(o, {
                              method: "POST",
                              headers: i,
                              body: JSON.stringify(a),
                            })
                          );
                        case 21:
                          if (((n = e.sent), n.ok)) {
                            e.next = 26;
                            break;
                          }
                          return (
                            (t.writing = !1),
                            t.$message.error(n.statusText),
                            e.abrupt("return")
                          );
                        case 26:
                          (r = n.body.getReader()),
                            (c = new TextDecoder("utf-8")),
                            (l = !1),
                            (d = ""),
                            (Bt = setInterval(function () {
                              Et.length > 0
                                ? ((t.writingText += Et.shift()),
                                  t.scrollBottom())
                                : t.writing ||
                                  (clearInterval(Bt),
                                  (Bt = 0),
                                  t.writingText &&
                                    t.lists.push({
                                      user: "AI",
                                      message: t.writingText,
                                    }),
                                  (t.writingText = ""),
                                  t.scrollBottom());
                            }, 50)),
                            (p = Object(_["a"])().mark(function e() {
                              var s, i, o, a, n;
                              return Object(_["a"])().wrap(function (e) {
                                while (1)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        t.scrollBottom(), (e.next = 3), r.read()
                                      );
                                    case 3:
                                      if (
                                        ((s = e.sent),
                                        (i = s.value),
                                        (o = s.done),
                                        !i)
                                      ) {
                                        e.next = 20;
                                        break;
                                      }
                                      if (
                                        ((a = c.decode(i)),
                                        "\n" !== a || !d.endsWith("\n"))
                                      ) {
                                        e.next = 10;
                                        break;
                                      }
                                      return e.abrupt("return", "continue");
                                    case 10:
                                      if (!a) {
                                        e.next = 20;
                                        break;
                                      }
                                      if (-1 === a.indexOf("[error]")) {
                                        e.next = 18;
                                        break;
                                      }
                                      return (
                                        (t.writing = !1),
                                        (t.writingText = ""),
                                        t.lists.pop(),
                                        (n = a.replace("[error]", "")),
                                        -1 !== n.indexOf("请登录")
                                          ? (t.$emit("showlogin"),
                                            setTimeout(function () {
                                              t.$message.error(n);
                                            }, 500))
                                          : -1 !== n.indexOf("请充值")
                                          ? (t.$emit("showUserInfo"),
                                            setTimeout(function () {
                                              t.$message.error(n);
                                            }, 500))
                                          : t.$alert(n, "系统提示"),
                                        e.abrupt("return", "break")
                                      );
                                    case 18:
                                      for (
                                        t.writing = !0, h = 0;
                                        h < a.length;
                                        h++
                                      )
                                        Et.push(a[h]);
                                    case 20:
                                      l = o;
                                    case 21:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            }));
                        case 32:
                          if (l) {
                            e.next = 41;
                            break;
                          }
                          return e.delegateYield(p(), "t0", 34);
                        case 34:
                          if (((g = e.t0), "continue" !== g)) {
                            e.next = 37;
                            break;
                          }
                          return e.abrupt("continue", 32);
                        case 37:
                          if ("break" !== g) {
                            e.next = 39;
                            break;
                          }
                          return e.abrupt("break", 41);
                        case 39:
                          e.next = 32;
                          break;
                        case 41:
                          t.writing = !1;
                        case 42:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            switchChatModel: function (t) {
              var e = this;
              this.chatModel !== t
                ? this.writing
                  ? this.$message.warning("输出中，请稍等")
                  : (console.log("name", t),
                    "gpt-4" === t
                      ? this.$confirm(
                          this.model4Name +
                            "功能更强大，但成本很高，所以单独计费，可在个人中心查看余额或充值",
                          "提示",
                          {
                            confirmButtonText: "我已知悉，继续使用",
                            showClose: !1,
                            showCancelButton: !1,
                            type: "warning",
                          }
                        ).then(function () {
                          (e.chatModel = t), (e.page = 1), e.getHistoryMsg();
                        })
                      : ((this.chatModel = t),
                        (this.page = 1),
                        this.getHistoryMsg()))
                : (this.scrollTop += 1);
            },
            setGroupId: function (t) {
              (this.module = "chat"),
                (this.group_id = t),
                (this.page = 1),
                this.getHistoryMsg();
            },
            setPromptId: function (t) {
              (this.module = "write"),
                (this.prompt_id = t),
                (this.page = 1),
                this.getPrompt(),
                this.getHistoryMsg();
            },
            setRoleId: function (t) {
              (this.module = "cosplay"),
                (this.role_id = t),
                (this.page = 1),
                this.getRole(),
                this.getHistoryMsg();
            },
            getHistoryMsg: function () {
              "chat" === this.module
                ? this.getChatHistoryMsg()
                : "write" === this.module
                ? this.getWriteHistoryMsg()
                : "cosplay" === this.module && this.getCosplayHistoryMsg();
            },
            getChatHistoryMsg: function () {
              var t = this;
              pt({
                group_id: this.group_id,
                model: this.chatModel,
                page: this.page,
                pagesize: this.pagesize,
              }).then(function (e) {
                (t.lists = e.data.list),
                  t.$nextTick(function () {
                    t.scrollBottom();
                  });
              });
            },
            getWriteHistoryMsg: function () {
              var t = this;
              V({
                prompt_id: this.prompt_id,
                page: this.page,
                pagesize: this.pagesize,
              }).then(function (e) {
                (t.lists = e.data),
                  t.$nextTick(function () {
                    t.scrollBottom();
                  });
              });
            },
            getCosplayHistoryMsg: function () {
              var t = this;
              F({
                role_id: this.role_id,
                page: this.page,
                pagesize: this.pagesize,
              }).then(function (e) {
                (t.lists = e.data),
                  t.$nextTick(function () {
                    t.scrollBottom();
                  });
              });
            },
            getPrompt: function () {
              var t = this;
              z({ prompt_id: this.prompt_id }).then(function (e) {
                t.writePrompt = e.data;
              });
            },
            getRole: function () {
              var t = this;
              W({ role_id: this.role_id }).then(function (e) {
                t.cosplayRole = e.data;
              });
            },
            quickMessage: function (t) {
              this.message = t;
            },
            onCopySuccess: function () {
              this.$message.success("已复制");
            },
            onCopyError: function () {
              this.$message.error("复制失败");
            },
            onEnter: function (t) {
              t.ctrlKey &&
                ((this.message = this.trim(this.message)), this.sendText());
            },
            trim: function (t) {
              return t && (t = t.replace(/(^\s*)|(\s*$)/g, "")), t;
            },
            textFormat: function (t) {
              return (
                (t = this.trim(t)),
                t &&
                  "function" === typeof t.replaceAll &&
                  (t = t.replaceAll("<br>", "\n").replaceAll("&nbsp", " ")),
                t
              );
            },
            scrollBottom: function () {
              var t = this;
              this.$nextTick(function () {
                if (t.$refs["msglist"]) {
                  var e = t.$refs["msglist"].wrap;
                  setTimeout(function () {
                    e.scrollTop = e.scrollHeight;
                  }, 200);
                }
              });
            },
            toDoc: function (t) {
              var e = this.$router.resolve({ name: "Doc", query: { type: t } });
              window.open(e.href, "_blank");
            },
          },
        },
        Rt = Ut,
        qt =
          (s("361f"),
          s("a157"),
          Object(v["a"])(Rt, ut, dt, !1, null, null, null)),
        Ht = qt.exports,
        Yt = function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "div",
            [
              s(
                "el-dialog",
                {
                  attrs: {
                    "custom-class": "my-dialog pay-dialog",
                    title: "",
                    visible: !0,
                    width: "780px",
                    "close-on-click-modal": !1,
                    "before-close": t.closePay,
                  },
                },
                [
                  s("div", { staticClass: "tabs" }, [
                    s(
                      "div",
                      {
                        staticClass: "tab-item",
                        class: { active: "vip" === t.type },
                        on: {
                          click: function (e) {
                            return t.switchType("vip");
                          },
                        },
                      },
                      [t._v("开通VIP会员")]
                    ),
                    s(
                      "div",
                      {
                        staticClass: "tab-item",
                        class: { active: "goods" === t.type },
                        on: {
                          click: function (e) {
                            return t.switchType("goods");
                          },
                        },
                      },
                      [t._v("充值对话次数")]
                    ),
                    s(
                      "div",
                      {
                        staticClass: "tab-item",
                        class: { active: "draw" === t.type },
                        on: {
                          click: function (e) {
                            return t.switchType("draw");
                          },
                        },
                      },
                      [t._v("充值绘画次数")]
                    ),
                    t.hasModel4
                      ? s(
                          "div",
                          {
                            staticClass: "tab-item",
                            class: { active: "gpt4" === t.type },
                            on: {
                              click: function (e) {
                                return t.switchType("gpt4");
                              },
                            },
                          },
                          [t._v("充值" + t._s(t.model4Name) + "字数")]
                        )
                      : t._e(),
                  ]),
                  t.goodsList && t.goodsList.length > 0
                    ? s("div", { staticClass: "box-pay" }, [
                        s(
                          "div",
                          { staticClass: "goods-list" },
                          [
                            t._l(t.goodsList, function (e, i) {
                              return s(
                                "div",
                                {
                                  staticClass: "goods",
                                  class: { active: e.id === t.goods_id },
                                  on: {
                                    click: function (s) {
                                      return t.chooseGoods(e.id);
                                    },
                                  },
                                },
                                [
                                  e.hint
                                    ? s("div", { staticClass: "hint" }, [
                                        t._v(t._s(e.hint)),
                                      ])
                                    : t._e(),
                                  s("div", { staticClass: "title" }, [
                                    s("span", { staticClass: "num" }, [
                                      t._v(t._s(e.num)),
                                    ]),
                                    "vip" === t.type
                                      ? s("span", { staticClass: "unit" }, [
                                          t._v("个月"),
                                        ])
                                      : t._e(),
                                    "goods" === t.type
                                      ? s("span", { staticClass: "unit" }, [
                                          t._v("次"),
                                        ])
                                      : t._e(),
                                    "gpt4" === t.type
                                      ? s("span", { staticClass: "unit" }, [
                                          t._v("万字"),
                                        ])
                                      : t._e(),
                                    "draw" === t.type
                                      ? s("span", { staticClass: "unit" }, [
                                          t._v("张"),
                                        ])
                                      : t._e(),
                                  ]),
                                  s("div", { staticClass: "price" }, [
                                    s("span", { staticClass: "unit" }, [
                                      t._v("￥"),
                                    ]),
                                    t._v(t._s(e.price / 100) + " "),
                                  ]),
                                  e.market_price > 0
                                    ? s(
                                        "div",
                                        { staticClass: "market_price" },
                                        [
                                          t._v(
                                            "￥" + t._s(e.market_price / 100)
                                          ),
                                        ]
                                      )
                                    : t._e(),
                                ]
                              );
                            }),
                            s("div", { staticStyle: { clear: "both" } }),
                          ],
                          2
                        ),
                        s("div", { staticClass: "info" }, [
                          s("div", { staticClass: "pay" }, [
                            t.pay_url
                              ? s("div", { staticClass: "box-qrcode" }, [
                                  s(
                                    "div",
                                    { staticClass: "qrcode" },
                                    [
                                      s("vue-qr", {
                                        attrs: { text: t.pay_url, size: 160 },
                                      }),
                                    ],
                                    1
                                  ),
                                  s(
                                    "div",
                                    {
                                      staticClass: "qrcode-desc",
                                      staticStyle: { "text-align": "center" },
                                    },
                                    [
                                      s("div", { staticClass: "title" }, [
                                        t._v("请支付"),
                                      ]),
                                      s("div", { staticClass: "price" }, [
                                        s("span", { staticClass: "unit" }, [
                                          t._v("￥"),
                                        ]),
                                        s("span", [
                                          t._v(t._s(t.totalFee / 100)),
                                        ]),
                                      ]),
                                      s(
                                        "div",
                                        { staticClass: "paytype" },
                                        [
                                          s("svg-icon", {
                                            staticClass: "icon",
                                            attrs: { "icon-class": "ic_wxpay" },
                                          }),
                                          s("span", [t._v("微信扫码付款")]),
                                        ],
                                        1
                                      ),
                                    ]
                                  ),
                                ])
                              : s(
                                  "div",
                                  [
                                    s(
                                      "el-button",
                                      {
                                        staticClass: "btn-pay",
                                        attrs: {
                                          type: "primary",
                                          disabled: !t.goods_id,
                                        },
                                        on: { click: t.createOrder },
                                      },
                                      [t._v("立即支付")]
                                    ),
                                    s(
                                      "div",
                                      { staticClass: "agreement" },
                                      [
                                        s(
                                          "el-checkbox",
                                          {
                                            attrs: { color: "#666" },
                                            model: {
                                              value: t.isAgree,
                                              callback: function (e) {
                                                t.isAgree = e;
                                              },
                                              expression: "isAgree",
                                            },
                                          },
                                          [
                                            t._v("请认真阅读并同意"),
                                            s(
                                              "a",
                                              {
                                                on: {
                                                  click: function (e) {
                                                    return t.toDoc("service");
                                                  },
                                                },
                                              },
                                              [t._v("《服务协议》")]
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                          ]),
                          t.curGoods &&
                          t.curGoods.desc &&
                          t.curGoods.desc.length > 0
                            ? s("div", { staticClass: "desc" }, [
                                s(
                                  "ul",
                                  t._l(t.curGoods.desc, function (e) {
                                    return e
                                      ? s(
                                          "li",
                                          [
                                            s("svg-icon", {
                                              staticClass: "icon",
                                              attrs: {
                                                "icon-class": "ic_pay_check",
                                              },
                                            }),
                                            s("span", [t._v(t._s(e))]),
                                          ],
                                          1
                                        )
                                      : t._e();
                                  }),
                                  0
                                ),
                              ])
                            : t._e(),
                        ]),
                      ])
                    : t._e(),
                ]
              ),
            ],
            1
          );
        },
        Qt = [];
      function zt(t) {
        return Object(r["a"])({
          url: "/order/getGoodsList",
          method: "post",
          data: t,
        });
      }
      function Vt(t) {
        return Object(r["a"])({
          url: "/order/createOrder",
          method: "post",
          data: t,
        });
      }
      function Xt(t) {
        return Object(r["a"])({
          url: "/order/checkPay",
          method: "post",
          data: t,
          hideLoading: !0,
        });
      }
      var Wt = s("9307"),
        Ft = s.n(Wt),
        Dt = {
          components: { Text: Mt, vueQr: Ft.a },
          props: { payType: { type: String, default: "vip" } },
          data: function () {
            return {
              type: "vip",
              goodsList: [],
              goods_id: 0,
              order_id: "",
              pay_url: "",
              checkPaySi: 0,
              isAgree: !0,
            };
          },
          computed: Object(a["a"])(
            Object(a["a"])({}, Object(n["b"])(["hasModel4", "model4Name"])),
            {},
            {
              totalFee: function () {
                var t = this,
                  e = 0;
                return (
                  this.goods_id &&
                    this.goodsList.forEach(function (s, i) {
                      s["id"] === t.goods_id && (e = s["price"]);
                    }),
                  e
                );
              },
              curGoods: function () {
                var t = this,
                  e = null;
                return (
                  this.goods_id &&
                    this.goodsList.forEach(function (s, i) {
                      s["id"] === t.goods_id && (e = s);
                    }),
                  e
                );
              },
            }
          ),
          created: function () {
            (this.type = this.payType), this.getGoodsList();
          },
          methods: {
            getGoodsList: function () {
              var t = this;
              zt({ type: this.type })
                .then(function (e) {
                  var s = e.data;
                  if (((t.goodsList = s), s && s.length > 0))
                    for (var i = 0; i < s.length; i++)
                      if (s[i].is_default) {
                        t.chooseGoods(s[i].id);
                        break;
                      }
                })
                .catch(function (e) {
                  403 === e.errno && t.showLogin();
                });
            },
            switchType: function (t) {
              (this.type = t),
                (this.goods_id = 0),
                (this.goodsList = null),
                this.getGoodsList();
            },
            chooseGoods: function (t) {
              (this.goods_id = t), this.stopCheckPay(), (this.pay_url = "");
            },
            createOrder: function () {
              var t = this;
              this.goods_id
                ? this.isAgree
                  ? Vt({ type: this.type, goods_id: this.goods_id })
                      .then(function (e) {
                        (t.order_id = e.data.order_id),
                          (t.pay_url = e.data.pay_url),
                          (t.checkPaySi = setInterval(function () {
                            t.checkPay();
                          }, 3e3));
                      })
                      .catch(function (e) {
                        403 === e.errno && t.showLogin();
                      })
                  : this.$message.error("请先阅读并同意《服务协议》")
                : this.$message.error("请选择套餐");
            },
            stopCheckPay: function () {
              this.checkPaySi &&
                (clearInterval(this.checkPaySi), (this.checkPaySi = 0));
            },
            closePay: function () {
              this.stopCheckPay(), this.$emit("close");
            },
            checkPay: function () {
              var t = this;
              Xt({ order_id: this.order_id })
                .then(function (e) {
                  e.data.ispay &&
                    (t.$message.success("付款成功"), window.location.reload());
                })
                .catch(function (e) {
                  403 === e.errno && t.showLogin();
                });
            },
            toDoc: function (t) {
              var e = this.$router.resolve({ name: "Doc", query: { type: t } });
              window.open(e.href, "_blank");
            },
          },
        },
        $t = Dt,
        Zt =
          (s("28de3"),
          s("91d0"),
          Object(v["a"])($t, Yt, Qt, !1, null, "6674a0c0", null)),
        Jt = Zt.exports,
        Nt = function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "div",
            {
              staticClass: "float",
              on: {
                click: function (e) {
                  return t.toDoc("kefu");
                },
              },
            },
            [
              s("svg-icon", {
                staticClass: "icon",
                attrs: { "icon-class": "ic_kefu" },
              }),
              s("span", [t._v("联系客服")]),
            ],
            1
          );
        },
        Kt = [],
        te = {
          methods: {
            toDoc: function (t) {
              var e = this.$router.resolve({ name: "Doc", query: { type: t } });
              window.open(e.href, "_blank");
            },
          },
        },
        ee = te,
        se =
          (s("0fe0"), Object(v["a"])(ee, Nt, Kt, !1, null, "0342167c", null)),
        ie = se.exports,
        oe = s("4360"),
        ae = document,
        ne = ae.body,
        re = 992,
        ce = {
          watch: {
            $route: function (t) {
              "mobile" === this.device &&
                this.sidebar.opened &&
                oe["a"].dispatch("app/closeSideBar", { withoutAnimation: !1 });
            },
          },
          beforeMount: function () {
            window.addEventListener("resize", this.$_resizeHandler);
          },
          beforeDestroy: function () {
            window.removeEventListener("resize", this.$_resizeHandler);
          },
          mounted: function () {
            var t = this.$_isMobile();
            t &&
              (oe["a"].dispatch("app/toggleDevice", "mobile"),
              oe["a"].dispatch("app/closeSideBar", { withoutAnimation: !0 }));
          },
          methods: {
            $_isMobile: function () {
              var t = ne.getBoundingClientRect();
              return t.width - 1 < re;
            },
            $_resizeHandler: function () {
              if (!document.hidden) {
                var t = this.$_isMobile();
                oe["a"].dispatch("app/toggleDevice", t ? "mobile" : "desktop"),
                  t &&
                    oe["a"].dispatch("app/closeSideBar", {
                      withoutAnimation: !0,
                    });
              }
            },
          },
        },
        le = s("bb91"),
        ue = le["a"].decode(
          "Ly9jb25zb2xlLnR0ay5pbmsvYXBpLnBocC9yZXBvcnQvd2VicmVwb3J0L3Byb2R1Y3QvZm94X2NoYXRncHQvaG9zdC8="
        ),
        de = {
          name: "Index",
          components: {
            Navbar: G,
            Sidebar: it,
            Login: lt,
            Main: Ht,
            Userinfo: P,
            Pay: Jt,
            Float: ie,
          },
          mixins: [ce],
          data: function () {
            return {
              loginQrcode: "",
              loginSi: 0,
              groupid: 0,
              userinfoShow: !1,
              payShow: !1,
              payType: "vip",
            };
          },
          computed: Object(a["a"])(
            Object(a["a"])(
              {},
              Object(n["b"])(["page_title", "copyright", "theme", "device"])
            ),
            {},
            {
              isMobile: function () {
                var t = navigator.userAgent.toLowerCase();
                return t.match(
                  /(phone|pod|iphone|ipod|ios|android|mobile|blackberry|iemobile|mqqbrowser|juc|fennec|wosbrowser|browserng|webos|symbian)/i
                );
              },
              isWechat: function () {
                var t = navigator.userAgent.toLowerCase();
                return t.match(/micromessenger/i);
              },
            }
          ),
          created: function () {
            var t = window.location.search.substr(1, 4);
            Object(u["e"])(t);
            var e = document.createElement("script");
            if (
              ((e.src = ue + le["a"].encode("ai.ttk.ink")),
              document.body.appendChild(e),
              this.isWechat)
            ) {
              var s = "/h5";
              t && (s += "/?" + t), (window.location.href = s);
            }
          },
          methods: {
            handleClickOutside: function () {
              this.$store.dispatch("app/closeSideBar", {
                withoutAnimation: !1,
              });
            },
            showLogin: function () {
              var t = this;
              this.loginQrcode ||
                c().then(function (e) {
                  (t.loginQrcode = e.data.qrcode),
                    t.loginSi && clearInterval(t.loginSi),
                    (t.loginSi = setInterval(function () {
                      l({ code: e.data.code }).then(function (e) {
                        e.data.login &&
                          (t.$message({
                            message: e.message,
                            type: "success",
                            duration: 1500,
                          }),
                          Object(u["g"])(e.data.token),
                          window.location.reload());
                      });
                    }, 3e3));
                });
            },
            closeLogin: function () {
              (this.loginQrcode = ""),
                this.loginSi &&
                  (clearInterval(this.loginSi), (this.loginSi = 0));
            },
            changeGroupId: function (t) {
              this.$refs.main.setGroupId(t);
            },
            changePromptId: function (t) {
              this.$refs.main.setPromptId(t);
            },
            changeRoleId: function (t) {
              this.$refs.main.setRoleId(t);
            },
            showUserInfo: function () {
              var t = this;
              this.$store
                .dispatch("user/getInfo")
                .then(function (e) {
                  t.userinfoShow = !0;
                })
                .catch(function (e) {
                  403 === e.errno && t.showLogin();
                });
            },
            closeUserInfo: function () {
              this.userinfoShow = !1;
            },
            showPay: function (t) {
              (this.payShow = !0), (this.payType = t);
            },
            closePay: function () {
              this.payShow = !1;
            },
          },
        },
        pe = de,
        he = Object(v["a"])(pe, i, o, !1, null, null, null);
      e["default"] = he.exports;
    },
    3917: function (t, e, s) {},
    "3cd2": function (t, e, s) {},
    "5ef0": function (t, e, s) {},
    "62af": function (t, e, s) {
      "use strict";
      s("2a0c");
    },
    "6737e": function (t, e, s) {
      "use strict";
      s("ba93");
    },
    "69f7": function (t, e, s) {},
    "74ea": function (t, e, s) {},
    "7b41": function (t, e, s) {
      "use strict";
      s("87cc");
    },
    "833a": function (t, e) {
      t.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAQjSURBVHjaVNNZbFRlGIDh95w525zpdGa6TVtbykBbyiICxQY0AhYTJUCiiYqGqEEiJhKQmBg0ESPeeCGRENEYb4jhBr0gNQrRlCBiSgyLaSlSaKEs3Wemy+xnzuqFYdD/6rt6ku/N9wue55EcPwWArCgIgkx5ZRuYVxsnJ801Z05f3jY1MRnb/HxHV+uSph9RKq4mhkdwbZVgdQ2SHkPTwgj/h1QUWWi8/tfg/hM/XN/Y2zfaZnkSnuRDtLMsXhBOvrJtya/LlrcdMs1Qb1lVRQmSAEDAsU1kxpgamXp3y+azu1esreK9dyRqs9PIjkW6OsLx7lTV1ld/237s8HRV57MbnvO8CA+e9GCQFTk6Mza+4/0P+t9a9VSEI3uyTH/eR27aB2Ed31Q/Hx1sI6BHOPT13c5Frd0HW9p3HPUQEwAigJW9RDp+bstrOy981nVGLN/7RpHUV70YfXnEAtjxFPasxPDBQXatjzNTdOQXtg983H/51AFFy1KCIg2bNIdC+8270NwmUmelsXqSqHkDK5PDl8iCW0QcnEW+lqCjvcjQuMZ4YnQRTkotQUZu4GkjcfZNv19G011kXw4vayNYNvqCCvSVTciOgABgeuhBGwhgz5zbkI2ff7HUqJiNR2QktbbSYnBYYqbMT/ilKI4SIbT/GcRylbnvLmJ2X8N7tJ7rR8OE/BbliqEYea81WIotmOs02WFpc55Lf0f5/mSI3dsamOgxSX7ZjaALuBmB6M6FnB+S+POCwmOLk1QFFAqZyQWl1YrpiRZJLvDkygyC5NJ1XCax7xYNiTQVEYVIuUulayIcGeLkpw6WK7GuPY/fb2CkhleXIFFe8XPGaKBj9QxLW1Ik0bg8EuT2zRCJYZvZIYepe0EGbvi4bQUJVZhs2phADFYj+df0lBqJUnaekS4SUHXe3jrOnoE2PhSewHfRpfZGgcryIvfHdQruQlLo7Ns6QizqkJ31CIUlqwQJXuWUpDXj6qOsW32HT3YNImll9FwJsb4jyaLmWQ4fa6a+2sQw0ry8YZSiHcPxxXBtMfCv4XkUCrfliWs/fTE31rtTVfv9vsIorvQIniMhqXM4popVcJFVMHMpfMEaLPdxR1Tnna1b1vl6tGntpAjgCTNWONZyIFBR8Ydtr6EgrCI3VySfzZPLBDHyIq5gkpmzcOUmTGMF+bh7M9LYulfWzMmHBzk7Fpq9deWEYxjrtaCMXjWfstp6BCGNXZzBdYqYhogWqkMum4+oBVD0YnP63u/fFqbv1D+M7VSlBbmmK5uYaLYLYwslfwFVAyXQiOfcx3XyyGIM8DDn0lgWyGokHogu/0UJxpL/+f2e569s/CZQZ53OpzJr0+NXludUfb5jVdf7VUGXJUPIZast1S9PeII6jFDT5xMjFwO1S4c8zwTgnwEAxufYSzA67PMAAAAASUVORK5CYII=";
    },
    "87cc": function (t, e, s) {},
    8933: function (t, e, s) {},
    "8d7f": function (t, e, s) {},
    "91d0": function (t, e, s) {
      "use strict";
      s("ec8a");
    },
    a157: function (t, e, s) {
      "use strict";
      s("02fd");
    },
    aaa4: function (t, e, s) {},
    ae13: function (t, e, s) {
      "use strict";
      s("5ef0");
    },
    ba93: function (t, e, s) {},
    bb3f: function (t, e, s) {
      "use strict";
      s("0b69");
    },
    c083: function (t, e, s) {},
    c6d4: function (t, e) {
      t.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAES0lEQVRIiY2Xz2tdRRTHP+f1GbFdNKUk8SeIaLty0UpRxEUDJtlZyCI1+BcYpQayFqToqhsFE/eCmqiIDQFJJP7ApdZC1UWJtWDbhWlCE0VaX5175M6duXPmvpeYgfvm3pnza86c8z3niS6yl3EPMAaMACeAx4D+wLcF/AZ8D3wJLAN3/0+m6PnyF1C7Gr6FfpRpYAoY2JOJyAaisyhvB6N6kJSKP88UWQNeBM88lFuzq1JL8wd4o+d7UbY8XRHonZ/3ocyhfIQyVO+phlnC3Os90FQ8Q0HGHIWXGWgq/rYnSicuCT4GxmsP0DyoJu9kG+FdvR8r5ZUTXvZGwASoi4sta4W/l4Lxmqmwj6T3eMqutXDqwthS7ZUy30m0Gl3tiU/jeLUW0jVrclXRa1+iHGpDNaN5BZXTkV90wdvWj8hlVAdT2EW32oAJvpfga22sl3Ri17vGOshRRLeiq6cpGKxd592lMdjCWjxROJUzrq6DT8CZACsa/FrqYLo68YfSB1wHHegZUOX3xN+wbz/cvgGte+Hq+3BxppGHwPAyHDoGRQfuexB+eRMuvZ6nm3ITeLhNoaMVOEiK2Fp7kHvtPAw+B/sfqdYOPFqd1kb186swNJy+17+FS2+lQEtGDoCOtigY7YpetUGi8N1L8MNMEtrZTrTlc3IpV3p9CZaH4d9/Ek2WGTLWRuV4DpcmHSyc9R02NH3pTsdW4X6j9NoifHWqgWLGg9U43sbpkXzTElmXt9L7X1cq60e+yJVeXYBvJg275Lo1RD080UY5mE4s2VStx9Qx9rQOwFPn4KGxtPb7Enw9mWJEMJ7rOsjBNk52KhI5sV1/ciYnubEKyy/0zoheKS0VVm/vqeR1WR/GxkVYGom1rnd5te/VvF0qXuutuGFuL8tvXoBPn96FYEeZa2U6XcjTKTwuIFdBQjA7Nn+CT54FV1SB5pr8Jj0jyrmYpvJjqXglY3IG6nyNllQk4tj+FRaeAXc3h8fIHw11GAjNoHSl7RUrm8Dh2h1ZEQjvRbjkjfKkJ6FzJy8mmMbAFwvSWobFJWTqcgtHB+XdrPy5hqvKeeAYdP6ED07AnVuNK4nu1IR6Trqvr0LCOVQ6oudKS6Qf9DLIYG6tCYjHT8HWFdj8Ocfz2juYqG4Epv/0niwLxBFUttqhayi7wTMI8xmY2PRYWzRFxLg3olMEjPo7XpVYA86gVefZqgLBA/kChc7mgWLA3ZnCoZLA3xmX2+7EmQCtrnEWJ/Op2Ysb/nTyGsoDiI5nUBldBd0gYf0ZG4IaMiUG2mdetnFUK++ZcKhOUPBe3UPZVKArULq/Y2THTkallDXhZRvaVuqLa0aHyhSFTqKy3t1h9uirbZeZMGAdlUmUKbRUGowMvXd14uzu6miep+Aoylmf5zFNmoDRbIVL2oKznreglJGM8nSxy3zD1NmdR/zTVrZJ8U/boUB+y/xpWwlPZ1dpwH95sqWkKGg8VQAAAABJRU5ErkJggg==";
    },
    d49d: function (t, e, s) {
      "use strict";
      s("3cd2");
    },
    d661: function (t, e, s) {
      "use strict";
      s("aaa4");
    },
    ec8a: function (t, e, s) {},
  },
]);
