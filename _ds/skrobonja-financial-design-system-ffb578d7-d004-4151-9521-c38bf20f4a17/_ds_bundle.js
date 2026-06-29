/* @ds-bundle: {"format":3,"namespace":"SkrobonjaFinancialDesignSystem_ffb578","components":[{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/content/Eyebrow.jsx"},{"name":"Quote","sourcePath":"components/content/Quote.jsx"},{"name":"StatBlock","sourcePath":"components/content/StatBlock.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/content/Card.jsx":"268273c67c1d","components/content/Eyebrow.jsx":"dec376310485","components/content/Quote.jsx":"78d925b1ed48","components/content/StatBlock.jsx":"a0addbc787e8","components/core/Avatar.jsx":"6ea6c0001e91","components/core/Badge.jsx":"bd23ebf094d8","components/core/Button.jsx":"b7e626fd3676","components/core/Tag.jsx":"90fbb7f9b6cd","components/forms/Checkbox.jsx":"ac3f04a66be4","components/forms/Input.jsx":"6175055848b5","components/forms/Select.jsx":"2b1e6cfbbc44","components/forms/Switch.jsx":"15660b3ab1ae","ui_kits/website/SiteBody.jsx":"8d0351482ad0","ui_kits/website/SiteParts.jsx":"bc2a68153b3b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SkrobonjaFinancialDesignSystem_ffb578 = window.SkrobonjaFinancialDesignSystem_ffb578 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Skrobonja Financial — Card
 * Editorial surface. Variants: plain (white), sunken (cream), inverse (navy).
 * Optional hover lift for clickable cards.
 */
function Card({
  children,
  variant = "plain",
  padding = 28,
  interactive = false,
  style = {},
  ...rest
}) {
  const variants = {
    plain: {
      background: "var(--surface-card)",
      color: "var(--text-body)",
      border: "1px solid var(--border-subtle)"
    },
    sunken: {
      background: "var(--surface-sunken)",
      color: "var(--text-body)",
      border: "1px solid var(--cream-deep)"
    },
    inverse: {
      background: "var(--surface-inverse)",
      color: "var(--text-inverse-muted)",
      border: "1px solid var(--navy-600)"
    }
  };
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      borderRadius: 0,
      padding,
      boxShadow: interactive && h ? "var(--shadow-lg)" : "var(--shadow-sm)",
      transform: interactive && h ? "translateY(-2px)" : "none",
      transition: "box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)",
      cursor: interactive ? "pointer" : "default",
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/Eyebrow.jsx
try { (() => {
/**
 * Skrobonja Financial — Eyebrow
 * Tracked uppercase kicker (HK Grotesk) — the logo "FINANCIAL" treatment.
 * Optional leading rule.
 */
function Eyebrow({
  children,
  rule = false,
  inverse = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: inverse ? "var(--brass-400)" : "var(--text-accent)",
      ...style
    }
  }, rule && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 1,
      background: "currentColor",
      opacity: 0.6
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/content/Quote.jsx
try { (() => {
/**
 * Skrobonja Financial — Quote
 * Editorial pull quote in GT Super Text, with brass rule + attribution.
 */
function Quote({
  children,
  author,
  role,
  inverse = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 3,
      background: "var(--brass-500)",
      marginBottom: 22,
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-serif)",
      fontWeight: 350,
      fontSize: 25,
      lineHeight: 1.45,
      letterSpacing: "-0.005em",
      color: inverse ? "var(--paper)" : "var(--text-strong)"
    }
  }, children), (author || role) && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 20,
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      color: inverse ? "var(--navy-200)" : "var(--text-muted)"
    }
  }, author && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: inverse ? "var(--paper)" : "var(--text-strong)"
    }
  }, author), author && role ? "  ·  " : "", role));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Quote.jsx", error: String((e && e.message) || e) }); }

// components/content/StatBlock.jsx
try { (() => {
/**
 * Skrobonja Financial — StatBlock
 * Big GT Super Display figure with a label. For AUM, years, outcomes.
 */
function StatBlock({
  value,
  label,
  sublabel,
  align = "left",
  inverse = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: 56,
      lineHeight: 1,
      letterSpacing: "-0.02em",
      color: inverse ? "var(--paper)" : "var(--text-strong)"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: inverse ? "var(--brass-400)" : "var(--text-accent)",
      marginTop: 12
    }
  }, label), sublabel && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13.5,
      color: inverse ? "var(--navy-200)" : "var(--text-muted)",
      marginTop: 5
    }
  }, sublabel));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
/**
 * Skrobonja Financial — Avatar
 * Initials or image. Navy ring optional. Used for advisors / clients.
 */
function Avatar({
  name = "",
  src = null,
  size = 44,
  ring = false,
  style = {}
}) {
  const initials = name.split(" ").filter(Boolean).slice(0, 2).map(n => n[0]).join("").toUpperCase();
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: "var(--radius-pill)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--navy-100)",
      color: "var(--navy-700)",
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: size * 0.38,
      overflow: "hidden",
      flex: "none",
      boxShadow: ring ? "0 0 0 2px var(--paper), 0 0 0 3px var(--brass-500)" : "none",
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
/**
 * Skrobonja Financial — Badge
 * Small status / label pill. Muted, sophisticated tones.
 */
function Badge({
  children,
  tone = "neutral",
  solid = false,
  style = {}
}) {
  const tones = {
    neutral: {
      soft: ["var(--navy-50)", "var(--navy-700)"],
      solid: ["var(--navy-700)", "var(--paper)"]
    },
    accent: {
      soft: ["var(--brass-100)", "var(--brass-700)"],
      solid: ["var(--brass-500)", "var(--navy-900)"]
    },
    success: {
      soft: ["var(--success-100)", "var(--success-700)"],
      solid: ["var(--success-500)", "#fff"]
    },
    warning: {
      soft: ["var(--warning-100)", "var(--warning-700)"],
      solid: ["var(--warning-500)", "#fff"]
    },
    danger: {
      soft: ["var(--danger-100)", "var(--danger-700)"],
      solid: ["var(--danger-500)", "#fff"]
    }
  };
  const [bg, fg] = tones[tone][solid ? "solid" : "soft"];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: 11.5,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      lineHeight: 1,
      padding: "5px 9px",
      borderRadius: "var(--radius-xs)",
      background: bg,
      color: fg,
      display: "inline-flex",
      alignItems: "center",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Skrobonja Financial — Button
 * Primary action = navy; accent = brass; plus secondary, ghost, link.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = "button",
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "8px 16px",
      fontSize: 13.5
    },
    md: {
      padding: "12px 24px",
      fontSize: 15
    },
    lg: {
      padding: "15px 32px",
      fontSize: 16.5
    }
  };
  const base = {
    fontFamily: "var(--font-sans)",
    fontWeight: 600,
    letterSpacing: "0.01em",
    lineHeight: 1,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
    width: fullWidth ? "100%" : "auto",
    border: "1px solid transparent",
    borderRadius: "3.24px",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)",
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: "var(--action-bg)",
      color: "var(--action-fg)"
    },
    accent: {
      background: "var(--accent-bg)",
      color: "var(--accent-fg)"
    },
    secondary: {
      background: "transparent",
      color: "var(--navy-700)",
      borderColor: "var(--navy-300)"
    },
    ghost: {
      background: "transparent",
      color: "var(--navy-700)"
    },
    /* Stroke — for dark/navy backgrounds: orange border, white tracked-caps text */
    stroke: {
      background: "transparent",
      color: "var(--white)",
      border: "2px solid var(--orange-600)",
      letterSpacing: "0.12em",
      textTransform: "uppercase"
    },
    /* Stroke light — for light/paper backgrounds: orange border, navy text */
    "stroke-light": {
      background: "transparent",
      color: "var(--navy-700)",
      border: "2px solid var(--orange-600)",
      letterSpacing: "0.12em",
      textTransform: "uppercase"
    },
    link: {
      background: "transparent",
      color: "var(--navy-700)",
      padding: 0,
      textDecoration: "underline",
      textUnderlineOffset: 3
    }
  };
  const hover = {
    primary: {
      background: "var(--action-bg-hover)"
    },
    accent: {
      background: "var(--accent-bg-hover)"
    },
    secondary: {
      background: "var(--navy-50)",
      borderColor: "var(--navy-500)"
    },
    ghost: {
      background: "var(--navy-50)"
    },
    stroke: {
      background: "rgba(205,87,0,0.12)"
    },
    "stroke-light": {
      background: "var(--orange-100)"
    },
    link: {}
  };
  const [h, setH] = React.useState(false);
  const sty = {
    ...base,
    ...variants[variant],
    ...(h && !disabled ? hover[variant] : {}),
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: sty
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
/**
 * Skrobonja Financial — Tag
 * Outlined chip for filters / categories. Optional removable.
 */
function Tag({
  children,
  active = false,
  onRemove,
  onClick,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: 13,
      lineHeight: 1,
      padding: "7px 12px",
      borderRadius: "var(--radius-pill)",
      border: "1px solid " + (active ? "var(--navy-700)" : "var(--border-default)"),
      background: active ? "var(--navy-700)" : "transparent",
      color: active ? "var(--paper)" : "var(--text-body)",
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      cursor: onClick ? "pointer" : "default",
      ...style
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      border: 0,
      background: "transparent",
      cursor: "pointer",
      color: "inherit",
      fontSize: 14,
      lineHeight: 1,
      padding: 0,
      opacity: 0.7
    },
    "aria-label": "Remove"
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/**
 * Skrobonja Financial — Checkbox
 * Square check with navy fill + paper tick.
 */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style = {}
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    onClick: toggle,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-sans)",
      fontSize: 14.5,
      color: "var(--text-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: "var(--radius-xs)",
      border: "1px solid " + (on ? "var(--navy-700)" : "var(--border-default)"),
      background: on ? "var(--navy-700)" : "var(--white)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none",
      transition: "background var(--dur-fast), border-color var(--dur-fast)"
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.2L5 8.5L9.5 3.5",
    stroke: "var(--paper)",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Skrobonja Financial — Input
 * Tracked-uppercase label, light gray fill, hairline border, brass focus ring.
 */
function Input({
  label,
  hint,
  error,
  id,
  type = "text",
  prefix = null,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || (label ? "in-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  const borderColor = error ? "var(--danger-500)" : focus ? "var(--navy-700)" : "var(--border-subtle)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      background: "var(--gray-100)",
      border: "1px solid " + borderColor,
      borderRadius: "var(--radius-sm)",
      padding: "0 14px",
      boxShadow: focus ? "var(--ring-focus)" : "none",
      transition: "border-color var(--dur-fast), box-shadow var(--dur-fast)"
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gray-400)",
      display: "flex",
      alignItems: "center",
      flex: "none"
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    type: type,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      border: 0,
      outline: "none",
      background: "transparent",
      flex: 1,
      padding: "13px 0",
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      color: "var(--text-strong)"
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12.5,
      color: error ? "var(--danger-500)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Skrobonja Financial — Select
 * Styled native select with label + chevron.
 */
function Select({
  label,
  hint,
  id,
  options = [],
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || (label ? "sel-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: 13,
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      border: "1px solid " + (focus ? "var(--navy-700)" : "var(--border-default)"),
      borderRadius: "var(--radius-sm)",
      background: "var(--white)",
      boxShadow: focus ? "var(--ring-focus)" : "none",
      transition: "border-color var(--dur-fast), box-shadow var(--dur-fast)"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      border: 0,
      outline: "none",
      background: "transparent",
      width: "100%",
      padding: "11px 38px 11px 12px",
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      color: "var(--text-strong)",
      cursor: "pointer"
    }
  }, rest), options.map(o => {
    const val = typeof o === "string" ? o : o.value;
    const lab = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      right: 14,
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "var(--text-muted)",
      fontSize: 11
    }
  }, "\u25BC")), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12.5,
      color: "var(--text-muted)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/**
 * Skrobonja Financial — Switch
 * Pill toggle. Navy when on, brass knob accent optional.
 */
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style = {}
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    onClick: toggle,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 11,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-sans)",
      fontSize: 14.5,
      color: "var(--text-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 24,
      borderRadius: "var(--radius-pill)",
      background: on ? "var(--navy-700)" : "var(--gray-300)",
      position: "relative",
      flex: "none",
      transition: "background var(--dur-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: on ? 21 : 3,
      width: 18,
      height: 18,
      borderRadius: "var(--radius-pill)",
      background: "var(--paper)",
      boxShadow: "var(--shadow-sm)",
      transition: "left var(--dur-base) var(--ease-standard)"
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteBody.jsx
try { (() => {
/* Skrobonja Financial — Website UI Kit: body sections */

const DSB = window.SkrobonjaFinancialDesignSystem_ffb578;
function Process() {
  const steps = [["01", "Align", "Map your full financial picture against the life you actually want."], ["02", "Integrate", "Coordinate legal, tax, insurance, and investments into one strategy."], ["03", "Sustain", "Turn wealth into predictable, tax-smart income — for life and legacy."]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--navy-800)",
      color: "var(--paper)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "96px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 680
    }
  }, /*#__PURE__*/React.createElement(DSB.Eyebrow, {
    inverse: true
  }, "The WealthSync\u2122 Process"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: 46,
      lineHeight: 1.1,
      letterSpacing: "-0.02em",
      color: "var(--paper)",
      margin: "20px 0 0"
    }
  }, "Complexity into clarity. Scattered advice into one aligned strategy.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 1,
      marginTop: 56,
      background: "var(--navy-600)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden"
    }
  }, steps.map(([n, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      background: "var(--navy-800)",
      padding: "36px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 40,
      color: "var(--brass-400)",
      lineHeight: 1
    }
  }, n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: 26,
      color: "var(--paper)",
      margin: "20px 0 10px"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 350,
      fontSize: 16,
      lineHeight: 1.6,
      color: "var(--navy-200)",
      margin: 0
    }
  }, d))))));
}
function Services() {
  const items = [["Wealth Management", "Investment strategy aligned to purpose, not products — fiduciary, fee-based, holistic."], ["Retirement Planning", "Turn assets into predictable income without avoidable taxes, penalties, or surprises."], ["BUILD Banking™", "A proprietary private banking design for liquidity, control, and generational legacy."], ["Tax Strategy", "Proactive, coordinated tax planning so you keep more of what you’ve built."], ["Estate & Legacy", "Structure wealth to pass cleanly across generations, on your terms."], ["Business Exit", "Plan the sale of a business to protect value and your next chapter."]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "96px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: 44,
      gap: 24,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement(DSB.Eyebrow, {
    rule: true
  }, "What we coordinate"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: 44,
      lineHeight: 1.1,
      letterSpacing: "-0.02em",
      color: "var(--text-strong)",
      margin: "18px 0 0"
    }
  }, "One team for your entire financial world.")), /*#__PURE__*/React.createElement(DSB.Button, {
    variant: "secondary",
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u2192")
  }, "All services")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 20
    }
  }, items.map(([t, d]) => /*#__PURE__*/React.createElement(DSB.Card, {
    key: t,
    variant: "plain",
    interactive: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: "var(--radius-sm)",
      background: "var(--brass-100)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      borderRadius: 3,
      background: "var(--brass-500)"
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: 23,
      color: "var(--text-strong)",
      margin: "0 0 8px"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 350,
      fontSize: 15.5,
      lineHeight: 1.55,
      color: "var(--text-body)",
      margin: 0
    }
  }, d)))));
}
function Testimonial() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-sunken)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 940,
      margin: "0 auto",
      padding: "96px 40px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(DSB.Quote, {
    author: "Skrobonja Financial client",
    role: "Business owner"
  }, "\u201CAt some point you have to trust somebody and believe they\u2019ve got your best interest at heart \u2014 and I feel like Brian does that with my family and our finances.\u201D")));
}
function CTA({
  onContact
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "0 40px 96px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(135deg, var(--navy-700), var(--navy-900))",
      borderRadius: "var(--radius-xl)",
      padding: "64px 56px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 40,
      flexWrap: "wrap",
      boxShadow: "var(--shadow-lg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 580
    }
  }, /*#__PURE__*/React.createElement(DSB.Eyebrow, {
    inverse: true
  }, "Cashflow Confidence\u2122"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: 42,
      lineHeight: 1.1,
      letterSpacing: "-0.02em",
      color: "var(--paper)",
      margin: "16px 0 0"
    }
  }, "Ready to align your wealth with your life?")), /*#__PURE__*/React.createElement(DSB.Button, {
    variant: "accent",
    size: "lg",
    onClick: onContact
  }, "Book a conversation")));
}
Object.assign(window, {
  Process,
  Services,
  Testimonial,
  CTA
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteBody.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteParts.jsx
try { (() => {
/* Skrobonja Financial — Website UI Kit: navigation, hero, footer, contact modal */

const DS = window.SkrobonjaFinancialDesignSystem_ffb578;
function NavBar({
  onContact
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.getElementById("site-scroll");
    const fn = () => setScrolled((el ? el.scrollTop : window.scrollY) > 20);
    const target = el || window;
    target.addEventListener("scroll", fn);
    return () => target.removeEventListener("scroll", fn);
  }, []);
  const links = ["Approach", "WealthSync™", "Services", "Insights", "About"];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      background: scrolled ? "rgba(251,250,246,0.92)" : "transparent",
      backdropFilter: scrolled ? "saturate(140%) blur(10px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
      transition: "all var(--dur-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "20px 40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-wordmark-navy.svg",
    alt: "Skrobonja Financial",
    style: {
      height: 30
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 30,
      alignItems: "center"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14.5,
      fontWeight: 500,
      color: "var(--text-body)",
      textDecoration: "none"
    },
    onMouseEnter: e => e.currentTarget.style.color = "var(--navy-700)",
    onMouseLeave: e => e.currentTarget.style.color = "var(--text-body)"
  }, l)), /*#__PURE__*/React.createElement(DS.Button, {
    size: "sm",
    variant: "primary",
    onClick: onContact
  }, "Book a conversation"))));
}
function Hero({
  onContact
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "72px 40px 96px",
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DS.Eyebrow, {
    rule: true
  }, "Full-Service Financial Concierge"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: 68,
      lineHeight: 1.04,
      letterSpacing: "-0.02em",
      color: "var(--text-strong)",
      margin: "22px 0 0"
    }
  }, "We don\u2019t just manage money \u2014 we ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "italic",
      color: "var(--brass-600)"
    }
  }, "align it with your life.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 350,
      fontSize: 20,
      lineHeight: 1.6,
      color: "var(--text-body)",
      margin: "26px 0 34px",
      maxWidth: 520
    }
  }, "A high-touch, deeply personalized experience that coordinates every aspect of your financial world \u2014 legal, tax, insurance, and investments \u2014 like your own private family office."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    variant: "primary",
    size: "lg",
    onClick: onContact
  }, "Book a conversation"), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "secondary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u2192")
  }, "Explore WealthSync\u2122"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "4 / 5",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      background: "linear-gradient(160deg, var(--navy-700), var(--navy-900))",
      boxShadow: "var(--shadow-lg)",
      display: "flex",
      alignItems: "flex-end",
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--navy-200)",
      fontFamily: "var(--font-sans)",
      fontSize: 12.5,
      letterSpacing: "0.04em"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-sans)",
      fontSize: 10.5,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--brass-400)",
      marginBottom: 8
    }
  }, "Photography"), "Client + advisor portrait \u2014 warm, natural light. St. Louis.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: -26,
      left: -26,
      background: "var(--surface-card)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-md)",
      padding: "16px 20px",
      display: "flex",
      gap: 14,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(DS.StatBlock, {
    value: "30+",
    label: "Years"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 44,
      background: "var(--hairline)"
    }
  }), /*#__PURE__*/React.createElement(DS.StatBlock, {
    value: "Top 10",
    label: "Forbes Podcast"
  }))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--navy-900)",
      color: "var(--navy-200)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "64px 40px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
      gap: 40,
      paddingBottom: 40,
      borderBottom: "1px solid var(--navy-600)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-wordmark-white.svg",
    alt: "Skrobonja Financial",
    style: {
      height: 30,
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 350,
      fontSize: 15,
      lineHeight: 1.6,
      color: "var(--navy-200)",
      maxWidth: 320,
      margin: 0
    }
  }, "Helping select families and business owners create Retirement, Wealth, and Legacy through Cashflow Confidence\u2122.")), [["Firm", ["Approach", "About", "Insights", "Podcast"]], ["Services", ["WealthSync™", "BUILD Banking™", "Tax Strategy", "Estate Planning"]], ["Contact", ["(636) 296-5225", "web@brianskrobonja.com", "St. Louis, Missouri"]]].map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--brass-400)",
      marginBottom: 16
    }
  }, h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      color: "var(--navy-200)"
    }
  }, i)))))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 11.5,
      lineHeight: 1.7,
      color: "var(--navy-300)",
      margin: "28px 0 0",
      maxWidth: 980
    }
  }, "Securities offered only by duly registered individuals through Madison Avenue Securities, LLC (MAS), Member FINRA & SIPC. Advisory services offered only by duly registered individuals through Skrobonja Wealth Management (SWM), a registered investment advisor. Tax services offered only through Skrobonja Tax Consulting. MAS does not offer Build Banking or tax advice. Investing involves risk and possible loss of principal capital. Past performance is no guarantee of future returns.")));
}
function ContactModal({
  open,
  onClose
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 50,
      background: "rgba(15,25,37,0.55)",
      backdropFilter: "blur(3px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxWidth: 520,
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-xl)",
      padding: 36
    }
  }, /*#__PURE__*/React.createElement(DS.Eyebrow, null, "Start the conversation"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: 30,
      letterSpacing: "-0.015em",
      margin: "12px 0 6px",
      color: "var(--text-strong)"
    }
  }, "Book a conversation"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 350,
      fontSize: 15.5,
      color: "var(--text-body)",
      margin: "0 0 24px"
    }
  }, "A 30-minute introduction \u2014 no obligation. We\u2019ll see if WealthSync\u2122 is right for your family."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(DS.Input, {
    label: "First name",
    placeholder: "Jane"
  }), /*#__PURE__*/React.createElement(DS.Input, {
    label: "Last name",
    placeholder: "Investor"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(DS.Input, {
    label: "Email",
    type: "email",
    placeholder: "jane@email.com"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(DS.Select, {
    label: "Primary goal",
    options: ["Retirement income", "Legacy & estate", "Business exit planning", "Tax strategy"]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    variant: "ghost",
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "primary",
    onClick: onClose
  }, "Request introduction"))));
}
Object.assign(window, {
  NavBar,
  Hero,
  Footer,
  ContactModal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteParts.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

})();
