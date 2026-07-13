const exercises = [
  // === REDESIGN (8) ===
  {
    id: "redesign-boarding-pass",
    category: "redesign",
    title: "The Better Boarding Pass",
    brief: "Travelers squint at tiny text on boarding passes to find their gate and seat while rushing through the terminal.",
    challenge: "Design a mobile boarding pass that prioritizes the most essential info — gate, boarding time, and seat — at a glance.",
    directions: [
      "Large-text approach: Make gate number and boarding time huge and prominent, with everything else secondary",
      "Timeline approach: Show info in order of when you need it (security → gate → seat) with progress indicators"
    ],
    constraints: ["Must be readable while walking"],
    postCaption: "Redesigned the boarding pass for how people actually use it — on the move, in a hurry. #UXDesign #TravelUX #DailyUI",
    teaches: "Information hierarchy for glanceable mobile content."
  },
  {
    id: "redesign-receipt",
    category: "redesign",
    title: "Receipts Worth Keeping",
    brief: "Digital receipts are just walls of text in email form with no useful visual hierarchy.",
    challenge: "Design a digital receipt layout that makes it easy to scan key info — total, items purchased, and return policy.",
    directions: [
      "Visual hierarchy: Use size, color, and spacing to make the total and key actions (return, expense report) stand out",
      "Scannable format: Replace the text list with item thumbnails and clear category groupings"
    ],
    constraints: ["Must fit in an email viewport"],
    postCaption: "What if receipts actually helped you understand your spending? Reimagined the humble digital receipt. #UXDesign #Fintech #Redesign",
    teaches: "Visual hierarchy and scannability in transactional design."
  },
  {
    id: "redesign-parking-meter",
    category: "redesign",
    title: "Stress-Free Parking",
    brief: "Parking apps require zone numbers, license plates, and 6 taps just to pay for 30 minutes.",
    challenge: "Design the payment confirmation screen that makes paying for parking fast — auto-detecting zone and suggesting durations.",
    directions: [
      "Smart defaults: Show 3 quick-pick durations (30 min, 1 hr, 2 hr) with one-tap confirmation",
      "Location-first: Auto-detect zone and show it prominently with saved vehicle info pre-filled"
    ],
    constraints: ["One-handed operation"],
    postCaption: "Parking apps shouldn't take longer than parking itself. Designed a 10-second payment flow. #MobileUX #Redesign #DailyDesign",
    teaches: "Reducing interaction cost through smart defaults."
  },
  {
    id: "redesign-cookie-consent",
    category: "redesign",
    title: "Consent Without the Dark Patterns",
    brief: "Most cookie consent banners use dark patterns — tiny reject buttons, pre-checked boxes, and confusing language.",
    challenge: "Design a cookie consent banner that's genuinely transparent and gives Accept and Reject equal visual weight.",
    directions: [
      "Plain-language approach: Use clear categories (Analytics, Marketing, Essential) with honest descriptions",
      "Equal choice: Make Accept and Reject buttons the same size and prominence with a third option to customize"
    ],
    constraints: ["Equal visual weight for accept and reject"],
    postCaption: "Cookie consent doesn't have to be manipulative. Designed an ethical alternative that respects users. #EthicalDesign #UX #Privacy",
    teaches: "Ethical design patterns and avoiding dark patterns."
  },
  {
    id: "redesign-tv-remote",
    category: "redesign",
    title: "The Post-Remote Remote",
    brief: "Smart TV remotes have too many buttons, and phone-based remotes feel clumsy in a dark room.",
    challenge: "Design a simplified phone-based TV remote interface with only the essential controls.",
    directions: [
      "Minimal layout: Show only play/pause, volume, and a touchpad for navigation — everything else hidden in a menu",
      "Dark-room optimized: Large touch targets with high contrast and haptic feedback for eyes-free control"
    ],
    constraints: ["Works in a dark room"],
    postCaption: "Rethinking the TV remote for how families actually watch together. #ProductDesign #SmartHome #UXChallenge",
    teaches: "Simplification and designing for low-light environments."
  },
  {
    id: "redesign-unsubscribe",
    category: "redesign",
    title: "The Graceful Goodbye",
    brief: "Unsubscribe flows are designed to retain at all costs — guilt trips, hidden buttons, 5-step surveys. Users just want out.",
    challenge: "Design an unsubscribe experience that respects the user's decision while giving the brand one honest shot at retention.",
    directions: [
      "Instant-out with optional feedback: one click unsubscribes, then gently asks why",
      "Frequency adjustment: offer to reduce emails instead of full unsubscribe",
      "Transparent value: show exactly what they'll miss with real examples from recent sends"
    ],
    constraints: ["Unsubscribe must complete in one click", "No guilt language"],
    postCaption: "Designed an unsubscribe flow that's actually respectful. Because keeping users against their will isn't retention. #UXDesign #EmailDesign",
    teaches: "Designing for negative flows with empathy and business pragmatism."
  },
  {
    id: "redesign-elevator-panel",
    category: "redesign",
    title: "Elevator, Reimagined",
    brief: "Elevator call panels give zero feedback — you press a button and wait with no idea how long it'll take.",
    challenge: "Design an elevator call panel that shows wait time and which direction the elevator is going.",
    directions: [
      "Visual feedback: Add a display showing estimated wait time (\"2 min\") and elevator position with animation",
      "Ambient light: Use colored light around the button to indicate status (pulsing = coming, solid = here)"
    ],
    constraints: ["Visible from 10 feet away"],
    postCaption: "40 stories, 8 elevators, zero good UX. Redesigned the elevator experience from the ground up. #IndustrialDesign #UX #PhysicalUI",
    teaches: "System status visibility and feedback in physical interfaces."
  },
  {
    id: "redesign-gym-check-in",
    category: "redesign",
    title: "Frictionless Gym Entry",
    brief: "Gym check-in requires scanning a barcode or tapping a screen, creating bottlenecks during busy hours.",
    challenge: "Design a welcome screen that appears after automatic check-in, showing helpful workout context.",
    directions: [
      "Class-focused: Show today's upcoming classes with times and spots remaining, plus a quick-join button",
      "Workout-focused: Display personalized workout plan for today with equipment availability status"
    ],
    constraints: ["Loads instantly"],
    postCaption: "What if checking into the gym felt as easy as walking through your front door? #FitnessUX #ProductDesign #Frictionless",
    teaches: "Contextual information display and personalization."
  },

  // === MICRO-UX (7) ===
  {
    id: "micro-ux-loading-states",
    category: "micro-ux",
    title: "Loading States That Delight",
    brief: "Most loading states are boring spinners that make waits feel longer.",
    challenge: "Design a loading state for a button that takes 2-3 seconds to complete an action (like \"Save\" or \"Send\").",
    directions: [
      "Progress indicator: Show a horizontal bar filling from left to right with the button label changing (\"Saving...\" → \"Saved!\")",
      "Animated icon: Replace the button text with an animated icon (like a checkmark drawing itself) during the load"
    ],
    constraints: ["No generic spinner"],
    postCaption: "Made an 8-second wait feel instant with better loading feedback. Loading states are a design opportunity. #MicroUX #InteractionDesign",
    teaches: "Perceived performance through better loading feedback."
  },
  {
    id: "micro-ux-empty-states",
    category: "micro-ux",
    title: "Empty States That Convert",
    brief: "Most apps show a sad illustration and 'Nothing here yet' for empty states — a wasted opportunity.",
    challenge: "Design an empty state for a project management task list (when a project has no tasks yet).",
    directions: [
      "Instructional: Show what a task looks like and explain how to add one, with a prominent \"Add Task\" button",
      "Actionable: Make the empty state itself an inline task creation form — start typing immediately"
    ],
    constraints: ["Clear single call-to-action"],
    postCaption: "Empty states are your product's first impression. Designed one that actually helps users take action. #UXDesign #EmptyStates #Onboarding",
    teaches: "Converting passive empty states into active onboarding moments."
  },
  {
    id: "micro-ux-undo-pattern",
    category: "micro-ux",
    title: "The Perfect Undo",
    brief: "Destructive actions scare users. Confirmation dialogs interrupt flow.",
    challenge: "Design an undo notification that appears after a user deletes a task from their to-do list.",
    directions: [
      "Toast with timer: Show a temporary bar at the bottom with \"Task deleted\" message and \"Undo\" button that disappears after 5 seconds",
      "Inline ghost: Keep the deleted task visible but grayed out for 5 seconds with an \"Undo\" link, then fade it out"
    ],
    constraints: ["Works on mobile"],
    postCaption: "Undo is the most underrated UX pattern. Designed a system that makes destructive actions fearless. #UXPatterns #InteractionDesign",
    teaches: "Error recovery patterns through temporary undo."
  },
  {
    id: "micro-ux-toggle-states",
    category: "micro-ux",
    title: "Beyond the Toggle",
    brief: "Binary toggles are overused. Many settings aren't truly on/off — they have nuance.",
    challenge: "Design a notification preference control with more nuance than just on/off.",
    directions: [
      "Slider approach: A slider from \"Essential only\" to \"Everything\" with labels showing what each level includes",
      "Tiered approach: Three radio options: \"All notifications\", \"Important only\", \"Off\" with descriptions under each"
    ],
    constraints: ["Show preview of what each option means"],
    postCaption: "Not everything is on or off. Designed notification controls that match how people actually want to be interrupted. #MicroUX #Settings",
    teaches: "Designing for nuanced preferences beyond binary."
  },
  {
    id: "micro-ux-form-validation",
    category: "micro-ux",
    title: "Validation That Guides",
    brief: "Form validation usually yells at users after they make a mistake with red error text.",
    challenge: "Design inline validation for a phone number input field that guides instead of punishes.",
    directions: [
      "Auto-format approach: Format the number automatically as they type (234) 567-8900 with a green checkmark when valid",
      "Helpful hint approach: Show the format example (123) 456-7890 above the field, validate on blur with gentle guidance"
    ],
    constraints: ["No angry error messages"],
    postCaption: "The best form validation prevents errors instead of punishing them. Redesigned validation as a guide, not a gatekeeper. #FormDesign #UX",
    teaches: "Preventive validation and helpful inline feedback."
  },
  {
    id: "micro-ux-pull-to-refresh",
    category: "micro-ux",
    title: "Refresh, Reinvented",
    brief: "Pull-to-refresh usually shows a generic spinner, wasting a moment of user attention.",
    challenge: "Design a pull-to-refresh animation for a weather app that feels on-brand.",
    directions: [
      "Branded animation: Show a sun/cloud icon that animates as you pull, then spins into a refresh",
      "Informational animation: Display \"Last updated 4 min ago\" that changes to \"Checking for updates...\" during the pull"
    ],
    constraints: ["Completes in under 1 second"],
    postCaption: "Pull-to-refresh is 0.5 seconds of undivided attention. Made it memorable for a weather app. #MicroInteraction #MobileDesign",
    teaches: "Branded micro-interactions for utilitarian moments."
  },
  {
    id: "micro-ux-password-creation",
    category: "micro-ux",
    title: "Painless Password Creation",
    brief: "Password requirements are usually a list of red X marks that turn green. Users game it with 'Password1!'.",
    challenge: "Design a password strength indicator that teaches users WHY their password is weak or strong.",
    directions: [
      "Visual metaphor: Show a progress bar that fills as strength increases (weak/fair/good/strong) with explanations",
      "Educational feedback: Display specific guidance like \"Adding a symbol makes this much harder to crack\" as they type"
    ],
    constraints: ["Must work for non-technical users"],
    postCaption: "Password creation UX is stuck in 2005. Designed an experience that actually teaches security instead of just enforcing rules. #SecurityUX #MicroUX",
    teaches: "Educational interaction design for security."
  },

  // === PRODUCT CRITIQUE (7) ===
  {
    id: "product-critique-spotify-queue",
    category: "product-critique",
    title: "Fix Spotify's Queue",
    brief: "Spotify's 'Next in queue' vs 'Add to queue' confuses users about what will play next.",
    challenge: "Redesign the queue view to make it clear what song plays next and in what order.",
    directions: [
      "Visual timeline: Show upcoming songs in clear order with the next song larger/highlighted at the top",
      "Labeled sections: Divide the queue into \"Playing Next\" (user-added) and \"Up Next\" (from album/playlist)"
    ],
    constraints: ["Must be scannable at a glance"],
    postCaption: "Spotify's queue has confused me for years. Finally redesigned it to make sense. What do you think? #ProductCritique #SpotifyUX #MusicApp",
    teaches: "Clarifying confusing mental models in music playback."
  },
  {
    id: "product-critique-google-maps-walking",
    category: "product-critique",
    title: "Google Maps on Foot",
    brief: "Google Maps treats walking directions like driving — but pedestrians need to look at their phone while navigating.",
    challenge: "Design a simplified navigation screen for pedestrians that minimizes looking at the phone.",
    directions: [
      "Large next-turn display: Show only the next turn with a huge arrow and street name, hide the full route",
      "Landmark-based: Display \"Turn left at the coffee shop\" with a photo instead of \"Turn left in 200 meters\""
    ],
    constraints: ["Reduces screen time"],
    postCaption: "Walking isn't driving. Redesigned Maps for people who are actually on foot. #ProductCritique #MapsUX",
    teaches: "Adapting interfaces for different contexts of use."
  },
  {
    id: "product-critique-airbnb-pricing",
    category: "product-critique",
    title: "Airbnb's Price Surprise",
    brief: "Airbnb shows one price in search results, then reveals a much higher total at checkout with fees.",
    challenge: "Redesign the pricing card on search results to show the true total cost upfront.",
    directions: [
      "Total-first: Show the total trip cost prominently with fees broken down in smaller text below",
      "Hover breakdown: Display nightly rate large, with a hover tooltip showing the full fee breakdown"
    ],
    constraints: ["Mobile-friendly"],
    postCaption: "The Airbnb price surprise is the #1 complaint from travelers. Redesigned it for honesty. #ProductCritique #PricingUX #Airbnb",
    teaches: "Pricing transparency and building user trust."
  },
  {
    id: "product-critique-slack-threads",
    category: "product-critique",
    title: "Slack's Thread Problem",
    brief: "Slack threads hide conversations in a side panel. Important context gets buried and people miss replies.",
    challenge: "Design a better way to show thread replies without hiding them from the main channel.",
    directions: [
      "Inline preview: Show the first 2 thread replies directly in the channel with a \"Show 5 more\" link",
      "Thread indicator: Add a collapsible thread section below each message that expands to show replies inline"
    ],
    constraints: ["Keep channel readable"],
    postCaption: "Slack threads: the feature everyone uses but nobody loves. Proposed a model that keeps context visible. #ProductCritique #SlackUX",
    teaches: "Information architecture for threaded conversations."
  },
  {
    id: "product-critique-uber-wait",
    category: "product-critique",
    title: "The Uber Wait Screen",
    brief: "After requesting an Uber, the ETA jumps around unpredictably, making users anxious.",
    challenge: "Redesign the waiting screen to feel more certain and less anxious.",
    directions: [
      "Confidence range: Replace single ETA with a range (\"Arrives in 4-6 min\") and explain any delays",
      "Helpful context: Show driver details, rating, and car photo prominently to build confidence"
    ],
    constraints: ["Honest ETA display"],
    postCaption: "Uber's wait screen is 3 minutes of pure anxiety. Redesigned it to feel calm and useful. #RideshareUX #ProductCritique",
    teaches: "Managing user anxiety during uncertain waits."
  },
  {
    id: "product-critique-instagram-saves",
    category: "product-critique",
    title: "Instagram's Save Graveyard",
    brief: "Instagram's saved posts pile up in a long list. Users never revisit them.",
    challenge: "Design a saved posts view that makes it easier to find and revisit saved content.",
    directions: [
      "Grid with filters: Show saves in a visual grid with filter pills (Recipes, Travel, Fashion, etc.) at the top",
      "Auto-collections: Automatically group saves by detected topic with collection thumbnails"
    ],
    constraints: ["No manual organization required"],
    postCaption: "I have 847 saved Instagram posts I'll never look at again. Redesigned saves to be actually useful. #ProductCritique #InstagramUX",
    teaches: "Making saved content actually revisitable."
  },
  {
    id: "product-critique-zoom-controls",
    category: "product-critique",
    title: "Zoom's Hidden Controls",
    brief: "Zoom's controls auto-hide. You wiggle your mouse frantically to find the mute button during calls.",
    challenge: "Design a control bar that's always accessible without blocking the video.",
    directions: [
      "Mini persistent bar: Show a thin bar with just mute/camera/end icons, always visible at the bottom",
      "Floating button: A single floating button in the corner that expands to show all controls on click"
    ],
    constraints: ["Doesn't obscure content"],
    postCaption: "Every Zoom call: *wiggles mouse frantically to find mute button*. Fixed it. #ProductCritique #VideoCallUX #Zoom",
    teaches: "Persistent UI without obscuring content."
  },

  // === COMPONENT (7) ===
  {
    id: "component-date-picker",
    category: "component",
    title: "The Perfect Date Picker",
    brief: "Date pickers are one of the most complex UI components. They need to handle ranges, disabled dates, keyboard nav, and multiple formats.",
    challenge: "Design a date range picker component for a travel booking site that handles check-in/check-out selection.",
    directions: [
      "Calendar-first: visual month grid with drag-to-select range and smart defaults",
      "Input-first: text fields with natural language parsing ('next friday to sunday') that show calendar for confirmation",
      "Mobile-native: a scrollable wheel/drum picker optimized for thumb reach"
    ],
    constraints: ["Must support keyboard navigation", "Show pricing hints per date"],
    postCaption: "Designed a date range picker that doesn't make users want to close the tab. Keyboard accessible + pricing context. #UIComponent #DatePicker",
    teaches: "Complex component design balancing power and simplicity."
  },
  {
    id: "component-toast-system",
    category: "component",
    title: "Toast Notification Design",
    brief: "Toast notifications need clear visual hierarchy to communicate status quickly.",
    challenge: "Design a toast notification component showing success and error states.",
    directions: [
      "Minimal approach: Use icon + message in a compact horizontal bar with auto-dismiss",
      "Detailed approach: Include icon, title, message, and action button in a card layout"
    ],
    constraints: ["Works on mobile and desktop"],
    postCaption: "Designed toast notifications that communicate status clearly. #DesignSystem #UIComponent",
    teaches: "Status communication in notification design."
  },
  {
    id: "component-data-table",
    category: "component",
    title: "Data Tables That Don't Suck",
    brief: "Most data tables are overwhelming grids of text that are hard to scan.",
    challenge: "Design a data table row for a sales dashboard showing lead status, value, owner, and activity.",
    directions: [
      "Visual approach: Use color-coded status badges, progress bars for value, and small owner avatars",
      "Compact approach: Use icons and abbreviations with a hover tooltip for full details"
    ],
    constraints: ["Easy to scan"],
    postCaption: "Designed a data table that actually helps you see patterns instead of just listing numbers. #DataDesign #EnterpriseUX #UIComponent",
    teaches: "Visual encoding in tabular data."
  },
  {
    id: "component-search-bar",
    category: "component",
    title: "Search That Anticipates",
    brief: "Most search bars are just an input with a magnifying glass icon.",
    challenge: "Design a search bar with a results dropdown that shows helpful suggestions.",
    directions: [
      "Preview approach: Show result titles with snippet previews and highlighting of matched terms",
      "Categorized approach: Group results by type (Pages, People, Files) with icons and quick actions"
    ],
    constraints: ["Keyboard navigable"],
    postCaption: "Designed a search that anticipates what you need. #SearchUX #Component",
    teaches: "Search result presentation and information scent."
  },
  {
    id: "component-stepper",
    category: "component",
    title: "Multi-Step Done Right",
    brief: "Multi-step forms often don't clearly show progress or what's coming next.",
    challenge: "Design a progress indicator for a 4-step signup flow (Account → Profile → Preferences → Done).",
    directions: [
      "Horizontal stepper: Show 4 circles connected by lines with current step highlighted and completed steps checkmarked",
      "Vertical sidebar: List all steps vertically with current expanded and past steps collapsed to summaries"
    ],
    constraints: ["Shows current position clearly"],
    postCaption: "Designed a multi-step form that doesn't lose people halfway through. #FormDesign #UIComponent",
    teaches: "Progress indication in multi-step flows."
  },
  {
    id: "component-avatar-group",
    category: "component",
    title: "The Avatar Stack",
    brief: "Showing multiple user avatars gets messy when there are many collaborators.",
    challenge: "Design an avatar stack that shows 3-4 visible avatars plus an overflow indicator for the rest.",
    directions: [
      "Overlapping circles: Stack avatars slightly overlapping with \"+12\" bubble at the end",
      "Grid layout: Show first 3 in a row, with a \"+12 more\" text link below"
    ],
    constraints: ["Shows at least 3 people"],
    postCaption: "Avatar stacks look simple until you handle overflow. Component design is in the details. #DesignSystem #Component",
    teaches: "Handling overflow in compact components."
  },
  {
    id: "component-command-palette",
    category: "component",
    title: "The Command Palette",
    brief: "Command palettes (Cmd+K) let power users navigate quickly via keyboard.",
    challenge: "Design a command palette interface showing search input and categorized results.",
    directions: [
      "Clean list: Show results as a simple list with icons, keyboard shortcuts on the right",
      "Grouped results: Organize results by category (Pages, Actions, People) with section headers"
    ],
    constraints: ["Keyboard-only navigation"],
    postCaption: "Designed a Cmd+K palette that's fast and keyboard-first. #ProductivityUX #CommandPalette",
    teaches: "Keyboard-driven interface design."
  },

  // === ACCESSIBILITY (7) ===
  {
    id: "accessibility-color-blind-dashboard",
    category: "accessibility",
    title: "Charts Without Color",
    brief: "8% of men can't distinguish between red and green. Most charts rely only on color to show different data.",
    challenge: "Design a line chart with 3 data series that works without relying on color alone.",
    directions: [
      "Pattern approach: Use different line styles (solid, dashed, dotted) plus color for redundancy",
      "Label approach: Put labels directly on each line instead of using a separate color legend"
    ],
    constraints: ["Must work in grayscale"],
    postCaption: "1 in 12 men can't distinguish your chart colors. Designed dashboards that work without color. #A11y #DataViz #InclusiveDesign",
    teaches: "Non-color information encoding in data visualization."
  },
  {
    id: "accessibility-keyboard-game",
    category: "accessibility",
    title: "A Keyboard-Only Game",
    brief: "Most web games require a mouse. Keyboard-only users can't play them.",
    challenge: "Design the controls and interface for a simple keyboard-only game (like tic-tac-toe or word game).",
    directions: [
      "Number keys: Use 1-9 keys to select grid positions with visible focus indicators",
      "Arrow keys: Navigate a grid with arrows, use Space or Enter to select"
    ],
    constraints: ["Highly visible focus indicators"],
    postCaption: "Built an interactive experience that's 100% keyboard-playable. Accessibility isn't just for forms. #A11y #KeyboardNav #InclusiveDesign",
    teaches: "Keyboard navigation beyond forms."
  },
  {
    id: "accessibility-low-vision-ecommerce",
    category: "accessibility",
    title: "Shopping at 200% Zoom",
    brief: "Users with low vision zoom to 200-400%. Most product pages break with overlapping text and hidden buttons.",
    challenge: "Design a product card that works at 200% zoom without breaking or requiring horizontal scroll.",
    directions: [
      "Vertical stack: Stack image, title, price, and button vertically in a single column",
      "Simplified layout: Show only essential info (image, price, add button) with details on click"
    ],
    constraints: ["No horizontal scroll at 200% zoom"],
    postCaption: "Tested my design at 200% zoom. Fixed it. Now it works for everyone. #A11y #LowVision #EcommerceDesign",
    teaches: "Designing for extreme zoom levels."
  },
  {
    id: "accessibility-motion-sensitivity",
    category: "accessibility",
    title: "Motion-Safe Design",
    brief: "Excessive animation can trigger dizziness and nausea for users with vestibular disorders.",
    challenge: "Design a hero section for a portfolio that works both with and without animation.",
    directions: [
      "Subtle motion: Use gentle fades and small movements for the animated version",
      "Static alternative: Create visual interest with bold typography and color in the reduced-motion version"
    ],
    constraints: ["Respects prefers-reduced-motion"],
    postCaption: "Designed a portfolio that's stunning with AND without animation. Reduced motion shouldn't mean reduced quality. #A11y #MotionDesign",
    teaches: "Designing with and without motion."
  },
  {
    id: "accessibility-error-recovery",
    category: "accessibility",
    title: "Error Messages for Everyone",
    brief: "Error messages often rely on color alone (red text), appear far from the problem, disappear on scroll, or use jargon that confuses users.",
    challenge: "Design an accessible error handling system for a government benefits application form that works for all users regardless of ability.",
    directions: [
      "Multi-signal errors: combine color + icon + text + position to communicate errors through multiple channels",
      "Error summary panel: a persistent, focusable list of all errors at the top with links to each field",
      "Inline guidance: errors appear directly below the field with specific instructions on how to fix them"
    ],
    constraints: ["Must work with screen readers", "No color as sole indicator", "Errors persist until fixed"],
    postCaption: "Government forms shouldn't need a PhD to fill out. Designed accessible error handling that guides instead of punishes. #A11y #FormDesign",
    teaches: "Multi-channel error communication and accessible form validation patterns."
  },
  {
    id: "accessibility-cognitive-load",
    category: "accessibility",
    title: "Reducing Cognitive Load",
    brief: "Complex interfaces with too many options overwhelm users with cognitive disabilities or ADHD.",
    challenge: "Design a simplified bank account overview showing only essential info: balance and recent transactions.",
    directions: [
      "Minimal approach: Large balance number at top, then 3 recent transactions below with clear labels",
      "Progressive approach: Show balance prominently with \"View transactions\" and \"Transfer money\" as only two actions"
    ],
    constraints: ["Maximum 3 primary actions visible"],
    postCaption: "Redesigned a bank dashboard for cognitive accessibility. Turns out, what helps people with ADHD helps everyone. #A11y #CognitiveLoad",
    teaches: "Reducing cognitive load through simplification."
  },
  {
    id: "accessibility-voice-ordering",
    category: "accessibility",
    title: "Voice-First Food Ordering",
    brief: "Users with motor or vision impairments need to order food by voice, not touch.",
    challenge: "Design a confirmation screen that shows what the voice system heard before placing the order.",
    directions: [
      "Review layout: Show detected order items, size, and price with \"Confirm order\" and \"Make changes\" buttons",
      "Visual feedback: Display \"You said: 'Large pepperoni pizza'\" at top with order details below and edit options"
    ],
    constraints: ["Shows what was heard"],
    postCaption: "Designed food ordering for voice-first, screen-second. Because sometimes your hands are full. #VoiceUI #A11y",
    teaches: "Visual confirmation for voice interfaces."
  },

  // === AI CONCEPTS (7) ===
  {
    id: "ai-concept-email-triage",
    category: "ai-concept",
    title: "AI Email Triage",
    brief: "Email overload is universal. Users struggle to figure out which emails actually need attention.",
    challenge: "Design an inbox view where AI groups emails into priority categories.",
    directions: [
      "Tab-based: Show \"Needs Reply\", \"FYI\", and \"Can Wait\" tabs with counts and one-tap actions",
      "Inline labels: Tag each email with a colored priority label (Urgent, Normal, Low) in the list"
    ],
    constraints: ["Shows why AI categorized each email"],
    postCaption: "Designed AI email triage that tells you what actually matters. #AIUX #EmailDesign",
    teaches: "AI-assisted prioritization with transparency."
  },
  {
    id: "ai-concept-design-critique",
    category: "ai-concept",
    title: "AI Design Critique Partner",
    brief: "Designers need feedback but often work alone. AI could provide instant critique.",
    challenge: "Design a feedback panel that shows AI-generated design critiques organized by category.",
    directions: [
      "Categorized list: Group feedback by Hierarchy, Accessibility, Consistency with severity indicators",
      "Question format: Frame critiques as questions (\"Could this heading be larger for hierarchy?\")"
    ],
    constraints: ["Feels helpful, not judgmental"],
    postCaption: "What if you had a design critic available 24/7 who asked great questions? #AIUX #DesignTools",
    teaches: "Designing helpful AI feedback interfaces."
  },
  {
    id: "ai-concept-meeting-prep",
    category: "ai-concept",
    title: "AI Meeting Prep Brief",
    brief: "People enter meetings unprepared with context scattered across emails and docs.",
    challenge: "Design a meeting prep card that shows up 5 minutes before a meeting with key context.",
    directions: [
      "Summary card: Show attendees, agenda, and action items from last meeting in a scannable card",
      "Quick-prep format: Display \"3 things to know\" bullets with links to relevant docs"
    ],
    constraints: ["Scannable in under 2 minutes"],
    postCaption: "5 minutes before your meeting: everything you need to know. Designed an AI meeting prep flow. #AIUX #Productivity",
    teaches: "Context aggregation for quick consumption."
  },
  {
    id: "ai-concept-photo-stories",
    category: "ai-concept",
    title: "AI Photo Narratives",
    brief: "Phone photo libraries are unorganized. AI can find stories within them.",
    challenge: "Design a \"Memory\" card that shows an AI-generated story from photos (like \"Summer 2024 Trip\").",
    directions: [
      "Timeline format: Show a title, date range, and grid of key photos arranged chronologically",
      "Cover + grid: Display a cover photo with title, then 6-8 photos in a grid below"
    ],
    constraints: ["User must approve before sharing"],
    postCaption: "Your phone has 10,000 photos. Designed AI that finds the stories hidden in your camera roll. #AIUX #PhotoApp",
    teaches: "AI-generated content discovery with user control."
  },
  {
    id: "ai-concept-writing-coach",
    category: "ai-concept",
    title: "AI Writing Coach (Not Writer)",
    brief: "Most AI writing tools write FOR you. Many users want to improve their own writing.",
    challenge: "Design an inline suggestion that teaches writing principles instead of just fixing text.",
    directions: [
      "Before/after: Show original sentence with suggestion below, plus explanation of the principle",
      "Highlight + tip: Underline weak phrasing with a hover tooltip explaining why and how to improve"
    ],
    constraints: ["Always explains the 'why'"],
    postCaption: "AI that teaches you to write better vs. AI that writes for you. Designed a coaching interface. #AIUX #WritingTools",
    teaches: "AI tools that build capability vs. dependency."
  },
  {
    id: "ai-concept-smart-notifications",
    category: "ai-concept",
    title: "AI Notification Timing",
    brief: "Notifications interrupt at the worst times. AI could learn when you're focused vs. available.",
    challenge: "Design a \"Held notifications\" screen showing what AI is holding until you're free.",
    directions: [
      "List with reasons: Show held notifications with explanations (\"Held: You're in a meeting until 3pm\")",
      "Digest format: Group notifications into a summary card (\"5 updates held\" with preview)"
    ],
    constraints: ["Users can override and see now"],
    postCaption: "What if your phone knew when you're in flow and held notifications? Designed AI attention management. #AIUX #Focus",
    teaches: "Transparent AI automation with user control."
  },
  {
    id: "ai-concept-onboarding-companion",
    category: "ai-concept",
    title: "AI Onboarding Buddy",
    brief: "App onboarding is usually a fixed tooltip tour. AI could adapt to how each user explores.",
    challenge: "Design an AI onboarding tooltip that appears contextually based on what the user clicks.",
    directions: [
      "Contextual tip: Show a tooltip near the feature they clicked with relevant guidance",
      "Question-first: Ask \"What are you trying to do?\" then show relevant tips based on their answer"
    ],
    constraints: ["Dismissible at any time"],
    postCaption: "Fixed onboarding tours assume every user is identical. Designed an AI buddy that adapts. #AIUX #Onboarding",
    teaches: "Adaptive onboarding based on behavior."
  },

  // === WHAT-IF (7) ===
  {
    id: "what-if-social-media-for-plants",
    category: "what-if",
    title: "Social Media for Plants",
    brief: "What if your houseplants could post updates about their care needs like social media?",
    challenge: "Design a plant profile card showing its status, needs, and recent \"posts\".",
    directions: [
      "Status dashboard: Show moisture, light, and last-watered with automated status messages",
      "Social feed: Display plant \"posts\" like \"Thirsty! Water me soon\" with timestamps"
    ],
    constraints: ["Actually useful for plant care"],
    postCaption: "What if your plants could post on social media? Designed a plant care app. #WhatIf #ProductDesign #PlantParent",
    teaches: "Gamification of routine data tracking."
  },
  {
    id: "what-if-restaurant-for-one",
    category: "what-if",
    title: "Dining Solo, By Design",
    brief: "Solo diners often feel awkward. What if a restaurant was designed specifically for people eating alone?",
    challenge: "Design a restaurant booking screen for a solo-dining-only restaurant.",
    directions: [
      "Comfort preferences: Let users choose counter seat vs. booth, and \"Open to chat\" vs. \"Quiet time\"",
      "Time-based options: Offer \"Quick bite\" (30 min), \"Standard\" (1 hr), or \"Leisurely\" (no rush) reservations"
    ],
    constraints: ["Makes solo dining comfortable"],
    postCaption: "Designed a restaurant experience specifically for people eating alone. Solo ≠ lonely. #WhatIf #ServiceDesign",
    teaches: "Designing for emotional comfort."
  },
  {
    id: "what-if-neighborhood-os",
    category: "what-if",
    title: "Neighborhood Operating System",
    brief: "Nextdoor became toxic. What if a neighborhood app focused on sharing and helping instead?",
    challenge: "Design a tool-sharing request screen for borrowing items from neighbors.",
    directions: [
      "Request form: Show item needed, when, and duration with a list of neighbors who have it",
      "Browse library: Display items available nearby in a grid with photos and \"Request\" buttons"
    ],
    constraints: ["Encourages positive interactions"],
    postCaption: "What if neighborhoods had an OS for sharing and helping? #WhatIf #CommunityDesign",
    teaches: "Designing for positive community behavior."
  },
  {
    id: "what-if-time-capsule-app",
    category: "what-if",
    title: "Digital Time Capsules",
    brief: "What if you could send messages to your future self that are locked until a specific date?",
    challenge: "Design a time capsule creation screen where users write a message and set when it unlocks.",
    directions: [
      "Simple form: Text area for message, date picker for unlock date, and \"Seal capsule\" button",
      "Template approach: Offer prompts like \"Letter to yourself in 5 years\" with guided questions"
    ],
    constraints: ["Makes sealing the message feel meaningful"],
    postCaption: "Designed an app for sending messages to the future. To yourself, to your kids. #WhatIf #EmotionalDesign",
    teaches: "Designing for future time horizons."
  },
  {
    id: "what-if-skill-bartering",
    category: "what-if",
    title: "Skill Barter Platform",
    brief: "What if people could trade skills instead of paying money? A designer helps a developer who helps a writer.",
    challenge: "Design a profile card showing what skills someone offers and what they're looking for.",
    directions: [
      "Two-column layout: \"I offer\" on left (logo design, cooking lessons), \"I need\" on right (website help, guitar lessons)",
      "Badge display: Show skills as badges with a \"Match me\" button to find complementary trades"
    ],
    constraints: ["Feels fair without money"],
    postCaption: "What if we bartered skills instead of paying cash? #WhatIf #ProductDesign #SkillShare",
    teaches: "Non-monetary value exchange design."
  },
  {
    id: "what-if-mood-architecture",
    category: "what-if",
    title: "Mood-Responsive Spaces",
    brief: "What if your smart home adjusted lighting and temperature based on your mood?",
    challenge: "Design a mood check-in screen and the resulting environment adjustment card.",
    directions: [
      "Mood selector: Show emotion options (Stressed, Relaxed, Energized) with environment presets for each",
      "Suggestion card: Display \"You seem stressed. Dim lights, play rain sounds?\" with accept/decline"
    ],
    constraints: ["Always optional, never forced"],
    postCaption: "What if your apartment could tell you're stressed and gently help? #WhatIf #SmartHome #WellbeingDesign",
    teaches: "Ambient computing with user consent."
  },
  {
    id: "what-if-anti-social-media",
    category: "what-if",
    title: "The Anti-Social Network",
    brief: "What if a social app was designed to minimize screen time and encourage real-world connection?",
    challenge: "Design the daily summary screen that appears when the app locks after 15 minutes.",
    directions: [
      "Summary + prompt: Show \"You saw 5 posts from friends. Time to call Sarah?\" with a gentle lock message",
      "Meetup suggestion: Display \"Alex is nearby. Suggest coffee?\" before locking the app for the day"
    ],
    constraints: ["Built-in time limit"],
    postCaption: "Designed a social network that wants you to use it less. #WhatIf #AntiSocial #DigitalWellbeing",
    teaches: "Designing against engagement metrics."
  }
];

export default exercises;
