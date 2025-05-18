(() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // assets/src/admin/js/ReduxManager/StateProps.js
  var { withSelect, withDispatch } = wp.data;
  var namespace = "getgenie";
  var StateProps = {
    sidebar: withSelect((select) => {
      return {
        sidebar: select(namespace).sidebar()
      };
    }),
    contextMenu: withSelect((select) => {
      return {
        contextMenu: select(namespace).contextMenu()
      };
    }),
    userHistoryData: withSelect((select) => {
      return {
        userHistoryData: select(namespace).userHistoryData()
      };
    }),
    templates: withSelect((select) => {
      return {
        templates: select(namespace).templates()
      };
    }),
    setTemplates: withDispatch((dispatch) => {
      return {
        setTemplates(value) {
          dispatch(namespace).setTemplates(value);
        }
      };
    }),
    limitUsage: withSelect((select) => {
      return {
        limitUsage: select(namespace).limitUsage()
      };
    }),
    setLimitUsage: withDispatch((dispatch) => {
      return {
        setLimitUsage(value) {
          dispatch(namespace).setLimitUsage(value);
        }
      };
    }),
    setSidebar: withDispatch((dispatch) => {
      return {
        setSidebar(value) {
          dispatch(namespace).setSidebar(value);
        }
      };
    }),
    setContextMenu: withDispatch((dispatch) => {
      return {
        setContextMenu(value) {
          dispatch(namespace).setContextMenu(value);
        }
      };
    }),
    setUserHistoryData: withDispatch((dispatch) => {
      return {
        setUserHistoryData(value) {
          dispatch(namespace).setUserHistoryData(value);
        }
      };
    }),
    setCurrentTemplate: withDispatch((dispatch) => {
      return {
        setCurrentTemplate(value) {
          dispatch(namespace).setCurrentTemplate(value);
        }
      };
    }),
    currentTemplate: withSelect((select) => {
      return {
        currentTemplate: select(namespace).getCurrentTemplate()
      };
    }),
    getTemplateInputs: withSelect((select) => {
      return {
        getTemplateInputs: select(namespace).getTemplateInputs()
      };
    }),
    getInputs: withSelect((select) => {
      return {
        getInputs: select(namespace).getInputs()
      };
    }),
    setInput: withDispatch((dispatch) => {
      return {
        setInput(name, value) {
          dispatch(namespace).setInput(name, value);
        }
      };
    }),
    resetSidebar: withDispatch((dispatch) => {
      return {
        resetSidebar(name, value) {
          dispatch(namespace).resetSidebar();
        }
      };
    }),
    resetTemplateInputs: withDispatch((dispatch) => {
      return {
        resetTemplateInputs(value) {
          dispatch(namespace).resetTemplateInputs(value);
        }
      };
    })
  };
  var StateProps_default = StateProps;

  // assets/src/admin/js/ReduxManager/index.js
  var { compose } = wp.compose;
  var ComposeComponents = (Component, action_list = []) => {
    if (!action_list.length) {
      return Component;
    }
    let combineAction = [];
    action_list.forEach((key) => {
      let ac = StateProps_default[key];
      if (ac) {
        combineAction.push(ac);
      }
    });
    return compose(combineAction)(Component);
  };

  // assets/src/admin/js/Common/Utilities/templates.js
  var sidebar = {
    __: window?.wp?.i18n?.__ || ((text, domain) => text)
  };
  var templateList = {
    "meta-description": {
      "title": sidebar.__("Meta-Description", "getgenie"),
      "templateSlug": "meta-description",
      "description": sidebar.__("Leverage SERP rankings with outstanding meta description of your blog post/page", "getgenie"),
      "inputFields": [
        {
          "label": sidebar.__("Blog Post Title", "getgenie"),
          "name": "blogPostTitle",
          "sample": "What Is Off-Page SEO? A Comprehensive Guide",
          "placeholder": sidebar.__("Enter the blog post title here", "getgenie"),
          "required": true
        },
        {
          "label": sidebar.__("Focus Keyword", "getgenie"),
          "name": "focusKeyword",
          "sample": "Off-Page SEO guide",
          "placeholder": sidebar.__("Enter the focus keyword/keyphrase for this meta description", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "listicle-ideas": {
      "title": sidebar.__("Listicle Ideas", "getgenie"),
      "templateSlug": "listicle-ideas",
      "description": sidebar.__("Generate title ideas for listicles for your given topic and get ahead of your competition", "getgenie"),
      "inputFields": [
        {
          "label": sidebar.__("Topic", "getgenie"),
          "name": "topic",
          "sample": "Enter the topic for listicle ideas",
          "placeholder": sidebar.__("Enter the topic and additional instructions (if any) for the listicle ideas", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "definition": {
      "title": sidebar.__("Definition", "getgenie"),
      "templateSlug": "definition",
      "description": sidebar.__("Need a brief explanation? Want to utilize featured snippets? Try our definition template", "getgenie"),
      "inputFields": [
        {
          "label": sidebar.__("Topic", "getgenie"),
          "name": "topic",
          "sample": "venture capital",
          "placeholder": sidebar.__("Enter the topic for the definition", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "sentence-rewriter": {
      "title": sidebar.__("Sentence Rewriter", "getgenie"),
      "templateSlug": "sentence-rewriter",
      "description": sidebar.__("Get different variations of your given sentence with rewritten versions from Genie", "getgenie"),
      "inputFields": [
        {
          "label": sidebar.__("Sentence to Rewrite", "getgenie"),
          "name": "sentenceToRewrite",
          "sample": "When we talk about a particular topic, clarity is very important.",
          "placeholder": sidebar.__("Enter your sentence to get a rewritten version", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "featured-snippet-numbered-list": {
      "title": sidebar.__("Featured Snippet (Numbered List)", "getgenie"),
      "templateSlug": "featured-snippet-numbered-list",
      "description": sidebar.__("Get a detailed numbered list of how to do something with a simple one-liner input", "getgenie"),
      "inputFields": [
        {
          "label": sidebar.__("Topic", "getgenie"),
          "name": "topic",
          "sample": "how to take care of a cat",
          "placeholder": sidebar.__("Enter the topic for the list of steps", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "title-ideas": {
      "title": sidebar.__("Title Ideas", "getgenie"),
      "templateSlug": "title-ideas",
      "description": sidebar.__("Get multiple title ideas off an initial title to get a variation or deploying in headers", "getgenie"),
      "inputFields": [
        {
          "label": sidebar.__("Topic", "getgenie"),
          "name": "topic",
          "sample": "Fast fashion trend",
          "placeholder": sidebar.__("Enter your desired topic for title generation", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "short-answer": {
      "title": sidebar.__("Short Answer", "getgenie"),
      "templateSlug": "short-answer",
      "description": sidebar.__("Generate brief, one-sentence answer to any given question to utilize in your content", "getgenie"),
      "inputFields": [
        {
          "label": sidebar.__("Question", "getgenie"),
          "name": "question",
          "sample": "What is depreciation in accounting?",
          "placeholder": sidebar.__("Enter your question", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "related-topics": {
      "title": sidebar.__("Related Topics", "getgenie"),
      "templateSlug": "related-topics",
      "description": sidebar.__("Stuck with your content? Input a paragraph and get a list of related topics to cover", "getgenie"),
      "inputFields": [
        {
          "label": sidebar.__("Content", "getgenie"),
          "name": "content",
          "sample": "Bollywood, an Indian Hollywood, refers to the Hindi-language movie industry in India. The term Bollywood combines Bombay (where most Hindi movies are made) and Hollywood (where most American movies are made). Bollywood makes many movies each year. Many Bollywood movies are called Masala movies.",
          "placeholder": sidebar.__("Enter a paragraph/snippet of content", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "paragraph-compression": {
      "title": sidebar.__("Paragraph Compression", "getgenie"),
      "templateSlug": "paragraph-compression",
      "description": sidebar.__("Generate a short summary of a paragraph keeping the gist, tone, and context intact", "getgenie"),
      "inputFields": [
        {
          "label": sidebar.__("Paragraph", "getgenie"),
          "name": "paragraph",
          "sample": "With the introduction of a \u2018professional portfolio\u2019 by LinkedIn, you can now easily share visual content on your LinkedIn profile to demonstrate your capabilities more than what CVs ever could. From portfolio pieces to presentations to videos, you can now display your work on your profile by importing the content from a webpage or uploading your favorite work pieces straight from your computer. Instead of telling potential employers what you can do, display your work and let it speak for itself.",
          "placeholder": sidebar.__("Enter the paragraph to be summarized", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "next-sentence": {
      "title": sidebar.__("Next Sentence", "getgenie"),
      "templateSlug": "next-sentence",
      "description": sidebar.__("Provide a sentence/line of content and get a follow-up sentence in return maintaining coherence", "getgenie"),
      "inputFields": [
        {
          "label": sidebar.__("Sentence", "getgenie"),
          "name": "sentence",
          "sample": "It was a cold winter night, perfect for Vlad the vampire to go out hunting for his next prey.",
          "placeholder": sidebar.__("Enter the sentence to be followed-up", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "paragraph-rewriter": {
      "title": sidebar.__("Paragraph Rewriter", "getgenie"),
      "templateSlug": "paragraph-rewriter",
      "description": sidebar.__("Put a new and unique spin to your given content with rewritten versions of it", "getgenie"),
      "inputFields": [
        {
          "label": sidebar.__("Paragraph", "getgenie"),
          "name": "paragraph",
          "sample": "Most of the people of our country are farmers, workers, and day laborers who live below the poverty line. But the price of essential commodities is soaring higher and higher. It has now become impossible for them to make both ends meet. It has severely hit the day laborers, the lower and middle-class families, and the salaried class too. The prices of rice, vegetables, clothes, mustard oil, medicine, and other essential commodities are also increasing by leaps and bounds.",
          "placeholder": sidebar.__("Enter the paragraph to be rewritten", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "next-paragraph": {
      "title": sidebar.__("Next Paragraph", "getgenie"),
      "templateSlug": "next-paragraph",
      "description": sidebar.__("Input your paragraph/lines of content and get a contextual follow-up content in return", "getgenie"),
      "inputFields": [
        {
          "label": sidebar.__("Paragraph", "getgenie"),
          "name": "paragraph",
          "sample": "In less than a generation, social media has evolved from direct electronic information exchange, to virtual gathering place, to retail platform, to vital 21st-century marketing tool.",
          "placeholder": sidebar.__("Enter the paragraph to be followed-up", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "list-of-questions": {
      "title": sidebar.__("List of Questions", "getgenie"),
      "templateSlug": "list-of-questions",
      "description": sidebar.__("Generate lists of questions for your given topic and utilize them in your title/content", "getgenie"),
      "inputFields": [
        {
          "label": sidebar.__("Topic", "getgenie"),
          "name": "topic",
          "sample": "Breakfast at home",
          "placeholder": sidebar.__("Enter the topic for the list of related questions", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "paragraph-answer": {
      "title": sidebar.__("Paragraph Answer", "getgenie"),
      "templateSlug": "paragraph-answer",
      "description": sidebar.__("Get paragraph-long answers of informative content for every question you ask", "getgenie"),
      "inputFields": [
        {
          "label": sidebar.__("Question", "getgenie"),
          "name": "question",
          "sample": "Which country is going to be the next super power of the world?",
          "placeholder": sidebar.__("Enter the question for a detailed answer", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "summary-bullets": {
      "title": sidebar.__("Summary Bullets", "getgenie"),
      "templateSlug": "summary-bullets",
      "description": sidebar.__("Get a bulleted list of summary for a given topic with the same tone and context", "getgenie"),
      "inputFields": [
        {
          "label": sidebar.__("Paragraph", "getgenie"),
          "name": "paragraph",
          "sample": "The Greek gods were all born from the union between a god and a mortal woman. Zeus was born from the union between his father, Kronos, and his mother, Rhea. Athena was born from the union of Zeus with Metis, or wisdom. Apollo was born from the union with Leto or Artemis. Poseidon was born from the union his father, Uranus, and Gaia, or Earth. Demeter was born from the union her husband, Persephone, and Kore, or Spring.",
          "placeholder": sidebar.__("Enter the paragraph for summarized list", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "paragraph-for-heading": {
      "title": sidebar.__("Paragraph for Heading", "getgenie"),
      "templateSlug": "paragraph-for-heading",
      "description": sidebar.__("Input the heading/title of your long-form content and receive an introductory paragraph", "getgenie"),
      "inputFields": [
        {
          "label": sidebar.__("Title/Heading", "getgenie"),
          "name": "title/heading",
          "sample": "French new wave as a film movement",
          "placeholder": sidebar.__("Enter the title/heading", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "outline": {
      "title": sidebar.__("Outline", "getgenie"),
      "templateSlug": "outline",
      "description": sidebar.__("Create an outline of your long-form content based on a title and a brief description", "getgenie"),
      "inputFields": [
        {
          "label": sidebar.__("Blog context", "getgenie"),
          "name": "blogContext",
          "sample": "Nulled or cracked software might contain malware and viruses that infect your computer. These viruses steal your data and sometimes make your device invalid. So, it is highly recommended not to use a cracked version of the software. Besides security reasons, it's completely unethical and like theft. ",
          "placeholder": sidebar.__("Enter a few lines of the intro to get an outline", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "product-description": {
      "title": sidebar.__("Product Description", "getgenie"),
      "templateSlug": "product-description",
      "description": sidebar.__("Name any product (or service) and get Genie to write a convincing description for it", "getgenie"),
      "inputFields": [
        {
          "label": sidebar.__("Product Name", "getgenie"),
          "name": "productName",
          "sample": "Jhakanaka",
          "placeholder": sidebar.__("Enter the product name", "getgenie"),
          "required": true
        },
        {
          "label": sidebar.__("Product Brief", "getgenie"),
          "name": "productBrief",
          "sample": "Jhakanaka is a music player. A product of XpeedStudio. Plays all types of music and podcast. Speech-to-text technology for lyrics for music and subtitles for podcasts. Target audience: teens and young adults. Audiobook feature upcoming.",
          "placeholder": sidebar.__("Explain briefly about the product, or which features to focus on", "getgenie"),
          "required": false
        }
      ],
      "categories": {}
    },
    "woocommerce-product-long-description": {
      "title": sidebar.__("WooCommerce Product Long Description", "getgenie"),
      "templateSlug": "woocommerce-product-long-description",
      "description": sidebar.__("Generate keyword-optimized & conversion-friendly long descriptions for your WooCommerce products", "getgenie"),
      "inputFields": [
        {
          "label": sidebar.__("Product Name", "getgenie"),
          "name": "productName",
          "sample": "JBL C100SI",
          "placeholder": sidebar.__("Enter the product name", "getgenie"),
          "required": true
        },
        {
          "label": sidebar.__("Keywords", "getgenie"),
          "name": "keywords",
          "sample": "in-ear headphones, JBL pure bass, one-button remote, angled buds, black, comfort fit, suitable for punchy bass and rock music, 30-day replacement warranty, worldwide free shipping",
          "placeholder": sidebar.__("Specify the keywords/key phrases for the product long description", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "taglines": {
      "title": sidebar.__("Taglines", "getgenie"),
      "templateSlug": "taglines",
      "description": sidebar.__("Get genie to write taglines for your brands, products, services, or any content", "getgenie"),
      "inputFields": [
        {
          "label": sidebar.__("Product Name", "getgenie"),
          "name": "productName",
          "sample": "Dunkin' Donuts",
          "placeholder": sidebar.__("Enter the product name", "getgenie"),
          "required": true
        },
        {
          "label": sidebar.__("Product Brief", "getgenie"),
          "name": "productBrief",
          "sample": "Dunkin\u2019 Donuts is the world\u2019s leading baked goods and coffee chain, serving more than 3 million customers per day. Dunkin\u2019 Donuts sells 52 varieties of donuts and more than a dozen coffee beverages as well as an array of bagels, sandwiches & more!",
          "placeholder": sidebar.__("Explain briefly about the product, or which features to focus on", "getgenie"),
          "required": false
        }
      ],
      "categories": {}
    },
    "social-media-postcopy": {
      "title": sidebar.__("Social Media Post/Copy", "getgenie"),
      "templateSlug": "social-media-postcopy",
      "description": sidebar.__("Write copies for all your social media handles using a brief description of your product", "getgenie"),
      "inputFields": [
        {
          "label": sidebar.__("Product/Brand Name", "getgenie"),
          "name": "product/brandName",
          "sample": "Semrush",
          "placeholder": sidebar.__("Enter the name of the product/brand", "getgenie"),
          "required": true
        },
        {
          "label": sidebar.__("Product Brief", "getgenie"),
          "name": "productBrief",
          "sample": "Semrush is like a keyword research tool, Google Trends, Moz, Hootsuite, and SimilarWeb in one. Get measurable results from online marketing with Semrush \u2014 do SEO, content marketing, competitor research, PPC, and social media marketing from just one platform.",
          "placeholder": sidebar.__("Explain briefly about the product, or which features to focus on", "getgenie"),
          "required": false
        }
      ],
      "categories": {}
    },
    "content-rewriter": {
      "title": sidebar.__("Content Rewriter", "getgenie"),
      "templateSlug": "content-rewriter",
      "description": sidebar.__("Get AI-paraphrased variations of your given sentence/paragraph/content from Genie", "getgenie"),
      "inputFields": [
        {
          "label": sidebar.__("Your Content", "getgenie"),
          "name": "yourContent",
          "sample": "Dengue fever, also known as breakbone fever, is a mosquito-borne infection that can lead to a severe flu-like illness. It is caused by four different viruses and spread by Aedes mosquitoes.",
          "placeholder": sidebar.__("Provide the sentence/paragraph/content you want to be rewritten/paraphrased", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "call-to-action": {
      "title": sidebar.__("Call to Action", "getgenie"),
      "templateSlug": "call-to-action",
      "description": sidebar.__("Increase your CTA button/anchor's CTR using the magical persuasive words of Genie", "getgenie"),
      "inputFields": [
        {
          "label": sidebar.__("Context/Description", "getgenie"),
          "name": "context/description",
          "sample": "a lead magnet downloader button that gives users a content calendar for free",
          "placeholder": sidebar.__("Provide the context or the details of the call-to-action (CTA) button/link", "getgenie"),
          "required": true
        },
        {
          "label": sidebar.__("Product/Brand Name ", "getgenie"),
          "name": "product/brandName",
          "sample": "Ollyo",
          "placeholder": sidebar.__("You can provide the name of the product/brand to be included in the CTA content", "getgenie"),
          "required": false
        }
      ],
      "categories": {}
    },
    "conclusion": {
      "title": sidebar.__("Conclusion", "getgenie"),
      "templateSlug": "conclusion",
      "description": sidebar.__("Draw a relevant conclusion for your blog post or any content using Genie's AI magic", "getgenie"),
      "inputFields": [
        {
          "label": sidebar.__("Title", "getgenie"),
          "name": "title",
          "sample": "How to Write a Blog Post: A Step-by-Step Guide",
          "placeholder": sidebar.__("Enter the title of the blog post/content that needs a conclusion from GetGenie", "getgenie"),
          "required": true
        },
        {
          "label": sidebar.__("Intro", "getgenie"),
          "name": "intro",
          "sample": "Writing a blog can be an extremely rewarding and fun activity. But the task of creating a successful blog post can seem daunting, especially if you\u2019re just starting out. From coming up with ideas to crafting compelling content, there\u2019s a lot to consider when writing a blog post. The good news is that with the proper guidance and strategy in place, anyone can craft a blog post that will capture their readers\u2019 attention. In this guide, we\u2019ll provide step-by-step instructions to help you write a blog post that will attract readers and keep them engaged.",
          "placeholder": sidebar.__("Provide the introduction of the blog post/content for a better context", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "linkedin-post": {
      "title": sidebar.__("LinkedIn Post", "getgenie"),
      "templateSlug": "linkedin-post",
      "description": sidebar.__("For yourself or your company/brand, professional posts made easy with AI for LinkedIn", "getgenie"),
      "inputFields": [
        {
          "label": sidebar.__("Topic", "getgenie"),
          "name": "topic",
          "sample": "WordPress plugins",
          "placeholder": sidebar.__("Enter the topic", "getgenie"),
          "required": true
        },
        {
          "label": sidebar.__("Context", "getgenie"),
          "name": "context",
          "sample": "make the post about the future of WordPress plugins with the advent of AI and how AI can be incorporated into plugins",
          "placeholder": sidebar.__("Explain what the post is about and which topics should be touched upon", "getgenie"),
          "required": true
        },
        {
          "label": sidebar.__("Brand name", "getgenie"),
          "name": "brandName",
          "sample": "Wpmet",
          "placeholder": sidebar.__("Enter the brand name", "getgenie"),
          "required": false
        }
      ],
      "categories": {}
    },
    "instagram-bio": {
      "title": sidebar.__("Instagram Bio", "getgenie"),
      "templateSlug": "instagram-bio",
      "description": sidebar.__("Make lasting impressions with the perfect instagram bio for your handle from AI", "getgenie"),
      "inputFields": [
        {
          "label": sidebar.__("Brand name", "getgenie"),
          "name": "brandName",
          "sample": "Asadullah Galib",
          "placeholder": sidebar.__("Enter the brand name", "getgenie"),
          "required": true
        },
        {
          "label": sidebar.__("Keywords", "getgenie"),
          "name": "keywords",
          "sample": "angel investor, digital marketer of Arraytics, YouTuber",
          "placeholder": sidebar.__("Specify the keywords/key phrases for the instagram bio", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "instagram-caption": {
      "title": sidebar.__("Instagram Caption", "getgenie"),
      "templateSlug": "instagram-caption",
      "description": sidebar.__("Generate AI-powered captions for your instagram images in the blink of an eye", "getgenie"),
      "inputFields": [
        {
          "label": sidebar.__("Brand name", "getgenie"),
          "name": "brandName",
          "sample": "Pizzak",
          "placeholder": sidebar.__("Enter the brand name", "getgenie"),
          "required": true
        },
        {
          "label": sidebar.__("Context", "getgenie"),
          "name": "context",
          "sample": "pizzak is a cloud kitchen that serves pizza, wings, fries, etc. The post will feature it's 18-hour delivery system even at midnight, from 12 pm to 6 am.",
          "placeholder": sidebar.__("Provide the topic, context or any additional instruction for the instagram caption", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "pros-and-cons": {
      "title": sidebar.__("Pros and Cons", "getgenie"),
      "templateSlug": "pros-and-cons",
      "description": sidebar.__("Generate a list of pros and cons about any given topic to utilize in your content", "getgenie"),
      "inputFields": [
        {
          "label": sidebar.__("Topic", "getgenie"),
          "name": "topic",
          "sample": "Divulgaci\xF3n por correo electr\xF3nico en fr\xEDo",
          "placeholder": sidebar.__("Enter a topic to get the pros and cons of it", "getgenie"),
          "required": true
        },
        {
          "label": sidebar.__("Context/Additional Instruction", "getgenie"),
          "name": "context/additionalInstruction",
          "sample": "Dame las ventajas y desventajas de la divulgaci\xF3n en fr\xEDo a trav\xE9s de correos electr\xF3nicos",
          "placeholder": sidebar.__("You can give additional instruction/context for a more accurate output (optional)", "getgenie"),
          "required": false
        }
      ],
      "categories": {}
    },
    "woocommerce-product-short-description": {
      "title": sidebar.__("WooCommerce Product Short Description", "getgenie"),
      "templateSlug": "woocommerce-product-short-description",
      "description": sidebar.__("Get short descriptions/excerpts for your WooCommerce products optimized for your desired keywords", "getgenie"),
      "inputFields": [
        {
          "label": sidebar.__("Product Name", "getgenie"),
          "name": "productName",
          "sample": "F\u0103in\u0103 de porumb Kellogg's cu piure de c\u0103p\u0219uni adev\u0103rat",
          "placeholder": sidebar.__("Enter the brand name", "getgenie"),
          "required": true
        },
        {
          "label": sidebar.__("Keywords", "getgenie"),
          "name": "keywords",
          "sample": "cereale pentru micul dejun, vitamina C, cu con\u021Binut sc\u0103zut de gr\u0103simi, f\u0103r\u0103 colesterol, 300 grame",
          "placeholder": sidebar.__("Specify the keywords/key phrases for the product long description", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "tweet-twitter-post": {
      "title": sidebar.__("Tweet (Twitter Post)", "getgenie"),
      "templateSlug": "tweet-twitter-post",
      "description": sidebar.__("Short but impactful \u2014 that's what your tweets will be when you generate them with GetGenie", "getgenie"),
      "inputFields": [
        {
          "label": sidebar.__("Context/Instruction", "getgenie"),
          "name": "context/instruction",
          "sample": "steps of how to optimize old youtube videos",
          "placeholder": sidebar.__("Enter context/Instruction ", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "twitter-thread": {
      "title": sidebar.__("Twitter Thread", "getgenie"),
      "templateSlug": "twitter-thread",
      "description": sidebar.__("Create engaging Twitter threads on any topic and up your Twitter game using AI magic", "getgenie"),
      "inputFields": [
        {
          "label": sidebar.__("Context/Instruction", "getgenie"),
          "name": "context/instruction",
          "sample": "establishing yourself as a personal brand",
          "placeholder": sidebar.__("Enter the context/instruction", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "explain-why": {
      "title": sidebar.__("Explain Why", "getgenie"),
      "templateSlug": "explain-why",
      "description": sidebar.__("Questions need answering and concepts need explaining \u2014 let\u2019s explain why", "getgenie"),
      "inputFields": [
        {
          "label": sidebar.__("Question", "getgenie"),
          "name": "question",
          "sample": "Why can't we live on mars?",
          "placeholder": sidebar.__("Enter a WH-question question that you need explained", "getgenie"),
          "required": true
        },
        {
          "label": sidebar.__("Context", "getgenie"),
          "name": "context",
          "sample": "tell me the scientific as well as anthropological reasons",
          "placeholder": sidebar.__("You can give additional instruction/context for a more accurate output", "getgenie"),
          "required": false
        }
      ],
      "categories": {}
    },
    "feature-benefit": {
      "title": sidebar.__("Feature - Benefit", "getgenie"),
      "templateSlug": "feature-benefit",
      "description": sidebar.__("Describe what your product/service does and get the detailed benefits in return", "getgenie"),
      "inputFields": [
        {
          "label": sidebar.__("Product Name", "getgenie"),
          "name": "productName",
          "sample": "Dove Original Beauty Bar",
          "placeholder": sidebar.__("Enter the product name", "getgenie"),
          "required": true
        },
        {
          "label": sidebar.__("Product Description", "getgenie"),
          "name": "productDescription",
          "sample": "Dove Original Beauty Bar and gentle skin cleanser combine a gentle cleansing formula with our signature 1/4 moisturizing cream to hydrate and nourish skin, instead of leaving skin feeling dry and tight like an ordinary bar soap might. Dove mild cleansers help skin retain its natural moisture, which helps replenish skin-natural nutrients that can be lost during the cleansing process.",
          "placeholder": sidebar.__("Enter the product's features here to generate the benefits", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "before-after-bridge-bab": {
      "title": sidebar.__("Before After Bridge (BAB)", "getgenie"),
      "templateSlug": "before-after-bridge-bab",
      "description": sidebar.__("BAB formula shows the before and after of your product/solution in your content", "getgenie"),
      "inputFields": [
        {
          "label": sidebar.__("Product Name", "getgenie"),
          "name": "productName",
          "sample": "Realme Narzo 50A",
          "placeholder": sidebar.__("Enter the product name", "getgenie"),
          "required": true
        },
        {
          "label": sidebar.__("Product Description", "getgenie"),
          "name": "productDescription",
          "sample": "Equipped with a Helio G85 Gaming Processor, the Realme Narzo 50A is a high-speed smartphone that lets you play intense games and binge-watch favorite shows. This smartphone features a 6000 mAh Battery and 18W Quick Charge for uninterrupted performance, and a 50 MP AI Triple Camera to click beautiful photos.",
          "placeholder": sidebar.__("Enter the product description", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "bullet-point-to-answers": {
      "title": sidebar.__("Bullet Point to Answers", "getgenie"),
      "templateSlug": "bullet-point-to-answers",
      "description": sidebar.__("Get bulleted lists of answers to related questions while writing long-form content", "getgenie"),
      "inputFields": [
        {
          "label": sidebar.__("Question", "getgenie"),
          "name": "question",
          "sample": "How to make a cup of tea?",
          "placeholder": sidebar.__("Enter the question to get an answer in bullet points", "getgenie"),
          "required": true
        },
        {
          "label": sidebar.__("Additional Instruction", "getgenie"),
          "name": "additionalInstruction",
          "sample": "describe how to prepare a cup of tea step by step",
          "placeholder": sidebar.__("You can give instruction/context for a more accurate output (optional)", "getgenie"),
          "required": false
        }
      ],
      "categories": {}
    },
    "woocommerce-product-title": {
      "title": sidebar.__("WooCommerce Product Title", "getgenie"),
      "templateSlug": "woocommerce-product-title",
      "description": sidebar.__("Generate keyword-optimized product titles to rank & convert with your WooCommerce website", "getgenie"),
      "inputFields": [
        {
          "label": sidebar.__("Product Name", "getgenie"),
          "name": "productName",
          "sample": "JBL C100SI",
          "placeholder": sidebar.__("Enter the product name", "getgenie"),
          "required": true
        },
        {
          "label": sidebar.__("Keywords", "getgenie"),
          "name": "keywords",
          "sample": "in-ear headphone, JBL pure bass, one button remote, angled buds, black",
          "placeholder": sidebar.__("Specify which keywords should the product title be based on", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "product-ad-copy": {
      "title": sidebar.__("Product Ad Copy", "getgenie"),
      "templateSlug": "product-ad-copy",
      "description": sidebar.__("Generate a basic ad copy for your product inputting only a brief introduction/description", "getgenie"),
      "inputFields": [
        {
          "label": sidebar.__("Product Name", "getgenie"),
          "name": "productName",
          "sample": "YOSUDA Exercise Bike L-007A",
          "placeholder": sidebar.__("Enter the product name", "getgenie"),
          "required": true
        },
        {
          "label": sidebar.__("Product Description", "getgenie"),
          "name": "productDescription",
          "sample": "Well-built exercise bike from the inside out. With its rock-solid foundation and athletic + aesthetic design, it's at the top of the game. With thickened frame tubes, precision manufacturing overcomes the wobbly defect of most of the cycle bikes on the market. Give you safer riding. Excellent bearing capacity for riders up to 330LBS. This is an energetic exercising bike, bringing you a cycling experience which is compared with riding classes!",
          "placeholder": sidebar.__("Enter the product description", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "problem-agitate-solution-pas": {
      "title": sidebar.__("Problem, Agitate, Solution (PAS)", "getgenie"),
      "templateSlug": "problem-agitate-solution-pas",
      "description": sidebar.__("Make use of the proven copywriting formula \u2014 Problem, Agitate, Solution (PAS)", "getgenie"),
      "inputFields": [
        {
          "label": sidebar.__("Product Name", "getgenie"),
          "name": "productName",
          "sample": "Canva",
          "placeholder": sidebar.__("Enter the product name", "getgenie"),
          "required": true
        },
        {
          "label": sidebar.__("Product Description", "getgenie"),
          "name": "productDescription",
          "sample": "Canva is a graphic design platform, used to create social media graphics, presentations, posters, documents and other visual content. The app includes templates for users to use. The platform is free to use and offers paid subscriptions such as Canva Pro and Canva for Enterprise for additional functionality.",
          "placeholder": sidebar.__("Enter the product description", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    },
    "attention-interest-desire-action-aida": {
      "title": sidebar.__("Attention Interest Desire Action (AIDA)", "getgenie"),
      "templateSlug": "attention-interest-desire-action-aida",
      "description": sidebar.__("Generate sales/marketing copies by applying the renowned AIDA formula", "getgenie"),
      "inputFields": [
        {
          "label": sidebar.__("Product Name", "getgenie"),
          "name": "productName",
          "sample": "Typeform",
          "placeholder": sidebar.__("Enter the product name", "getgenie"),
          "required": true
        },
        {
          "label": sidebar.__("Product Description", "getgenie"),
          "name": "productDescription",
          "sample": "Typeform is a popular online form builder and survey tool. It specializes in a conversational one question at a time experience that feels more like a conversation when compared to the regular form flow.",
          "placeholder": sidebar.__("Enter the product description", "getgenie"),
          "required": true
        }
      ],
      "categories": {}
    }
  };
  var templates = Object.values(templateList || {}).filter((item) => !["sentence-rewriter", "paragraph-rewriter"].includes(item?.templateSlug));
  var templates_default = templates;

  // assets/src/admin/js/Common/Utilities/languages.js
  var languageList = {
    "languageList": {
      "en": {
        "language_name": "English",
        "language_short_code": "en",
        "language_writing_direction": "ltr",
        "sml": true,
        "oneClick": true
      },
      "he": {
        "language_name": "Hebrew",
        "language_short_code": "he",
        "language_writing_direction": "rtl",
        "sml": true,
        "oneClick": true
      },
      "ar": {
        "language_name": "Arabic",
        "language_short_code": "ar",
        "language_writing_direction": "rtl",
        "sml": true,
        "oneClick": true
      },
      "ja": {
        "language_name": "Japanese",
        "language_short_code": "ja",
        "language_writing_direction": "ltr",
        "sml": true,
        "oneClick": true
      },
      "ko": {
        "language_name": "Korean",
        "language_short_code": "ko",
        "language_writing_direction": "ltr",
        "sml": true,
        "oneClick": true
      },
      "hi": {
        "language_name": "Hindi",
        "language_short_code": "hi",
        "language_writing_direction": "ltr",
        "sml": true,
        "oneClick": true
      },
      "ur": {
        "language_name": "Urdu",
        "language_short_code": "ur",
        "language_writing_direction": "rtl",
        "sml": true,
        "oneClick": true
      },
      "zh-TW": {
        "language_name": "Chinese (Traditional)",
        "language_short_code": "zh-TW",
        "language_writing_direction": "ltr",
        "sml": true,
        "oneClick": true
      },
      "zh": {
        "language_name": "Chinese (Simplified)",
        "language_short_code": "zh",
        "language_writing_direction": "ltr",
        "sml": true,
        "oneClick": true
      },
      "id": {
        "language_name": "Indonesian",
        "language_short_code": "id",
        "language_writing_direction": "ltr",
        "sml": true,
        "oneClick": true
      },
      "vi": {
        "language_name": "Vietnamese",
        "language_short_code": "vi",
        "language_writing_direction": "ltr",
        "sml": true,
        "oneClick": true
      },
      "ms": {
        "language_name": "Malay",
        "language_short_code": "ms",
        "language_writing_direction": "ltr",
        "sml": true,
        "oneClick": true
      },
      "ru": {
        "language_name": "Russian",
        "language_short_code": "ru",
        "language_writing_direction": "ltr",
        "sml": true,
        "oneClick": true
      },
      "tr": {
        "language_name": "Turkish",
        "language_short_code": "tr",
        "language_writing_direction": "ltr",
        "sml": true,
        "oneClick": true
      },
      "uk": {
        "language_name": "Ukrainian",
        "language_short_code": "uk",
        "language_writing_direction": "ltr",
        "sml": true,
        "oneClick": true
      },
      "th": {
        "language_name": "Thai",
        "language_short_code": "th",
        "language_writing_direction": "ltr",
        "sml": true,
        "oneClick": true
      },
      "es": {
        "language_name": "Spanish",
        "language_short_code": "es",
        "language_writing_direction": "ltr",
        "sml": true,
        "oneClick": true
      },
      "de": {
        "language_name": "German",
        "language_short_code": "de",
        "language_writing_direction": "ltr",
        "sml": true,
        "oneClick": true
      },
      "fr": {
        "language_name": "French",
        "language_short_code": "fr",
        "language_writing_direction": "ltr",
        "sml": true,
        "oneClick": true
      },
      "pt": {
        "language_name": "Portuguese",
        "language_short_code": "pt",
        "language_writing_direction": "ltr",
        "sml": true,
        "oneClick": true
      },
      "it": {
        "language_name": "Italian",
        "language_short_code": "it",
        "language_writing_direction": "ltr",
        "sml": true,
        "oneClick": true
      },
      "pl": {
        "language_name": "Polish",
        "language_short_code": "pl",
        "language_writing_direction": "ltr",
        "sml": true,
        "oneClick": true
      },
      "nl": {
        "language_name": "Dutch",
        "language_short_code": "nl",
        "language_writing_direction": "ltr",
        "sml": true,
        "oneClick": true
      },
      "da": {
        "language_name": "Danish",
        "language_short_code": "da",
        "language_writing_direction": "ltr",
        "sml": true,
        "oneClick": true
      },
      "ro": {
        "language_name": "Romanian",
        "language_short_code": "ro",
        "language_writing_direction": "ltr",
        "sml": true,
        "oneClick": true
      },
      "hu": {
        "language_name": "Hungarian",
        "language_short_code": "hu",
        "language_writing_direction": "ltr",
        "sml": true,
        "oneClick": true
      },
      "sv": {
        "language_name": "Swedish",
        "language_short_code": "sv",
        "language_writing_direction": "ltr",
        "sml": true,
        "oneClick": true
      },
      "el": {
        "language_name": "Greek",
        "language_short_code": "el",
        "language_writing_direction": "ltr",
        "sml": true,
        "oneClick": true
      },
      "cs": {
        "language_name": "Czech",
        "language_short_code": "cs",
        "language_writing_direction": "ltr",
        "sml": true,
        "oneClick": true
      },
      "sk": {
        "language_name": "Slovak",
        "language_short_code": "sk",
        "language_writing_direction": "ltr",
        "sml": true,
        "oneClick": true
      },
      "lv": {
        "language_name": "Latvian",
        "language_short_code": "lv",
        "language_writing_direction": "ltr",
        "sml": true,
        "oneClick": true
      },
      "lt": {
        "language_name": "Lithuanian",
        "language_short_code": "lt",
        "language_writing_direction": "ltr",
        "sml": true,
        "oneClick": true
      },
      "bg": {
        "language_name": "Bulgarian",
        "language_short_code": "bg",
        "language_writing_direction": "ltr",
        "sml": true,
        "oneClick": true
      },
      "no": {
        "language_name": "Norwegian",
        "language_short_code": "no",
        "language_writing_direction": "ltr",
        "sml": true,
        "oneClick": true
      },
      "fi": {
        "language_name": "Finnish",
        "language_short_code": "fi",
        "language_writing_direction": "ltr",
        "sml": true,
        "oneClick": true
      }
    }
  };
  var languages = Object.values(languageList.languageList || {});
  languages = languages.map((item) => ({
    label: item?.language_name,
    value: item?.language_short_code,
    writingDirection: item?.language_writing_direction,
    sml: item?.sml,
    oneClick: item?.oneClick
  }));
  var languages_default = languages;

  // assets/src/admin/js/ReduxManager/RegisterStore.js
  var { createReduxStore, register } = wp.data;
  var DEFAULT_STATE = {
    inputs: {},
    sidebar: {
      width: 380,
      isWpModalOpen: false,
      isUsageModalOpen: false,
      currentPostContent: "",
      statisticsScreen: {
        triggered: false,
        loading: false
      },
      statisticsData: "",
      competitorStats: {},
      currentTemplate: "",
      currentWritingMode: "template",
      analyzedContent: {},
      toolbarWriting: false,
      globalTemplateMode: false,
      component: "",
      currentScreen: "",
      open: false,
      headToHeadView: false,
      analyzeKeyword: {
        open: false,
        triggered: false
      },
      analyzingSearchVolume: false,
      analyzingRelatedKeyword: false,
      analyzingCompetitors: false,
      generatedOutlines: {
        open: false,
        loading: false
      },
      paragraphEditorScreen: {
        open: false,
        loading: false
      },
      insertTextCallback: () => "",
      insertTextField: null,
      existingInputValue: "",
      imageUrl: `${window.getGenie.config.assetsUrl}dist/admin/images`,
      rootContainer: document.getElementById("getgenie-container") || "",
      requestId: "",
      languages: languages_default,
      toneOfVoice: [],
      currentLanguage: JSON.parse(localStorage.getItem("getgenie-language")) || "en",
      currentToneOfVoice: JSON.parse(localStorage.getItem("getgenie-toneOfVoice")) || "Standard",
      creativityLevel: JSON.parse(localStorage.getItem("getgenie-creativity")) || 4,
      numberOfResult: JSON.parse(localStorage.getItem("getgenie-numberOfResult")) || 2,
      seoCountry: JSON.parse(localStorage.getItem("getgenie-seoCountry")) || "global",
      maxToken: JSON.parse(localStorage.getItem("getgenie-maxToken")) || 400,
      outputSize: JSON.parse(localStorage.getItem("getgenie-outputSize")) || "default",
      chatPersonality: JSON.parse(localStorage.getItem("getgenie-chatPersonality")) || "general-purpose",
      subscriptionStatistics: {},
      traceCodeMsg: "",
      contentScoreSearchKeyword: "",
      __: window?.wp?.i18n?.__ || ((text, domain) => text)
    },
    templates: {
      list: templates_default
    },
    contextMenu: {
      open: false,
      buttonEvent: {},
      contextMenuCallback: {},
      insertionField: "",
      inputContent: {
        beforeCaret: "",
        selectedText: "",
        afterCaret: ""
      },
      selectedText: "",
      previousContent: ""
    },
    userHistoryData: {
      allHistory: [],
      currentHistoryData: {},
      isCallable: true,
      hasMoreData: true
    },
    limitUsage: {
      usagePercentage: {},
      subscriptionUsagesLimit: {},
      siteUsagesLimit: {},
      subscription_type: "pro"
    }
  };
  var actions = {
    setSidebar(value) {
      return {
        type: "SET_SIDEBAR",
        value
      };
    },
    setContextMenu(value) {
      return {
        type: "SET_CONTEXT_MENU",
        value
      };
    },
    setUserHistoryData(value) {
      return {
        type: "SET_USER_HISTORY_DATA",
        value
      };
    },
    setCurrentTemplate(value) {
      return {
        type: "SET_CURRENT_TEMPLATE",
        value
      };
    },
    setInput(name, value) {
      return {
        type: "SET_INPUT",
        name,
        value
      };
    },
    setTemplates(value) {
      return {
        type: "SET_TEMPLATES",
        value
      };
    },
    setLimitUsage(value) {
      return {
        type: "SET_LIMIT_USAGE",
        value
      };
    },
    resetSidebar(value) {
      return {
        type: "RESET_SIDEBAR",
        value
      };
    },
    resetTemplateInputs(value) {
      return {
        type: "RESET_TEMPLATE_INPUTS",
        value
      };
    }
  };
  var store = createReduxStore("getgenie", {
    reducer(state = DEFAULT_STATE, action) {
      switch (action.type) {
        case "SET_SIDEBAR":
          return {
            ...state,
            sidebar: {
              ...state.sidebar,
              ...action.value
            }
          };
        case "SET_CONTEXT_MENU":
          return {
            ...state,
            contextMenu: {
              ...state.contextMenu,
              ...action.value
            }
          };
        case "SET_USER_HISTORY_DATA":
          return {
            ...state,
            userHistoryData: {
              ...state.userHistoryData,
              ...action.value
            }
          };
        case "SET_CURRENT_TEMPLATE":
          return {
            ...state,
            currentTemplate: action.value
          };
        case "SET_INPUT":
          return {
            ...state,
            inputs: {
              ...state.inputs,
              [state.sidebar.currentTemplate]: {
                ...state.inputs[state.sidebar.currentTemplate] || {},
                [action.name]: action.value
              }
            }
          };
        case "SET_TEMPLATES":
          return {
            ...state,
            templates: {
              ...state.templates,
              ...action.value
            }
          };
        case "SET_LIMIT_USAGE":
          return {
            ...state,
            limitUsage: {
              ...state.limitUsage,
              ...action.value
            }
          };
        case "RESET_SIDEBAR":
          return {
            ...state,
            sidebar: DEFAULT_STATE.sidebar
          };
        case "RESET_TEMPLATE_INPUTS":
          let inputs = { ...state.inputs };
          delete inputs[action.value];
          return {
            ...state,
            inputs
          };
      }
      return state;
    },
    actions,
    selectors: {
      sidebar(state) {
        return state.sidebar;
      },
      contextMenu(state) {
        return state.contextMenu;
      },
      userHistoryData(state) {
        return state.userHistoryData;
      },
      getCurrentTemplate(state) {
        return state.currentTemplate;
      },
      getInputs(state) {
        return state.inputs[state.sidebar.currentTemplate] || {};
      },
      getTemplateInputs(state) {
        return state.inputs;
      },
      templates(state) {
        return state.templates;
      },
      limitUsage(state) {
        return state.limitUsage;
      }
    }
  });
  register(store);

  // assets/src/admin/js/RequestManager/index.js
  var RequestManager_exports = {};
  __export(RequestManager_exports, {
    EndPoints: () => EndPoints_exports,
    HandleFetch: () => HandleFetch,
    HandleResponse: () => HandleResponse_default
  });

  // assets/src/admin/js/RequestManager/EndPoints.js
  var EndPoints_exports = {};
  __export(EndPoints_exports, {
    clearHistoryUrl: () => clearHistoryUrl,
    competitorData: () => competitorData,
    contentFeedback: () => contentFeedback,
    continueWriting: () => continueWriting,
    createHistoryUrl: () => createHistoryUrl,
    expandOutline: () => expandOutline,
    filterNlpKeywordsUrl: () => filterNlpKeywordsUrl,
    genieChat: () => genieChat,
    genieChatClear: () => genieChatClear,
    genieChatList: () => genieChatList,
    genieChatSave: () => genieChatSave,
    genieImage: () => genieImage,
    genieImageSave: () => genieImageSave,
    genieMode: () => genieMode,
    getLicenseToken: () => getLicenseToken,
    historyData: () => historyData,
    keywordsData: () => keywordsData,
    limitUsage: () => limitUsage,
    nlpKeywords: () => nlpKeywords,
    nlpKeywordsUrl: () => nlpKeywordsUrl,
    oneClickBlog: () => oneClickBlog,
    outlines: () => outlines,
    plagiarismData: () => plagiarismData,
    relatedKeywords: () => relatedKeywords,
    removeLicenseToken: () => removeLicenseToken,
    semanticKeywords: () => semanticKeywords,
    storeApiUrl: () => storeApiUrl,
    subscriptionUpdateUrl: () => subscriptionUpdateUrl,
    topicalMap: () => topicalMap,
    updateUsageUrl: () => updateUsageUrl,
    webviewDataCreate: () => webviewDataCreate,
    webviewDataList: () => webviewDataList,
    webviewDeletePost: () => webviewDeletePost,
    webviewGetBlogWizardData: () => webviewGetBlogWizardData,
    writeIntro: () => writeIntro,
    writeTemplates: () => writeTemplates,
    writeTitle: () => writeTitle
  });
  var allUrls = window.getGenie.config;
  var parserApiUrl = allUrls.parserApi;
  var licenseApiUrl = allUrls.licenseApi;
  var historyData = allUrls.historyApi + "list";
  var createHistoryUrl = allUrls.historyApi + "create";
  var clearHistoryUrl = allUrls.historyApi + "clear";
  var updateUsageUrl = allUrls.baseApi + "user_usage_log";
  var writeTemplates = parserApiUrl + "writer-default/generate-templates-content";
  var writeIntro = parserApiUrl + "writer-wizard/generate-intro";
  var writeTitle = parserApiUrl + "writer-wizard/generate-title";
  var outlines = parserApiUrl + "writer-wizard/generate-outline";
  var nlpKeywordsUrl = parserApiUrl + "writer-wizard/keyword-cluster";
  var filterNlpKeywordsUrl = parserApiUrl + "writer-wizard/filter-nlp-keyword";
  var keywordsData = parserApiUrl + "writer-wizard/keyword-doctor";
  var competitorData = parserApiUrl + "writer-wizard/serp-data";
  var plagiarismData = parserApiUrl + "writer-wizard/plagiarism-checker";
  var continueWriting = parserApiUrl + "advanced-writing/continue-writing";
  var expandOutline = parserApiUrl + "advanced-writing/outline-expand";
  var genieMode = parserApiUrl + "advanced-writing/genie-mode";
  var oneClickBlog = parserApiUrl + "writer-wizard/generate-one-click-blog";
  var contentFeedback = allUrls.feedbackApi;
  var storeApiUrl = allUrls.storeApi + window.getGenie.blogWizardData?.post_id;
  var getLicenseToken = licenseApiUrl + "get-token";
  var removeLicenseToken = licenseApiUrl + "remove-token";
  var limitUsage = allUrls.usageLimitStatsApi;
  var subscriptionUpdateUrl = allUrls.subscriptionUpgradeUrlApi;
  var genieImage = parserApiUrl + "genie-image/generate-image";
  var genieImageSave = allUrls.baseApi + "genie-image/upload";
  var genieChat = parserApiUrl + "chat/default";
  var genieChatSave = allUrls.genieChatApi + "create";
  var genieChatList = allUrls.genieChatApi + "list";
  var genieChatClear = allUrls.genieChatApi + "clear";
  var webviewDataCreate = allUrls.webviewBaseApi + "save";
  var webviewDeletePost = allUrls.webviewBaseApi + "delete";
  var webviewDataList = allUrls.webviewBaseApi + "list";
  var webviewGetBlogWizardData = allUrls.webviewBaseApi + "doc_meta";
  var relatedKeywords = parserApiUrl + "writer-wizard/related-keywords";
  var nlpKeywords = parserApiUrl + "writer-wizard/nlp-keywords";
  var semanticKeywords = parserApiUrl + "writer-wizard/semantic-keywords";
  var topicalMap = parserApiUrl + "writer-wizard/topical-map";

  // assets/src/admin/js/Common/Libs/Notification.js
  var { notification } = window.antd;
  var Notification = (type, title, message = "", placement = "top") => {
    const sidebar2 = wp.data.select("getgenie").sidebar();
    notification.config({
      getContainer: () => sidebar2.rootContainer,
      placement
    });
    notification[type]({
      message: title,
      description: /* @__PURE__ */ React.createElement("span", {
        dangerouslySetInnerHTML: { __html: message }
      }),
      duration: 8,
      zIndex: 999999
    });
  };
  var Notification_default = Notification;

  // assets/src/admin/js/RequestManager/HandleResponse.js
  var { Modal } = window.antd;
  var HandleResponse = (res, callback) => {
    const sidebar2 = wp.data.select("getgenie").sidebar();
    const message = res?.message || [];
    const traceCode = res?.traceCode;
    if (res?.networkErr) {
      Notification_default("error", "Something went wrong!", message.join(" "), "topRight");
    } else {
      if (res?.status === "success") {
        wp.data.dispatch("getgenie").setSidebar({ requestId: res?.requestId });
        if (res?.limitUsageStats) {
          wp.data.dispatch("getgenie").setLimitUsage({
            ...res.limitUsageStats
          });
        }
        callback();
      } else {
        if (!window.getGenie.config?.siteToken || message.join("").toLowerCase().includes("access denied")) {
          wp.data.dispatch("getgenie").setSidebar({ open: false });
          Modal.error({
            title: "Failed!",
            content: message.join(" "),
            className: "getgenie-confirm-modal",
            getContainer: () => sidebar2.rootContainer
          });
        } else {
          Notification_default("error", res?.status, message.join(" "), "topRight");
        }
      }
    }
  };
  var HandleResponse_default = HandleResponse;

  // assets/src/admin/js/RequestManager/index.js
  var callApi = async (url, result, data = {}) => {
    const { config } = window.getGenie;
    if (!config?.authToken || config?.authToken === "access_denied") {
      result({ message: ["Access Denied!"] });
      return;
    }
    let params = {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Site-Token": config?.siteToken || "",
        "Auth-Token": config?.authToken || "",
        "X-WP-Nonce": config?.restNonce || "",
        "Plugin-Version": config?.version,
        "Plugin-Name": "getgenie"
      }
    };
    const allInputs = wp.data.select("getgenie").getInputs();
    const { numberOfResult, creativity, selectedLanguage, selectedTone } = allInputs;
    const body = { selectedLanguage, creativity, selectedTone, numberOfResult, ...data };
    if (data && typeof data === "object") {
      params.body = JSON.stringify(body);
    }
    const response = await fetch(url, params).catch((err) => result({ networkErr: true, message: [err?.message] }));
    if (!response) {
      result({});
      return;
    }
    if (!response.ok) {
      const err = await response.text();
      result({ networkErr: true, error: err });
      return;
    }
    const res = await response.json();
    result(res);
    if (res?.status === "success" && data?.input && Object.values(data?.input || {}).length > 0) {
      if (url.includes("plagiarism")) {
        return;
      }
      let historyData2 = body;
      historyData2.output = res?.data;
      historyData2.limitUsageStats = wp.data.select("getgenie").limitUsage();
      if (url.includes("writer-wizard")) {
        historyData2.templateType = "writer-wizard";
      } else if (url.includes("writer-default")) {
        historyData2.templateType = "writer-default";
      } else if (url.includes("advanced-writing")) {
        historyData2.templateType = "advanced-writing";
      }
      if (historyData2?.templateType) {
        fetch(createHistoryUrl, {
          method: "POST",
          body: JSON.stringify(historyData2),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "X-WP-Nonce": config?.restNonce || ""
          }
        });
        wp.data.dispatch("getgenie").setUserHistoryData({ isCallable: true });
      }
    }
  };
  var HandleFetch = (callback, urlKey, params, query = "") => {
    let updatedUrl = EndPoints_exports[urlKey];
    if (query) {
      updatedUrl += query;
    }
    callApi(
      updatedUrl,
      (result) => {
        callback(result);
      },
      params
    );
  };

  // assets/src/admin/js/app-handler.js
  var RenderElement = (element, container) => {
    if (React.version >= "18.0.0") {
      ReactDOM.createRoot(container).render(element);
    } else {
      ReactDOM.render(element, container);
    }
  };
  window.getGenie.Components = {
    Common: {
      ReduxManager: { ComposeComponents },
      RequestManager: RequestManager_exports,
      RenderElement
    }
  };
})();
