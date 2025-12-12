


export function GlassWrapper({ children, className = "", variant = "card" }) {
  const baseStyle = {
    backdropFilter: "blur(28px)",
    backgroundColor: "rgba(255, 255, 255, 0.12)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "1rem",
    boxShadow:
      "inset 0 1px 3px rgba(255, 255, 255, 0.22), 0 0 22px rgba(52, 211, 153, 0.08), 0 6px 20px rgba(0, 0, 0, 0.07)",
  }

  const variantStyles = {
    nano: {
      backdropFilter: "blur(22px)",
      boxShadow: "inset 0 1px 2px rgba(255, 255, 255, 0.2), 0 2px 8px rgba(0, 0, 0, 0.05)",
    },
    card: {
      backdropFilter: "blur(28px)",
      boxShadow:
        "inset 0 1px 3px rgba(255, 255, 255, 0.22), 0 0 22px rgba(52, 211, 153, 0.08), 0 6px 20px rgba(0, 0, 0, 0.07)",
    },
    float: {
      backdropFilter: "blur(30px)",
      boxShadow:
        "inset 0 1px 3px rgba(255, 255, 255, 0.25), 0 0 25px rgba(52, 211, 153, 0.09), 0 10px 30px rgba(0, 0, 0, 0.08)",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    },
    container: {
      backdropFilter: "blur(30px)",
      borderRadius: "1.5rem",
      boxShadow:
        "inset 0 1px 3px rgba(255, 255, 255, 0.25), 0 0 30px rgba(52, 211, 153, 0.1), 0 10px 32px rgba(0, 0, 0, 0.08)",
    },
    control: {
      backdropFilter: "blur(30px)",
      borderRadius: "1.75rem",
      boxShadow: "inset 0 1px 3px rgba(255, 255, 255, 0.25), 0 8px 24px rgba(0, 0, 0, 0.08)",
    },
    button: {
      backdropFilter: "blur(25px)",
      borderRadius: "9999px",
      boxShadow: "inset 0 1px 2px rgba(255, 255, 255, 0.2), 0 4px 12px rgba(0, 0, 0, 0.06)",
      transition: "all 0.2s ease-out",
    },
    premium: {
      backdropFilter: "blur(32px)",
      boxShadow:
        "inset 0 1.5px 4px rgba(255, 255, 255, 0.3), 0 0 40px rgba(52, 211, 153, 0.12), 0 12px 36px rgba(0, 0, 0, 0.09)",
    },
    glow: {
      backdropFilter: "blur(28px)",
      boxShadow:
        "inset 0 1px 3px rgba(255, 255, 255, 0.25), 0 0 20px rgba(52, 211, 153, 0.08), 0 8px 24px rgba(0, 0, 0, 0.06)",
    },
  }

  const style = {
    ...baseStyle,
    ...variantStyles[variant],
  }

  return (
    <div style={style} className={className}>
      {children}
    </div>
  )
}
