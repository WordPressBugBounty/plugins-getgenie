(() => {
  // assets/src/admin/js/fluent-crm.js
  var genieChat = `${window.getGenie.config.assetsUrl}dist/admin/images/genie-chat.svg`;
  (() => {
    let oldPushState = history.pushState;
    history.pushState = function pushState() {
      let ret = oldPushState.apply(this, arguments);
      window.dispatchEvent(new Event("pushstate"));
      window.dispatchEvent(new Event("locationchange"));
      return ret;
    };
    let oldReplaceState = history.replaceState;
    history.replaceState = function replaceState() {
      let ret = oldReplaceState.apply(this, arguments);
      window.dispatchEvent(new Event("replacestate"));
      window.dispatchEvent(new Event("locationchange"));
      return ret;
    };
    window.addEventListener("popstate", () => {
      window.dispatchEvent(new Event("locationchange"));
    });
  })();
  var oldHref;
  var intervalCount = 0;
  window.addEventListener("locationchange", function() {
    if (location.href.match(/email\/templates\/.*/) || location.href.match(/email\/campaigns\/.*/)) {
      if (oldHref !== location.href) {
        oldHref = location.href;
        const timer = setInterval(() => {
          intervalCount += 1;
          const editor = document.querySelector(".fluentcrm_visual_editor");
          if (editor) {
            insertButton(editor);
            clearInterval(timer);
          }
          if (intervalCount > 40)
            clearInterval(timer);
        }, 500);
      }
    } else {
      oldHref = location.href;
    }
  });
  var showGenieChat = () => {
    const sidebar = window.wp.data.select("getgenie").sidebar();
    const open = !sidebar.open;
    const setSidebar = window.wp.data.dispatch("getgenie").setSidebar;
    setSidebar({
      open,
      component: "GenieChat",
      currentTemplate: "genieChat",
      analyzeKeyword: {
        ...sidebar.analyzeKeyword,
        open: false
      },
      generatedOutlines: {
        ...sidebar.generatedOutlines,
        open: false
      },
      chatPersonality: "email-copywriter"
    });
  };
  function createChatButton() {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "genie-chat-opener-btn";
    button.innerHTML = `<img src="${genieChat}" alt="genie-chat" width="25"><span>Write Email with AI</span>`;
    button.addEventListener("click", showGenieChat);
    return button;
  }
  function insertButton(editor) {
    const actions = editor.querySelector(".fluentcrm-actions");
    if (actions) {
      actions.id = "getgenie-fluentcrm-btn";
      const button = createChatButton();
      actions.insertBefore(button, actions.firstChild);
    }
  }
})();
