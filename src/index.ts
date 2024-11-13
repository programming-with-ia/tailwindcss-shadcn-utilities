import plugin from "tailwindcss/plugin";

const shadcnUtilities = plugin(function ({ addUtilities, theme }) {
  const createColorUtilities = (name: string) => {
    const backgroundColor = theme(`colors.${name}.DEFAULT`);
    const foregroundColor = theme(`colors.${name}.foreground`);

    return {
      [`.${name}`]: {
        backgroundColor: backgroundColor,
        color: foregroundColor,
      },
    };
  };

  addUtilities(
    [
      "card",
      "popover",
      "primary",
      "secondary",
      "muted",
      "accent",
      "destructive",
    ].reduce(
      (acc, category) => ({
        ...acc,
        ...createColorUtilities(category),
      }),
      {}
    )
  );
});

export default shadcnUtilities;
