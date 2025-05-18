(() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // assets/src/admin/js/WooWizard/Utilities/Callbacks.js
  var { Libs } = window.getGenie.Components.Common;
  var sidebar = wp.data.select("getgenie").sidebar();
  var showAlert = () => {
    Libs.ErrorModal({
      title: sidebar.__("Insertion Failed!", "getgenie"),
      content: sidebar.__("No insertion place found!", "getgenie")
    });
  };
  var Callbacks = {
    insert: {
      wooLongDesc: (value) => {
        let textArea = document.querySelector("#wp-content-editor-container .wp-editor-area");
        if (window.getComputedStyle(textArea).display !== "none") {
          textArea.value = value;
          return;
        }
        const iLongDesc = document.querySelector(".woocommerce-feature-enabled-activity-panels #content_ifr");
        const iLongDescWindow = iLongDesc.contentWindow;
        const iLongDescDoc = iLongDescWindow.document;
        const wooProductLongDesc = iLongDescDoc.querySelector("body p");
        if (!wooProductLongDesc) {
          let newPara = iLongDescDoc.createElement("p");
          newPara.innerText = value;
          iLongDescDoc.querySelector("body").appendChild(newPara);
          return;
        }
        wooProductLongDesc.innerText = value;
      },
      wooShortDesc: (value) => {
        let textArea = document.querySelector("#wp-excerpt-editor-container .wp-editor-area");
        if (window.getComputedStyle(textArea).display !== "none") {
          textArea.value = value;
          return;
        }
        const iShortDesc = document.querySelector(".woocommerce-feature-enabled-activity-panels #excerpt_ifr");
        const iShortDescWindow = iShortDesc.contentWindow;
        const iShortDescDoc = iShortDescWindow.document;
        const wooProductShortDesc = iShortDescDoc.querySelector("body p");
        if (!wooProductShortDesc) {
          let newPara = iShortDescDoc.createElement("p");
          newPara.innerText = value;
          iShortDescDoc.querySelector("body").appendChild(newPara);
          return;
        }
        wooProductShortDesc.innerText = value;
      },
      wooProductTitle: (value) => {
        const wooProductName = document.querySelector(".woocommerce-feature-enabled-activity-panels #titlewrap #title");
        const wooProductNameLabel = document.querySelector(".woocommerce-feature-enabled-activity-panels #titlewrap #title-prompt-text");
        if (!wooProductName) {
          showAlert();
          return;
        }
        wooProductName.value = value;
        if (wooProductName.value !== "") {
          wooProductNameLabel.classList.add("screen-reader-text");
        } else {
          wooProductNameLabel.classList.remove("screen-reader-text");
        }
      }
    }
  };
  var Callbacks_default = Callbacks;

  // assets/src/admin/js/Common/Static/index.js
  var StaticData = {
    countries: [
      { label: "Global", value: "global" },
      { label: "Australia", value: 2036 },
      { label: "Canada", value: 2124 },
      { label: "India", value: 2356 },
      { label: "New Zealand", value: 2554 },
      { label: "South Africa", value: 2710 },
      { label: "United States (USA)", value: 2840 },
      { label: "United Kingdom", value: 2826 },
      { label: "Germany", value: 2276 },
      { label: "Portugal", value: 2620 },
      { label: "Spain", value: 2724 },
      { label: "Vietnam", value: 2704 },
      { label: "Indonesia", value: 2360 },
      { label: "Malaysia", value: 2458 },
      { label: "South Korea", value: 2410 },
      { label: "Japan", value: 2392 },
      { label: "China", value: 2156 },
      { label: "Turkey", value: 2792 },
      { label: "Ukraine", value: 2804 },
      { label: "Italy", value: 2380 },
      { label: "France", value: 2250 },
      { label: "Poland", value: 2616 },
      { label: "Netherland", value: 2528 },
      { label: "Lithuania", value: 2440 },
      { label: "Hungary", value: 2348 },
      { label: "Denmark", value: 2208 },
      { label: "Czechia", value: 2203 },
      { label: "Thailand", value: 2764 },
      { label: "Latvia", value: 2428 },
      { label: "Slovakia", value: 2703 },
      { label: "Greece", value: 2300 },
      { label: "Sweden", value: 2752 },
      { label: "Saudi Arabia", value: 2682 },
      { label: "Russia", value: 2643 },
      { label: "Bulgaria", value: 2100 },
      { label: "Mexico", value: 2484 },
      { label: "Norway", value: 2578 },
      { label: "Pakistan", value: 2586 },
      { label: "Israel", value: 2376 }
    ],
    languages: [
      {
        "value": "en",
        "label": "English"
      },
      {
        "value": "es",
        "label": "Spanish"
      },
      {
        "value": "de",
        "label": "German"
      }
    ],
    outputSizes: [
      { label: "Small", value: "sm" },
      { label: "Medium", value: "md" },
      { label: "Large", value: "lg" }
    ],
    maxToken: [
      { label: "Small", value: 200 },
      { label: "Medium", value: 400 },
      { label: "Large", value: 1200 }
    ],
    chatCharacters: [
      { label: "Professional Writer", value: "professional-writer" },
      { label: "General Purpose", value: "general-purpose" },
      { label: "Standup Comedian", value: "standup-comedian" },
      { label: "Life Coach", value: "life-coach" },
      { label: "Career Counselor", value: "career-counselor" },
      { label: "Nutritionist", value: "nutritionist" },
      { label: "Product Manager", value: "product-manager" },
      { label: "Personal Trainer", value: "personal-trainer" },
      { label: "Life Hacker", value: "life-hacker" },
      { label: "Travel Advisor", value: "travel-advisor" },
      { label: "Mindfulness Coach", value: "mindfulness-coach" },
      { label: "Financial Advisor", value: "financial-advisor" },
      { label: "Language Tutor", value: "language-tutor" },
      { label: "Travel Guide", value: "travel-guide" },
      { label: "Marketing Expert", value: "marketing-expert" },
      { label: "Software Developer", value: "software-developer" },
      { label: "Dating Coach", value: "dating-coach" },
      { label: "DIY Expert", value: "diy-expert" },
      { label: "Journalist", value: "journalist" },
      { label: "Tech Writer", value: "tech-writer" },
      { label: "Pro Chef", value: "professional-chef" },
      { label: "Pro Salesperson", value: "professional-salesperson" },
      { label: "Startup Tech Lawyer", value: "startup-tech-lawyer" },
      { label: "Email Copywriter", value: "email-copywriter" }
    ]
  };
  var Static_default = StaticData;

  // assets/src/admin/js/Common/SidebarControllerOption/index.js
  var { Row, Col } = window.antd;
  var { Libs: Libs2, Utilities, PromotionalNotice } = window.getGenie.Components.Common;
  var { ComposeComponents } = window.getGenie.Components.Common.ReduxManager;
  var { useEffect } = window.React;
  var SidebarControllerOption = ComposeComponents(({ unsupportedLanguages, setSidebar, sidebar: sidebar2, getInputs, className = "", language = true, tone = true, creativity = true, result = true, outputSize = false }) => {
    if (!Utilities) {
      return;
    }
    ;
    const { GenieHelpers: GenieHelpers4 } = Utilities;
    useEffect(() => {
      GenieHelpers4.storeData("creativity");
    }, [getInputs["creativity"]]);
    useEffect(() => {
      GenieHelpers4.storeData("numberOfResult");
    }, [getInputs["numberOfResult"]]);
    let toneOfVoice = Object.values(window.getGenie.config?.templateAssets?.toneOfVoice || {});
    toneOfVoice = toneOfVoice.map((item) => ({ label: item, value: item }));
    toneOfVoice = toneOfVoice.sort();
    toneOfVoice = toneOfVoice.reverse();
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Row, {
      gutter: 16,
      className
    }, language && /* @__PURE__ */ React.createElement(Col, {
      span: 24
    }, /* @__PURE__ */ React.createElement(Libs2.Select, {
      handleOnChange: (val) => GenieHelpers4.saveSidebarControllerOption("getgenie-language", val),
      name: "selectedLanguage",
      except: unsupportedLanguages,
      label: /* @__PURE__ */ React.createElement(React.Fragment, null, sidebar2.__("Language", "getgenie"), /* @__PURE__ */ React.createElement(Libs2.Tooltip, {
        title: sidebar2.__("Choose the desired language of your input and the outputs", "getgenie"),
        placement: "top"
      })),
      options: sidebar2.languages,
      defaultValue: sidebar2.currentLanguage
    })), outputSize && /* @__PURE__ */ React.createElement(Col, {
      span: 12
    }, /* @__PURE__ */ React.createElement(Libs2.Select, {
      handleOnChange: (val) => GenieHelpers4.saveSidebarControllerOption("getgenie-outputSize", val),
      name: "outputSize",
      label: /* @__PURE__ */ React.createElement(React.Fragment, null, sidebar2.__("Output Size", "getgenie"), /* @__PURE__ */ React.createElement(Libs2.Tooltip, {
        title: sidebar2.__("Define what type of size you want the outputs to have", "getgenie"),
        placement: "top"
      })),
      options: Static_default.outputSizes,
      defaultValue: sidebar2.outputSize
    }))), /* @__PURE__ */ React.createElement(Row, {
      style: { marginTop: "10px" },
      gutter: 16,
      className
    }, creativity && /* @__PURE__ */ React.createElement(Col, {
      span: 12
    }, /* @__PURE__ */ React.createElement(Libs2.Slider, {
      name: "creativity",
      handleOnChange: (val) => GenieHelpers4.saveSidebarControllerOption("getgenie-creativity", val),
      label: /* @__PURE__ */ React.createElement(React.Fragment, null, sidebar2.__("Creativity", "getgenie"), " ", /* @__PURE__ */ React.createElement(Libs2.Tooltip, {
        title: sidebar2.__("How much creative you want genie to be", "getgenie"),
        placement: "top"
      })),
      message: false,
      defaultValue: sidebar2?.creativityLevel
    })), result && /* @__PURE__ */ React.createElement(Col, {
      span: 12
    }, /* @__PURE__ */ React.createElement(Libs2.NumberInput, {
      name: "numberOfResult",
      handleOnChange: (val) => GenieHelpers4.saveSidebarControllerOption("getgenie-numberOfResult", val),
      className: "ResultLimitNumberInput",
      max: 6,
      type: "text",
      defaultValue: sidebar2?.numberOfResult,
      label: /* @__PURE__ */ React.createElement(React.Fragment, null, sidebar2.__("Max Results", "getgenie"), " ", /* @__PURE__ */ React.createElement(Libs2.Tooltip, {
        title: sidebar2.__("Maximum content you want to generate", "getgenie"),
        placement: "top"
      })),
      required: true,
      errorMessage: sidebar2.__("Please choose valid limit", "getgenie")
    }))), /* @__PURE__ */ React.createElement(PromotionalNotice, {
      type: "promotionalNotice",
      names: ["word_generate"]
    }));
  }, ["sidebar", "getInputs", "setSidebar"]);
  var SidebarControllerOption_default = SidebarControllerOption;

  // assets/src/admin/js/WooWizard/Navbar.js
  var { Radio } = window.antd;
  var { ComposeComponents: ComposeComponents2 } = window.getGenie.Components.Common.ReduxManager;
  var { useEffect: useEffect2 } = window.React;
  var Navbar = ComposeComponents2(({ navigation = "title", setSidebar, sidebar: sidebar2 }) => {
    let navs = {
      title: { title: "Title", screen: "wooProductTitle" },
      longDesc: { title: "Long Desc", screen: "wooLongDesc" },
      shortDesc: { title: "Short Desc", screen: "wooShortDesc" }
    };
    const handleChange = (e) => {
      let target = e.target, screen = target.screen;
      setSidebar({
        component: screen,
        insertTextCallback: Callbacks_default.insert[screen]
      });
    };
    useEffect2(() => {
      if (["wooProductTitle", "wooLongDesc", "wooShortDesc"].includes(sidebar2.component)) {
        setSidebar({
          insertTextCallback: Callbacks_default.insert[sidebar2.component]
        });
      }
    }, [sidebar2.component]);
    return /* @__PURE__ */ React.createElement("div", {
      className: "genie-nav-container"
    }, /* @__PURE__ */ React.createElement(Radio.Group, {
      onChange: handleChange,
      value: navigation
    }, Object.keys(navs).map((key, index) => {
      let nav = navs[key];
      return /* @__PURE__ */ React.createElement(Radio.Button, {
        key: index,
        value: key,
        screen: nav.screen
      }, nav.title);
    })));
  }, ["setSidebar", "sidebar"]);

  // assets/src/admin/js/WooWizard/ProductTitle/index.js
  var { Alert, Divider, Form, Tooltip } = window.antd;
  var { Libs: Libs3, ContentFeedback, Utilities: Utilities2 } = window.getGenie.Components.Common;
  var { HandleFetch, HandleResponse, EndPoints } = window.getGenie.Components.Common.RequestManager;
  var { ComposeComponents: ComposeComponents3 } = window.getGenie.Components.Common.ReduxManager;
  var { useState } = window.React;
  var { GenieHelpers } = Utilities2;
  var wooProductTitle = ComposeComponents3(({ getInputs, setInput, sidebar: sidebar2, setSidebar }) => {
    const [loading, setLoading] = useState(false);
    const [showTooltip, setShowTooltip] = useState("");
    const [visibleAlert, setVisibleAlert] = useState(false);
    const [productTitle, setProductTitle] = useState("");
    const list = getInputs["generatedProductNames"] || [];
    const generateContent = () => {
      setLoading(true);
      let data = {
        input: {
          productName: getInputs["wooProductName"],
          keywords: getInputs["wooBrief"]
        },
        templateSlug: "woocommerce-product-title"
      };
      setInput("generatedProductNames", []);
      HandleFetch((res) => {
        setLoading(false);
        HandleResponse(res, () => {
          let result = res.data.map((item) => {
            return { title: item, like: false, dislike: false };
          });
          setInput("generatedProductNames", result);
          setVisibleAlert(true);
          setTimeout(() => setVisibleAlert(false), 4e3);
          let historyData = data;
          historyData.output = res.data;
          historyData.templateType = "writer-default";
          fetch(EndPoints.createHistoryUrl, {
            method: "POST",
            body: JSON.stringify(historyData),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              "X-WP-Nonce": window.getGenie.config?.restNonce || ""
            }
          });
        });
      }, "writeTemplates", data);
    };
    const handleClick = (e, item) => {
      let copyAbleText = item.title.replace(/<br\s*\/?>/gi, "\n");
      GenieHelpers.copyToClipboard(copyAbleText).then(() => {
        setShowTooltip(item.title);
        setTimeout(() => {
          setShowTooltip(null);
        }, 2e3);
      }).catch(() => console.log("error"));
    };
    const insertContent = (e, value) => {
      e.stopPropagation();
      setProductTitle(value);
      let text = value.replace(/<br\s*[\/]?>/g, "\n");
      sidebar2.insertTextCallback(text);
    };
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
      className: "getgenie-title-form"
    }, /* @__PURE__ */ React.createElement(Form, {
      layout: "vertical",
      onFinish: generateContent
    }, /* @__PURE__ */ React.createElement("div", {
      className: "getgenie-screen-content title"
    }, /* @__PURE__ */ React.createElement(Libs3.Input, {
      name: "wooProductName",
      type: "text",
      label: /* @__PURE__ */ React.createElement("span", null, sidebar2.__("Product Name", "getgenie"), " ", /* @__PURE__ */ React.createElement("span", {
        style: { display: "inline-block", color: "red" }
      }, "*")),
      placeholder: "Enter the name of the product here",
      required: true,
      errorMessage: "Please enter the title here"
    }), /* @__PURE__ */ React.createElement(Libs3.Textarea, {
      label: /* @__PURE__ */ React.createElement("span", null, sidebar2.__("Product Brief/ Comma separated keywords", "getgenie"), " ", /* @__PURE__ */ React.createElement("span", {
        style: { display: "inline-block", color: "red" }
      }, "*")),
      name: "wooBrief",
      rows: 4,
      placeholder: sidebar2.__("Enter a brief description or the keywords for this product, seperated by commas", "getgenie")
    }), /* @__PURE__ */ React.createElement(SidebarControllerOption_default, {
      className: "getgenie-sidebar-controller-options"
    }), /* @__PURE__ */ React.createElement(Libs3.Button, {
      htmlType: "submit",
      className: "submit-btn",
      type: "primary",
      loading,
      disabled: !(getInputs["wooProductName"] && getInputs["wooBrief"])
    }, /* @__PURE__ */ React.createElement("span", {
      className: "getgenie-icon-edit"
    }), sidebar2.__("Generate product title", "getgenie"))), /* @__PURE__ */ React.createElement(Libs3.TitleMsg, {
      list,
      loading,
      title: sidebar2.__("product name", "getgenie")
    }), /* @__PURE__ */ React.createElement("div", {
      className: "getgenie-card-container editor",
      style: { backgroundColor: list.length === 0 && "transparent" }
    }, /* @__PURE__ */ React.createElement(Libs3.Card, {
      list,
      handleClick,
      column: 1,
      skeleton: loading ? () => /* @__PURE__ */ React.createElement(Libs3.SkeletonSingle, {
        count: 10
      }) : ""
    }, (item) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Tooltip, {
      placement: "right",
      title: showTooltip === item.title && "Copied",
      visible: showTooltip === item.title && sidebar2.open,
      zIndex: 999999
    }, /* @__PURE__ */ React.createElement("h5", {
      className: "generated-content"
    }, /* @__PURE__ */ React.createElement("div", {
      dangerouslySetInnerHTML: { __html: item.title }
    }))), /* @__PURE__ */ React.createElement(ContentFeedback, {
      content: item,
      input: getInputs["wooProductName"] + " " + getInputs["wooBrief"],
      contentType: "woo-product-title",
      creativityLevel: getInputs["wooTitleCreativityLevel"],
      listName: "generatedProductNames"
    }), /* @__PURE__ */ React.createElement(Tooltip, {
      title: sidebar2.__(`${item.title === productTitle ? "Inserted" : "Insert this content"}`, "getgenie"),
      placement: "topLeft"
    }, /* @__PURE__ */ React.createElement("span", {
      className: "getgenie-insert-content getgenie-icon-plus",
      onClick: (e) => insertContent(e, item.title)
    })))), visibleAlert && /* @__PURE__ */ React.createElement(Alert, {
      className: "template-screen-alert",
      message: sidebar2.__("Click on the text to copy", "getgenie"),
      closeText: sidebar2.__("Okay", "getgenie"),
      closable: true
    })))));
  }, ["getInputs", "setInput", "sidebar", "setSidebar"]);
  var ProductTitle_default = wooProductTitle;

  // assets/src/admin/js/WooWizard/LongDesc/index.js
  var { Alert: Alert2, Divider: Divider2, Form: Form2, Tooltip: Tooltip2 } = window.antd;
  var { Libs: Libs4, ContentFeedback: ContentFeedback2, Utilities: Utilities3 } = window.getGenie.Components.Common;
  var { HandleFetch: HandleFetch2, HandleResponse: HandleResponse2, EndPoints: EndPoints2 } = window.getGenie.Components.Common.RequestManager;
  var { ComposeComponents: ComposeComponents4 } = window.getGenie.Components.Common.ReduxManager;
  var { useState: useState2 } = window.React;
  var { GenieHelpers: GenieHelpers2 } = Utilities3;
  var wooLongDesc = ComposeComponents4(({ getInputs, setInput, sidebar: sidebar2, setSidebar }) => {
    const [loading, setLoading] = useState2(false);
    const [showTooltip, setShowTooltip] = useState2("");
    const [visibleAlert, setVisibleAlert] = useState2(false);
    const [productLongDec, setProductLongDec] = useState2("");
    const list = getInputs["generatedLongDesc"] || [];
    const generateContent = () => {
      setLoading(true);
      let data = {
        input: {
          productName: getInputs["wooProductName"],
          keywords: getInputs["wooBrief"]
        },
        templateSlug: "woocommerce-product-long-description"
      };
      setInput("generatedLongDesc", []);
      HandleFetch2((res) => {
        setLoading(false);
        HandleResponse2(res, () => {
          let result = res.data.map((item) => {
            return { title: item, like: false, dislike: false };
          });
          setInput("generatedLongDesc", result);
          setVisibleAlert(true);
          setTimeout(() => setVisibleAlert(false), 4e3);
          let historyData = data;
          historyData.output = res.data;
          historyData.templateType = "writer-default";
          fetch(EndPoints2.createHistoryUrl, {
            method: "POST",
            body: JSON.stringify(historyData),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              "X-WP-Nonce": window.getGenie.config?.restNonce || ""
            }
          });
        });
      }, "writeTemplates", data);
    };
    const handleClick = (e, item) => {
      let copyAbleText = item.title.replace(/<br\s*\/?>/gi, "\n");
      GenieHelpers2.copyToClipboard(copyAbleText).then(() => {
        setShowTooltip(item.title);
        setTimeout(() => {
          setShowTooltip(null);
        }, 2e3);
      }).catch(() => console.log("error"));
    };
    const insertContent = (e, value) => {
      e.stopPropagation();
      setProductLongDec(value);
      let text = value.replace(/<br\s*[\/]?>/g, "\n");
      sidebar2.insertTextCallback(text);
    };
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
      className: "getgenie-title-form"
    }, /* @__PURE__ */ React.createElement(Form2, {
      layout: "vertical",
      onFinish: generateContent
    }, /* @__PURE__ */ React.createElement("div", {
      className: "getgenie-screen-content title"
    }, /* @__PURE__ */ React.createElement(Libs4.Input, {
      name: "wooProductName",
      type: "text",
      label: /* @__PURE__ */ React.createElement("span", null, sidebar2.__("Product Name", "getgenie"), " ", /* @__PURE__ */ React.createElement("span", {
        style: { display: "inline-block", color: "red" }
      }, "*")),
      placeholder: sidebar2.__("Enter the name of the product here", "getgenie"),
      required: true,
      errorMessage: sidebar2.__("Please enter the title here", "getgenie")
    }), /* @__PURE__ */ React.createElement(Libs4.Textarea, {
      label: /* @__PURE__ */ React.createElement("span", null, sidebar2.__("Product Brief/ Comma separated keywords", "getgenie"), " ", /* @__PURE__ */ React.createElement("span", {
        style: { display: "inline-block", color: "red" }
      }, "*")),
      name: "wooBrief",
      rows: 4,
      placeholder: sidebar2.__("Enter a brief description or the keywords for this product, seperated by commas", "getgenie")
    }), /* @__PURE__ */ React.createElement(SidebarControllerOption_default, {
      className: "getgenie-sidebar-controller-options"
    }), /* @__PURE__ */ React.createElement(Libs4.Button, {
      htmlType: "submit",
      className: "submit-btn",
      type: "primary",
      loading,
      disabled: !(getInputs["wooProductName"] && getInputs["wooBrief"])
    }, /* @__PURE__ */ React.createElement("span", {
      className: "getgenie-icon-edit"
    }), sidebar2.__("Generate long desc", "getgenie"))), /* @__PURE__ */ React.createElement(Libs4.TitleMsg, {
      list,
      loading,
      title: sidebar2.__("long description", "getgenie")
    }), /* @__PURE__ */ React.createElement("div", {
      className: "getgenie-card-container editor",
      style: { backgroundColor: list.length === 0 && "transparent" }
    }, /* @__PURE__ */ React.createElement(Libs4.Card, {
      list,
      handleClick,
      column: 1,
      skeleton: loading ? () => /* @__PURE__ */ React.createElement(Libs4.SkeletonSingle, {
        count: 10
      }) : ""
    }, (item) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Tooltip2, {
      placement: "right",
      title: showTooltip === item.title && "Copied",
      visible: showTooltip === item.title && sidebar2.open,
      zIndex: 999999
    }, /* @__PURE__ */ React.createElement("h5", {
      className: "generated-content"
    }, /* @__PURE__ */ React.createElement("div", {
      dangerouslySetInnerHTML: { __html: item.title }
    }))), /* @__PURE__ */ React.createElement(ContentFeedback2, {
      content: item,
      input: getInputs["wooProductName"] + " " + getInputs["wooBrief"],
      contentType: "woo-product-long-desc",
      creativityLevel: getInputs["wooLongCreativityLevel"],
      listName: "generatedLongDesc"
    }), /* @__PURE__ */ React.createElement(Tooltip2, {
      title: sidebar2.__(`${item.title === productLongDec ? "Inserted" : "Insert this content"}`, "getgenie"),
      placement: "topLeft"
    }, /* @__PURE__ */ React.createElement("span", {
      className: "getgenie-insert-content getgenie-icon-plus",
      onClick: (e) => insertContent(e, item.title)
    })))), visibleAlert && /* @__PURE__ */ React.createElement(Alert2, {
      className: "template-screen-alert",
      message: sidebar2.__("Click on the text to copy", "getgenie"),
      closeText: sidebar2.__("Okay", "getgenie"),
      closable: true
    })))));
  }, ["getInputs", "setInput", "sidebar", "setSidebar"]);
  var LongDesc_default = wooLongDesc;

  // assets/src/admin/js/WooWizard/ShortDesc/index.js
  var { Alert: Alert3, Divider: Divider3, Form: Form3, Tooltip: Tooltip3 } = window.antd;
  var { Libs: Libs5, ContentFeedback: ContentFeedback3, Utilities: Utilities4 } = window.getGenie.Components.Common;
  var { HandleFetch: HandleFetch3, HandleResponse: HandleResponse3, EndPoints: EndPoints3 } = window.getGenie.Components.Common.RequestManager;
  var { ComposeComponents: ComposeComponents5 } = window.getGenie.Components.Common.ReduxManager;
  var { useState: useState3 } = window.React;
  var { GenieHelpers: GenieHelpers3 } = Utilities4;
  var wooShortDesc = ComposeComponents5(({ getInputs, setInput, sidebar: sidebar2, setSidebar }) => {
    const [loading, setLoading] = useState3(false);
    const [showTooltip, setShowTooltip] = useState3("");
    const [visibleAlert, setVisibleAlert] = useState3(false);
    const [productShortDec, setProductShortDec] = useState3("");
    const list = getInputs["generatedShortDesc"] || [];
    const generateContent = () => {
      setLoading(true);
      let data = {
        input: {
          productName: getInputs["wooProductName"],
          keywords: getInputs["wooBrief"]
        },
        templateSlug: "woocommerce-product-short-description"
      };
      setInput("generatedShortDesc", []);
      HandleFetch3((res) => {
        setLoading(false);
        HandleResponse3(res, () => {
          let result = res.data.map((item) => {
            return { title: item, like: false, dislike: false };
          });
          setInput("generatedShortDesc", result);
          setVisibleAlert(true);
          setTimeout(() => setVisibleAlert(false), 4e3);
          let historyData = data;
          historyData.output = res.data;
          historyData.templateType = "writer-default";
          fetch(EndPoints3.createHistoryUrl, {
            method: "POST",
            body: JSON.stringify(historyData),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              "X-WP-Nonce": window.getGenie.config?.restNonce || ""
            }
          });
        });
      }, "writeTemplates", data);
    };
    const handleClick = (e, item) => {
      let copyAbleText = item.title.replace(/<br\s*\/?>/gi, "\n");
      GenieHelpers3.copyToClipboard(copyAbleText).then(() => {
        setShowTooltip(item.title);
        setTimeout(() => {
          setShowTooltip(null);
        }, 2e3);
      }).catch(() => console.log("error"));
    };
    const insertContent = (e, value) => {
      e.stopPropagation();
      setProductShortDec(value);
      let text = value.replace(/<br\s*[\/]?>/g, "\n");
      sidebar2.insertTextCallback(text);
    };
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
      className: "getgenie-title-form"
    }, /* @__PURE__ */ React.createElement(Form3, {
      layout: "vertical",
      onFinish: generateContent
    }, /* @__PURE__ */ React.createElement("div", {
      className: "getgenie-screen-content title"
    }, /* @__PURE__ */ React.createElement(Libs5.Input, {
      name: "wooProductName",
      type: "text",
      label: /* @__PURE__ */ React.createElement("span", null, sidebar2.__("Product Name", "getgenie"), " ", /* @__PURE__ */ React.createElement("span", {
        style: { display: "inline-block", color: "red" }
      }, "*")),
      placeholder: sidebar2.__("Enter the name of the product here", "getgenie"),
      required: true,
      errorMessage: sidebar2.__("Please enter the title here", "getgenie")
    }), /* @__PURE__ */ React.createElement(Libs5.Textarea, {
      label: /* @__PURE__ */ React.createElement("span", null, sidebar2.__("Product Brief/ Comma separated keywords", "getgenie"), " ", /* @__PURE__ */ React.createElement("span", {
        style: { display: "inline-block", color: "red" }
      }, "*")),
      name: "wooBrief",
      rows: 4,
      placeholder: sidebar2.__("Enter a brief description or the keywords for this product, seperated by commas", "getgenie")
    }), /* @__PURE__ */ React.createElement(SidebarControllerOption_default, {
      className: "getgenie-sidebar-controller-options"
    }), /* @__PURE__ */ React.createElement(Libs5.Button, {
      htmlType: "submit",
      className: "submit-btn",
      type: "primary",
      loading,
      disabled: !(getInputs["wooProductName"] && getInputs["wooBrief"])
    }, /* @__PURE__ */ React.createElement("span", {
      className: "getgenie-icon-edit"
    }), sidebar2.__("Generate short desc", "getgenie"))), /* @__PURE__ */ React.createElement(Libs5.TitleMsg, {
      list,
      loading,
      title: sidebar2.__("short description", "getgenie")
    }), /* @__PURE__ */ React.createElement("div", {
      className: "getgenie-card-container editor",
      style: { backgroundColor: list.length === 0 && sidebar2.__("transparent", "getgenie") }
    }, /* @__PURE__ */ React.createElement(Libs5.Card, {
      list,
      handleClick,
      column: 1,
      skeleton: loading ? () => /* @__PURE__ */ React.createElement(Libs5.SkeletonSingle, {
        count: 10
      }) : ""
    }, (item) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Tooltip3, {
      placement: "right",
      title: showTooltip === item.title && sidebar2.__("Copied", "getgenie"),
      visible: showTooltip === item.title && sidebar2.open,
      zIndex: 999999
    }, /* @__PURE__ */ React.createElement("h5", {
      className: "generated-content"
    }, /* @__PURE__ */ React.createElement("div", {
      dangerouslySetInnerHTML: { __html: item.title }
    }))), /* @__PURE__ */ React.createElement(ContentFeedback3, {
      content: item,
      input: getInputs["wooProductName"] + " " + getInputs["wooBrief"],
      contentType: "woo-product-short-desc",
      creativityLevel: getInputs["wooShortCreativityLevel"],
      listName: "generatedShortDesc"
    }), /* @__PURE__ */ React.createElement(Tooltip3, {
      title: sidebar2.__(`${item.title === productShortDec ? "Inserted" : "Insert this content"}`, "getgenie"),
      placement: "topLeft"
    }, /* @__PURE__ */ React.createElement("span", {
      className: "getgenie-insert-content getgenie-icon-plus",
      onClick: (e) => insertContent(e, item.title)
    })))), visibleAlert && /* @__PURE__ */ React.createElement(Alert3, {
      className: "template-screen-alert",
      message: sidebar2.__("Click on the text to copy", "getgenie"),
      closeText: sidebar2.__("Okay", "getgenie"),
      closable: true
    })))));
  }, ["getInputs", "setInput", "sidebar", "setSidebar"]);
  var ShortDesc_default = wooShortDesc;

  // assets/src/admin/js/WooWizard/Wrapper/index.js
  var { Libs: Libs6 } = window.getGenie.Components.Common;
  var { ComposeComponents: ComposeComponents6 } = window.getGenie.Components.Common.ReduxManager;
  var { useState: useState4 } = window.React;
  var WooCommerceScreen = ComposeComponents6(({ setSidebar }) => {
    const [currentScreen, setCurrentScreen] = useState4("wooProductTitle");
    const listOfWooCommerceScreen = [
      {
        label: "Title",
        key: "wooProductTitle",
        children: /* @__PURE__ */ React.createElement(ProductTitle_default, null)
      },
      {
        label: "Long Desc",
        key: "wooLongDesc",
        children: /* @__PURE__ */ React.createElement(LongDesc_default, null)
      },
      {
        label: "Short Desc",
        key: "wooShortDesc",
        children: /* @__PURE__ */ React.createElement(ShortDesc_default, null)
      }
    ];
    const handleCurrentScreen = (screen) => {
      setCurrentScreen(screen);
      setSidebar({
        insertTextCallback: Callbacks_default.insert[screen]
      });
    };
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Libs6.DrawerHeader, {
      screenName: currentScreen
    }), /* @__PURE__ */ React.createElement(Libs6.Navbar, {
      tabPaneList: listOfWooCommerceScreen,
      activeKey: currentScreen,
      destroyInactiveTabPane: false,
      handleActiveKey: handleCurrentScreen,
      className: "getgenie-blog-screen-navbar"
    }));
  }, ["setSidebar", "sidebar", "setInput", "getInputs"]);
  var Wrapper_default = WooCommerceScreen;

  // assets/src/admin/js/WooWizard/Utilities/index.js
  var Utilities_exports = {};
  __export(Utilities_exports, {
    WooCommerceTopButtons: () => WooCommerceTopButtons_default
  });

  // assets/src/admin/js/WooWizard/Utilities/WooCommerceTopButtons.js
  var { Button } = window.antd;
  var { ComposeComponents: ComposeComponents7 } = window.getGenie.Components.Common.ReduxManager;
  var { useEffect: useEffect3 } = window.React;
  var WooCommerceTopButtons = ComposeComponents7(({ setSidebar, sidebar: sidebar2 }) => {
    const handleClickWrite = () => {
      setSidebar({
        open: !sidebar2.open,
        toolbarWriting: false,
        component: "WooCommerceScreen",
        insertTextCallback: Callbacks_default.insert["wooProductTitle"]
      });
    };
    useEffect3(() => {
      if (window.location.hash === "#getgenie-open-wooWizard") {
        handleClickWrite();
      }
    }, []);
    return /* @__PURE__ */ React.createElement(Button, {
      onClick: handleClickWrite,
      type: "primary",
      className: "getgenie-toolbar-write-btn"
    }, /* @__PURE__ */ React.createElement("span", {
      className: "getgenie-icon-edit ant-btn-icon"
    }), sidebar2.__("Write for me", "getgenie"));
  }, ["setSidebar", "sidebar"]);
  var WooCommerceTopButtons_default = WooCommerceTopButtons;

  // assets/src/admin/js/woo-wizard.js
  window.getGenie.Components = {
    ...window.getGenie.Components,
    WooWizardUtils: Utilities_exports,
    Sidebar: {
      ...window.getGenie.Components.Sidebar || {},
      WooCommerceScreen: Wrapper_default
    }
  };
})();
