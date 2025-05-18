(() => {
  // assets/src/admin/js/AdvanceWriting/Callbacks.js
  var Callbacks = {
    calculateEventPosition: (e, dependency) => {
      if (dependency === "viewport") {
        return e.target.getBoundingClientRect();
      }
      if (dependency === "body") {
        let getOffset = function(elem, type) {
          var offset = 0;
          do {
            if (!isNaN(elem?.["offset" + type])) {
              offset += elem?.["offset" + type];
            }
          } while (elem = elem?.offsetParent);
          return offset;
        };
        let eventPosition = {
          "top": getOffset(e.target, "Top"),
          "left": getOffset(e.target, "Left"),
          "right": getOffset(e.target, "Right"),
          "bottom": getOffset(e.target, "Bottom"),
          "width": e.target.getBoundingClientRect().width,
          "height": e.target.getBoundingClientRect().height
        };
        return eventPosition;
      }
    },
    insertContextMenu: (buttonEvent) => {
      let open = !wp.data.select("getgenie").contextMenu().open;
      wp.data.dispatch("getgenie").setContextMenu({
        open,
        buttonEvent
      });
    },
    showSidebar: (template) => {
      let context = wp.data.select("getgenie").sidebar().existingInputValue || "";
      let component = "WriteTemplatesScreen";
      let currentTemplate = template.slug;
      if (currentTemplate === "list") {
        component = "TemplateListScreen";
      }
      wp.data.dispatch("getgenie").setContextMenu({
        open: false
      });
      wp.data.dispatch("getgenie").setSidebar({
        open: true,
        currentWritingMode: template?.mode,
        component,
        currentTemplate,
        existingInputValue: context.replace(/<br\s*[\/]?>/g, "")
      });
    }
  };
  var Callbacks_default = Callbacks;

  // assets/src/admin/js/script-handler.js
  var imageUrl = `${window.getGenie.config.assetsUrl}dist/admin/images/genie-dark.svg`;
  var ScriptHandler = class {
    getUpperSiblingsWithInnerText = (el) => {
      const siblingsInnerText = [];
      let sibling = el.previousSibling;
      while (sibling) {
        if (sibling.nodeType === Node.ELEMENT_NODE && !sibling.classList.contains("blog-title")) {
          siblingsInnerText.unshift(sibling.innerText + " ");
        }
        sibling = sibling.previousSibling;
      }
      return siblingsInnerText.join("");
    };
    triggerBtnHtml = (className, item) => {
      const button = document.createElement("button");
      let computedStyle = window.getComputedStyle(item);
      const paddingBottom = parseInt(computedStyle.paddingBottom) || 0;
      const marginBottom = parseInt(computedStyle.marginBottom) || 0;
      const borderBottom = parseInt(computedStyle.borderBottomWidth) || 0;
      if (className?.includes("bricks")) {
        button.style.top = `-${marginBottom + borderBottom + paddingBottom + 38}px`;
      }
      if (className?.includes("oxygen") || className?.includes("cpt")) {
        button.style.top = `-${marginBottom + borderBottom + paddingBottom + 25}px`;
      }
      if (className?.includes("elementor")) {
        let uiThemeClass = elementor.settings.editorPreferences.model.get("ui_theme");
        if (uiThemeClass === "auto" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
          button.classList.add("dark");
        }
      }
      button.classList.add("getgenie-trigger-btn", className);
      button.innerHTML = `<img src=${imageUrl} alt="GetGenie" />`;
      return button;
    };
    checkVisibility = (item) => {
      let computedStyle = window.getComputedStyle(item);
      const display = computedStyle.display;
      const visibility = computedStyle.visibility;
      if (display === "none" || visibility === "hidden") {
        return false;
      }
      return true;
    };
    addGetGenieTriggerBtn = (container, className, isContainer = true) => {
      if (!container)
        return;
      setTimeout(() => {
        const mceContainer = jQuery(container).find(".mce-container");
        if (mceContainer?.length) {
          if (this.checkVisibility(mceContainer[0])) {
            if (mceContainer.parent().find(`.${className}`).length) {
              mceContainer.parent().find(`.${className}`).remove();
            }
            const mceIframe = mceContainer.find("iframe");
            mceIframe[0].insertAdjacentElement("afterend", this.triggerBtnHtml(`${className}`, mceIframe[0]));
          }
          const textarea2 = mceContainer.parent().find("textarea");
          if (!textarea2?.length || !this.checkVisibility(textarea2[0]))
            return;
          if (textarea2.parent().find(`.${className}`).length) {
            textarea2.parent().find(`.${className}`).remove();
            textarea2[0].insertAdjacentElement("afterend", this.triggerBtnHtml(`${className}`, textarea2[0]));
          }
        }
      }, 500);
      const textarea = isContainer ? jQuery(container).find("textarea") : jQuery(container);
      if (!textarea?.length)
        return;
      if (!textarea.parent().find(`.${className}`).length) {
        textarea.each((index, item) => {
          if (!this.checkVisibility(item))
            return;
          item.insertAdjacentElement("afterend", this.triggerBtnHtml(`${className}`, item));
        });
      }
    };
    addGetGenieTriggerBtnForOxygen = (container) => {
      if (!container)
        return;
      const field = jQuery(container).find(".textarea");
      if (!field.length && jQuery(container).find("#wp-oxygen_vsb_tinymce-wrap").length) {
        const textarea = jQuery(container).find("textarea.wp-editor-area");
        const iframeContainer = jQuery(container).find(".mce-container");
        if (iframeContainer?.length && this.checkVisibility(iframeContainer[0])) {
          const iframe = iframeContainer.find("iframe");
          if (iframeContainer.parent().find(".getGenie-oxygen-iframe").length) {
            iframeContainer.parent().find(".getGenie-oxygen-iframe").remove();
          }
          iframe[0].insertAdjacentElement("beforeBegin", this.triggerBtnHtml("getGenie-oxygen-iframe", iframe[0]));
        }
        if (textarea?.length && this.checkVisibility(textarea[0])) {
          if (textarea.parent().find(".getGenie-oxygen-iframe").length) {
            textarea.parent().find(".getGenie-oxygen-iframe").remove();
          }
          textarea[0].insertAdjacentElement("beforeBegin", this.triggerBtnHtml("getGenie-oxygen-iframe", textarea[0]));
        }
      }
      if (!field?.length)
        return;
      if (!field.parent().find(".getGenie-oxygen-textarea").length) {
        field.each((index, item) => {
          if (!this.checkVisibility(item))
            return;
          item.insertAdjacentElement("afterend", this.triggerBtnHtml("getGenie-oxygen-textarea", item));
        });
      }
    };
    addGetGenieTriggerBtnForFluentCRM = (container, className) => {
      if (!container)
        return;
      if (!container.querySelector(".getGenie-fluent-editorField")) {
        container.appendChild(this.triggerBtnHtml(`${className}`, container));
      }
      const wpEditorContainer = container.className === "wp-editor-container";
      if (wpEditorContainer) {
        const iframeContainer = jQuery(container).find(".mce-container");
        if (iframeContainer?.length && this.checkVisibility(iframeContainer[0])) {
          const iframe = iframeContainer.find("iframe");
          if (iframeContainer.parent().find(".getGenie-fluent-iframe").length) {
            iframeContainer.parent().find(".getGenie-fluent-iframe").remove();
          }
          iframe[0].insertAdjacentElement("beforeBegin", this.triggerBtnHtml("getGenie-fluent-iframe", iframe[0]));
        }
      }
    };
    insertTextToInputs = (value, field) => {
      const content = value.replace(/<br\s*[\/]?>/g, "\n");
      let event = new KeyboardEvent("keydown", {
        "key": "Shift",
        bubbles: true,
        cancelable: true
      });
      if (wp.data.select("getgenie").sidebar().currentTemplate === "expandOutline") {
        if (field?.tagName === "TEXTAREA" || field?.tagName === "DIV") {
          field.value = content;
          event = new Event("input", {
            bubbles: true,
            cancelable: true
          });
        } else {
          let updatedData = value.replace(/(\<br[\s]*\/?\>[\s]*)+/g, "<br>");
          let paragraphs = updatedData.split("<br>");
          for (const paragraph of paragraphs) {
            const newParagraph = document.createElement("p");
            newParagraph.textContent = paragraph;
            field.insertAdjacentElement("afterend", newParagraph);
            field = field.nextElementSibling;
          }
        }
      } else if (["INPUT", "TEXTAREA"].includes(field?.tagName)) {
        field.value = content;
        event = new Event("input", {
          bubbles: true,
          cancelable: true
        });
      } else if (field?.tagName === "DIV") {
        field.innerText = content;
        event = new Event("input", {
          bubbles: true,
          cancelable: true
        });
      } else {
        field.innerText = content;
      }
      field.dispatchEvent(event);
    };
    contextMenuCallback = {
      continueWriting: (data, insertField, { beforeCaret, selectedText, afterCaret }) => {
        const siblingsInnerText = this.getUpperSiblingsWithInnerText(insertField);
        if (siblingsInnerText?.length) {
          beforeCaret = siblingsInnerText + beforeCaret;
        }
        let updatedData = data;
        if (selectedText[selectedText?.length - 1] !== " ") {
          updatedData = " " + updatedData;
        }
        this.insertTextToInputs(beforeCaret + selectedText + updatedData + afterCaret, insertField);
      },
      expandOutline: (data, insertField, { beforeCaret, selectedText, afterCaret }) => {
        let finalText;
        if (insertField?.tagName === "DIV" || insertField?.tagName === "TEXTAREA") {
          finalText = beforeCaret + selectedText + " " + data + "\n" + afterCaret;
        } else {
          finalText = data;
        }
        this.insertTextToInputs(finalText, insertField);
      },
      rewrite: (data, insertField, { beforeCaret, afterCaret }) => {
        let finalText = beforeCaret;
        if (beforeCaret) {
          finalText += " ";
        }
        finalText += data + " " + afterCaret;
        this.insertTextToInputs(finalText, insertField);
      }
    };
    genieHeadClickHandler = (contextMenuCallback, insertTextToInputs, className = null) => {
      jQuery(document).on("click", ".getgenie-trigger-btn", function(e) {
        e.preventDefault();
        let field = jQuery(this).siblings("textarea").length ? jQuery(this).siblings("textarea") : jQuery(this).siblings("iframe");
        if (className == "oxygen") {
          field = jQuery(this).siblings(".textarea")?.find('[contenteditable="true"]');
          if (!field?.length && jQuery(this).parents(".oxygen-tinymce-dialog-wrap").length) {
            field = jQuery(this).siblings("textarea").length ? jQuery(this).siblings("textarea") : jQuery(this).siblings("iframe");
          }
        }
        if (className == "cpt") {
          field = jQuery(this).siblings("textarea,  input[type=text]").length ? jQuery(this).siblings("textarea,  input[type=text]") : jQuery(this).siblings("iframe");
        }
        if (jQuery(this)?.[0]?.id === "genie-head-cpt") {
          field = jQuery(this).closest("#wp-content-editor-tools").siblings("#wp-content-editor-container");
        }
        if (className == "fluent-crm") {
          field = jQuery(this).children(".is-root-container");
        }
        if (field.length == 0) {
          return;
        }
        let value = field[0]?.value;
        field = field?.[0];
        let beforeCaret = (value || "").substring(0, field?.selectionStart);
        let afterCaret = (value || "").substring(field?.selectionEnd);
        let selectionStart, selectionEnd, docSelection = window.getSelection();
        let selectedText = docSelection.toString();
        let tagName = field.tagName.toLowerCase();
        let fieldId = field?.id;
        if (fieldId === "wp-content-editor-container") {
          if (jQuery(field).find("textarea").css("display") === "none") {
            const iframe = document.querySelector("#content_ifr");
            const iframeWindow = iframe.contentWindow;
            const iframeDocument = iframeWindow.document;
            const iframeBody = iframeDocument.querySelector("body :first-child");
            docSelection = iframeWindow.document.getSelection();
            selectedText = docSelection.toString();
            if (docSelection?.focusNode) {
              field = docSelection.focusNode.parentNode;
              value = field.innerText;
              selectionStart = Math.min(docSelection?.focusOffset, docSelection?.baseOffset);
              selectionEnd = Math.max(docSelection?.focusOffset, docSelection?.baseOffset);
              beforeCaret = value.substring(0, selectionStart);
              afterCaret = value.substring(selectionEnd);
            }
          } else {
            field = jQuery(field).find("textarea")[0];
            value = field.value;
            selectedText = docSelection.toString();
            beforeCaret = (value || "").substring(0, field?.selectionStart);
            afterCaret = (value || "").substring(field?.selectionEnd);
          }
        } else {
          if (tagName === "div" || tagName === "iframe") {
            if (tagName === "iframe") {
              const iframeWindow = field.contentWindow;
              const iframeDocument = iframeWindow.document;
              jQuery(iframeDocument).on("click", function(e2) {
                e2.preventDefault();
                if (wp.data.select("getgenie").contextMenu()?.open) {
                  wp.data.dispatch("getgenie").setContextMenu({
                    open: false
                  });
                }
              });
              docSelection = iframeWindow.getSelection();
            }
            selectedText = docSelection?.toString();
            if (docSelection?.focusNode) {
              field = docSelection.focusNode.parentNode;
              value = field.innerText;
              selectionStart = Math.min(docSelection?.focusOffset, docSelection?.baseOffset);
              selectionEnd = Math.max(docSelection?.focusOffset, docSelection?.baseOffset);
              beforeCaret = value?.substring(0, selectionStart);
              afterCaret = value?.substring(selectionEnd);
            }
          } else if (tagName == "textarea") {
            value = field?.value;
            beforeCaret = (value || "").substring(0, field?.selectionStart);
            afterCaret = (value || "").substring(field?.selectionEnd);
            selectedText = docSelection.toString();
          }
        }
        let eventPosition = Callbacks_default.calculateEventPosition(e, "viewport");
        Callbacks_default.insertContextMenu(eventPosition);
        if (!docSelection?.focusNode) {
          return;
        }
        wp.data.dispatch("getgenie").setSidebar({
          insertTextCallback: insertTextToInputs,
          insertTextField: field,
          existingInputValue: selectedText
        });
        wp.data.dispatch("getgenie").setContextMenu({
          inputContent: {
            beforeCaret,
            selectedText,
            afterCaret
          },
          insertionField: field,
          contextMenuCallback
        });
      });
    };
    genieHeadClickHandlerForWebview = (contextMenuCallback, insertTextToInputs) => {
      setTimeout(() => {
        const field = document.querySelector(".ql-editor");
        if (field) {
          wp.data.dispatch("getgenie").setContextMenu({
            insertionField: field.firstChild,
            contextMenuCallback
          });
          this.webviewScriptHandler.searchCallback(field.firstChild);
        }
      }, 2e3);
      jQuery(document).on("click", ".getgenie-trigger-btn", function(e) {
        e.preventDefault();
        let field;
        let eventPosition = Callbacks_default.calculateEventPosition(e, "viewport");
        Callbacks_default.insertContextMenu(eventPosition);
        let selectionStart, selectionEnd, docSelection = window.getSelection();
        if (!docSelection?.focusNode) {
          field = document.querySelector(".ql-editor").lastChild;
        } else {
          field = docSelection.focusNode?.nodeName === "#text" ? docSelection.focusNode.parentNode : docSelection.focusNode;
        }
        let value = field.textContent;
        let selectedText = "";
        let beforeCaret = "";
        let afterCaret = "";
        if (docSelection?.focusNode) {
          selectedText = docSelection.toString();
          selectionStart = Math.min(docSelection?.focusOffset, docSelection?.baseOffset);
          selectionEnd = Math.max(docSelection?.focusOffset, docSelection?.baseOffset);
          beforeCaret = value.substring(0, selectionStart);
          afterCaret = value.substring(selectionEnd);
        }
        wp.data.dispatch("getgenie").setSidebar({
          insertTextCallback: insertTextToInputs,
          insertTextField: field,
          existingInputValue: selectedText
        });
        wp.data.dispatch("getgenie").setContextMenu({
          inputContent: {
            beforeCaret,
            selectedText,
            afterCaret
          },
          insertionField: field,
          contextMenuCallback
        });
      });
    };
    webviewSearchCallback = (field, insertTextToInputs) => {
      wp.data.dispatch("getgenie").setSidebar({
        insertTextCallback: insertTextToInputs,
        insertTextField: field,
        existingInputValue: ""
      });
    };
    bricksScriptHandler = {
      init: (container, className) => {
        this.addGetGenieTriggerBtn(container, className);
      },
      clickHandler: () => this.genieHeadClickHandler(this.contextMenuCallback, this.insertTextToInputs)
    };
    oxygenScriptHandler = {
      init: (container) => {
        this.addGetGenieTriggerBtnForOxygen(container);
      },
      clickHandler: () => this.genieHeadClickHandler(this.contextMenuCallback, this.insertTextToInputs, "oxygen")
    };
    elementorScriptHandler = {
      init: (container, className) => {
        this.addGetGenieTriggerBtn(container, className);
      },
      clickHandler: () => this.genieHeadClickHandler(this.contextMenuCallback, this.insertTextToInputs)
    };
    tmceBtnClickHandler = (Callbacks2, container, className) => {
      if (document.querySelector("#content-tmce")) {
        document.querySelector("#content-tmce").addEventListener("click", function() {
          Callbacks2(container, className);
        });
        document.querySelector("#content-html").addEventListener("click", function() {
          Callbacks2(container, className);
        });
      }
    };
    cptScriptHandler = {
      init: (container, className, isContainer = true) => {
        this.addGetGenieTriggerBtn(container, className, isContainer);
        this.tmceBtnClickHandler(this.addGetGenieTriggerBtn, container, className);
      },
      clickHandler: () => this.genieHeadClickHandler(this.contextMenuCallback, this.insertTextToInputs, "cpt")
    };
    webviewScriptHandler = {
      clickHandler: () => this.genieHeadClickHandlerForWebview(this.contextMenuCallback, this.insertTextToInputs),
      searchCallback: (field) => this.webviewSearchCallback(field, this.insertTextToInputs)
    };
    fluentcrmScriptHandler = {
      init: (container, className) => {
        this.addGetGenieTriggerBtnForFluentCRM(container, className);
      },
      clickHandler: () => this.genieHeadClickHandler(this.contextMenuCallback, this.insertTextToInputs, "fluent-crm")
    };
  };

  // assets/src/admin/js/webview-script.js
  var scriptHandler = new ScriptHandler();
  jQuery(document).ready(function($) {
    if (document.querySelector(".webview")) {
      scriptHandler.webviewScriptHandler.clickHandler();
    }
  });
})();
