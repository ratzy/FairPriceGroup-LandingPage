export const landingContent = {
  benefits: [
    {
      title: "Practical",
      icon: "icon-practical.png",
      description:
        "Redeemable for groceries, daily essentials, and indulgences at over 200 FairPrice and Unity stores, or online.",
    },
    {
      title: "Easy",
      icon: "icon-easy.png",
      description:
        "Send instantly or schedule ahead. Use it in-store or online, partially or fully.",
    },
    {
      title: "Meaningful",
      icon: "icon-meaningful.png",
      description:
        "Bring warmth to any occasion. Choose your gift value and personalise it with your message.",
    },
  ],
  occasions: [
    {
      id: "birthday",
      label: "Birthday",
      image: "birthday.png",
      themeClass: "occasion-birthday",
    },
    {
      id: "celebration",
      label: "Celebrations",
      image: "celebration.png",
      themeClass: "occasion-celebration",
    },
    {
      id: "gratitude",
      label: "Gratitude",
      image: "gratitude.png",
      themeClass: "occasion-gratitude",
    },
    {
      id: "thinking-of-you",
      label: "Thinking of you",
      image: "thinking-of-you.png",
      themeClass: "occasion-thinking",
    },
    {
      id: "more",
      label: "And more",
      image: "and-more.png",
      themeClass: "occasion-more",
    },
  ],
  deliveryCards: [
    {
      title: "eGift Cards",
      description: "Best for speed and convenience",
      image: "eGiftCards.png",
      themeClass: "delivery-egift",
      bullets: [
        "Instant/scheduled delivery via Email",
        "Personal or bulk sending",
        "The thoughtful gift for every need, from a simple thank you to major milestones and celebrations",
      ],
      action: "Send eGift card",
    },
    {
      title: "Physical Gift Cards",
      description: "Best for in-person moments",
      image: "pGiftCards.png",
      themeClass: "delivery-physical",
      bullets: [
        "Available for in-store collection (personal gifting) or bulk delivery (corporate gifting)",
        "Bulk delivery requires a minimum spend and 5-7 working days lead time",
        "Great for everything from birthday gifts to corporate employee benefits",
      ],
      action: "Find a store",
    },
  ],
  eGiftTabs: [
    {
      id: "egift-order",
      label: "How to order",
      steps: [
        {
          step: "1",
          title: "Select Design",
          description: "Pick from a wide range of designs made for every occasion.",
          image: "egift-step1.png",
        },
        {
          step: "2",
          title: "Personalise",
          description: "Choose the gift value, quantity and a personal message to make it special.",
          image: "egift-step2.png",
        },
        {
          step: "3",
          title: "Pay and send",
          description: "Create your order with major credit cards or PayNow. Your eGift Card is delivered instantly or on your chosen date.",
          image: "egift-step3.png",
        },
      ],
    },
    {
      id: "egift-use",
      label: "How to use",
      steps: [
        {
          step: "1",
          title: "Check email",
          description: "You or your recipient will receive an email providing details of your unique ‘eGift Card’.",
          image: "egift-use-step1.png",
        },
        {
          step: "2",
          title: "View eGift card",
          description: "Tap ‘View eGift Card’ for immediate use in-store or online.",
          image: "egift-use-step2.png",
        },
        {
          step: "3",
          title: "Save it for later",
          description: "Add the eGift Card to your FairPrice Group app for future use.",
          image: "egift-use-step3.png",
        },
      ],
    },
    {
      id: "egift-view",
      label: "How to view",
      steps: [
        {
          step: "1",
          title: "Open app & go to Account",
          description: "Tap the ‘Account’ icon on the top-left corner.",
          image: "egift-view-step1.png",
        },
        {
          step: "2",
          title: "Select ‘Vouchers’",
          description: "Tap ‘Vouchers’ on your Account page.",
          image: "egift-view-step2.png",
        },
        {
          step: "3",
          title: "View balance",
          description: "Tap ‘eGift Cards’ tab to see your balance and transaction history.",
          image: "egift-view-step3.png",
        },
      ],
    },
  ],
  physicalTabs: [
    {
      id: "physical-order",
      label: "How to order",
      columns: [
        {
          title: "Personal orders",
          icon: "store",
          iconImage: "icon-store.png",
          steps: [
            "Visit any FairPrice cashier or customer service counter",
            "Choose your card design and value ($5, $10, $20 or $50)",
            "Make payment and collect on the spot",
          ],
          buttonText: "Locate us",
          buttonLink: "#",
        },
        {
          title: "Corporate orders",
          icon: "building",
          iconImage: "icon-briefcase.png",
          steps: [
            'Submit your request via <a href="#" class="text-brand hover:underline font-semibold">the online pre-order portal</a>. Our team will respond within 2-3 working days',
            "Pay via credit card or bank transfer",
            "Arrange collection or delivery (min. spend applies)",
          ],
          buttonText: "Gift cards pre-order",
          buttonLink: "#",
        },
      ],
    },
    {
      id: "physical-use",
      label: "How to use",
      type: "two-column-image",
      columns: [
        {
          title: "In stores",
          iconImage: "physical-use-instore.png",
          description: "Scan gift card barcode at the cashier or self-checkout",
        },
        {
          title: "For digital payments",
          iconImage: "physical-use-digital.png",
          description: "Add gift card to your FairPrice Group app:",
          steps: [
            "Scratch foil on the back of gift card to show barcode",
            "On the app, tap 'Scan' and scan the barcode",
            "The gift card will be added into Vouchers",
          ],
        },
      ],
    },
    {
      id: "physical-view",
      label: "How to view",
      type: "three-steps",
      steps: [
        {
          step: "1",
          title: 'Visit <a href="#" class="text-brand hover:underline font-semibold">here</a> to view the gift card validity',
          image: "physical-view-step1.png",
        },
        {
          step: "2",
          title: "Key in your 16-digit card number located at the back of your gift card",
          image: "physical-view-step2.png",
        },
        {
          step: "3",
          title: "Tap 'Check Balance' to view your balance",
          image: "physical-view-step3.png",
        },
      ],
    },
  ],
  brands: [
    "FairPrice",
    "FairPrice Finest",
    "FairPrice Xtra",
    "FairPrice Shop",
    "Unity",
  ],
  faq: [
    {
      question: "What are FairPrice Group Gift Cards?",
      answer:
        "FairPrice Gift Cards are prepaid cards available in digital and physical formats, redeemable for groceries and daily essentials at participating FairPrice Group brands.",
    },
    {
      question: "Where can I redeem FairPrice Gift Cards?",
      answer:
        "Gift cards can be redeemed at participating FairPrice stores and selected channels. Redemption coverage depends on the card type and campaign setup.",
    },
    {
      question: "Can I include a personal message with eGift Cards?",
      answer:
        "Yes. You can personalize eGift Cards with a recipient name and custom message before checkout.",
    },
    {
      question: "Are there volume discounts for corporate purchases?",
      answer:
        "Corporate gifting packages can be tailored by order quantity and campaign needs. Contact the corporate team for current options and timelines.",
    },
    {
      question: "How do I check the remaining card balance?",
      answer:
        "For eGift Cards, balance can be viewed from the card link. For physical cards, balance can be checked at participating customer service counters and available support channels.",
    },
  ],
};
